#!/usr/bin/env node
// Setup idempotente de los estados del pipeline en un team de Linear.
// Crea los que falten (match por nombre, case-insensitive) y **sincroniza las descripciones**
// de los que ya existen. Correlo al clonar, y de nuevo cada vez que cambie una descripción.
// Sin dependencias (Node 18+).
//
// Por qué sincroniza y no sólo crea: la descripción del estado es lo que se ve en Linear, o sea
// la copia del protocolo que un agente tiene enfrente cuando duda. Si el script sólo crea, una
// corrección al protocolo se queda en el repo para siempre y la versión equivocada sigue viva en
// la herramienta. Nos pasó de verdad: un arreglo al protocolo de claim se escribió acá y nunca
// llegó a Linear, que siguió mostrando la instrucción exacta que el arreglo eliminaba.
//
// Sólo se sincroniza la descripción. Nombre, tipo, color y posición no se tocan nunca: mover un
// estado existente rompe automatizaciones y vistas guardadas, y no es lo que este script resuelve.
//
// Env:
//   LINEAR_KEY      (requerido)  Personal API key.
//   LINEAR_TEAM_KEY (requerido)  Key del team, ej. "GON".
//   DRY_RUN         (opcional)   "1"/"true" = solo reporta qué crearía.

const API = "https://api.linear.app/graphql";
const MAX_DESC = 255; // límite duro de Linear para workflowState.description
const KEY = process.env.LINEAR_KEY;
const TEAM_KEY = process.env.LINEAR_TEAM_KEY;
const DRY = process.env.DRY_RUN === "1" || process.env.DRY_RUN === "true";

if (!KEY) { console.error("Falta LINEAR_KEY"); process.exit(1); }
if (!TEAM_KEY) { console.error("Falta LINEAR_TEAM_KEY"); process.exit(1); }

// El pipeline canónico. type = categoría de Linear; los nombres son los que usan
// el scheduler y las skills task-runner/task-review, así que se respetan tal cual.
const PIPELINE = [
  { name: "Backlog",     type: "backlog",   color: "#bec2c8", position: 0,   description: "Cosas para hacer que todavía no querés que arranquen." },
  { name: "Scheduled",   type: "unstarted", color: "#a855f7", position: 0.5, description: "Esperando su fecha. El scheduler la mueve a Todo cuando llega la dueDate." },
  { name: "Todo",        type: "unstarted", color: "#e2e2e2", position: 1,   description: "Disponible: los agentes la pollean y la reclaman." },
  { name: "Claiming",    type: "started",   color: "#f2994a", position: 1.5, description: "Lock transitorio: un agente la reclama. Gana el claim vivo más antiguo; los de +10 min son de rondas muertas y no cuentan. El que pierde NO toca el estado: devolverla a Todo la liberaría con el ganador ya trabajándola. Sólo la saca el ganador o el reaper." },
  { name: "In Progress", type: "started",   color: "#f2c94c", position: 2,   description: "Reclamada por un agente (lock por estado)." },
  { name: "In Review",   type: "started",   color: "#26b5ce", position: 2.5, description: "Terminada; espera verificación (agente de review o vos)." },
  { name: "Failed",      type: "started",   color: "#eb5757", position: 2.7, description: "Erroró o falló. Retry → Todo, o descartar → Canceled." },
  { name: "Done",        type: "completed", color: "#4cb782", position: 3,   description: "Verificada y cerrada." },
  { name: "Canceled",    type: "canceled",  color: "#95a2b3", position: 4,   description: "Descartada." },
];

async function gql(query, variables) {
  const r = await fetch(API, {
    method: "POST",
    headers: { Authorization: KEY, "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });
  const j = await r.json();
  if (j.errors) throw new Error("GraphQL: " + JSON.stringify(j.errors));
  return j.data;
}

async function main() {
  const d = await gql(
    `query($key:String!){ teams(filter:{key:{eq:$key}}){ nodes { id name key states { nodes { id name description } } } } }`,
    { key: TEAM_KEY }
  );
  const team = d.teams.nodes[0];
  if (!team) throw new Error(`No hay team con key ${TEAM_KEY}`);

  // Linear corta las descripciones en 255. Validamos las nueve ANTES de mutar ninguna: si una
  // no entra, el error llega a mitad del recorrido y te deja el pipeline sincronizado a medias.
  const tooLong = PIPELINE.filter((st) => st.description.length > MAX_DESC);
  if (tooLong.length) {
    console.error(`Descripciones que superan el límite de Linear (${MAX_DESC}):`);
    for (const st of tooLong) console.error(`  ${st.name}: ${st.description.length} caracteres`);
    process.exit(1);
  }
  const existing = new Map(team.states.nodes.map((s) => [s.name.toLowerCase(), s]));
  console.log(`Team ${team.key} (${team.name}) — ${existing.size} estados existentes.`);

  let created = 0, skipped = 0, synced = 0;
  for (const st of PIPELINE) {
    const live = existing.get(st.name.toLowerCase());
    if (live) {
      if ((live.description || "") === st.description) { console.log(`  = ${st.name} (ya existe)`); skipped++; continue; }
      if (DRY) {
        console.log(`  ~ ${st.name} (actualizaría la descripción)  [DRY_RUN]`);
        console.log(`      antes: ${live.description || "(vacía)"}`);
        console.log(`      ahora: ${st.description}`);
        synced++; continue;
      }
      const u = await gql(
        `mutation($id:String!,$d:String!){ workflowStateUpdate(id:$id, input:{description:$d}){ success } }`,
        { id: live.id, d: st.description }
      );
      if (u.workflowStateUpdate.success) { console.log(`  ~ ${st.name} descripción actualizada`); synced++; }
      else console.error(`  !! fallo al actualizar la descripción de ${st.name}`);
      continue;
    }
    if (DRY) { console.log(`  + ${st.name} (crearía · ${st.type})  [DRY_RUN]`); created++; continue; }
    const r = await gql(
      `mutation($t:String!,$n:String!,$ty:String!,$c:String!,$p:Float!,$d:String!){
         workflowStateCreate(input:{teamId:$t,name:$n,type:$ty,color:$c,position:$p,description:$d}){ success workflowState{ id } } }`,
      { t: team.id, n: st.name, ty: st.type, c: st.color, p: st.position, d: st.description }
    );
    if (r.workflowStateCreate.success) { console.log(`  + ${st.name} creado (${st.type})`); created++; }
    else console.error(`  !! fallo al crear ${st.name}`);
  }
  console.log(
    `Listo: ${created} ${DRY ? "a crear" : "creados"}, ` +
    `${synced} ${DRY ? "a sincronizar" : "sincronizados"}, ${skipped} sin cambios.`
  );
}

main().catch((e) => { console.error(e.message || e); process.exit(1); });
