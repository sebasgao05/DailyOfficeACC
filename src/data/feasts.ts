/**
 * Santoral completo del ORDO Kalendar 2026 (Anglican Catholic Church / APA).
 * Transcrito del ORDO 2026 mes a mes: fiestas fijas de santos con rango,
 * color litúrgico, propios (Gloria/Credo/Prefacio) y beati opcionales.
 * Las entradas 'conmemoración' comparten día con la fiesta que las hospeda.
 * Fuente del texto litúrgico: Rvdmo. Mark Haverland (ACC).
 *
 * Colores: rojo (Apóstoles/mártires/Sta.Cruz), blanco (fiestas del Señor,
 * B.V.M., confesores, vírgenes, doctores), morado (Adviento/Cuaresma/vigilias),
 * verde (per annum), rosa (Gaudete/Laetare), negro (Difuntos/Viernes Santo).
 */

export type FeastRank = "principal" | "mayor" | "menor" | "conmemoración";
export type FeastColor = "rojo" | "blanco" | "morado" | "verde" | "negro" | "rosa";

export interface Feast {
  month: number; // 1-12
  day: number;
  name: string;
  rank: FeastRank;
  color: FeastColor;
  /** Propios de la Misa según el ORDO (Gloria, Credo Niceno, Prefacio propio). */
  propers?: {
    gloria?: boolean;
    creed?: boolean;
    preface?: string;
  };
  /** Tiene Colecta/Epístola/Evangelio propios (principales/mayores los tienen). */
  hasPropers?: boolean;
  /** Se transfiere si cae en domingo privilegiado (Apóstoles, Evangelistas...). */
  transferable?: boolean;
  /** Beato anglicano opcional (por permiso episcopal); no desplaza la feria. */
  optional?: boolean;
}

export const fixedFeasts: Feast[] = [
  // ===== Enero =====
  { month: 1, day: 1, name: "Circuncisión de Cristo", rank: "principal", color: "blanco", propers: { gloria: true, creed: true, preface: "Navidad" }, hasPropers: true, },
  { month: 1, day: 2, name: "Octava de San Esteban, Mártir", rank: "menor", color: "rojo", propers: { gloria: true, preface: "Navidad" }, },
  { month: 1, day: 3, name: "Octava de San Juan, Apóstol y Evangelista", rank: "menor", color: "blanco", propers: { gloria: true, preface: "Apóstoles" }, },
  { month: 1, day: 5, name: "Vigilia de la Epifanía", rank: "menor", color: "blanco", propers: { gloria: true, creed: true, preface: "Navidad" }, },
  { month: 1, day: 6, name: "La Epifanía", rank: "principal", color: "blanco", propers: { gloria: true, creed: true, preface: "Epifanía" }, hasPropers: true, },
  { month: 1, day: 13, name: "Octava de la Epifanía", rank: "menor", color: "blanco", propers: { gloria: true, creed: true, preface: "Epifanía" }, },
  { month: 1, day: 14, name: "San Hilario, Obispo, Confesor y Doctor", rank: "menor", color: "blanco", propers: { gloria: true, creed: true }, },
  { month: 1, day: 15, name: "San Pablo, Primer Ermitaño, Confesor", rank: "menor", color: "blanco", propers: { gloria: true }, },
  { month: 1, day: 16, name: "Beato William Laud, Obispo y Mártir", rank: "menor", color: "rojo", propers: { gloria: true }, },
  { month: 1, day: 17, name: "San Antonio, Abad", rank: "menor", color: "blanco", propers: { gloria: true }, },
  { month: 1, day: 18, name: "San Prisca, Virgen y Mártir", rank: "conmemoración", color: "verde", },
  { month: 1, day: 20, name: "Santos Fabián y Sebastián, Mártires", rank: "menor", color: "rojo", propers: { gloria: true }, },
  { month: 1, day: 21, name: "Santa Inés, Virgen y Mártir", rank: "menor", color: "rojo", propers: { gloria: true }, },
  { month: 1, day: 22, name: "Santos Vicente y Anastasio, Mártires", rank: "menor", color: "rojo", propers: { gloria: true }, },
  { month: 1, day: 24, name: "San Timoteo, Obispo y Mártir", rank: "menor", color: "rojo", propers: { gloria: true }, },
  { month: 1, day: 25, name: "Conversión de San Pablo", rank: "mayor", color: "blanco", propers: { gloria: true, creed: true, preface: "Apóstoles" }, hasPropers: true, },
  { month: 1, day: 25, name: "San Pedro, Apóstol y Mártir", rank: "conmemoración", color: "blanco", },
  { month: 1, day: 26, name: "San Policarpo, Obispo y Mártir", rank: "menor", color: "rojo", propers: { gloria: true }, },
  { month: 1, day: 27, name: "San Juan Crisóstomo, Obispo, Confesor y Doctor", rank: "menor", color: "blanco", propers: { gloria: true, creed: true }, },
  { month: 1, day: 28, name: "Otorgamiento del Episcopado Católico Anglicano (1978)", rank: "menor", color: "blanco", propers: { gloria: true, creed: true }, },
  { month: 1, day: 29, name: "San Francisco de Sales, Obispo, Confesor y Doctor", rank: "menor", color: "blanco", propers: { gloria: true, creed: true }, },
  { month: 1, day: 30, name: "Beato Carlos Estuardo, Rey y Mártir", rank: "menor", color: "rojo", propers: { gloria: true }, },
  { month: 1, day: 31, name: "San Juan Bosco, Confesor", rank: "menor", color: "blanco", propers: { gloria: true }, },
  // ===== Febrero =====
  { month: 2, day: 1, name: "San Ignacio, Obispo y Mártir", rank: "conmemoración", color: "morado", },
  { month: 2, day: 2, name: "Purificación de la B.V.M. (Candelaria)", rank: "principal", color: "blanco", propers: { gloria: true, creed: true, preface: "Purificación" }, hasPropers: true, },
  { month: 2, day: 3, name: "San Blas, Obispo y Mártir", rank: "menor", color: "rojo", propers: { gloria: true }, },
  { month: 2, day: 4, name: "San Gilberto de Sempringham, Abad", rank: "menor", color: "blanco", propers: { gloria: true }, },
  { month: 2, day: 5, name: "Santa Águeda, Virgen y Mártir", rank: "menor", color: "rojo", propers: { gloria: true }, },
  { month: 2, day: 6, name: "San Tito, Obispo y Confesor", rank: "menor", color: "blanco", propers: { gloria: true }, },
  { month: 2, day: 6, name: "Santa Dorotea, Virgen y Mártir", rank: "conmemoración", color: "blanco", },
  { month: 2, day: 7, name: "San Romualdo, Abad", rank: "menor", color: "blanco", propers: { gloria: true }, },
  { month: 2, day: 8, name: "San Juan de Mata, Confesor", rank: "conmemoración", color: "morado", },
  { month: 2, day: 9, name: "San Cirilo de Alejandría, Obispo, Confesor y Doctor", rank: "menor", color: "blanco", propers: { gloria: true, creed: true }, },
  { month: 2, day: 10, name: "Santa Escolástica, Virgen", rank: "menor", color: "blanco", propers: { gloria: true }, },
  { month: 2, day: 11, name: "Nuevos Mártires de Rusia", rank: "menor", color: "rojo", propers: { gloria: true }, },
  { month: 2, day: 11, name: "Nuestra Señora de Lourdes", rank: "menor", color: "blanco", propers: { gloria: true, creed: true, preface: "B.V.M." }, },
  { month: 2, day: 12, name: "San Benito Biscop, Abad", rank: "menor", color: "blanco", propers: { gloria: true }, },
  { month: 2, day: 13, name: "San Kentigern, Obispo y Confesor", rank: "menor", color: "blanco", propers: { gloria: true }, },
  { month: 2, day: 14, name: "San Valentín, Mártir", rank: "menor", color: "rojo", propers: { gloria: true }, },
  { month: 2, day: 15, name: "Santos Mártires de Japón", rank: "conmemoración", color: "rojo", },
  { month: 2, day: 21, name: "San Pedro Damián, Obispo, Confesor y Doctor", rank: "menor", color: "blanco", propers: { gloria: true, creed: true, preface: "Cuaresma" }, },
  { month: 2, day: 24, name: "San Matías, Apóstol y Mártir", rank: "mayor", color: "rojo", propers: { gloria: true, creed: true, preface: "Apóstoles" }, hasPropers: true, transferable: true, },
  { month: 2, day: 18, name: "San Simeón, Obispo y Mártir", rank: "conmemoración", color: "morado", },
  { month: 2, day: 23, name: "San José de Arimatea, Confesor", rank: "conmemoración", color: "blanco", },
  { month: 2, day: 23, name: "Vigilia de San Matías, Apóstol y Mártir", rank: "conmemoración", color: "morado", },
  { month: 2, day: 27, name: "Beato George Herbert, Confesor", rank: "conmemoración", color: "morado", optional: true, },
  // ===== Marzo =====
  { month: 3, day: 1, name: "San David, Obispo y Confesor", rank: "conmemoración", color: "morado", },
  { month: 3, day: 2, name: "San Chad, Obispo y Confesor", rank: "menor", color: "blanco", propers: { gloria: true, preface: "Cuaresma" }, },
  { month: 3, day: 6, name: "Santos Perpetua y Felicidad, Mártires", rank: "menor", color: "rojo", propers: { gloria: true, preface: "Cuaresma" }, },
  { month: 3, day: 7, name: "San Tomás de Aquino, Confesor y Doctor", rank: "menor", color: "blanco", propers: { gloria: true, creed: true, preface: "Cuaresma" }, },
  { month: 3, day: 8, name: "San Juan de Dios, Confesor", rank: "conmemoración", color: "morado", },
  { month: 3, day: 9, name: "Santa Francisca de Roma, Viuda", rank: "menor", color: "blanco", propers: { gloria: true, preface: "Cuaresma" }, },
  { month: 3, day: 10, name: "Cuarenta Santos Mártires", rank: "menor", color: "rojo", propers: { gloria: true, preface: "Cuaresma" }, },
  { month: 3, day: 12, name: "San Gregorio el Grande, Obispo, Confesor y Doctor", rank: "menor", color: "blanco", propers: { gloria: true, creed: true, preface: "Cuaresma" }, },
  { month: 3, day: 17, name: "San Patricio, Obispo y Confesor", rank: "menor", color: "blanco", propers: { gloria: true, preface: "Cuaresma" }, },
  { month: 3, day: 18, name: "San Cirilo de Jerusalén, Obispo, Confesor y Doctor", rank: "menor", color: "blanco", propers: { gloria: true, creed: true, preface: "Cuaresma" }, },
  { month: 3, day: 19, name: "San José, Esposo de la B.V.M.", rank: "menor", color: "blanco", propers: { gloria: true, creed: true, preface: "San José" }, },
  { month: 3, day: 19, name: "Beato Thomas Ken, Obispo y Confesor", rank: "menor", color: "blanco", optional: true, },
  { month: 3, day: 20, name: "San Cutberto, Obispo y Confesor", rank: "menor", color: "blanco", propers: { gloria: true, preface: "Cuaresma" }, },
  { month: 3, day: 21, name: "San Benito, Abad", rank: "menor", color: "blanco", propers: { gloria: true, preface: "Cuaresma" }, },
  { month: 3, day: 24, name: "San Gabriel, Arcángel", rank: "menor", color: "blanco", propers: { gloria: true, creed: true, preface: "Cruz" }, },
  { month: 3, day: 25, name: "Anunciación de la B.V.M.", rank: "principal", color: "blanco", propers: { gloria: true, creed: true, preface: "B.V.M." }, hasPropers: true, },
  { month: 3, day: 27, name: "Compasión de la B.V.M.", rank: "menor", color: "blanco", propers: { gloria: true, creed: true, preface: "B.V.M." }, },
  { month: 3, day: 27, name: "San Juan de Damasco, Confesor y Doctor", rank: "conmemoración", color: "blanco", },
  // ===== Abril =====
  { month: 4, day: 9, name: "Beato William Law, Presbítero y Confesor", rank: "menor", color: "blanco", optional: true, },
  { month: 4, day: 11, name: "Beato George Augustus Selwyn, Obispo y Confesor", rank: "menor", color: "blanco", optional: true, },
  { month: 4, day: 11, name: "San León Magno, Obispo, Confesor y Doctor", rank: "conmemoración", color: "blanco", },
  { month: 4, day: 14, name: "San Justino, Mártir", rank: "menor", color: "rojo", propers: { gloria: true, preface: "Pascua" }, },
  { month: 4, day: 17, name: "San Stephen Harding, Abad", rank: "menor", color: "blanco", propers: { gloria: true, preface: "Pascua" }, },
  { month: 4, day: 19, name: "San Alphege, Obispo y Mártir", rank: "conmemoración", color: "blanco", },
  { month: 4, day: 21, name: "San Anselmo, Obispo, Confesor y Doctor", rank: "menor", color: "blanco", propers: { gloria: true, creed: true, preface: "Pascua" }, },
  { month: 4, day: 22, name: "Patrocinio de San José", rank: "menor", color: "blanco", propers: { gloria: true, creed: true, preface: "San José" }, },
  { month: 4, day: 23, name: "San Jorge, Mártir", rank: "menor", color: "rojo", propers: { gloria: true, preface: "Pascua" }, },
  { month: 4, day: 25, name: "San Marcos, Evangelista", rank: "mayor", color: "rojo", propers: { gloria: true, creed: true, preface: "Apóstoles" }, hasPropers: true, transferable: true, },
  { month: 4, day: 26, name: "Beato Nathaniel Woodard, Presbítero y Confesor", rank: "menor", color: "blanco", optional: true, },
  { month: 4, day: 27, name: "San Pedro Canisio, Confesor y Doctor", rank: "menor", color: "blanco", propers: { gloria: true, creed: true, preface: "Pascua" }, },
  { month: 4, day: 28, name: "San Pablo de la Cruz, Confesor", rank: "menor", color: "blanco", propers: { gloria: true, preface: "Pascua" }, },
  { month: 4, day: 29, name: "San Pedro Mártir", rank: "menor", color: "rojo", propers: { gloria: true, preface: "Pascua" }, },
  { month: 4, day: 30, name: "Santa Catalina de Siena, Virgen y Doctora", rank: "menor", color: "blanco", propers: { gloria: true, creed: true, preface: "Pascua" }, },
  // ===== Mayo =====
  { month: 5, day: 1, name: "Santos Felipe y Santiago, Apóstoles y Mártires", rank: "mayor", color: "rojo", propers: { gloria: true, creed: true, preface: "Apóstoles" }, hasPropers: true, transferable: true, },
  { month: 5, day: 2, name: "San Atanasio, Obispo, Confesor y Doctor", rank: "menor", color: "blanco", propers: { gloria: true, creed: true, preface: "Pascua" }, },
  { month: 5, day: 3, name: "Invención de la Santa Cruz", rank: "conmemoración", color: "blanco", },
  { month: 5, day: 4, name: "Santa Mónica, Viuda", rank: "menor", color: "blanco", propers: { gloria: true, preface: "Pascua" }, },
  { month: 5, day: 5, name: "Conversión de San Agustín, Obispo, Confesor y Doctor", rank: "menor", color: "blanco", propers: { gloria: true, creed: true, preface: "Pascua" }, },
  { month: 5, day: 5, name: "Beato Isaac Williams, Presbítero y Confesor", rank: "menor", color: "blanco", optional: true, },
  { month: 5, day: 7, name: "San Estanislao, Obispo y Mártir", rank: "menor", color: "rojo", propers: { gloria: true, preface: "Pascua" }, },
  { month: 5, day: 7, name: "Beata Marian Rebecca Hughes, Virgen", rank: "menor", color: "blanco", optional: true, },
  { month: 5, day: 9, name: "San Gregorio Nacianceno, Obispo, Confesor y Doctor", rank: "menor", color: "blanco", propers: { gloria: true, creed: true, preface: "Pascua" }, },
  { month: 5, day: 10, name: "San Paschal Baylon, Confesor", rank: "conmemoración", color: "blanco", },
  { month: 5, day: 12, name: "Santos Nereo, Aquileo, Domitila y Pancracio, Mártires", rank: "conmemoración", color: "rojo", },
  { month: 5, day: 19, name: "San Dunstano, Obispo y Confesor", rank: "menor", color: "morado", propers: { gloria: true, creed: true, preface: "Ascensión" }, },
  { month: 5, day: 20, name: "San Bernardino de Siena, Confesor", rank: "menor", color: "blanco", propers: { gloria: true, creed: true, preface: "Ascensión" }, },
  { month: 5, day: 13, name: "Mártires de Uganda, Mártires", rank: "menor", color: "rojo", optional: true, },
  { month: 5, day: 15, name: "San Simón Stock, Confesor", rank: "conmemoración", color: "blanco", },
  { month: 5, day: 20, name: "Beata Rhoda McNeile de Wantage, Virgen", rank: "menor", color: "blanco", optional: true, },
  { month: 5, day: 23, name: "Santa Juana de Arco, Virgen", rank: "conmemoración", color: "rojo", },
  { month: 5, day: 27, name: "San Beda el Venerable, Confesor y Doctor", rank: "conmemoración", color: "blanco", },
  // ===== Junio =====
  { month: 6, day: 5, name: "San Bonifacio, Obispo y Mártir", rank: "conmemoración", color: "blanco", },
  { month: 6, day: 9, name: "San Columba, Abad", rank: "conmemoración", color: "blanco", },
  { month: 6, day: 10, name: "Santa Margarita de Escocia, Reina y Viuda", rank: "conmemoración", color: "blanco", },
  { month: 6, day: 11, name: "San Bernabé, Apóstol y Mártir", rank: "mayor", color: "rojo", propers: { gloria: true, creed: true, preface: "Apóstoles" }, hasPropers: true, transferable: true, },
  { month: 6, day: 13, name: "San Antonio de Padua, Confesor", rank: "menor", color: "blanco", propers: { gloria: true, creed: true, preface: "Sagrado Corazón" }, },
  { month: 6, day: 14, name: "San Basilio, Obispo, Confesor y Doctor", rank: "conmemoración", color: "blanco", },
  { month: 6, day: 17, name: "San Botolph, Abad", rank: "menor", color: "blanco", propers: { gloria: true, creed: true, preface: "Sagrado Corazón" }, },
  { month: 6, day: 18, name: "San Efrén de Siria, Diácono, Confesor y Doctor", rank: "menor", color: "blanco", propers: { gloria: true, creed: true, preface: "Sagrado Corazón" }, },
  { month: 6, day: 18, name: "Beato Bernard Mizeki, Mártir", rank: "conmemoración", color: "rojo", optional: true, },
  { month: 6, day: 20, name: "Traslación de San Eduardo, Rey y Mártir", rank: "menor", color: "rojo", propers: { gloria: true }, },
  { month: 6, day: 22, name: "San Alban, Mártir", rank: "menor", color: "rojo", propers: { gloria: true }, },
  { month: 6, day: 23, name: "Vigilia de San Juan Bautista", rank: "menor", color: "morado", },
  { month: 6, day: 24, name: "Natividad de San Juan Bautista", rank: "mayor", color: "blanco", propers: { gloria: true }, hasPropers: true, },
  { month: 6, day: 27, name: "Vigilia de San Pedro y San Pablo", rank: "menor", color: "morado", },
  { month: 6, day: 28, name: "San Ireneo, Obispo y Mártir", rank: "conmemoración", color: "verde", },
  { month: 6, day: 29, name: "San Pedro, Apóstol y Mártir", rank: "mayor", color: "rojo", propers: { gloria: true, creed: true, preface: "Apóstoles" }, hasPropers: true, transferable: true, },
  { month: 6, day: 30, name: "San Pablo, Apóstol y Mártir", rank: "mayor", color: "rojo", propers: { gloria: true, creed: true, preface: "Apóstoles" }, hasPropers: true, transferable: true, },
  // ===== Julio =====
  { month: 7, day: 1, name: "Preciosísima Sangre", rank: "principal", color: "rojo", propers: { gloria: true, creed: true, preface: "Cruz" }, hasPropers: true, },
  { month: 7, day: 2, name: "Visitación de la B.V.M.", rank: "mayor", color: "blanco", propers: { gloria: true, creed: true, preface: "B.V.M." }, hasPropers: true, },
  { month: 7, day: 4, name: "Día de la Independencia (Votiva Pro Patria)", rank: "conmemoración", color: "blanco", },
  { month: 7, day: 5, name: "San Vladimiro, Rey y Confesor", rank: "conmemoración", color: "verde", },
  { month: 7, day: 13, name: "San Silas, Mártir", rank: "menor", color: "rojo", propers: { gloria: true }, },
  { month: 7, day: 7, name: "Santos Cirilo y Metodio, Obispos y Confesores", rank: "menor", color: "blanco", propers: { gloria: true }, },
  { month: 7, day: 8, name: "Santa Isabel de Portugal, Reina y Viuda", rank: "menor", color: "blanco", propers: { gloria: true }, },
  { month: 7, day: 9, name: "Santos Juan Fisher, Obispo, y Tomás Moro, Mártires", rank: "menor", color: "rojo", propers: { gloria: true }, },
  { month: 7, day: 11, name: "Solemnidad de San Benito, Abad", rank: "menor", color: "blanco", propers: { gloria: true }, },
  { month: 7, day: 12, name: "San John Gualbert, Abad", rank: "conmemoración", color: "verde", },
  { month: 7, day: 14, name: "San Buenaventura, Obispo, Confesor y Doctor", rank: "menor", color: "blanco", propers: { gloria: true, creed: true }, },
  { month: 7, day: 15, name: "Traslación de San Swithun, Obispo y Confesor", rank: "menor", color: "blanco", propers: { gloria: true }, },
  { month: 7, day: 16, name: "Nuestra Señora del Monte Carmelo", rank: "menor", color: "blanco", propers: { gloria: true, creed: true, preface: "B.V.M." }, },
  { month: 7, day: 16, name: "Traslación de San Osmund, Obispo y Confesor", rank: "conmemoración", color: "blanco", },
  { month: 7, day: 17, name: "San Alexio, Confesor", rank: "menor", color: "blanco", propers: { gloria: true }, },
  { month: 7, day: 19, name: "San Vicente de Paúl, Confesor", rank: "conmemoración", color: "verde", },
  { month: 7, day: 20, name: "Santa Margarita de Antioquía, Virgen y Mártir", rank: "menor", color: "rojo", propers: { gloria: true }, },
  { month: 7, day: 22, name: "Santa María Magdalena", rank: "menor", color: "blanco", propers: { gloria: true, creed: true }, },
  { month: 7, day: 23, name: "San Apolinar, Obispo y Mártir", rank: "menor", color: "rojo", propers: { gloria: true }, },
  { month: 7, day: 24, name: "Vigilia de Santiago Apóstol", rank: "menor", color: "morado", },
  { month: 7, day: 25, name: "Santiago, Apóstol y Mártir", rank: "mayor", color: "rojo", propers: { gloria: true, creed: true, preface: "Apóstoles" }, hasPropers: true, transferable: true, },
  { month: 7, day: 26, name: "Santa Ana, Madre de la B.V.M.", rank: "conmemoración", color: "verde", },
  { month: 7, day: 29, name: "Santa Marta, Virgen", rank: "menor", color: "blanco", propers: { gloria: true }, },
  { month: 7, day: 29, name: "Beato William Wilberforce, Confesor", rank: "conmemoración", color: "blanco", optional: true, },
  { month: 7, day: 31, name: "San Ignacio de Loyola, Confesor", rank: "menor", color: "blanco", propers: { gloria: true }, },
  // ===== Agosto =====
  { month: 8, day: 1, name: "Cadenas de San Pedro (Lammas Day)", rank: "menor", color: "blanco", propers: { gloria: true, creed: true, preface: "Apóstoles" }, },
  { month: 8, day: 2, name: "San Alfonso María de Ligorio, Obispo, Confesor y Doctor", rank: "conmemoración", color: "blanco", },
  { month: 8, day: 4, name: "Santo Domingo, Confesor", rank: "menor", color: "blanco", propers: { gloria: true }, },
  { month: 8, day: 3, name: "San Nicodemo, Confesor", rank: "conmemoración", color: "blanco", },
  { month: 8, day: 5, name: "San Osvaldo, Rey y Mártir", rank: "menor", color: "rojo", propers: { gloria: true }, },
  { month: 8, day: 5, name: "Dedicación de Santa María la Mayor", rank: "conmemoración", color: "blanco", },
  { month: 8, day: 6, name: "La Transfiguración de Nuestro Señor", rank: "mayor", color: "blanco", propers: { gloria: true, creed: true, preface: "Navidad" }, hasPropers: true, },
  { month: 8, day: 7, name: "Santísimo Nombre de Jesús", rank: "menor", color: "blanco", propers: { gloria: true, creed: true }, },
  { month: 8, day: 8, name: "Beato John Mason Neale, Presbítero y Confesor", rank: "menor", color: "blanco", optional: true, },
  { month: 8, day: 9, name: "San Juan María Vianney (Cura de Ars), Confesor", rank: "conmemoración", color: "blanco", },
  { month: 8, day: 10, name: "San Lorenzo, Diácono y Mártir", rank: "menor", color: "rojo", propers: { gloria: true }, },
  { month: 8, day: 12, name: "Santa Clara, Virgen", rank: "menor", color: "blanco", propers: { gloria: true }, },
  { month: 8, day: 13, name: "Santos Hipólito y Casiano, Mártires", rank: "menor", color: "rojo", propers: { gloria: true }, },
  { month: 8, day: 14, name: "Vigilia de la Asunción", rank: "menor", color: "morado", },
  { month: 8, day: 14, name: "Beato Jeremy Taylor, Obispo y Confesor", rank: "conmemoración", color: "blanco", optional: true, },
  { month: 8, day: 15, name: "La Asunción de la B.V.M.", rank: "principal", color: "blanco", propers: { gloria: true, creed: true, preface: "B.V.M." }, hasPropers: true, },
  { month: 8, day: 16, name: "San Joaquín, Padre de la B.V.M.", rank: "conmemoración", color: "blanco", },
  { month: 8, day: 18, name: "Santa Elena, Reina y Viuda", rank: "menor", color: "blanco", propers: { gloria: true }, },
  { month: 8, day: 20, name: "San Bernardo, Abad y Doctor", rank: "menor", color: "blanco", propers: { gloria: true, creed: true }, },
  { month: 8, day: 21, name: "Santa Juana Francisca de Chantal, Viuda", rank: "menor", color: "blanco", propers: { gloria: true }, },
  { month: 8, day: 23, name: "Vigilia de San Bartolomé", rank: "conmemoración", color: "morado", },
  { month: 8, day: 24, name: "San Bartolomé, Apóstol y Mártir", rank: "mayor", color: "rojo", propers: { gloria: true, creed: true, preface: "Apóstoles" }, hasPropers: true, transferable: true, },
  { month: 8, day: 25, name: "San Luis IX, Rey y Confesor", rank: "menor", color: "blanco", propers: { gloria: true }, },
  { month: 8, day: 28, name: "San Agustín de Hipona, Obispo, Confesor y Doctor", rank: "menor", color: "blanco", propers: { gloria: true, creed: true }, },
  { month: 8, day: 29, name: "Decapitación de San Juan Bautista", rank: "menor", color: "rojo", propers: { gloria: true }, },
  { month: 8, day: 31, name: "San Aidán, Obispo y Confesor", rank: "menor", color: "blanco", propers: { gloria: true }, },
  // ===== Septiembre =====
  { month: 9, day: 1, name: "San Gil, Abad", rank: "menor", color: "blanco", propers: { gloria: true }, },
  { month: 9, day: 2, name: "San Esteban de Hungría, Rey y Confesor", rank: "menor", color: "blanco", propers: { gloria: true }, },
  { month: 9, day: 5, name: "B.V.M. en Sábado", rank: "menor", color: "blanco", propers: { gloria: true, preface: "B.V.M." }, },
  { month: 9, day: 7, name: "San Evurcio, Obispo y Confesor", rank: "menor", color: "blanco", propers: { gloria: true }, },
  { month: 9, day: 8, name: "Natividad de la B.V.M.", rank: "menor", color: "blanco", propers: { gloria: true, creed: true, preface: "B.V.M." }, },
  { month: 9, day: 9, name: "San Pedro Claver, Confesor", rank: "menor", color: "blanco", propers: { gloria: true }, },
  { month: 9, day: 11, name: "Santos Proto y Jacinto, Mártires", rank: "menor", color: "rojo", propers: { gloria: true }, },
  { month: 9, day: 12, name: "Santísimo Nombre de María", rank: "menor", color: "blanco", propers: { gloria: true, creed: true, preface: "B.V.M." }, },
  { month: 9, day: 14, name: "Exaltación de la Santa Cruz", rank: "mayor", color: "rojo", propers: { gloria: true, creed: true, preface: "Cruz" }, hasPropers: true, },
  { month: 9, day: 15, name: "Siete Dolores de la B.V.M.", rank: "menor", color: "blanco", propers: { gloria: true, creed: true, preface: "B.V.M." }, },
  { month: 9, day: 16, name: "San Cipriano, Obispo y Mártir", rank: "menor", color: "rojo", propers: { gloria: true }, },
  { month: 9, day: 16, name: "San Niniano, Obispo y Confesor", rank: "conmemoración", color: "rojo", },
  { month: 9, day: 17, name: "San Hildegarda, Virgen", rank: "menor", color: "blanco", propers: { gloria: true }, },
  { month: 9, day: 18, name: "Beato Edward Bouverie Pusey, Confesor", rank: "conmemoración", color: "blanco", optional: true, },
  { month: 9, day: 19, name: "San Teodoro, Obispo y Confesor", rank: "menor", color: "blanco", propers: { gloria: true }, },
  { month: 9, day: 20, name: "Beato John Coleridge Patteson de Melanesia, Obispo y Mártir", rank: "conmemoración", color: "rojo", optional: true, },
  { month: 9, day: 21, name: "San Mateo, Apóstol y Evangelista", rank: "mayor", color: "rojo", propers: { gloria: true, creed: true, preface: "Apóstoles" }, hasPropers: true, transferable: true, },
  { month: 9, day: 22, name: "San Mauricio y Compañeros, Mártires", rank: "menor", color: "rojo", propers: { gloria: true }, },
  { month: 9, day: 23, name: "San Lino, Obispo y Mártir", rank: "menor", color: "rojo", propers: { gloria: true }, },
  { month: 9, day: 23, name: "Santa Tecla, Virgen y Mártir", rank: "conmemoración", color: "rojo", },
  { month: 9, day: 24, name: "Nuestra Señora de Walsingham", rank: "menor", color: "blanco", propers: { gloria: true, creed: true, preface: "B.V.M." }, },
  { month: 9, day: 25, name: "Beato Lancelot Andrewes, Obispo y Confesor", rank: "menor", color: "blanco", propers: { gloria: true }, optional: true, },
  { month: 9, day: 26, name: "Mártires de Norteamérica", rank: "menor", color: "rojo", propers: { gloria: true }, },
  { month: 9, day: 27, name: "Santos Cosme y Damián, Mártires", rank: "conmemoración", color: "rojo", },
  { month: 9, day: 28, name: "San Wenceslao, Príncipe y Mártir", rank: "menor", color: "rojo", propers: { gloria: true }, },
  { month: 9, day: 29, name: "San Miguel y Todos los Ángeles", rank: "mayor", color: "blanco", propers: { gloria: true, creed: true }, hasPropers: true, },
  { month: 9, day: 30, name: "San Jerónimo, Confesor y Doctor", rank: "menor", color: "blanco", propers: { gloria: true, creed: true }, },
  // ===== Octubre =====
  { month: 10, day: 1, name: "San Remigio, Obispo y Confesor", rank: "menor", color: "blanco", propers: { gloria: true }, },
  { month: 10, day: 2, name: "Santos Ángeles Custodios", rank: "menor", color: "blanco", propers: { gloria: true, creed: true }, },
  { month: 10, day: 3, name: "Santa Teresa de Lisieux, Virgen", rank: "menor", color: "blanco", propers: { gloria: true }, },
  { month: 10, day: 4, name: "San Francisco de Asís, Confesor", rank: "conmemoración", color: "verde", },
  { month: 10, day: 5, name: "San Plácido y Compañeros, Mártires", rank: "menor", color: "rojo", propers: { gloria: true }, },
  { month: 10, day: 6, name: "San Bruno, Abad", rank: "menor", color: "blanco", propers: { gloria: true }, },
  { month: 10, day: 7, name: "Santísimo Rosario de la B.V.M.", rank: "menor", color: "blanco", propers: { gloria: true, creed: true, preface: "B.V.M." }, },
  { month: 10, day: 7, name: "Santa Fe, Virgen y Mártir", rank: "conmemoración", color: "blanco", },
  { month: 10, day: 7, name: "San Sergio y Compañeros, Mártires", rank: "conmemoración", color: "blanco", },
  { month: 10, day: 8, name: "Santa Brígida, Reina y Viuda", rank: "menor", color: "blanco", propers: { gloria: true }, },
  { month: 10, day: 9, name: "Santos Dionisio, Rústico y Eleuterio, Mártires", rank: "menor", color: "rojo", propers: { gloria: true }, },
  { month: 10, day: 10, name: "San Paulino de York, Obispo y Confesor", rank: "menor", color: "blanco", propers: { gloria: true }, },
  { month: 10, day: 11, name: "La Maternidad de la B.V.M.", rank: "conmemoración", color: "blanco", },
  { month: 10, day: 12, name: "San Wilfredo, Obispo y Confesor", rank: "menor", color: "blanco", propers: { gloria: true }, },
  { month: 10, day: 13, name: "Traslación de San Eduardo, Rey y Confesor", rank: "menor", color: "blanco", propers: { gloria: true }, },
  { month: 10, day: 14, name: "San Calixto, Obispo y Mártir", rank: "menor", color: "rojo", propers: { gloria: true }, },
  { month: 10, day: 15, name: "Santa Teresa, Virgen y Doctora", rank: "menor", color: "blanco", propers: { gloria: true, creed: true }, },
  { month: 10, day: 16, name: "Santa Eduvigis, Viuda", rank: "menor", color: "blanco", propers: { gloria: true }, },
  { month: 10, day: 17, name: "Santa Eteldreda, Reina, Virgen y Abadesa", rank: "menor", color: "blanco", propers: { gloria: true }, },
  { month: 10, day: 18, name: "San Lucas, Evangelista y Mártir", rank: "mayor", color: "rojo", propers: { gloria: true, creed: true, preface: "Apóstoles" }, hasPropers: true, transferable: true, },
  { month: 10, day: 19, name: "Santa Frideswide, Virgen", rank: "menor", color: "blanco", propers: { gloria: true }, },
  { month: 10, day: 21, name: "San Hilarión, Abad", rank: "menor", color: "blanco", propers: { gloria: true }, },
  { month: 10, day: 21, name: "Santa Úrsula y Compañeras, Vírgenes y Mártires", rank: "conmemoración", color: "blanco", },
  { month: 10, day: 22, name: "Mártires de Nueva Guinea", rank: "menor", color: "rojo", propers: { gloria: true }, },
  { month: 10, day: 24, name: "San Rafael, Arcángel", rank: "menor", color: "blanco", propers: { gloria: true, creed: true }, },
  { month: 10, day: 25, name: "Santos Crispín y Crispiniano, Mártires", rank: "conmemoración", color: "rojo", },
  { month: 10, day: 26, name: "Beato Alfredo el Grande, Rey y Confesor", rank: "menor", color: "blanco", propers: { gloria: true }, optional: true, },
  { month: 10, day: 27, name: "Vigilia de los Santos Simón y Judas", rank: "menor", color: "morado", },
  { month: 10, day: 28, name: "Santos Simón y Judas, Apóstoles y Mártires", rank: "mayor", color: "rojo", propers: { gloria: true, creed: true, preface: "Apóstoles" }, hasPropers: true, transferable: true, },
  { month: 10, day: 29, name: "Mártires de Uganda", rank: "menor", color: "rojo", propers: { gloria: true }, },
  { month: 10, day: 31, name: "Vigilia de Todos los Santos", rank: "menor", color: "morado", },
  // ===== Noviembre =====
  { month: 11, day: 1, name: "Todos los Santos", rank: "principal", color: "blanco", propers: { gloria: true, creed: true }, hasPropers: true, },
  { month: 11, day: 2, name: "Conmemoración de los Fieles Difuntos", rank: "menor", color: "negro", },
  { month: 11, day: 3, name: "San Winifredo, Virgen y Mártir", rank: "conmemoración", color: "blanco", },
  { month: 11, day: 4, name: "San Carlos Borromeo, Obispo y Confesor", rank: "menor", color: "blanco", propers: { gloria: true, creed: true }, },
  { month: 11, day: 5, name: "Santa Isabel, Madre de San Juan Bautista", rank: "menor", color: "blanco", propers: { gloria: true, creed: true }, },
  { month: 11, day: 6, name: "San Leonardo, Abad", rank: "conmemoración", color: "blanco", },
  { month: 11, day: 7, name: "San Wilibrordo, Obispo y Confesor", rank: "menor", color: "blanco", propers: { gloria: true, creed: true }, },
  { month: 11, day: 8, name: "Todos los Mártires y Santos Anglicanos", rank: "conmemoración", color: "rojo", },
  { month: 11, day: 9, name: "San Teodoro, Mártir", rank: "menor", color: "rojo", propers: { gloria: true }, },
  { month: 11, day: 11, name: "San Martín de Tours, Obispo y Confesor", rank: "menor", color: "blanco", propers: { gloria: true }, },
  { month: 11, day: 13, name: "San Bricio, Obispo y Confesor", rank: "menor", color: "blanco", propers: { gloria: true }, },
  { month: 11, day: 14, name: "Otorgamiento del Episcopado Americano (1784)", rank: "menor", color: "blanco", propers: { gloria: true, creed: true }, },
  { month: 11, day: 15, name: "San Alberto Magno, Obispo, Confesor y Doctor", rank: "conmemoración", color: "verde", },
  { month: 11, day: 16, name: "Santa Gertrudis, Virgen", rank: "menor", color: "blanco", propers: { gloria: true }, },
  { month: 11, day: 17, name: "San Hugo, Obispo y Confesor", rank: "menor", color: "blanco", propers: { gloria: true }, },
  { month: 11, day: 18, name: "Santa Hilda, Virgen y Abadesa", rank: "menor", color: "blanco", propers: { gloria: true }, },
  { month: 11, day: 19, name: "Santa Isabel de Hungría, Reina y Viuda", rank: "menor", color: "blanco", propers: { gloria: true }, },
  { month: 11, day: 20, name: "San Edmundo, Rey y Mártir", rank: "menor", color: "rojo", propers: { gloria: true }, },
  { month: 11, day: 21, name: "Presentación de la B.V.M.", rank: "menor", color: "blanco", propers: { gloria: true, creed: true, preface: "B.V.M." }, },
  { month: 11, day: 22, name: "Santa Cecilia, Virgen y Mártir", rank: "conmemoración", color: "verde", },
  { month: 11, day: 23, name: "San Clemente, Obispo y Mártir", rank: "menor", color: "rojo", propers: { gloria: true }, },
  { month: 11, day: 24, name: "San Juan de la Cruz, Confesor y Doctor", rank: "menor", color: "blanco", propers: { gloria: true, creed: true }, },
  { month: 11, day: 25, name: "Santa Catalina de Alejandría, Virgen y Mártir", rank: "menor", color: "rojo", propers: { gloria: true }, },
  { month: 11, day: 28, name: "Vigilia de San Andrés, Apóstol y Mártir", rank: "menor", color: "morado", },
  { month: 11, day: 30, name: "San Andrés, Apóstol y Mártir", rank: "mayor", color: "rojo", propers: { gloria: true, creed: true, preface: "Apóstoles" }, hasPropers: true, transferable: true, },
  // ===== Diciembre =====
  { month: 12, day: 1, name: "Beato Nicolás Ferrar, Diácono y Confesor", rank: "conmemoración", color: "morado", },
  { month: 12, day: 2, name: "San Pedro Crisólogo, Obispo, Confesor y Doctor", rank: "menor", color: "blanco", propers: { gloria: true, creed: true }, },
  { month: 12, day: 3, name: "San Francisco Javier, Confesor", rank: "menor", color: "blanco", propers: { gloria: true }, },
  { month: 12, day: 4, name: "San Clemente de Alejandría, Confesor y Doctor", rank: "menor", color: "blanco", propers: { gloria: true, creed: true }, },
  { month: 12, day: 4, name: "Santa Bárbara, Virgen y Mártir", rank: "conmemoración", color: "blanco", },
  { month: 12, day: 5, name: "San Sabas, Abad", rank: "conmemoración", color: "morado", },
  { month: 12, day: 6, name: "San Nicolás, Obispo y Confesor", rank: "conmemoración", color: "morado", },
  { month: 12, day: 7, name: "San Ambrosio, Obispo, Confesor y Doctor", rank: "menor", color: "blanco", propers: { gloria: true, creed: true }, },
  { month: 12, day: 8, name: "Concepción de la B.V.M.", rank: "principal", color: "blanco", propers: { gloria: true, creed: true, preface: "B.V.M." }, hasPropers: true, },
  { month: 12, day: 13, name: "Santa Lucía, Virgen y Mártir", rank: "conmemoración", color: "rojo", },
  { month: 12, day: 21, name: "San Tomás, Apóstol y Mártir", rank: "mayor", color: "rojo", propers: { gloria: true, creed: true, preface: "Apóstoles" }, hasPropers: true, transferable: true, },
  { month: 12, day: 25, name: "Natividad de Nuestro Señor", rank: "principal", color: "blanco", propers: { gloria: true, creed: true, preface: "Navidad" }, hasPropers: true, },
  { month: 12, day: 26, name: "San Esteban, Protomártir", rank: "mayor", color: "rojo", propers: { gloria: true, creed: true, preface: "Navidad" }, hasPropers: true, },
  { month: 12, day: 27, name: "San Juan, Apóstol y Evangelista", rank: "mayor", color: "blanco", propers: { gloria: true, creed: true, preface: "Apóstoles" }, hasPropers: true, transferable: true, },
  { month: 12, day: 28, name: "Santos Inocentes", rank: "mayor", color: "morado", propers: { creed: true, preface: "Navidad" }, hasPropers: true, },
  { month: 12, day: 29, name: "Santo Tomás de Canterbury, Obispo y Mártir", rank: "menor", color: "rojo", propers: { gloria: true, creed: true, preface: "Navidad" }, },
  { month: 12, day: 31, name: "San Silvestre, Obispo y Confesor", rank: "menor", color: "blanco", propers: { gloria: true, creed: true, preface: "Navidad" }, },
];

/**
 * Fiesta que rige una fecha (excluye beati opcionales salvo includeOptional).
 * Prefiere la de mayor rango cuando hay varias el mismo día.
 */
const RANK_ORDER: Record<FeastRank, number> = {
  principal: 4, mayor: 3, menor: 2, "conmemoración": 1,
};

export function getFeastForDate(date: Date, includeOptional = false): Feast | null {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const matches = fixedFeasts.filter(
    (f) => f.month === month && f.day === day && (includeOptional || !f.optional)
  );
  if (matches.length === 0) return null;
  // La de mayor rango que no sea mera conmemoración rige. Una conmemoración
  // NUNCA rige por sí sola: si solo hay conmemoraciones, rige el ciclo temporal
  // (devolvemos null) y ellas se recogen aparte como conmemoraciones del día.
  const ruling = matches
    .filter((f) => f.rank !== "conmemoración")
    .sort((a, b) => RANK_ORDER[b.rank] - RANK_ORDER[a.rank])[0];
  return ruling ?? null;
}

/** Todas las fiestas de una fecha (incluye conmemoraciones y beati opcionales). */
export function getAllFeastsForDate(date: Date): Feast[] {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return fixedFeasts.filter((f) => f.month === month && f.day === day);
}

