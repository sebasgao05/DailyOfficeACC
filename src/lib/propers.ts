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
  let t = s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // quita acentos
    .replace(/\[.*?\]/g, "");         // quita "[25 de diciembre]"

  // Unifica ordinales españoles (ambos géneros y formas) a su número, 1..24.
  const ordinals: [RegExp, string][] = [
    [/\bvigesimocuart[oa]\b|\bvigesimo ?cuart[oa]\b/g, "24"],
    [/\bvigesimotercer[oa]?\b|\bvigesimo ?tercer[oa]?\b/g, "23"],
    [/\bvigesimosegund[oa]\b|\bvigesimo ?segund[oa]\b/g, "22"],
    [/\bvigesimoprimer[oa]?\b|\bvigesimo ?primer[oa]?\b/g, "21"],
    [/\bvigesim[oa]\b/g, "20"],
    [/\bdecimonoven[oa]\b/g, "19"],
    [/\bdecimoctav[oa]\b/g, "18"],
    [/\bdecimoseptim[oa]\b/g, "17"],
    [/\bdecimosext[oa]\b/g, "16"],
    [/\bdecimoquint[oa]\b/g, "15"],
    [/\bdecimocuart[oa]\b/g, "14"],
    [/\bdecimotercer[oa]?\b/g, "13"],
    [/\bduodecim[oa]\b/g, "12"],
    [/\bundecim[oa]\b/g, "11"],
    [/\bdecim[oa]\b/g, "10"],
    [/\bnoven[oa]\b/g, "9"],
    [/\boctav[oa]\b/g, "8"],
    [/\bseptim[oa]\b/g, "7"],
    [/\bsext[oa]\b/g, "6"],
    [/\bquint[oa]\b/g, "5"],
    [/\bcuart[oa]\b/g, "4"],
    [/\btercer[oa]?\b/g, "3"],
    [/\bsegund[oa]\b/g, "2"],
    [/\bprimer[oa]?\b/g, "1"],
  ];
  for (const [re, num] of ordinals) t = t.replace(re, num);

  return t
    .replace(/domi?nica|domingo/g, "domingo")
    .replace(/\bi\b/g, "1")
    .replace(/\bii\b/g, "2")
    .replace(/\biii\b/g, "3")
    .replace(/\biv\b/g, "4")
    .replace(/\bv\b/g, "5")
    .replace(/\bvi\b/g, "6")
    .replace(/despues|tras/g, "despues")
    .replace(/\bde la\b|\bde\b|\bdel\b/g, "de")
    .replace(/\bsanto\b/g, "san")
    .replace(/\bsantos\b/g, "san")
    .replace(/\by martires?\b|\by martir\b/g, "")   // 'y Mártires' sufijo del rango
    .replace(/\bde nuestro senor\b|\bde cristo\b|\bde la b v m\b|\bde la santa virgen maria\b|\bcandelaria\b/g, "")
    .replace(/natividad de san juan/g, "san juan bautista")
    .replace(/comunmente llamad[oa]/g, "")
    .replace(/\bproximo\b|\bproxima\b/g, "")
    .replace(/\b(la|el|los|las)\b/g, "")            // artículos
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
  // Alias: San Pablo (30 jun) comparte el propio con San Pedro (29 jun) en el LOC.
  if (candidates.some((c) => /San Pablo/i.test(c) && !/Conversi/i.test(c))) {
    candidates.push("San Pedro, Apóstol");
  }
  // Alias: la Purificación (2 feb) está en el LOC como 'Presentación de Cristo en el Templo…'.
  if (candidates.some((c) => /Purificaci|Candelaria|Presentaci[oó]n de Cristo/i.test(c))) {
    candidates.push("Presentación de Cristo en el Templo, comúnmente llamada Purificación de la Santa Virgen María");
  }
  for (const cand of candidates) {
    const hit = collectIndex.get(normalize(cand));
    if (hit) {
      return { title: hit.title, entry: hit, needsMissal: false };
    }
  }

  // Segundo intento: casar por el NÚCLEO del nombre (las primeras palabras
  // significativas), para fiestas cuyo título difiere solo en sufijos
  // ('San Andrés, Apóstol y Mártir' vs 'San Andrés, Apóstol'; 'Anunciación de
  // la B.V.M.' vs 'Anunciación de la Bendita Virgen María').
  const core = (s: string) => normalize(s).split(" ").slice(0, 3).join(" ");
  for (const cand of candidates) {
    const candCore = core(cand);
    if (candCore.length < 6) continue; // evita falsos positivos con núcleos muy cortos
    for (const [key, entry] of collectIndex) {
      if (key.startsWith(candCore) || candCore.startsWith(key.split(" ").slice(0, 3).join(" "))) {
        return { title: entry.title, entry, needsMissal: false };
      }
    }
  }

  // Tercer intento: casar cuando el título del LOC CONTIENE el nombre del día
  // (títulos largos del LOC: 'Quinto domingo de Cuaresma, comúnmente llamado
  // Domingo de Pasión' contiene 'domingo de pasion'; 'Presentación... llamada
  // Purificación...' contiene 'purificacion'). Se EXCLUYEN candidatos genéricos
  // del temporal (tiempo/feria/octava) que producirían falsos positivos, y se
  // exige que compartan ≥2 palabras significativas.
  for (const cand of candidates) {
    const nc = normalize(cand);
    if (nc.length < 8) continue;
    if (/\btiempo\b|\bferia\b|\boctava\b/.test(nc)) continue;
    for (const [key, entry] of collectIndex) {
      const shared = nc.split(" ").filter((w) => w.length > 3 && key.split(" ").includes(w)).length;
      if ((key.includes(nc) || nc.includes(key)) && shared >= 2) {
        return { title: entry.title, entry, needsMissal: false };
      }
    }
  }

  // Tiene propios en el LOC pero no están transcritos: remitir al Misal.
  return { title: ordo.title, entry: null, needsMissal: true };
}
