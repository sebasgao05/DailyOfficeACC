/**
 * Motor del ORDO KALENDARIO — LOC 1928 / Anglican Catholic Church
 *
 * Combina el ciclo TEMPORAL (calculado año a año en calendar.ts) con el
 * SANTORAL fijo (feasts.ts) y aplica las reglas de PRECEDENCIA y
 * TRANSFERENCIA del Ordo Kalendar para producir, PARA CUALQUIER AÑO, la
 * entrada dirigida de cada día: qué Misa se dice, de qué color, con qué
 * propios y qué conmemoraciones.
 *
 * Reglas implementadas (según el Ordo y las rúbricas del LOC 1928):
 *  - Precedencia por rango: principal > mayor > domingo > menor > feria.
 *  - Las fiestas mayores/menores transferibles (Apóstoles, Evangelistas,
 *    etc.) que caen en Domingo de Adviento/Cuaresma/otros domingos
 *    privilegiados se TRASLADAN al primer día libre siguiente.
 *  - Cuando una fiesta desplaza al domingo, el domingo se reduce a
 *    conmemoración ("Comm.") en la fiesta que ocupa el día.
 *  - Colores condicionales por NOTE del Ordo (p.ej. Vigilia de Navidad:
 *    morado en la vigilia, blanco en la Misa de medianoche).
 *  - Ayuno/abstinencia heredado de la temporada (Cuaresma, Témporas,
 *    vigilias) o de la fiesta.
 */

import {
  getChurchDay,
  type ChurchDay,
  type LiturgicalColor,
} from "./calendar";
import { getFeastForDate, getAllFeastsForDate, type Feast } from "@/data/feasts";

export interface OrdoEntry {
  date: Date;
  /** Título litúrgico que rige el día (fiesta o feria/domingo). */
  title: string;
  /** Color litúrgico de la Misa del día (resuelto por precedencia). */
  color: LiturgicalColor;
  /** Color secundario opcional (degradado) para días de dos colores del ORDO. */
  color2?: LiturgicalColor;
  /** Rango del día. */
  rank: Feast["rank"] | "domingo" | "feria";
  /** El día eclesiástico del ciclo temporal subyacente. */
  churchDay: ChurchDay;
  /** La fiesta que rige el día, si alguna gobierna la Misa. */
  feast: Feast | null;
  /** Conmemoraciones (domingo reducido, octava, santos secundarios, beati). */
  commemorations: string[];
  /** Cadena de propios estilo Ordo, p.ej. "Gloria · Credo · Prefacio de Apóstoles". */
  propers: string[];
  /** Notación ORDO abreviada de los propios, p.ej. "Glo. Cr. Prf. Trinidad". */
  ordoLine: string;
  /** Fiesta trasladada A este día desde otra fecha, si aplica. */
  transferredIn: Feast | null;
  /** Ayuno / abstinencia del día. */
  fast: "abstinencia" | "ayuno-y-abstinencia" | null;
  /** Nota del Ordo cuando el color es condicional. */
  note?: string;
}

const RANK_WEIGHT: Record<string, number> = {
  principal: 5,
  mayor: 4,
  domingo: 3,
  menor: 2,
  feria: 1,
  conmemoración: 0,
};

/** Domingos que NO ceden ante una fiesta transferible. */
function isPrivilegedSunday(churchDay: ChurchDay): boolean {
  if (churchDay.date.getDay() !== 0) return false;
  // Adviento, pre-Cuaresma, Cuaresma, Pasión/Ramos: siempre privilegiados.
  if (
    churchDay.season === "adviento" ||
    churchDay.season === "cuaresma" ||
    churchDay.season === "semana-santa"
  ) {
    return true;
  }
  // Domingos pre-cuaresmales (viven en season 'epifania' con color morado).
  if (churchDay.season === "epifania" && churchDay.color === "morado") return true;
  // Solo los DÍAS mayores del ciclo, no todos sus domingos ordinarios:
  // Domingo de Pascua, Domingo de Pentecostés, Domingo de la Trinidad.
  if (churchDay.name === "Domingo de Pascua de Resurrección") return true;
  if (churchDay.name === "Domingo de Pentecostés") return true;
  if (churchDay.name === "Domingo de la Trinidad") return true;
  // Un domingo ORDINARIO después de la Trinidad NO es privilegiado: una fiesta
  // mayor rige y lo conmemora (no se traslada).
  return false;
}

function isSunday(date: Date): boolean {
  return date.getDay() === 0;
}

function addDays(date: Date, n: number): Date {
  const d = new Date(date);
  d.setDate(d.getDate() + n);
  return d;
}

/** Compone la cadena de propios legible a partir de los flags del Ordo. */
function buildPropers(feast: Feast | null, churchDay: ChurchDay): string[] {
  const out: string[] = [];
  const p = feast?.propers;
  const isSun = isSunday(churchDay.date);

  // Una feria ORDINARIA sin fiesta no lleva línea de propios propia.
  const isFeria = !feast && !isSun && (churchDay.name === "Feria" || churchDay.name.startsWith("Feria "));
  if (isFeria) return out;

  // Pre-Cuaresma (Septuagésima…): vive en season 'epifania' con color morado, pero es penitencial.
  const preLent = churchDay.season === "epifania" && churchDay.color === "morado";
  const penitential = preLent || churchDay.season === "adviento" || churchDay.season === "cuaresma" || churchDay.season === "semana-santa";
  const gloria = p?.gloria ?? (isSun && !penitential);
  const creed = p?.creed ?? isSun;
  const preface = p?.preface ?? (preLent ? "Trinidad" : prefaceForSeason(churchDay));

  if (gloria) out.push("Gloria");
  if (creed) out.push("Credo");
  if (preface && (feast || isSun)) out.push(`Prefacio de ${preface}`);
  return out;
}

/** Notación ORDO abreviada de los propios, p.ej. "Glo. Cr. Prf. Trinidad". */
function buildOrdoLine(propers: string[]): string {
  return propers
    .map((x) => {
      if (x === "Gloria") return "Glo.";
      if (x === "Credo") return "Cr.";
      if (x.startsWith("Prefacio de ")) return `Prf. ${x.slice("Prefacio de ".length)}`;
      return x;
    })
    .join(" ");
}

/** Prefacio propio de la temporada litúrgica (como el ORDO lo asigna al temporal). */
function prefaceForSeason(churchDay: ChurchDay): string | undefined {
  switch (churchDay.season) {
    case "adviento": return "Trinidad";
    case "navidad": return "Navidad";
    case "epifania": return "Epifanía";
    case "cuaresma": return "Cuaresma";
    case "semana-santa": return "Cruz";
    case "pascua": return "Pascua";
    case "pentecostes": return "Pentecostés";
    case "trinidad": return "Trinidad";
    default: return undefined;
  }
}

/**
 * ¿La fiesta de `feastDate` debe trasladarse por caer en un domingo
 * privilegiado? Si es así, devuelve la fiesta; si no, null.
 */
function feastIsBlockedOn(date: Date): Feast | null {
  const feast = getFeastForDate(date);
  if (!feast || !feast.transferable) return null;
  const churchDay = getChurchDay(date);
  return isPrivilegedSunday(churchDay) ? feast : null;
}

/**
 * Busca una fiesta TRASLADADA a `date`: mira hacia atrás hasta 7 días por
 * una fiesta transferible bloqueada cuyo primer día libre sea `date`.
 */
function findTransferredInto(date: Date): Feast | null {
  for (let back = 1; back <= 7; back++) {
    const src = addDays(date, -back);
    const blocked = feastIsBlockedOn(src);
    if (!blocked) continue;
    // ¿Es `date` el primer día libre desde `src`? Un día con solo un santo MENOR o
    // conmemoración no está "ocupado": la fiesta trasladada (mayor) rige y lo conmemora.
    // Solo bloquean el aterrizaje otra fiesta mayor/principal o un domingo privilegiado.
    let landing = addDays(src, 1);
    while (true) {
      const f = getFeastForDate(landing);
      const blocksLanding =
        (f && RANK_WEIGHT[f.rank] >= RANK_WEIGHT["mayor"]) ||
        isPrivilegedSunday(getChurchDay(landing));
      if (!blocksLanding) break;
      landing = addDays(landing, 1);
    }
    if (landing.toDateString() === date.toDateString()) {
      return blocked;
    }
  }
  return null;
}

/** Ayuno/abstinencia por temporada (Cuaresma) o vigilia. */
function resolveFast(
  feast: Feast | null,
  churchDay: ChurchDay
): OrdoEntry["fast"] {
  // Las vigilias del santoral se rotulan con abstinencia.
  if (feast && feast.name.startsWith("Vigilia")) return "abstinencia";
  // Miércoles de Ceniza: ayuno y abstinencia.
  if (churchDay.name === "Miércoles de Ceniza") return "ayuno-y-abstinencia";
  // Témporas (Ember Days): días de ayuno. El viernes lleva además abstinencia.
  if (churchDay.name.startsWith("Témpora de")) {
    return churchDay.date.getDay() === 5 ? "ayuno-y-abstinencia" : "abstinencia";
  }
  if (churchDay.season === "cuaresma" || churchDay.season === "semana-santa") {
    // Los viernes de Cuaresma: ayuno y abstinencia; resto: abstinencia.
    return churchDay.date.getDay() === 5 ? "ayuno-y-abstinencia" : "abstinencia";
  }
  // Viernes fuera de Pascua: abstinencia (regla general del LOC).
  if (churchDay.date.getDay() === 5 && churchDay.season !== "pascua" && churchDay.season !== "navidad") {
    return "abstinencia";
  }
  return null;
}

/**
 * Resuelve la entrada del ORDO para una fecha concreta de CUALQUIER año.
 */
export function getOrdoEntry(date: Date): OrdoEntry {
  const churchDay = getChurchDay(date);
  const localFeast = getFeastForDate(date);
  const transferredIn = findTransferredInto(date);
  const commemorations: string[] = [];

  // 1) ¿Hay una fiesta trasladada A este día? Rige ella.
  if (transferredIn) {
    // El día pierde su feria; si era domingo se conmemora.
    if (isSunday(date)) commemorations.push(churchDay.name);
    return finalize({
      date,
      churchDay,
      feast: transferredIn,
      title: `${transferredIn.name} (Trasladada)`,
      rank: transferredIn.rank,
      transferredIn,
      commemorations,
    });
  }

  // 2) Fiesta local que cae hoy.
  if (localFeast) {
    // 2a) Días temporales PRIVILEGIADOS no-dominicales que una fiesta de menor rango
    // NO puede desplazar (rige el día, la fiesta pasa a conmemoración). Dos niveles:
    //  - FUERTE (Ceniza, Semana Santa, Ascensión, Rogativas, Corpus, Sagrado Corazón,
    //    Pentecostés y sus vigilias): solo una fiesta PRINCIPAL los desplaza.
    //  - OCTAVAS / TÉMPORAS: rigen sobre menores/conmemoraciones, pero una fiesta
    //    MAYOR (p.ej. un Apóstol/Evangelista) sí rige y la octava se conmemora.
    const strongTemporal =
      churchDay.name === "Miércoles de Ceniza" ||
      churchDay.season === "semana-santa" ||
      churchDay.name.startsWith("Día de la Ascensión") ||
      churchDay.name.includes("Rogativas") ||
      churchDay.name === "Corpus Christi" ||
      churchDay.name === "El Sagrado Corazón de Jesús" ||
      churchDay.name === "Domingo de Pentecostés" ||
      churchDay.name === "Vigilia de Pentecostés" ||
      churchDay.name === "Vigilia de la Natividad";
    const octaveOrEmber =
      churchDay.name.startsWith("De la Octava") ||
      churchDay.name.startsWith("Témpora");
    const privilegedTemporal =
      (strongTemporal && RANK_WEIGHT[localFeast.rank] < RANK_WEIGHT["principal"]) ||
      (octaveOrEmber && RANK_WEIGHT[localFeast.rank] < RANK_WEIGHT["mayor"]);
    if (privilegedTemporal) {
      commemorations.push(localFeast.name);
      for (const f of getAllFeastsForDate(date)) {
        if (f.name === localFeast.name) continue;
        if (f.rank === "conmemoración" || f.optional) commemorations.push(f.name);
      }
      return finalize({
        date,
        churchDay,
        feast: null,
        title: churchDay.name,
        rank: isSunday(date) ? "domingo" : "feria",
        transferredIn: null,
        commemorations,
      });
    }

    const blocked = localFeast.transferable && isPrivilegedSunday(churchDay);
    if (blocked) {
      // La fiesta se traslada: hoy rige el domingo, la fiesta se conmemora.
      commemorations.push(`${localFeast.name} (trasladada)`);
      return finalize({
        date,
        churchDay,
        feast: null,
        title: churchDay.name,
        rank: "domingo",
        transferredIn: null,
        commemorations,
      });
    }

    // Precedencia en domingo: una fiesta que NO supera al domingo (p.ej. menor)
    // no rige; rige el domingo y la fiesta se conmemora.
    if (isSunday(date) && RANK_WEIGHT[localFeast.rank] < RANK_WEIGHT["domingo"]) {
      commemorations.push(localFeast.name);
      for (const f of getAllFeastsForDate(date)) {
        if (f.name === localFeast.name) continue;
        if (f.rank === "conmemoración" || f.optional) commemorations.push(f.name);
      }
      return finalize({
        date,
        churchDay,
        feast: null,
        title: churchDay.name,
        rank: "domingo",
        transferredIn: null,
        commemorations,
      });
    }

    // La fiesta rige. Si desplaza a un domingo (rango >= domingo), lo conmemora.
    if (isSunday(date) && RANK_WEIGHT[localFeast.rank] >= RANK_WEIGHT["domingo"]) {
      commemorations.push(churchDay.name);
    }
    // Conmemoraciones del día: entradas rank 'conmemoración' + beati opcionales.
    for (const f of getAllFeastsForDate(date)) {
      if (f.name === localFeast.name) continue;
      if (f.rank === "conmemoración" || f.optional) commemorations.push(f.name);
    }
    return finalize({
      date,
      churchDay,
      feast: localFeast,
      title: localFeast.name,
      rank: localFeast.rank,
      transferredIn: null,
      commemorations,
    });
  }

  // 3) Sin fiesta: rige el domingo o la feria del ciclo temporal.
  for (const f of getAllFeastsForDate(date)) {
    if (f.optional) commemorations.push(f.name);
  }
  return finalize({
    date,
    churchDay,
    feast: null,
    title: churchDay.name,
    rank: isSunday(date) ? "domingo" : "feria",
    transferredIn: null,
    commemorations,
  });
}

/** Colores condicionales del Ordo (NOTES). */
function conditionalColor(
  date: Date,
  baseColor: LiturgicalColor
): { color: LiturgicalColor; note?: string } {
  // Vigilia de Navidad (24 dic): morado en la vigilia, blanco en la Misa de medianoche.
  if (date.getMonth() === 11 && date.getDate() === 24) {
    return {
      color: "morado",
      note: "Morado para la Vigilia; Blanco para la Misa de medianoche.",
    };
  }
  return { color: baseColor };
}

function finalize(base: {
  date: Date;
  churchDay: ChurchDay;
  feast: Feast | null;
  title: string;
  rank: OrdoEntry["rank"];
  transferredIn: Feast | null;
  commemorations: string[];
}): OrdoEntry {
  const baseColor: LiturgicalColor = base.feast
    ? base.feast.color
    : base.churchDay.color;
  const { color, note } = conditionalColor(base.date, baseColor);
  // El degradado (color2) solo aplica cuando el día lo rige el ciclo temporal
  // (vigilias/días de dos colores del ORDO); un santo que rige impone su color único.
  const color2 = base.feast ? undefined : base.churchDay.color2;
  const propers = buildPropers(base.feast, base.churchDay);
  return {
    ...base,
    color,
    color2,
    note,
    propers,
    ordoLine: buildOrdoLine(propers),
    fast: resolveFast(base.feast, base.churchDay),
  };
}

/** Genera todas las entradas del ORDO de un mes (0-indexado) de un año. */
export function getOrdoMonth(year: number, month: number): OrdoEntry[] {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const out: OrdoEntry[] = [];
  for (let d = 1; d <= daysInMonth; d++) {
    out.push(getOrdoEntry(new Date(year, month, d)));
  }
  return out;
}

/** Genera el ORDO completo de un año (365/366 entradas). */
export function getOrdoYear(year: number): OrdoEntry[] {
  const out: OrdoEntry[] = [];
  for (let m = 0; m < 12; m++) {
    out.push(...getOrdoMonth(year, m));
  }
  return out;
}
