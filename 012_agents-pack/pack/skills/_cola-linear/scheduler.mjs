#!/usr/bin/env node
// Linear task-queue scheduler — activa tareas programadas.
// Mueve issues de FROM_STATE (default "Scheduled") a TO_STATE (default "Todo")
// cuando su dueDate ya venció (<= hoy). Pensado para cron (GitHub Actions).
// Sin dependencias: usa fetch nativo (Node 18+). Resuelve los estados por NOMBRE,
// así cualquiera lo replica sin hardcodear IDs de su workspace.
//
// Env:
//   LINEAR_KEY      (requerido)  Personal API key de Linear.
//   LINEAR_TEAM_KEY (requerido)  Key del team, ej. "ACME".
//   FROM_STATE      (opcional)   Estado origen. Default "Scheduled".
//   TO_STATE        (opcional)   Estado destino. Default "Todo".
//   SCHEDULE_TZ     (opcional)   TZ para calcular "hoy". Default "UTC".
//   DRY_RUN         (opcional)   "1"/"true" = no muta, solo reporta.

const API = "https://api.linear.app/graphql";
const KEY = process.env.LINEAR_KEY;
const TEAM_KEY = process.env.LINEAR_TEAM_KEY;
const FROM_STATE = process.env.FROM_STATE || "Scheduled";
const TO_STATE = process.env.TO_STATE || "Todo";
const TZ = process.env.SCHEDULE_TZ || "UTC";
const DRY = process.env.DRY_RUN === "1" || process.env.DRY_RUN === "true";

if (!KEY) { console.error("Falta LINEAR_KEY"); process.exit(1); }
if (!TEAM_KEY) { console.error("Falta LINEAR_TEAM_KEY"); process.exit(1); }

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

const todayIn = (tz) => new Date().toLocaleDateString("en-CA", { timeZone: tz });

async function main() {
  const today = todayIn(TZ);

  // 1. Resolver team + estados por nombre.
  const d = await gql(
    `query($key:String!){ teams(filter:{key:{eq:$key}}){ nodes { id name key states { nodes { id name } } } } }`,
    { key: TEAM_KEY }
  );
  const team = d.teams.nodes[0];
  if (!team) throw new Error(`No hay team con key ${TEAM_KEY}`);
  const byName = (n) => team.states.nodes.find((s) => s.name.toLowerCase() === n.toLowerCase());
  const from = byName(FROM_STATE), to = byName(TO_STATE);
  if (!from) throw new Error(`No existe el estado "${FROM_STATE}" en ${TEAM_KEY}`);
  if (!to) throw new Error(`No existe el estado "${TO_STATE}" en ${TEAM_KEY}`);

  // 2. Issues en FROM con dueDate <= hoy.
  const q = await gql(
    `query($from:ID!,$today:TimelessDateOrDuration!){
       issues(filter:{ state:{ id:{ eq:$from } }, dueDate:{ lte:$today } }, first:100){
         nodes { id identifier title dueDate } } }`,
    { from: from.id, today }
  );
  const due = q.issues.nodes;
  console.log(`[${today} ${TZ}] "${FROM_STATE}" vencidas: ${due.length}${DRY ? "  (DRY_RUN)" : ""}`);

  // 3. Activar (FROM -> TO).
  let ok = 0;
  for (const it of due) {
    if (DRY) { console.log(`  would activate ${it.identifier} "${it.title}" (due ${it.dueDate})`); ok++; continue; }
    const r = await gql(
      `mutation($id:String!,$to:String!){ issueUpdate(id:$id, input:{ stateId:$to }){ success } }`,
      { id: it.id, to: to.id }
    );
    if (r.issueUpdate.success) { ok++; console.log(`  -> ${it.identifier} activada (${FROM_STATE}→${TO_STATE})`); }
    else console.error(`  !! fallo al activar ${it.identifier}`);
  }
  console.log(`Listo: ${ok}/${due.length} activadas.`);
}

main().catch((e) => { console.error(e.message || e); process.exit(1); });
