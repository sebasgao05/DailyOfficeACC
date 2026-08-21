/**
 * Fiestas fijas del Calendario del LOC 1928
 * Colores según el Ordo Kalendar 2026:
 *   rojo=mártires/Pentecostés, blanco=confesores/vírgenes/fiestas de Cristo, 
 *   morado=Adviento/Cuaresma, verde=después de Epifanía/Trinidad
 */

export interface Feast {
  month: number; // 1-12
  day: number;
  name: string;
  rank: "principal" | "mayor" | "menor" | "conmemoración";
  color: "rojo" | "blanco" | "morado" | "verde";
  hasPropers?: boolean; // Has collect/epistle/gospel
}

export const fixedFeasts: Feast[] = [
  // Enero
  { month: 1, day: 1, name: "La Circuncisión de Cristo", rank: "principal", color: "blanco", hasPropers: true },
  { month: 1, day: 6, name: "La Epifanía", rank: "principal", color: "blanco", hasPropers: true },
  { month: 1, day: 13, name: "Bautismo de N.S. (I después de Epifanía)", rank: "menor", color: "blanco" },
  { month: 1, day: 18, name: "Confesión de San Pedro", rank: "menor", color: "blanco" },
  { month: 1, day: 25, name: "Conversión de San Pablo", rank: "mayor", color: "blanco", hasPropers: true },
  // Febrero
  { month: 2, day: 2, name: "La Purificación de la B.V.M.", rank: "principal", color: "blanco", hasPropers: true },
  { month: 2, day: 24, name: "San Matías, Apóstol", rank: "mayor", color: "rojo", hasPropers: true },
  // Marzo
  { month: 3, day: 1, name: "San David, Obispo", rank: "menor", color: "blanco" },
  { month: 3, day: 12, name: "San Gregorio Magno, Obispo y Doctor", rank: "menor", color: "blanco" },
  { month: 3, day: 17, name: "San Patricio, Obispo", rank: "menor", color: "blanco" },
  { month: 3, day: 25, name: "La Anunciación de la B.V.M.", rank: "principal", color: "blanco", hasPropers: true },
  // Abril
  { month: 4, day: 25, name: "San Marcos, Evangelista", rank: "mayor", color: "rojo", hasPropers: true },
  // Mayo
  { month: 5, day: 1, name: "San Felipe y Santiago, Apóstoles", rank: "mayor", color: "rojo", hasPropers: true },
  { month: 5, day: 19, name: "San Dunstan, Arzobispo", rank: "menor", color: "blanco" },
  // Junio
  { month: 6, day: 11, name: "San Bernabé, Apóstol", rank: "mayor", color: "rojo", hasPropers: true },
  { month: 6, day: 24, name: "Natividad de San Juan Bautista", rank: "principal", color: "blanco", hasPropers: true },
  { month: 6, day: 29, name: "San Pedro y San Pablo, Apóstoles", rank: "principal", color: "rojo", hasPropers: true },
  // Julio
  { month: 7, day: 22, name: "Santa María Magdalena", rank: "menor", color: "blanco" },
  { month: 7, day: 25, name: "Santiago, Apóstol", rank: "mayor", color: "rojo", hasPropers: true },
  // Agosto
  { month: 8, day: 1, name: "San Pedro Ad Víncula", rank: "menor", color: "rojo" },
  { month: 8, day: 4, name: "Santo Domingo, C.", rank: "menor", color: "blanco" },
  { month: 8, day: 5, name: "San Osvaldo, Rey y Mártir", rank: "menor", color: "rojo" },
  { month: 8, day: 6, name: "La Transfiguración", rank: "principal", color: "blanco", hasPropers: true },
  { month: 8, day: 7, name: "Santo Nombre de Jesús", rank: "menor", color: "blanco" },
  { month: 8, day: 10, name: "San Lorenzo, Diácono y Mártir", rank: "menor", color: "rojo" },
  { month: 8, day: 11, name: "Santa Clara, Virgen", rank: "menor", color: "blanco" },
  { month: 8, day: 15, name: "La Asunción de la B.V.M.", rank: "principal", color: "blanco" },
  { month: 8, day: 20, name: "San Bernardo, Abad y Doctor", rank: "menor", color: "blanco" },
  { month: 8, day: 24, name: "San Bartolomé, Apóstol", rank: "mayor", color: "rojo", hasPropers: true },
  { month: 8, day: 25, name: "San Luis IX, Rey", rank: "menor", color: "blanco" },
  { month: 8, day: 28, name: "San Agustín de Hipona, Obispo y Doctor", rank: "menor", color: "blanco" },
  { month: 8, day: 29, name: "Degollación de San Juan Bautista", rank: "menor", color: "rojo" },
  // Septiembre
  { month: 9, day: 8, name: "Natividad de la B.V.M.", rank: "menor", color: "blanco" },
  { month: 9, day: 14, name: "La Santa Cruz", rank: "menor", color: "rojo" },
  { month: 9, day: 21, name: "San Mateo, Apóstol y Evangelista", rank: "mayor", color: "rojo", hasPropers: true },
  { month: 9, day: 29, name: "San Miguel y Todos los Ángeles", rank: "principal", color: "blanco", hasPropers: true },
  // Octubre
  { month: 10, day: 18, name: "San Lucas, Evangelista", rank: "mayor", color: "rojo", hasPropers: true },
  { month: 10, day: 28, name: "San Simón y San Judas, Apóstoles", rank: "mayor", color: "rojo", hasPropers: true },
  // Noviembre
  { month: 11, day: 1, name: "Todos los Santos", rank: "principal", color: "blanco", hasPropers: true },
  { month: 11, day: 2, name: "Conmemoración de los Fieles Difuntos", rank: "menor", color: "morado" },
  { month: 11, day: 30, name: "San Andrés, Apóstol", rank: "mayor", color: "rojo", hasPropers: true },
  // Diciembre
  { month: 12, day: 8, name: "Concepción de la B.V.M.", rank: "menor", color: "blanco" },
  { month: 12, day: 21, name: "Santo Tomás, Apóstol", rank: "mayor", color: "rojo", hasPropers: true },
  { month: 12, day: 25, name: "La Natividad de N.S. Jesucristo", rank: "principal", color: "blanco", hasPropers: true },
  { month: 12, day: 26, name: "San Esteban, Protomártir", rank: "mayor", color: "rojo", hasPropers: true },
  { month: 12, day: 27, name: "San Juan, Apóstol y Evangelista", rank: "mayor", color: "blanco", hasPropers: true },
  { month: 12, day: 28, name: "Los Santos Inocentes", rank: "mayor", color: "rojo", hasPropers: true },
];

/**
 * Get feast for a specific date, if any
 */
export function getFeastForDate(date: Date): Feast | null {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return fixedFeasts.find((f) => f.month === month && f.day === day) || null;
}
