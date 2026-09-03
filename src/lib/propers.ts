/**
 * Resolvedor de PROPIOS del día (Colecta, Epístola, Evangelio) del LOC 1928.
 *
 * Dado el OrdoEntry de un día, intenta encontrar sus propios en `collects.ts`
 * (los propios ya transcritos del LOC). Si el día tiene propios en el LOC
 * (domingos y fiestas con hasPropers) pero aún no están transcritos, devuelve
 * un marcador `needsMissal=true` para que la UI remita al Misal Anglicano.
 * Si el día no tiene propios (feria ordinaria), devuelve null.
 */

import { collects, type CollectEntry } from "@/data/collects";
import type { OrdoEntry } from "@/lib/ordo";

export interface ResolvedProper {
  /** Título del propio (del LOC o el del día). */
  title: string;
  /** Propio encontrado en el LOC, si existe. */
  entry: CollectEntry | null;
  /** true si el día TIENE propios en el LOC pero no están transcritos aún. */
  needsMissal: boolean;
}

/** Normaliza un título/nombre litúrgico a una clave comparable (sin acentos, minúsculas, ordinales unificados). */
function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // quita acentos
    .replace(/\[.*?\]/g, "")          // quita "[25 de diciembre]"
    .replace(/domi?nica|domingo/g, "domingo")
    .replace(/\bi\b|primera|primer|1a|1o/g, "1")
    .replace(/\bii\b|segunda|segundo|2a/g, "2")
    .replace(/\biii\b|tercera|tercer|3a/g, "3")
    .replace(/\biv\b|cuarta|cuarto|4a/g, "4")
    .replace(/\bv\b|quinta|quinto|5a/g, "5")
    .replace(/\bvi\b|sexta|sexto|6a/g, "6")
    .replace(/despues|tras/g, "despues")
    .replace(/\bde la\b|\bde\b|\bdel\b/g, "de")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

/** Índice normalizado de las colectas del LOC ya transcritas. */
const collectIndex: Map<string, CollectEntry> = (() => {
  const m = new Map<string, CollectEntry>();
  for (const c of collects) {
    m.set(normalize(c.title), c);
  }
  return m;
})();

/**
 * Devuelve el propio del día si aplica.
 * - Un día con propios (domingo o feast.hasPropers) intenta casar con el LOC.
 * - Si no casa, needsMissal=true (remite al Misal Anglicano).
 * - Una feria ordinaria devuelve null (no se muestra la sección).
 */
export function getProperForDay(ordo: OrdoEntry): ResolvedProper | null {
  const isSunday = ordo.churchDay.date.getDay() === 0;
  const hasProperInLOC = isSunday || ordo.rank === "domingo" || (ordo.feast?.hasPropers ?? false);
  if (!hasProperInLOC) return null;

  // Intentar casar por el nombre del día litúrgico y por el de la fiesta.
  const candidates = [ordo.title, ordo.churchDay.name, ordo.feast?.name].filter(Boolean) as string[];
  for (const cand of candidates) {
    const hit = collectIndex.get(normalize(cand));
    if (hit) {
      return { title: hit.title, entry: hit, needsMissal: false };
    }
  }

  // Tiene propios en el LOC pero no están transcritos: remitir al Misal.
  return { title: ordo.title, entry: null, needsMissal: true };
}
