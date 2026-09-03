/**
 * Calendario Eclesiástico - Cálculos litúrgicos para el LOC 1928
 */

export interface ChurchDay {
  name: string;
  season: Season;
  color: LiturgicalColor;
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
  // Octava de la Asunción (16-21 ago; el 22 es el día octavo). Blanco.
  if (m0 === 7 && dd >= 16 && dd <= 21 && !esDomingo) {
    return { name: "De la Octava de la Asunción", season: "trinidad", color: "blanco", date, weekName: "Octava de la Asunción" };
  }
  // Octava de Todos los Santos (2-7 nov; 1 = Todos los Santos, 8 = día octavo). Blanco.
  if (m0 === 10 && dd >= 2 && dd <= 7 && !esDomingo) {
    return { name: "De la Octava de Todos los Santos", season: "trinidad", color: "blanco", date, weekName: "Octava de Todos los Santos" };
  }
  // Octava de la Concepción (9-14 dic; 8 = Concepción, 15 = día octavo). Blanco.
  // Va en Adviento pero la octava impone blanco sobre el morado en los días feriales.
  if (m0 === 11 && dd >= 9 && dd <= 14 && !esDomingo) {
    return { name: "De la Octava de la Concepción", season: "adviento", color: "blanco", date, weekName: "Octava de la Concepción" };
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
  if ((date.getMonth() === 11 && date.getDate() >= 25) || (date.getMonth() === 0 && date.getDate() < 6)) {
    return { name: "Tiempo de Navidad", season: "navidad", color: "blanco", date };
  }

  // Epifanía
  if (date.getMonth() === 0 && date.getDate() === 6) {
    return { name: "La Epifanía", season: "epifania", color: "blanco", date };
  }

  // Octava de la Epifanía (7-12 ene), blanco. El 13 es el día octavo (fiesta en feasts.ts).
  if (date.getMonth() === 0 && date.getDate() >= 7 && date.getDate() <= 12) {
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
    return { name: "Feria de Pre-Cuaresma", season: "epifania", color: "morado", date, weekName: `Semana de ${domingo}` };
  }

  // Cuaresma (46 días antes de Pascua hasta Domingo de Ramos)
  if (diff >= -46 && diff < -7) {
    // Miércoles de Ceniza (−46): inicio de la Cuaresma, ayuno y abstinencia.
    if (diff === -46) {
      return { name: "Miércoles de Ceniza", season: "cuaresma", color: "morado", date, weekName: "Miércoles de Ceniza" };
    }
    const lentWeek = Math.floor((diff + 46) / 7) + 1;
    const isLaetare = lentWeek === 4 && date.getDay() === 0;
    const domingo = `${getOrdinalM(lentWeek)} Domingo de Cuaresma`;
    if (date.getDay() === 0) {
      return { name: domingo, season: "cuaresma", color: isLaetare ? "rosa" : "morado", date, weekName: domingo };
    }
    return { name: "Feria de Cuaresma", season: "cuaresma", color: "morado", date, weekName: `Semana del ${domingo}` };
  }

  // Semana Santa
  if (diff >= -7 && diff < 0) {
    // Viernes Santo = negro
    if (diff === -2) {
      return { name: "Viernes Santo", season: "semana-santa", color: "negro", date };
    }
    if (diff === -7) {
      return { name: "Domingo de Ramos", season: "semana-santa", color: "rojo", date };
    }
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
    if (diff === 38) return { name: "Vigilia de la Ascensión (Miércoles de Rogativas)", season: "pascua", color: "morado", date, weekName: "Rogativas" };
    // Octava de la Ascensión: los días tras la Ascensión hasta la Vigilia de Pentecostés (diff 40-47), blanco.
    if (diff >= 40 && diff <= 47) {
      if (date.getDay() === 0) {
        return { name: "Domingo después de la Ascensión", season: "pascua", color: "blanco", date, weekName: "Octava de la Ascensión" };
      }
      return { name: "De la Octava de la Ascensión", season: "pascua", color: "blanco", date, weekName: "Octava de la Ascensión" };
    }
    const easterWeek = Math.floor(diff / 7) + 1;
    const domingo = `${getOrdinalM(easterWeek)} Domingo de Pascua`;
    if (date.getDay() === 0) {
      return { name: domingo, season: "pascua", color: "blanco", date, weekName: domingo };
    }
    return { name: "Feria de Pascua", season: "pascua", color: "blanco", date, weekName: `Semana del ${domingo}` };
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
    // Corpus Christi: jueves tras la Trinidad (diff 60), blanco, con octava.
    if (diff === 60) {
      return { name: "Corpus Christi", season: "trinidad", color: "blanco", date, weekName: "Corpus Christi" };
    }
    // Octava de Corpus Christi (diff 61-66), blanco.
    if (diff >= 61 && diff <= 66) {
      return { name: "De la Octava de Corpus Christi", season: "trinidad", color: "blanco", date, weekName: "Octava de Corpus Christi" };
    }
    // Sagrado Corazón de Jesús: viernes tras la octava de Corpus (diff 68), blanco.
    if (diff === 68) {
      return { name: "El Sagrado Corazón de Jesús", season: "trinidad", color: "blanco", date, weekName: "Sagrado Corazón" };
    }
    const trinityWeek = Math.floor((diff - 56) / 7);
    if (trinityWeek > 0) {
      const isSunday = date.getDay() === 0;
      // Cristo Rey: el último domingo del año litúrgico (el domingo próximo antes de
      // Adviento). Se detecta porque el domingo siguiente ya es Adviento I o posterior.
      if (isSunday) {
        const nextSunday = new Date(date);
        nextSunday.setDate(date.getDate() + 7);
        if (nextSunday >= adventStart) {
          return { name: "Cristo Rey (Domingo próximo antes de Adviento)", season: "trinidad", color: "blanco", date, weekName: "Cristo Rey" };
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
    return { name: "Feria", season: "pentecostes", color: "rojo", date, weekName: "Semana de Pentecostés" };
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
