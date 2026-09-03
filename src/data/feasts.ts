/**
 * Fiestas fijas del Calendario del LOC 1928 / Anglican Catholic Church
 * Transcritas del Ordo Kalendar 2026 (The Anglican Parishes Association,
 * texto litúrgico del Rvdmo. Mark Haverland).
 *
 * Códigos de color del Ordo:
 *   rojo   = Apóstoles, mártires, Pentecostés, Santa Cruz
 *   blanco = fiestas del Señor, B.V.M., confesores, vírgenes no mártires, doctores
 *   morado = Adviento, Cuaresma, vigilias, ferias penitenciales
 *   verde  = tiempo per annum (después de Epifanía / Trinidad)
 *   rosa   = domingos Gaudete (Adviento III) y Laetare (Cuaresma IV)
 *   negro  = Viernes Santo, Misas de Requiem
 */

export type FeastRank = "principal" | "mayor" | "menor" | "conmemoración";
export type FeastColor = "rojo" | "blanco" | "morado" | "verde" | "negro" | "rosa";

export interface Commemoration {
  name: string;
}

export interface Feast {
  month: number; // 1-12
  day: number;
  name: string;
  rank: FeastRank;
  color: FeastColor;
  /** Propios asignados a la Misa según el Ordo (Gloria, Credo, Prefacio propio). */
  propers?: {
    gloria?: boolean; // Glo.
    creed?: boolean; // Cr. (Credo Niceno)
    preface?: string; // Prf. <nombre> — p.ej. "Apóstoles", "Navidad", "Trinidad"
  };
  /** Conmemoraciones secundarias del día (santos añadidos a la Misa). */
  commemorations?: string[];
  /** Ayuno / abstinencia según el Ordo. */
  fast?: "abstinencia" | "ayuno-y-abstinencia";
  /** Tiene Colecta / Epístola / Evangelio propios (para enlazar a colectas). */
  hasPropers?: boolean;
  /** Se transfiere cuando cae en domingo o fiesta de mayor rango. */
  transferable?: boolean;
  /** Beato anglicano opcional (por permiso episcopal). No desplaza la feria. */
  optional?: boolean;
}

export const fixedFeasts: Feast[] = [
  // ===== Enero =====
  { month: 1, day: 1, name: "La Circuncisión de Cristo", rank: "principal", color: "blanco", hasPropers: true, propers: { gloria: true, creed: true, preface: "Navidad" } },
  { month: 1, day: 6, name: "La Epifanía", rank: "principal", color: "blanco", hasPropers: true, propers: { gloria: true, creed: true, preface: "Epifanía" } },
  { month: 1, day: 13, name: "San Hilario, Obispo y Doctor", rank: "menor", color: "blanco", propers: { gloria: true, creed: true } },
  { month: 1, day: 14, name: "Beato Ricardo Benson de Cowley, Pr.C.", rank: "menor", color: "blanco", optional: true },
  { month: 1, day: 17, name: "San Antonio, Abad", rank: "menor", color: "blanco", propers: { gloria: true } },
  { month: 1, day: 18, name: "Confesión de San Pedro, Apóstol", rank: "menor", color: "blanco", propers: { gloria: true } },
  { month: 1, day: 20, name: "Santos Fabián y Sebastián, Mártires", rank: "menor", color: "rojo", propers: { gloria: true } },
  { month: 1, day: 21, name: "Santa Inés, Virgen y Mártir", rank: "menor", color: "rojo", propers: { gloria: true } },
  { month: 1, day: 22, name: "Santos Vicente y Anastasio, Mártires", rank: "menor", color: "rojo", propers: { gloria: true } },
  { month: 1, day: 24, name: "San Timoteo, Obispo y Mártir", rank: "menor", color: "rojo", propers: { gloria: true } },
  { month: 1, day: 25, name: "La Conversión de San Pablo, Apóstol", rank: "mayor", color: "blanco", hasPropers: true, propers: { gloria: true, creed: true, preface: "Apóstoles" }, transferable: true },
  // ===== Febrero =====
  { month: 2, day: 2, name: "La Purificación de la B.V.M.", rank: "principal", color: "blanco", hasPropers: true, propers: { gloria: true, creed: true, preface: "Navidad" } },
  { month: 2, day: 24, name: "San Matías, Apóstol", rank: "mayor", color: "rojo", hasPropers: true, propers: { gloria: true, creed: true, preface: "Apóstoles" }, transferable: true },
  { month: 2, day: 27, name: "Beato Jorge Herbert, Pr.C.", rank: "menor", color: "blanco", optional: true },
  // ===== Marzo =====
  { month: 3, day: 1, name: "San David, Obispo", rank: "menor", color: "blanco", propers: { gloria: true } },
  { month: 3, day: 12, name: "San Gregorio Magno, Obispo y Doctor", rank: "menor", color: "blanco", propers: { gloria: true, creed: true } },
  { month: 3, day: 17, name: "San Patricio, Obispo", rank: "menor", color: "blanco", propers: { gloria: true } },
  { month: 3, day: 19, name: "San José, Esposo de la B.V.M.", rank: "menor", color: "blanco", propers: { gloria: true } },
  { month: 3, day: 25, name: "La Anunciación de la B.V.M.", rank: "principal", color: "blanco", hasPropers: true, propers: { gloria: true, creed: true, preface: "B.V.M." } },
  // ===== Abril =====
  { month: 4, day: 25, name: "San Marcos, Evangelista", rank: "mayor", color: "rojo", hasPropers: true, propers: { gloria: true, creed: true, preface: "Apóstoles" }, transferable: true },
  // ===== Mayo =====
  { month: 5, day: 1, name: "Santos Felipe y Santiago, Apóstoles", rank: "mayor", color: "rojo", hasPropers: true, propers: { gloria: true, creed: true, preface: "Apóstoles" }, transferable: true },
  { month: 5, day: 19, name: "San Dunstán, Arzobispo", rank: "menor", color: "blanco", propers: { gloria: true } },
  // ===== Junio =====
  { month: 6, day: 11, name: "San Bernabé, Apóstol", rank: "mayor", color: "rojo", hasPropers: true, propers: { gloria: true, creed: true, preface: "Apóstoles" }, transferable: true },
  { month: 6, day: 24, name: "La Natividad de San Juan Bautista", rank: "principal", color: "blanco", hasPropers: true, propers: { gloria: true, creed: true } },
  { month: 6, day: 29, name: "Santos Pedro y Pablo, Apóstoles", rank: "principal", color: "rojo", hasPropers: true, propers: { gloria: true, creed: true, preface: "Apóstoles" } },
  // ===== Julio =====
  { month: 7, day: 22, name: "Santa María Magdalena", rank: "menor", color: "blanco", propers: { gloria: true } },
  { month: 7, day: 25, name: "Santiago el Mayor, Apóstol", rank: "mayor", color: "rojo", hasPropers: true, propers: { gloria: true, creed: true, preface: "Apóstoles" }, transferable: true },
  // ===== Agosto =====
  { month: 8, day: 1, name: "San Pedro Ad Víncula", rank: "menor", color: "rojo", propers: { gloria: true } },
  { month: 8, day: 6, name: "La Transfiguración de N.S.", rank: "principal", color: "blanco", hasPropers: true, propers: { gloria: true, creed: true } },
  { month: 8, day: 10, name: "San Lorenzo, Diácono y Mártir", rank: "menor", color: "rojo", propers: { gloria: true } },
  { month: 8, day: 15, name: "La Bienaventurada Virgen María", rank: "principal", color: "blanco", propers: { gloria: true, creed: true, preface: "B.V.M." } },
  { month: 8, day: 20, name: "San Bernardo, Abad y Doctor", rank: "menor", color: "blanco", propers: { gloria: true, creed: true } },
  { month: 8, day: 24, name: "San Bartolomé, Apóstol", rank: "mayor", color: "rojo", hasPropers: true, propers: { gloria: true, creed: true, preface: "Apóstoles" }, transferable: true },
  { month: 8, day: 28, name: "San Agustín de Hipona, Obispo y Doctor", rank: "menor", color: "blanco", propers: { gloria: true, creed: true } },
  { month: 8, day: 29, name: "La Degollación de San Juan Bautista", rank: "menor", color: "rojo", propers: { gloria: true } },
  // ===== Septiembre =====
  { month: 9, day: 8, name: "La Natividad de la B.V.M.", rank: "menor", color: "blanco", propers: { gloria: true, creed: true, preface: "B.V.M." } },
  { month: 9, day: 14, name: "La Exaltación de la Santa Cruz", rank: "mayor", color: "rojo", propers: { gloria: true, creed: true } },
  { month: 9, day: 21, name: "San Mateo, Apóstol y Evangelista", rank: "mayor", color: "rojo", hasPropers: true, propers: { gloria: true, creed: true, preface: "Apóstoles" }, transferable: true },
  { month: 9, day: 29, name: "San Miguel y Todos los Ángeles", rank: "principal", color: "blanco", hasPropers: true, propers: { gloria: true, creed: true } },
  { month: 9, day: 30, name: "San Jerónimo, Presbítero y Doctor", rank: "menor", color: "blanco", propers: { gloria: true, creed: true } },
  // ===== Octubre =====
  { month: 10, day: 18, name: "San Lucas, Evangelista", rank: "mayor", color: "rojo", hasPropers: true, propers: { gloria: true, creed: true, preface: "Apóstoles" }, transferable: true },
  { month: 10, day: 28, name: "Santos Simón y Judas, Apóstoles", rank: "mayor", color: "rojo", hasPropers: true, propers: { gloria: true, creed: true, preface: "Apóstoles" }, transferable: true },
  // ===== Noviembre =====
  { month: 11, day: 1, name: "Todos los Santos", rank: "principal", color: "blanco", hasPropers: true, propers: { gloria: true, creed: true } },
  { month: 11, day: 2, name: "Conmemoración de los Fieles Difuntos", rank: "menor", color: "negro", propers: { preface: "Difuntos" } },
  { month: 11, day: 30, name: "San Andrés, Apóstol", rank: "mayor", color: "rojo", hasPropers: true, propers: { gloria: true, creed: true, preface: "Apóstoles" }, transferable: true },
  // ===== Diciembre =====
  { month: 12, day: 6, name: "San Nicolás, Obispo", rank: "menor", color: "blanco", propers: { gloria: true } },
  { month: 12, day: 8, name: "La Concepción de la B.V.M.", rank: "menor", color: "blanco", propers: { gloria: true, creed: true, preface: "B.V.M." } },
  { month: 12, day: 13, name: "Santa Lucía, Virgen y Mártir", rank: "menor", color: "rojo", propers: { gloria: true, creed: true, preface: "B.V.M." } },
  { month: 12, day: 21, name: "Santo Tomás, Apóstol", rank: "mayor", color: "rojo", hasPropers: true, propers: { gloria: true, creed: true, preface: "Apóstoles" }, transferable: true },
  { month: 12, day: 25, name: "La Natividad de N.S. Jesucristo", rank: "principal", color: "blanco", hasPropers: true, propers: { gloria: true, creed: true, preface: "Navidad" } },
  { month: 12, day: 26, name: "San Esteban, Protomártir", rank: "mayor", color: "rojo", hasPropers: true, propers: { gloria: true, creed: true, preface: "Navidad" }, commemorations: ["Octava de Navidad"] },
  { month: 12, day: 27, name: "San Juan, Apóstol y Evangelista", rank: "mayor", color: "blanco", hasPropers: true, propers: { gloria: true, creed: true, preface: "Navidad" }, commemorations: ["Octava de Navidad"] },
  { month: 12, day: 28, name: "Los Santos Inocentes, Mártires", rank: "mayor", color: "rojo", hasPropers: true, propers: { gloria: true, creed: true, preface: "Navidad" }, commemorations: ["Octava de Navidad"] },
  { month: 12, day: 29, name: "Santo Tomás de Canterbury, Obispo y Mártir", rank: "menor", color: "rojo", propers: { gloria: true, creed: true, preface: "Navidad" }, commemorations: ["Octava de Navidad"] },
  { month: 12, day: 31, name: "San Silvestre, Obispo", rank: "menor", color: "blanco", propers: { gloria: true, creed: true, preface: "Navidad" }, commemorations: ["Octava de Navidad"] },
];

/**
 * Devuelve la fiesta de una fecha concreta, si la hay.
 * Excluye por defecto los beati opcionales (que no desplazan la feria);
 * pasa includeOptional=true para incluirlos.
 */
export function getFeastForDate(date: Date, includeOptional = false): Feast | null {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const matches = fixedFeasts.filter((f) => f.month === month && f.day === day);
  if (matches.length === 0) return null;
  const nonOptional = matches.find((f) => !f.optional);
  if (nonOptional) return nonOptional;
  return includeOptional ? matches[0] : null;
}

/** Todas las fiestas de una fecha (incluye beati opcionales como conmemoraciones). */
export function getAllFeastsForDate(date: Date): Feast[] {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return fixedFeasts.filter((f) => f.month === month && f.day === day);
}
