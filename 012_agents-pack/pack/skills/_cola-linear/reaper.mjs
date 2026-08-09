#!/usr/bin/env node
// Linear task-queue reaper — libera leases huérfanos.
// Devuelve a TO_STATE los issues trabados en STUCK_STATE por más de STALE_MINUTES.
// Implementa la recuperación que promete la skill `task-runner`: si una instancia
// muere entre `Todo → Claiming` y `Claiming → In Progress`, la tarea queda invisible
// para todos los runners hasta que alguien la destraba. Pensado para cron (GitHub
// Actions), junto al scheduler. Sin dependencias: fetch nativo (Node 18+).
//
// Env:
//   LINEAR_KEY      (requerido)  Personal API key de Linear.
//   LINEAR_TEAM_KEY (requerido)  Key del team, ej. "ACME".
//   STUCK_STATE     (opcional)   Estado a vigilar. Default "Claiming".
//   TO_STATE        (opcional)   Estado al que se devuelve. Default "Todo".
//   STALE_MINUTES   (opcional)   Umbral en minutos. Default 10.
//   DRY_RUN         (opcional)   "1"/"true" = no muta, solo reporta.
//
// Nota: el lease de `Claiming` dura segundos (claim + jitter + re-lectura), así que
// 10 minutos ya es holgado. NO apuntar esto a `In Progress`: ahí el trabajo real
// puede tardar horas y lo estarías cancelando a mitad.

const API = "https://api.linear.app/graphql";
const KEY = process.env.LINEAR_KEY;
const TEAM_KEY = process.env.LINEAR_TEAM_KEY;
const STUCK_STATE = process.env.STUCK_STATE || "Claiming";
const TO_STATE = process.env.TO_STATE || "Todo";
const STALE_MINUTES = Number(process.env.STALE_MINUTES || 10);
const DRY = process.env.DRY_RUN === "1" || process.env.DRY_RUN === "true";

if (!KEY) { console.error("Falta LINEAR_KEY"); process.exit(1); }
if (!TEAM_KEY) { console.error("Falta LINEAR_TEAM_KEY"); process.exit(1); }
if (!Number.isFinite(STALE_MINUTES) || STALE_MINUTES <= 0) {
  console.error(`STALE_MINUTES inválido: ${process.env.STALE_MINUTES}`);
  process.exit(1);
}

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

async function resolveStates() {
  const d = await gql(
    `query($key:String!){ teams(filter:{key:{eq:$key}}){ nodes { id key states { nodes { id name } } } } }`,
    { key: TEAM_KEY }
  );
  const team = d.teams.nodes[0];
  if (!team) throw new Error(`No hay team con key ${TEAM_KEY}`);
  const byName = (n) => team.states.nodes.find((s) => s.name.toLowerCase() === n.toLowerCase());
  const stuck = byName(STUCK_STATE), to = byName(TO_STATE);
  if (!stuck) throw new Error(`No existe el estado "${STUCK_STATE}" en ${TEAM_KEY}`);
  if (!to) throw new Error(`No existe el estado "${TO_STATE}" en ${TEAM_KEY}`);
  return { stuck, to };
}

async function main() {
  const { stuck, to } = await resolveStates();
  const cutoff = new Date(Date.now() - STALE_MINUTES * 60_000).toISOString();

  const q = await gql(
    `query($stuck:ID!,$cutoff:DateTimeOrDuration!){
       issues(filter:{ state:{ id:{ eq:$stuck } }, updatedAt:{ lt:$cutoff } }, first:100){
         nodes { id identifier title updatedAt } } }`,
    { stuck: stuck.id, cutoff }
  );

  const stale = q.issues.nodes;
  console.log(
    `"${STUCK_STATE}" sin actividad hace >${STALE_MINUTES}min: ${stale.length}${DRY ? "  (DRY_RUN)" : ""}`
  );

  let ok = 0;
  for (const it of stale) {
    const idle = Math.round((Date.now() - new Date(it.updatedAt)) / 60_000);
    if (DRY) {
      console.log(`  would release ${it.identifier} "${it.title}" (idle ${idle}min)`);
      ok++;
      continue;
    }
    const r = await gql(
      `mutation($id:String!,$to:String!){ issueUpdate(id:$id, input:{ stateId:$to }){ success } }`,
      { id: it.id, to: to.id }
    );
    if (!r.issueUpdate.success) { console.error(`  !! fallo al liberar ${it.identifier}`); continue; }

    // Rastro en el issue: sin esto, un claim liberado es indistinguible de uno que nunca ocurrió.
    await gql(
      `mutation($id:String!,$body:String!){ commentCreate(input:{ issueId:$id, body:$body }){ success } }`,
      {
        id: it.id,
        body:
          `🔓 lease liberado por el reaper — sin actividad en \`${STUCK_STATE}\` por ${idle} min ` +
          `(umbral ${STALE_MINUTES} min). Devuelta a \`${TO_STATE}\`; la instancia que la reclamó ` +
          `probablemente murió a mitad del claim.`,
      }
    ).catch((e) => console.error(`  (aviso: no pude comentar en ${it.identifier}: ${e.message})`));

    ok++;
    console.log(`  -> ${it.identifier} liberada (${STUCK_STATE}→${TO_STATE}, idle ${idle}min)`);
  }
  console.log(`Listo: ${ok}/${stale.length} liberadas.`);
}

main().catch((e) => { console.error(e.message || e); process.exit(1); });
