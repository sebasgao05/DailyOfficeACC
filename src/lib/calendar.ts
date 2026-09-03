/**
 * Calendario Eclesiástico - Cálculos litúrgicos para el LOC 1928
 */

export interface ChurchDay {
  name: string;
  season: Season;
  color: LiturgicalColor;
  date: Date;
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

  // Adviento
  if (date >= adventStart && date < christmas) {
    const weekNum = Math.floor((date.getTime() - adventStart.getTime()) / (7 * 24 * 60 * 60 * 1000)) + 1;
    // Domingo de Adviento III = Gaudete (rosa); su domingo únicamente
    const isGaudete = weekNum === 3 && date.getDay() === 0;
    return {
      name: `${getWeekdayName(date)} de la ${getOrdinal(weekNum)} Semana de Adviento`,
      season: "adviento",
      color: isGaudete ? "rosa" : "morado",
      date,
    };
  }

  // Navidad (25 dic - 5 enero)
  if ((date.getMonth() === 11 && date.getDate() >= 25) || (date.getMonth() === 0 && date.getDate() < 6)) {
    return { name: "Tiempo de Navidad", season: "navidad", color: "blanco", date };
  }

  // Epifanía
  if (date.getMonth() === 0 && date.getDate() === 6) {
    return { name: "La Epifanía", season: "epifania", color: "blanco", date };
  }

  // Cuaresma (46 días antes de Pascua hasta Domingo de Ramos)
  if (diff >= -46 && diff < -7) {
    const lentWeek = Math.floor((diff + 46) / 7) + 1;
    // Domingo de Cuaresma IV = Laetare (rosa); su domingo únicamente
    const isLaetare = lentWeek === 4 && date.getDay() === 0;
    return {
      name: `${getWeekdayName(date)} de la ${getOrdinal(lentWeek)} Semana de Cuaresma`,
      season: "cuaresma",
      color: isLaetare ? "rosa" : "morado",
      date,
    };
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
    const easterWeek = Math.floor(diff / 7) + 1;
    return {
      name: `${getWeekdayName(date)} de la ${getOrdinal(easterWeek)} Semana de Pascua`,
      season: "pascua",
      color: "blanco",
      date,
    };
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
    const trinityWeek = Math.floor((diff - 56) / 7);
    if (trinityWeek > 0) {
      // Days within a Sunday's week: use the Sunday number
      const isSunday = date.getDay() === 0;
      if (isSunday) {
        return {
          name: `${getOrdinal(trinityWeek)} Domingo después de la Trinidad`,
          season: "trinidad",
          color: "verde",
          date,
        };
      }
      return {
        name: `${getWeekdayName(date)} después del ${getOrdinal(trinityWeek)} Domingo después de la Trinidad`,
        season: "trinidad",
        color: "verde",
        date,
      };
    }
    // Week between Pentecost and Trinity / Trinity week itself
    if (diff > 56) {
      return {
        name: `${getWeekdayName(date)} después de la Trinidad`,
        season: "trinidad",
        color: "verde",
        date,
      };
    }
    return {
      name: `${getWeekdayName(date)} después de Pentecostés`,
      season: "pentecostes",
      color: "rojo",
      date,
    };
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
