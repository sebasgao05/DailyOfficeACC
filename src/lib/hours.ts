/**
 * Motor de las Horas Menores del Oficio Diario (Prima, Tercia, Sexta,
 * Mediodía, Nona) y Completas — tradición del Breviario anglocatólico
 * (siguiendo anglicanoffice.com y el LOC 1928).
 *
 * Cada hora tiene un ESQUELETO fijo (salmos propios de la hora, himno,
 * versículo) y elementos que VARÍAN por temporada litúrgica (la capítula
 * —lectura breve— y la colecta). Este módulo, dada la fecha, resuelve qué
 * salmos y qué capítula/colecta corresponden, tomando el texto de
 * psalms.ts (salmos) y bible.ts (capítula) — una sola fuente de verdad.
 */

import { getChurchDay, type Season } from "./calendar";

export type HourId = "prima" | "tercia" | "sexta" | "mediodia" | "nona" | "completas";

export interface HourDefinition {
  id: HourId;
  name: string;
  subtitle: string;
  /** Salmos fijos tradicionales de la hora (números del salterio). */
  psalms: number[];
  /** Himno propio de la hora (íncipit latino tradicional + traducción). */
  hymnLatin: string;
  hymnEs: string;
  /** Versículo y respuesta breve de la hora. */
  versicle: { v: string; r: string };
}

/** Capítula (lectura breve) por hora, con variante por temporada. */
export interface Capitulum {
  ref: string; // referencia resoluble por getPassage (o texto fijo breve)
  text: string; // texto breve (las capítulas son 1-2 versículos)
}

/**
 * Esqueleto de cada hora. Salmos según el uso tradicional:
 *  - Prima: Sal 54, 118 (porción), 119:1-32 según el día; usamos 54 + 118.
 *  - Tercia/Sexta/Nona: porciones de Sal 119 (las secciones diurnas).
 *  - Mediodía (uso LOC): Sal 121, 124, 126.
 *  - Completas: Sal 4, 31:1-6, 91, 134 (los salmos clásicos de Completas).
 */
export const HOURS: Record<HourId, HourDefinition> = {
  prima: {
    id: "prima",
    name: "Prima",
    subtitle: "La Primera Hora — Al comenzar el día",
    psalms: [54, 118],
    hymnLatin: "Iam lucis orto sidere",
    hymnEs: "Ya que ha salido el lucero del día, supliquemos a Dios humildemente que en las obras de la jornada nos guarde de todo daño.",
    versicle: { v: "Levántate, Cristo, y ayúdanos.", r: "Y líbranos por tu Nombre." },
  },
  tercia: {
    id: "tercia",
    name: "Tercia",
    subtitle: "La Hora Tercia — Media mañana",
    psalms: [119], // sección Legem pone (119:33-48) tradicional
    hymnLatin: "Nunc Sancte nobis Spiritus",
    hymnEs: "Ven, Espíritu Santo, con el Padre y el Hijo, y dígnate derramarte hoy en nuestros corazones.",
    versicle: { v: "El Señor es mi fortaleza y mi cántico.", r: "Y ha sido mi salvación." },
  },
  sexta: {
    id: "sexta",
    name: "Sexta",
    subtitle: "La Hora Sexta — Mediodía",
    psalms: [119],
    hymnLatin: "Rector potens, verax Deus",
    hymnEs: "Poderoso Rector, Dios veraz, que gobiernas el orden de los tiempos, das al alba su fulgor y al mediodía su ardiente calor.",
    versicle: { v: "Por la tarde, por la mañana y al mediodía.", r: "Meditaré y clamaré, y él oirá mi voz." },
  },
  mediodia: {
    id: "mediodia",
    name: "Oración del Mediodía",
    subtitle: "Un orden de servicio para el mediodía",
    psalms: [121, 124, 126],
    hymnLatin: "Rerum Deus tenax vigor",
    hymnEs: "Oh Dios, fuerza constante del universo, que permaneces inmóvil ordenando el curso de las horas.",
    versicle: { v: "Bendeciré al Señor en todo tiempo.", r: "Su alabanza estará de continuo en mi boca." },
  },
  nona: {
    id: "nona",
    name: "Nona",
    subtitle: "La Hora Nona — Media tarde",
    psalms: [119],
    hymnLatin: "Rerum Deus tenax vigor",
    hymnEs: "Oh Dios, fuerza constante del universo, que permaneces inmóvil ordenando el curso de las horas: concédenos, al declinar el día, una tarde clara.",
    versicle: { v: "Desde el amanecer clamo a ti, Señor.", r: "Mi esperanza está en tu palabra." },
  },
  completas: {
    id: "completas",
    name: "Completas",
    subtitle: "Un oficio de oración para antes de dormir",
    psalms: [4, 31, 91, 134],
    hymnLatin: "Te lucis ante terminum",
    hymnEs: "Antes que la luz termine, te rogamos, Creador de todo, que por tu clemencia seas nuestro amparo y custodia.",
    versicle: { v: "Guárdanos, Señor, como a la niña de tus ojos.", r: "Escóndenos bajo la sombra de tus alas." },
  },
};

/**
 * Capítula (lectura breve) de la hora, según la TEMPORADA.
 * Las capítulas son breves y tradicionales; se dan como texto para no
 * depender de la disponibilidad del pasaje en bible.ts.
 */
const CAPITULA_POR_TEMPORADA: Record<Season, Capitulum> = {
  adviento: { ref: "Jer. 23:5-6", text: "He aquí vienen días, dice el Señor, en que levantaré a David un Vástago justo, y reinará como Rey, y será prosperado, y hará juicio y justicia en la tierra." },
  navidad: { ref: "Tito 3:4-5", text: "Cuando se manifestó la bondad de Dios nuestro Salvador y su amor para con los hombres, nos salvó, no por obras de justicia que nosotros hubiéramos hecho, sino por su misericordia." },
  epifania: { ref: "Isa. 60:1", text: "Levántate, resplandece, porque ha venido tu luz, y la gloria del Señor ha nacido sobre ti." },
  cuaresma: { ref: "Joel 2:12-13", text: "Convertíos a mí, dice el Señor, con todo vuestro corazón, con ayuno, llanto y lamento; rasgad vuestro corazón y no vuestras vestiduras, y volveos al Señor vuestro Dios." },
  "semana-santa": { ref: "Isa. 53:4-5", text: "Ciertamente él llevó nuestras enfermedades y sufrió nuestros dolores; y por sus llagas fuimos nosotros curados." },
  pascua: { ref: "1 Cor. 5:7-8", text: "Cristo, nuestra Pascua, fue sacrificado por nosotros; así que celebremos la fiesta con panes sin levadura, de sinceridad y de verdad. ¡Aleluya!" },
  pentecostes: { ref: "Hechos 2:1-4", text: "Al llegar el día de Pentecostés, todos fueron llenos del Espíritu Santo. ¡Aleluya!" },
  trinidad: { ref: "Rom. 11:33,36", text: "¡Oh profundidad de las riquezas de la sabiduría y del conocimiento de Dios! Porque de él, y por él, y para él son todas las cosas. A él sea la gloria por los siglos." },
};

/** Colecta de la hora (fija por hora, alusiva a su momento del día). */
const COLECTA_POR_HORA: Record<HourId, string> = {
  prima: "Señor Dios todopoderoso, que nos has hecho llegar al comienzo de este día: sálvanos hoy por tu gran poder, para que en esta jornada no caigamos en pecado alguno, sino que nuestras palabras, pensamientos y obras se dirijan siempre al cumplimiento de tu justicia; por Jesucristo nuestro Señor. Amén.",
  tercia: "Oh Dios, que a la hora tercera enviaste tu Espíritu Santo sobre los Apóstoles reunidos en oración: concédenos, te rogamos, participar de ese mismo Espíritu, para que fielmente demos testimonio de ti; por Jesucristo nuestro Señor. Amén.",
  sexta: "Oh Dios, que a la hora sexta, cuando las tinieblas cubrieron la tierra, elevaste a tu Hijo unigénito en la Cruz por la salvación del mundo: concede que caminemos siempre en la luz de su rostro; por el mismo Jesucristo nuestro Señor. Amén.",
  mediodia: "Oh bendito Señor de los cielos y de la tierra, que en la hora del mediodía enviaste a tu Hijo para redención del mundo: dirige y santifica nuestro trabajo de este día, y haz que sirva a tu gloria y al bien de nuestro prójimo; por Jesucristo nuestro Señor. Amén.",
  nona: "Oh Dios, que a la hora nona quisiste que tu Hijo, muriendo en la Cruz, abriera las puertas de la vida eterna: mortifica en nosotros todo apego terreno, para que al declinar el día vivamos solo para ti; por el mismo Jesucristo nuestro Señor. Amén.",
  completas: "Visítanos, Señor, esta morada, y aleja de ella todas las asechanzas del enemigo; que tus santos ángeles habiten en ella y nos guarden en paz, y tu bendición sea siempre sobre nosotros; por Jesucristo nuestro Señor. Amén.",
};

/** Colecta adicional de Completas (Ilumina nuestras tinieblas). */
export const COLECTA_ILUMINA =
  "Ilumina nuestras tinieblas, te rogamos, oh Señor; y por tu gran misericordia defiéndenos de todos los peligros y riesgos de esta noche; por amor de tu único Hijo, nuestro Salvador Jesucristo. Amén.";

export interface ResolvedHour {
  def: HourDefinition;
  season: Season;
  churchDayName: string;
  weekName?: string;
  /** Aleluya o su omisión según temporada. */
  alleluia: boolean;
  capitulum: Capitulum;
  collect: string;
}

/** ¿Se dice «Aleluya»? Se omite en Adviento, Cuaresma y Semana Santa. */
function alleluiaForSeason(season: Season): boolean {
  return season !== "adviento" && season !== "cuaresma" && season !== "semana-santa";
}

/** Resuelve todos los elementos variables de una hora para una fecha dada. */
export function resolveHour(hour: HourId, date: Date): ResolvedHour {
  const def = HOURS[hour];
  const churchDay = getChurchDay(date);
  const season = churchDay.season;
  return {
    def,
    season,
    churchDayName: churchDay.name,
    weekName: churchDay.weekName,
    alleluia: alleluiaForSeason(season),
    capitulum: CAPITULA_POR_TEMPORADA[season],
    collect: COLECTA_POR_HORA[hour],
  };
}
