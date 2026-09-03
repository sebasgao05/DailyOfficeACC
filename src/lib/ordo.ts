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

/** Domingos que NO ceden ante una fiesta transferible: Adviento y Cuaresma. */
function isPrivilegedSunday(churchDay: ChurchDay): boolean {
  if (churchDay.date.getDay() !== 0) return false;
  return (
    churchDay.season === "adviento" ||
    churchDay.season === "cuaresma" ||
    churchDay.season === "semana-santa" ||
    churchDay.season === "pascua" || // Domingo de Pascua y su octava
    churchDay.name.includes("Pentecostés") ||
    churchDay.name.includes("Trinidad")
  );
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
  if (p?.gloria) out.push("Gloria");
  if (p?.creed) out.push("Credo");
  if (p?.preface) out.push(`Prefacio de ${p.preface}`);
  // Los domingos rezan el Credo aunque no lo declare el santoral.
  if (!feast && isSunday(churchDay.date) && !out.includes("Credo")) {
    out.push("Credo");
  }
  return out;
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
    // ¿Es `date` el primer día libre desde `src`?
    let landing = addDays(src, 1);
    while (true) {
      const occupied = getFeastForDate(landing) || isPrivilegedSunday(getChurchDay(landing));
      if (!occupied) break;
      landing = addDays(landing, 1);
    }
    if (landing.toDateString() === date.toDateString()) {
      return blocked;
    }
  }
  return null;
}

/** Ayuno/abstinencia por temporada (Cuaresma) o fiesta. */
function resolveFast(
  feast: Feast | null,
  churchDay: ChurchDay
): OrdoEntry["fast"] {
  if (feast?.fast) return feast.fast;
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

    // La fiesta rige. Si desplaza a un domingo NO privilegiado, lo conmemora.
    if (isSunday(date) && RANK_WEIGHT[localFeast.rank] >= RANK_WEIGHT["domingo"]) {
      commemorations.push(churchDay.name);
    }
    // Conmemoraciones propias de la fiesta (octavas, etc.).
    if (localFeast.commemorations) commemorations.push(...localFeast.commemorations);
    // Beati opcionales del día como conmemoración.
    for (const f of getAllFeastsForDate(date)) {
      if (f.optional) commemorations.push(f.name);
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
  return {
    ...base,
    color,
    note,
    propers: buildPropers(base.feast, base.churchDay),
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
