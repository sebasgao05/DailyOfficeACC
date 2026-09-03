/**
 * Calendario Eclesiástico - Cálculos litúrgicos para el LOC 1928
 */

export interface ChurchDay {
  name: string;
  season: Season;
  color: LiturgicalColor;
  /** Color secundario opcional para días que el ORDO marca con dos colores (degradado). */
  color2?: LiturgicalColor;
  date: Date;
  /** Semana litúrgica que rige el día (para ferias: contexto del domingo previo). */
  weekName?: string;
}

export type Season =
  | "adviento"
  | "navidad"
  | "epifania"
  | "cuaresma"
  | "semana-santa"
  | "pascua"
  | "pentecostes"
  | "trinidad";

export type LiturgicalColor = "morado" | "blanco" | "rojo" | "verde" | "negro" | "rosa";

export function getChurchDay(date: Date): ChurchDay {
  const easter = calculateEaster(date.getFullYear());
  const dayOfYear = getDayOfYear(date);
  const easterDOY = getDayOfYear(easter);
  const diff = dayOfYear - easterDOY;

  const adventStart = getAdventStart(date.getFullYear());
  const christmas = new Date(date.getFullYear(), 11, 25);
  const epiphany = new Date(date.getFullYear(), 0, 6);

  // ── Octavas de fecha fija (tienen precedencia sobre el cálculo temporal genérico
  //    del día, pero un santo local que caiga dentro sigue rigiendo vía getOrdoEntry;
  //    y un DOMINGO dentro de la octava rige como domingo, no como día de octava). ──
  const m0 = date.getMonth();
  const dd = date.getDate();
  const esDomingo = date.getDay() === 0;
  // Octava de la Asunción (16-22 ago; 15 = Asunción, 22 = día octavo). Blanco.
  if (m0 === 7 && dd >= 16 && dd <= 22 && !esDomingo) {
    return { name: "De la Octava de la Asunción", season: "trinidad", color: "blanco", date, weekName: "Octava de la Asunción" };
  }
  // Octava de Todos los Santos (2-7 nov; 1 = Todos los Santos, 8 = día octavo). Blanco.
  if (m0 === 10 && dd >= 2 && dd <= 7 && !esDomingo) {
    return { name: "De la Octava de Todos los Santos", season: "trinidad", color: "blanco", date, weekName: "Octava de Todos los Santos" };
  }
  // Thanksgiving (EE.UU.): 4º jueves de noviembre — votiva Pro Patria, blanco.
  if (m0 === 10 && date.getDay() === 4 && Math.ceil(dd / 7) === 4) {
    return { name: "Día de Acción de Gracias (Votiva Pro Patria)", season: "trinidad", color: "blanco", date, weekName: "Acción de Gracias" };
  }
  // Octava de la Concepción (9-15 dic; 8 = Concepción, 15 = día octavo). Blanco.
  // Va en Adviento pero la octava impone blanco sobre el morado en los días feriales.
  if (m0 === 11 && dd >= 9 && dd <= 15 && !esDomingo) {
    return { name: "De la Octava de la Concepción", season: "adviento", color: "blanco", date, weekName: "Octava de la Concepción" };
  }

  // ── Témporas de fecha (Ember Days de otoño e invierno), morado, con ayuno. ──
  // Septiembre: primer miércoles/viernes/sábado DESPUÉS de la Exaltación de la Cruz (14 sep).
  {
    const emberSep = emberDaysAfter(new Date(date.getFullYear(), 8, 14));
    const iso = date.toISOString().slice(0, 10);
    if (emberSep.wed === iso) return { name: "Témpora de Septiembre (Miércoles)", season: "trinidad", color: "morado", date, weekName: "Témporas de Septiembre" };
    if (emberSep.fri === iso) return { name: "Témpora de Septiembre (Viernes)", season: "trinidad", color: "morado", date, weekName: "Témporas de Septiembre" };
    if (emberSep.sat === iso) return { name: "Témpora de Septiembre (Sábado)", season: "trinidad", color: "morado", date, weekName: "Témporas de Septiembre" };
  }
  // Adviento: miércoles/viernes/sábado tras el Domingo III de Adviento (tras Sta. Lucía, 13 dic).
  {
    const emberAdv = emberDaysAfter(new Date(date.getFullYear(), 11, 13));
    const iso = date.toISOString().slice(0, 10);
    if (emberAdv.wed === iso) return { name: "Témpora de Adviento (Miércoles)", season: "adviento", color: "morado", date, weekName: "Témporas de Adviento" };
    if (emberAdv.fri === iso) return { name: "Témpora de Adviento (Viernes)", season: "adviento", color: "morado", date, weekName: "Témporas de Adviento" };
    if (emberAdv.sat === iso) return { name: "Témpora de Adviento (Sábado)", season: "adviento", color: "morado", date, weekName: "Témporas de Adviento" };
  }

  // Vigilia de la Natividad (24 dic): morado con degradado a blanco (Violet/White en el ORDO).
  // Va ANTES del bloque de Adviento porque cae dentro de él (date < christmas).
  if (date.getMonth() === 11 && date.getDate() === 24) {
    return { name: "Vigilia de la Natividad", season: "adviento", color: "morado", color2: "blanco", date, weekName: "Vigilia de la Natividad" };
  }

  // Adviento
  if (date >= adventStart && date < christmas) {
    const weekNum = Math.floor((date.getTime() - adventStart.getTime()) / (7 * 24 * 60 * 60 * 1000)) + 1;
    const isGaudete = weekNum === 3 && date.getDay() === 0;
    const domingo = `${getOrdinalM(weekNum)} Domingo de Adviento`;
    if (date.getDay() === 0) {
      return { name: domingo, season: "adviento", color: isGaudete ? "rosa" : "morado", date, weekName: domingo };
    }
    return { name: "Feria de Adviento", season: "adviento", color: "morado", date, weekName: `Semana del ${domingo}` };
  }

  // Navidad (25 dic - 5 enero)
  // 25 dic = Natividad; los días de la Octava sin santo propio → "De la Octava de la
  // Natividad" (los santos 26-29 dic y la Circuncisión el 1 ene viven en feasts.ts).
  if (date.getMonth() === 11 && date.getDate() === 25) {
    return { name: "Natividad de Nuestro Señor", season: "navidad", color: "blanco", date, weekName: "Octava de la Natividad" };
  }
  if (date.getMonth() === 11 && date.getDate() >= 26 && date.getDate() <= 31) {
    return { name: "De la Octava de la Natividad", season: "navidad", color: "blanco", date, weekName: "Octava de la Natividad" };
  }
  // 1 ene = Circuncisión (día octavo, en feasts.ts); 2-5 ene = días de Navidad antes de Epifanía.
  if (date.getMonth() === 0 && date.getDate() >= 1 && date.getDate() <= 5) {
    if (date.getDay() === 0) {
      return { name: "Domingo después de la Navidad", season: "navidad", color: "blanco", date, weekName: "Tiempo de Navidad" };
    }
    return { name: "De Navidad (antes de la Epifanía)", season: "navidad", color: "blanco", date, weekName: "Tiempo de Navidad" };
  }

  // Epifanía
  if (date.getMonth() === 0 && date.getDate() === 6) {
    return { name: "La Epifanía", season: "epifania", color: "blanco", date };
  }

  // Octava de la Epifanía (7-12 ene), blanco. El 13 es el día octavo (fiesta en feasts.ts).
  // Un domingo dentro de la octava rige como "Domingo I después de la Epifanía".
  if (date.getMonth() === 0 && date.getDate() >= 7 && date.getDate() <= 12) {
    if (date.getDay() === 0) {
      return { name: "Primer Domingo después de la Epifanía", season: "epifania", color: "blanco", date, weekName: "Octava de la Epifanía" };
    }
    return { name: "De la Octava de la Epifanía", season: "epifania", color: "blanco", date, weekName: "Octava de la Epifanía" };
  }

  // Pre-Cuaresma: Septuagésima (−63), Sexagésima (−56), Quincuagésima (−49)
  // más sus ferias (morado, Credo, sin Aleluya). Va ANTES del bloque Cuaresma.
  if (diff >= -63 && diff <= -47) {
    const preLent: Record<number, string> = {
      [-63]: "Domingo de Septuagésima",
      [-56]: "Domingo de Sexagésima",
      [-49]: "Domingo de Quincuagésima",
    };
    // Domingo pre-cuaresmal
    if (date.getDay() === 0 && preLent[diff]) {
      return { name: preLent[diff], season: "epifania", color: "morado", date, weekName: preLent[diff] };
    }
    // Ferias de la pre-Cuaresma: cuelgan del domingo previo
    const prevSundayDiff = diff >= -55 ? -56 : -63; // aproximación por bloque
    const domingo = diff <= -50 ? "Domingo de Septuagésima" : diff <= -49 ? "Domingo de Sexagésima" : "Domingo de Quincuagésima";
    void prevSundayDiff;
    // Shrove Tuesday (Martes de Carnaval): el último día antes de la Cuaresma.
    if (diff === -47) {
      return { name: "Martes de Carnaval (Shrove Tuesday)", season: "epifania", color: "morado", date, weekName: `Semana de ${domingo}` };
    }
    return { name: "Feria de Pre-Cuaresma", season: "epifania", color: "morado", date, weekName: `Semana de ${domingo}` };
  }

  // Cuaresma (46 días antes de Pascua hasta Domingo de Ramos)
  if (diff >= -46 && diff < -7) {
    // Miércoles de Ceniza (−46): inicio de la Cuaresma, ayuno y abstinencia.
    if (diff === -46) {
      return { name: "Miércoles de Ceniza", season: "cuaresma", color: "morado", date, weekName: "Miércoles de Ceniza" };
    }
    // Témporas de Cuaresma: miércoles/viernes/sábado tras el Domingo I de Cuaresma.
    if (diff === -39) {
      return { name: "Témpora de Cuaresma (Miércoles)", season: "cuaresma", color: "morado", date, weekName: "Témporas de Cuaresma" };
    }
    if (diff === -37) {
      return { name: "Témpora de Cuaresma (Viernes)", season: "cuaresma", color: "morado", date, weekName: "Témporas de Cuaresma" };
    }
    if (diff === -36) {
      return { name: "Témpora de Cuaresma (Sábado)", season: "cuaresma", color: "morado", date, weekName: "Témporas de Cuaresma" };
    }
    const lentWeek = Math.floor((diff + 46) / 7) + 1;
    const isLaetare = lentWeek === 4 && date.getDay() === 0;
    const isPassion = lentWeek === 5;
    const domingo = isPassion
      ? "Domingo de Pasión"
      : isLaetare
        ? "Cuarto Domingo de Cuaresma (Laetare)"
        : `${getOrdinalM(lentWeek)} Domingo de Cuaresma`;
    if (date.getDay() === 0) {
      return { name: domingo, season: "cuaresma", color: isLaetare ? "rosa" : "morado", date, weekName: domingo };
    }
    const feriaName = isPassion ? "Feria de Pasión" : "Feria de Cuaresma";
    return { name: feriaName, season: "cuaresma", color: "morado", date, weekName: `Semana del ${domingo}` };
  }

  // Semana Santa
  if (diff >= -7 && diff < 0) {
    if (diff === -7) {
      return { name: "Domingo de Ramos", season: "semana-santa", color: "morado", date, weekName: "Semana Santa" };
    }
    if (diff === -6) return { name: "Lunes Santo", season: "semana-santa", color: "morado", date, weekName: "Semana Santa" };
    if (diff === -5) return { name: "Martes Santo", season: "semana-santa", color: "morado", date, weekName: "Semana Santa" };
    if (diff === -4) return { name: "Miércoles Santo", season: "semana-santa", color: "morado", date, weekName: "Semana Santa" };
    if (diff === -3) return { name: "Jueves Santo (in Cena Domini)", season: "semana-santa", color: "blanco", date, weekName: "Semana Santa" };
    // Viernes Santo = negro
    if (diff === -2) {
      return { name: "Viernes Santo", season: "semana-santa", color: "negro", date, weekName: "Semana Santa" };
    }
    if (diff === -1) return { name: "Sábado Santo", season: "semana-santa", color: "morado", color2: "blanco", date, weekName: "Semana Santa" };
    return { name: "Semana Santa", season: "semana-santa", color: "morado", date };
  }

  // Pascua
  if (diff === 0) {
    return { name: "Domingo de Pascua de Resurrección", season: "pascua", color: "blanco", date };
  }

  // Tiempo Pascual (hasta Pentecostés)
  if (diff > 0 && diff < 49) {
    if (diff === 39) return { name: "Día de la Ascensión", season: "pascua", color: "blanco", date };
    // Rogativas: lunes, martes y miércoles antes de la Ascensión (diff 36-38).
    if (diff === 36) return { name: "Lunes de Rogativas", season: "pascua", color: "morado", date, weekName: "Rogativas" };
    if (diff === 37) return { name: "Martes de Rogativas", season: "pascua", color: "morado", date, weekName: "Rogativas" };
    // Vigilia de la Ascensión (Miércoles de Rogativas): blanco (víspera de fiesta del Señor).
    if (diff === 38) return { name: "Vigilia de la Ascensión (Miércoles de Rogativas)", season: "pascua", color: "blanco", date, weekName: "Rogativas" };
    // Vigilia de Pentecostés (diff 48): morado con degradado a rojo (Violet/Red en el ORDO).
    if (diff === 48) return { name: "Vigilia de Pentecostés", season: "pascua", color: "morado", color2: "rojo", date, weekName: "Vigilia de Pentecostés" };
    // Octava de la Ascensión: los días tras la Ascensión hasta la Vigilia de Pentecostés (diff 40-47), blanco.
    if (diff >= 40 && diff <= 47) {
      if (date.getDay() === 0) {
        return { name: "Domingo después de la Ascensión", season: "pascua", color: "blanco", date, weekName: "Octava de la Ascensión" };
      }
      return { name: "De la Octava de la Ascensión", season: "pascua", color: "blanco", date, weekName: "Octava de la Ascensión" };
    }
    // Octava de Pascua (diff 1-6): días de la Semana de Pascua (de Resurrección), blanco.
    if (diff >= 1 && diff <= 6) {
      const diasSemana = ["", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
      const nombre = `${diasSemana[date.getDay()] || "Feria"} en la Semana de Pascua`;
      return { name: nombre, season: "pascua", color: "blanco", date, weekName: "Semana de Pascua (Octava)" };
    }
    // Domingos y ferias de Pascua, numerados como el ORDO: el domingo tras la Octava
    // (diff 7) es la "Primera Domínica DESPUÉS de Pascua", no "Segundo Domingo".
    const weeksAfterEaster = Math.floor(diff / 7); // diff 7-13 → 1, 14-20 → 2, ...
    const nombresDominica: Record<number, string> = {
      1: "Primera Domínica después de Pascua (in Albis)",
      2: "Segunda Domínica después de Pascua (del Buen Pastor)",
      3: "Tercera Domínica después de Pascua",
      4: "Cuarta Domínica después de Pascua",
      5: "Quinta Domínica después de Pascua (de Rogación)",
    };
    const domingo = nombresDominica[weeksAfterEaster] ?? `${getOrdinal(weeksAfterEaster)} Domínica después de Pascua`;
    if (date.getDay() === 0) {
      return { name: domingo, season: "pascua", color: "blanco", date, weekName: domingo };
    }
    return { name: "Feria de Pascua", season: "pascua", color: "blanco", date, weekName: `Semana de la ${domingo}` };
  }

  // Pentecostés
  if (diff === 49) {
    return { name: "Domingo de Pentecostés", season: "pentecostes", color: "rojo", date };
  }

  // Domingo de la Trinidad
  if (diff === 56) {
    return { name: "Domingo de la Trinidad", season: "trinidad", color: "blanco", date };
  }

  // Tiempo después de Pentecostés (Trinidad)
  if (diff > 49) {
    // Témporas de Pentecostés: miércoles/viernes/sábado tras Pentecostés (rojo).
    if (diff === 52) {
      return { name: "Témpora de Pentecostés (Miércoles)", season: "pentecostes", color: "rojo", date, weekName: "Témporas de Pentecostés" };
    }
    if (diff === 54) {
      return { name: "Témpora de Pentecostés (Viernes)", season: "pentecostes", color: "rojo", date, weekName: "Témporas de Pentecostés" };
    }
    if (diff === 55) {
      return { name: "Témpora de Pentecostés (Sábado)", season: "pentecostes", color: "rojo", date, weekName: "Témporas de Pentecostés" };
    }
    // Corpus Christi: jueves tras la Trinidad (diff 60), blanco, con octava.
    if (diff === 60) {
      return { name: "Corpus Christi", season: "trinidad", color: "blanco", date, weekName: "Corpus Christi" };
    }
    // Octava de Corpus Christi (diff 61-67), blanco. Un domingo dentro rige como Domingo de Trinidad.
    if (diff >= 61 && diff <= 67 && date.getDay() !== 0) {
      return { name: "De la Octava de Corpus Christi", season: "trinidad", color: "blanco", date, weekName: "Octava de Corpus Christi" };
    }
    // Sagrado Corazón de Jesús: viernes tras la octava de Corpus (diff 68), blanco.
    if (diff === 68) {
      return { name: "El Sagrado Corazón de Jesús", season: "trinidad", color: "blanco", date, weekName: "Sagrado Corazón" };
    }
    // Octava del Sagrado Corazón (diff 69-75), blanco. Un domingo dentro rige como Domingo de Trinidad.
    if (diff >= 69 && diff <= 75 && date.getDay() !== 0) {
      return { name: "De la Octava del Sagrado Corazón", season: "trinidad", color: "blanco", date, weekName: "Octava del Sagrado Corazón" };
    }
    const trinityWeek = Math.floor((diff - 56) / 7);
    if (trinityWeek > 0) {
      const isSunday = date.getDay() === 0;
      // Cristo Rey (uso ACC/Anglican Missal tradicional): el ÚLTIMO domingo de octubre.
      if (isSunday && date.getMonth() === 9) {
        const nextSun = new Date(date);
        nextSun.setDate(date.getDate() + 7);
        if (nextSun.getMonth() === 10) { // el domingo siguiente ya es noviembre → este es el último de octubre
          return { name: "Cristo Rey", season: "trinidad", color: "blanco", date, weekName: "Cristo Rey" };
        }
      }
      // Domingo próximo antes de Adviento (último domingo del año litúrgico).
      if (isSunday) {
        const nextSunday = new Date(date);
        nextSunday.setDate(date.getDate() + 7);
        if (nextSunday >= adventStart) {
          return { name: "Domingo próximo antes de Adviento", season: "trinidad", color: "verde", date, weekName: "Domingo próximo antes de Adviento" };
        }
      }
      const domingo = `${getOrdinalM(trinityWeek)} Domingo después de la Trinidad`;
      if (isSunday) {
        return { name: domingo, season: "trinidad", color: "verde", date, weekName: domingo };
      }
      // Días entre semana: "Feria" (como el ORDO), con la semana como contexto.
      return { name: "Feria", season: "trinidad", color: "verde", date, weekName: `Semana del ${domingo}` };
    }
    // Semana entre Pentecostés y Trinidad / semana de Trinidad
    if (diff > 56) {
      return { name: "Feria", season: "trinidad", color: "verde", date, weekName: "Semana de la Trinidad" };
    }
    // Octava de Pentecostés (diff 50-55): los días entre Pentecostés y Trinidad, rojo.
    return { name: "De la Octava de Pentecostés", season: "pentecostes", color: "rojo", date, weekName: "Octava de Pentecostés" };
  }

  // Tiempo después de Epifanía (default)
  if (date >= epiphany && diff < -46) {
    return { name: "Tiempo después de Epifanía", season: "epifania", color: "verde", date };
  }

  return { name: "", season: "trinidad", color: "verde", date };
}

export function calculateEaster(year: number): Date {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31) - 1;
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month, day);
}

/**
 * Devuelve el primer miércoles, viernes y sábado ESTRICTAMENTE después de una fecha
 * ancla (p.ej. el 14-sep para las Témporas de otoño, el 13-dic para las de Adviento).
 * Las tres Témporas de una estación caen en la misma semana litúrgica.
 */
function emberDaysAfter(anchor: Date): { wed: string; fri: string; sat: string } {
  const iso = (d: Date) => d.toISOString().slice(0, 10);
  const firstAfter = (targetDow: number) => {
    const d = new Date(anchor);
    do {
      d.setDate(d.getDate() + 1);
    } while (d.getDay() !== targetDow);
    return d;
  };
  const wed = firstAfter(3); // miércoles
  // viernes y sábado de esa MISMA semana del miércoles
  const fri = new Date(wed); fri.setDate(wed.getDate() + 2);
  const sat = new Date(wed); sat.setDate(wed.getDate() + 3);
  return { wed: iso(wed), fri: iso(fri), sat: iso(sat) };
}

function getDayOfYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 0);
  return Math.floor((date.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
}

function getAdventStart(year: number): Date {
  const christmas = new Date(year, 11, 25);
  const dayOfWeek = christmas.getDay();
  const daysBack = dayOfWeek === 0 ? 28 : dayOfWeek + 21;
  return new Date(year, 11, 25 - daysBack);
}

function getWeekdayName(date: Date): string {
  const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  return days[date.getDay()];
}

function getOrdinal(n: number): string {
  const ordinals = [
    "", "Primera", "Segunda", "Tercera", "Cuarta", "Quinta", "Sexta",
    "Séptima", "Octava", "Novena", "Décima", "Undécima", "Duodécima",
    "Decimotercera", "Decimocuarta", "Decimoquinta", "Decimosexta",
    "Decimoséptima", "Decimoctava", "Decimonovena", "Vigésima",
    "Vigésimoprimera", "Vigésimosegunda", "Vigésimotercera",
    "Vigésimocuarta", "Vigésimoquinta",
  ];
  return ordinals[n] || `${n}ª`;
}

function getOrdinalM(n: number): string {
  const ordinals = [
    "", "Primer", "Segundo", "Tercer", "Cuarto", "Quinto", "Sexto",
    "Séptimo", "Octavo", "Noveno", "Décimo", "Undécimo", "Duodécimo",
    "Decimotercer", "Decimocuarto", "Decimoquinto", "Decimosexto",
    "Decimoséptimo", "Decimoctavo", "Decimonoveno", "Vigésimo",
    "Vigesimoprimer", "Vigesimosegundo", "Vigesimotercer",
    "Vigesimocuarto", "Vigesimoquinto", "Vigesimosexto", "Vigesimoséptimo",
  ];
  return ordinals[n] || `${n}º`;
}

export function formatDateSpanish(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const str = date.toLocaleDateString("es-ES", options);
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function toDateParam(date: Date): string {
  return date.toISOString().split("T")[0];
}

export function fromDateParam(param: string): Date {
  const [year, month, day] = param.split("-").map(Number);
  return new Date(year, month - 1, day);
}
