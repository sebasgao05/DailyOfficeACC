/**
 * Textos del Oficio Diario (LOC 1928) que varían por TIEMPO litúrgico.
 * Extraídos verbatim del DOCX integrado del LOC (párrafos 473–741 Matutina,
 * 744+ Vespertina). NO inventar: cualquier ampliación sale del DOCX.
 *
 * La clave de tiempo usa el `season` de calendar.ts:
 *   adviento | navidad | epifania | cuaresma | semana-santa | pascua |
 *   pentecostes | trinidad
 * (Ascensión y Acción de Gracias no tienen `season` propio: se resuelven por
 *  nombre del día en getSeasonalSentences / getInvitatory.)
 */
import type { Season } from "@/lib/calendar";

export interface Sentence {
  texto: string;
  cita: string;
}

/** Sentencias de la Escritura del inicio del Oficio, por tiempo litúrgico. */
export const SENTENCES_GENERAL: Sentence[] = [
  { texto: "El Señor está en su santo templo; ¡silencio ante él, toda la tierra!", cita: "Hab. 2:20" },
  { texto: "¡Qué alegría cuando me dijeron: «Vamos a la casa del Señor»!", cita: "Sal. 122:1" },
  { texto: "Preserva a tu siervo de la arrogancia, para que no me domine: así quedaré limpio e inocente del gran pecado.", cita: "Sal. 19:14" },
  { texto: "Envía tu luz y tu verdad: que ellas me guíen y me conduzcan hasta tu monte santo, hasta tu morada.", cita: "Sal. 43:3" },
  { texto: "Porque esto dice el Alto y Excelso, que vive para siempre y cuyo nombre es «Santo»: Habito en un lugar alto y sagrado, pero estoy con los de ánimo humilde y quebrantado, para reanimar a los humildes, para reanimar el corazón quebrantado.", cita: "Isaías 57:15" },
  { texto: "Pero se acerca la hora, ya está aquí, en que los verdaderos adoradores adorarán al Padre en espíritu y verdad, porque el Padre desea que lo adoren así.", cita: "S. Juan 4:23" },
  { texto: "Gracia y paz a vosotros de parte de Dios, nuestro Padre, y del Señor Jesucristo.", cita: "Fil. 1:2" },
];

/** Sentencias por tiempo litúrgico (además de las generales). */
export const SENTENCES_BY_SEASON: Partial<Record<Season, Sentence[]>> = {
  adviento: [
    { texto: "Convertíos, porque está cerca el reino de los cielos.", cita: "S. Mateo 3:2" },
    { texto: "En el desierto preparadle un camino al Señor; allanad en la estepa una calzada para nuestro Dios.", cita: "Isaías 40:3" },
  ],
  navidad: [
    { texto: "No temáis, os anuncio una buena noticia que será de gran alegría para todo el pueblo: hoy, en la ciudad de David, os ha nacido un Salvador, el Mesías, el Señor.", cita: "S. Lucas 2:10-11" },
  ],
  epifania: [
    { texto: "Pues de Oriente a Occidente mi nombre es grande entre las naciones, y en todo lugar se quema incienso en mi honor y se ofrece a mi nombre una ofrenda pura, pues mi nombre es grande entre las naciones, dice el Señor del universo.", cita: "Mal. 1:11" },
    { texto: "¡Despierta, despierta, vístete de tu fuerza, Sion; vístete el traje de gala, Jerusalén!", cita: "Isaías 52:1" },
  ],
  cuaresma: [
    { texto: "Rasgad vuestros corazones, no vuestros vestidos, y convertíos al Señor vuestro Dios, un Dios compasivo y misericordioso, lento a la cólera y rico en amor, que se arrepiente del castigo.", cita: "Joel 2:13" },
    { texto: "Los sacrificios no te satisfacen: si te ofreciera un holocausto, no lo querrías. El sacrificio agradable a Dios es un espíritu quebrantado; un corazón quebrantado y humillado, tú, oh Dios, tú no lo desprecias.", cita: "Sal. 51:17" },
    { texto: "Me levantaré, me pondré en camino adonde está mi padre, y le diré: Padre, he pecado contra el cielo y contra ti; ya no merezco llamarme hijo tuyo.", cita: "S. Lucas 15:18-19" },
  ],
  "semana-santa": [
    { texto: "Vosotros, los que pasáis por el camino, mirad y ved si hay dolor como el dolor que me atormenta, con el que el Señor me afligió el día de su ardiente ira.", cita: "Lam. 1:12" },
    { texto: "En él, por su sangre, tenemos la redención, el perdón de los pecados, conforme a la riqueza de la gracia.", cita: "Efes. 1:7" },
  ],
  pascua: [
    { texto: "Era verdad, ha resucitado el Señor y se ha aparecido.", cita: "S. Marcos 16:6; S. Lucas 24:34" },
    { texto: "Este es el día que hizo el Señor: sea nuestra alegría y nuestro gozo.", cita: "Salmo 118:24" },
  ],
  pentecostes: [
    { texto: "Recibiréis la fuerza del Espíritu Santo que va a venir sobre vosotros y seréis mis testigos en Jerusalén, en toda Judea y Samaría y hasta el confín de la tierra.", cita: "Hechos 1:8" },
    { texto: "Como sois hijos, Dios envió a nuestros corazones el Espíritu de su Hijo, que clama: «¡Abbá, Padre!».", cita: "Gál. 4:6" },
  ],
  trinidad: [
    { texto: "«Santo, Santo, Santo es el Señor Dios, el todopoderoso; el que era y es y ha de venir».", cita: "Apoc. 4:8" },
  ],
};

/** Sentencias por ocasión especial resueltas por nombre del día litúrgico. */
export const SENTENCES_ASCENSION: Sentence[] = [
  { texto: "Así pues, ya que tenemos un sumo sacerdote grande que ha atravesado el cielo, Jesús, Hijo de Dios, mantengamos firme la confesión de fe. Por eso, comparezcamos confiados ante el trono de la gracia, para alcanzar misericordia y encontrar gracia para un auxilio oportuno.", cita: "Heb. 4:14, 16" },
];

export const SENTENCES_THANKSGIVING: Sentence[] = [
  { texto: "Honra a Dios con tus riquezas, con la primicia de todas tus cosechas: tus graneros se colmarán de grano, rebosarán mosto tus lagares.", cita: "Prov. 3:9-10" },
  { texto: "El Señor cimentó la tierra con sabiduría y afirmó el cielo con inteligencia; con su saber se abren los veneros y las nubes destilan rocío.", cita: "Prov. 3:19-20" },
];

/**
 * Versículos/antífonas invitatorias que preceden al Venite, por ocasión.
 * El LOC los indica para ciertos tiempos; en el resto se usa el Venite normal.
 */
export interface Invitatory {
  ocasion: string;
  texto: string;
}

export const INVITATORIES: Invitatory[] = [
  { ocasion: "Domingos de Adviento", texto: "Nuestro Rey y Salvador se acerca: * vengan, adorémoslo." },
  { ocasion: "Navidad hasta la Epifanía", texto: "¡Aleluya! Un Niño nos ha nacido: * vengan, adorémoslo." },
  { ocasion: "Epifanía y siete días después, y en la Transfiguración", texto: "El Señor ha manifestado su gloria: * vengan, adorémoslo." },
  { ocasion: "Lunes de Pascua hasta el día antes de la Ascensión", texto: "¡Aleluya! El Señor verdaderamente ha resucitado: * vengan, adorémoslo. ¡Aleluya!" },
  { ocasion: "Ascensión hasta el día antes de Pentecostés", texto: "¡Aleluya! Cristo el Señor subió a los cielos: * vengan, adorémoslo. ¡Aleluya!" },
  { ocasion: "Pentecostés y seis días después", texto: "¡Aleluya! El Espíritu del Señor llena el mundo: * vengan, adorémoslo. ¡Aleluya!" },
  { ocasion: "Domingo de Trinidad", texto: "Padre, Hijo y Espíritu Santo, un solo Dios: * vengan, adorémoslo." },
  { ocasion: "Purificación y Anunciación", texto: "El Verbo fue hecho carne, y habitó entre nosotros: * vengan, adorémoslo." },
  { ocasion: "Otras festividades con epístola y evangelio propios", texto: "El Señor es admirable en sus santos: * vengan, adorémoslo." },
];

/**
 * Resuelve las sentencias del día combinando las generales con las del tiempo
 * (o la ocasión especial: Ascensión, Acción de Gracias) según el ChurchDay.
 */
export function getSeasonalSentences(season: Season, dayName: string): Sentence[] {
  const extra: Sentence[] = [];
  if (dayName.startsWith("Día de la Ascensión") || dayName.includes("Ascensión")) {
    extra.push(...SENTENCES_ASCENSION);
  }
  if (dayName.includes("Acción de Gracias")) {
    extra.push(...SENTENCES_THANKSGIVING);
  }
  const bySeason = SENTENCES_BY_SEASON[season] ?? [];
  return [...extra, ...bySeason, ...SENTENCES_GENERAL];
}

/* ─────────────────────────────────────────────────────────────────────────
 * Sentencias de VESPERTINA (propias del oficio de la tarde).
 * ──────────────────────────────────────────────────────────────────────── */
export const SENTENCES_EVENING_GENERAL: Sentence[] = [
  { texto: "El Señor está en su santo templo; ¡silencio ante él, toda la tierra!", cita: "Hab. 2:20" },
  { texto: "Señor, yo amo la belleza de tu casa, el lugar donde reside tu gloria.", cita: "Sal. 26:8" },
  { texto: "Suba mi oración como incienso en tu presencia, el alzar de mis manos como ofrenda de la tarde.", cita: "Sal. 141:2" },
  { texto: "Postraos ante el Señor en el atrio sagrado; tiemble en su presencia la tierra toda.", cita: "Sal. 96:9" },
  { texto: "Que te agraden las palabras de mi boca, y llegue a tu presencia el meditar de mi corazón, Señor, Roca mía, Redentor mío.", cita: "Sal. 19:14" },
];

export const SENTENCES_EVENING_BY_SEASON: Partial<Record<Season, Sentence[]>> = {
  adviento: [
    { texto: "Velad, pues no sabéis cuándo vendrá el Señor de la casa, si al atardecer, o a medianoche, o al canto del gallo, o al amanecer: no sea que venga inesperadamente y os encuentre dormidos.", cita: "S. Marcos 13:35-36" },
    { texto: "En el desierto preparadle un camino al Señor; allanad en la estepa una calzada para nuestro Dios.", cita: "Isaías 40:3" },
  ],
  navidad: [
    { texto: "He aquí la morada de Dios entre los hombres; morará entre ellos, y ellos serán su pueblo, y el «Dios con ellos» será su Dios.", cita: "Apoc. 21:3" },
  ],
  epifania: [
    { texto: "Caminarán los pueblos a tu luz, los reyes al resplandor de tu aurora.", cita: "Isaías 60:3" },
  ],
  cuaresma: [
    { texto: "Pues yo reconozco mi culpa, tengo siempre presente mi pecado.", cita: "Sal. 51:3" },
    { texto: "Del Señor, nuestro Dios, es el compadecerse y el perdonar, aunque nos hemos rebelado contra él; no obedecimos la voz del Señor, nuestro Dios, siguiendo las normas que nos daba por medio de sus siervos, los profetas.", cita: "Dan. 9:9-10" },
    { texto: "Si decimos que no hemos pecado, nos engañamos y la verdad no está en nosotros. Pero, si confesamos nuestros pecados, él, que es fiel y justo, nos perdonará los pecados y nos limpiará de toda injusticia.", cita: "1 S. Juan 1:8-9" },
  ],
  "semana-santa": [
    { texto: "Todos errábamos como ovejas, cada uno siguiendo su camino; y el Señor cargó sobre él todos nuestros crímenes.", cita: "Isaías 53:6" },
  ],
  pascua: [
    { texto: "¡Gracias a Dios, que nos da la victoria por medio de nuestro Señor Jesucristo!", cita: "1 Cor. 15:57" },
    { texto: "Por tanto, si habéis resucitado con Cristo, buscad los bienes de allá arriba, donde Cristo está sentado a la derecha de Dios.", cita: "Col. 3:1" },
  ],
  pentecostes: [
    { texto: "Un río y sus canales alegran la ciudad de Dios, el Altísimo consagra su morada.", cita: "Sal. 46:4" },
    { texto: "El Espíritu y la esposa dicen: «¡Ven!». Y quien lo oiga, diga: «¡Ven!». Y quien tenga sed, que venga; y quien quiera, que tome el agua de la vida gratuitamente.", cita: "Apoc. 22:17" },
  ],
  trinidad: [
    { texto: "«Santo, santo, santo es el Señor del universo; llena está la tierra de su gloria».", cita: "Isaías 6:3" },
  ],
};

export const SENTENCES_EVENING_ASCENSION: Sentence[] = [
  { texto: "Cristo entró no en un santuario construido por hombres, imagen del auténtico, sino en el mismo cielo, para ponerse ante Dios, intercediendo por nosotros.", cita: "Heb. 9:24" },
];

export function getEveningSentences(season: Season, dayName: string): Sentence[] {
  const extra: Sentence[] = [];
  if (dayName.startsWith("Día de la Ascensión") || dayName.includes("Ascensión")) {
    extra.push(...SENTENCES_EVENING_ASCENSION);
  }
  const bySeason = SENTENCES_EVENING_BY_SEASON[season] ?? [];
  return [...extra, ...bySeason, ...SENTENCES_EVENING_GENERAL];
}

/* ─────────────────────────────────────────────────────────────────────────
 * Bloques fijos del Oficio (exhortación, confesión, absolución, preces,
 * colectas, oraciones finales). Verbatim del DOCX del LOC 1928.
 * ──────────────────────────────────────────────────────────────────────── */

export interface Prece { voz?: string; texto?: string; rubrica?: string; }
export interface Prayer { titulo: string; texto: string; rubrica?: string; }

/** MATUTINA */
export const MORNING = {
  rubricaApertura:
    "¶ El oficiante comenzará la Oración Matutina leyendo una o más de las siguientes sentencias de la Escritura; luego seguirá la exhortación. A su criterio puede pasar de las sentencias directamente al Padre Nuestro.",
  exhortacionRubrica: "¶ Enseguida el oficiante dirá:",
  exhortacionLarga:
    "CARÍSIMOS hermanos: la Escritura nos exhorta en muchos lugares a reconocer y confesar nuestros pecados y maldades, y a no ocultarlos ni disimularlos delante de Dios, nuestro Padre celestial, sino a confesarlos con corazón humilde, arrepentido y obediente, para alcanzar el perdón por su infinita bondad y misericordia. Y aunque en todo tiempo debemos reconocer humildemente nuestros pecados delante de Dios, hemos de hacerlo sobre todo cuando nos reunimos para darle gracias por los grandes beneficios que hemos recibido de su mano, para proclamar sus alabanzas, escuchar su santa Palabra y pedirle lo necesario para el cuerpo y para el alma. Por eso les pido y ruego a todos los que están presentes que, con corazón puro y voz humilde, me acompañen ante el trono de la gracia celestial, diciendo:",
  exhortacionBreveRubrica: "¶ O bien dirá:",
  exhortacionBreve: "CONFESEMOS humildemente nuestros pecados a Dios todopoderoso.",
  confesionRubrica: "¶ La dirá toda la congregación, de rodillas, repitiéndola después del oficiante.",
  confesion:
    "PADRE todopoderoso y misericordiosísimo: hemos errado y nos hemos apartado de tus caminos como ovejas perdidas. Hemos seguido demasiado los deseos e intenciones de nuestro propio corazón. Hemos quebrantado tus santas leyes. Hemos dejado de hacer lo que debíamos hacer, y hemos hecho lo que no debíamos; y no hay salud en nosotros. Pero tú, Señor, ten compasión de nosotros, pobres pecadores. Perdona, oh Dios, a los que confiesan sus culpas; restaura a los que se arrepienten, conforme a tus promesas anunciadas al género humano en Cristo Jesús, nuestro Señor. Y concédenos, oh Padre misericordiosísimo, por amor de él, vivir de aquí en adelante una vida justa, santa y sobria, para gloria de tu santo Nombre. Amén.",
  absolucionTitulo: "Declaración de la Absolución o Remisión de los Pecados",
  absolucionRubrica:
    "¶ La hará solo el presbítero, de pie, mientras la congregación permanece de rodillas. A su criterio puede usar, en lugar de esta, la absolución del Oficio de la Santa Comunión.",
  absolucion:
    "DIOS todopoderoso, Padre de nuestro Señor Jesucristo, que no quiere la muerte del pecador, sino que se convierta de su maldad y viva, ha dado a sus ministros poder y mandato de declarar y anunciar a su pueblo arrepentido la absolución y el perdón de sus pecados. Él perdona y absuelve a todos los que de veras se arrepienten y creen con sinceridad en su santo Evangelio. Pidámosle, por tanto, que nos conceda verdadero arrepentimiento y su Espíritu Santo, para que lo que ahora hacemos le sea agradable, y para que el resto de nuestra vida sea puro y santo, de modo que al fin lleguemos a su gozo eterno; por Cristo Jesús, nuestro Señor. Amén.",
  padreNuestroRubrica:
    "¶ El oficiante se arrodillará y dirá el Padre Nuestro, y el pueblo, también de rodillas, lo repetirá con él; y así en todo otro lugar del Oficio Divino donde se use.",
  padreNuestro:
    "PADRE nuestro que estás en el cielo, santificado sea tu Nombre; venga a nosotros tu reino; hágase tu voluntad en la tierra como en el cielo. Danos hoy nuestro pan de cada día; perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden; no nos dejes caer en tentación, y líbranos del mal. Amén.",
  precesApertura: [
    { voz: "Ofic.", texto: "Señor, abre nuestros labios." },
    { voz: "R.", texto: "Y nuestra boca proclamará tu alabanza." },
    { rubrica: "¶ Todos de pie." },
    { texto: "Gloria al Padre, y al Hijo, y al Espíritu Santo." },
    { voz: "R.", texto: "Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén." },
    { voz: "Ofic.", texto: "Alaben al Señor." },
    { voz: "R.", texto: "El Nombre del Señor sea alabado." },
  ] as Prece[],
  precesTrasCredoRubrica: "¶ Después, arrodillado devotamente el pueblo, se dirán estas súplicas, diciendo primero el oficiante:",
  precesTrasCredo: [
    { voz: "Ofic.", texto: "El Señor esté con ustedes." },
    { voz: "R.", texto: "Y con tu espíritu." },
    { voz: "Ofic.", texto: "Oremos." },
    { voz: "Ofic.", texto: "Señor, muéstranos tu misericordia." },
    { voz: "R.", texto: "Y concédenos tu salvación." },
    { voz: "Ofic.", texto: "Oh Dios, crea en nosotros un corazón limpio." },
    { voz: "R.", texto: "Y no apartes de nosotros tu santo Espíritu." },
  ] as Prece[],
  colectas: [
    {
      titulo: "Colecta por la Paz",
      texto:
        "OH Dios, que eres Autor de la paz y amante de la concordia; conocerte es Vida Eterna, y servirte, plena libertad. Defiende a estos tus humildes siervos de todos los asaltos de nuestros enemigos; para que, confiando seguramente en tu protección, no temamos la astucia de ningún adversario; mediante el poder de Jesucristo nuestro Señor. Amén.",
    },
    {
      titulo: "Colecta por la Gracia",
      texto:
        "OH Señor, nuestro Padre Celestial, Poderoso y Eterno Dios, que nos has conducido con seguridad al principio de este día; defiéndenos con tu gran poder; y concede que no caigamos hoy en ningún pecado, ni incurramos en ningún peligro; sino que todas nuestras acciones, siendo dirigidas y gobernadas por ti, sean justas a tus ojos; mediante Jesucristo nuestro Señor. Amén.",
    },
  ] as Prayer[],
};

/** VESPERTINA */
export const EVENING = {
  rubricaApertura:
    "¶ El oficiante comenzará la Oración Vespertina leyendo una o más de las siguientes sentencias de la Escritura, y lo que sigue a ellas; pero puede, a su criterio, pasar de las sentencias al Padre Nuestro.",
  exhortacionRubrica: "¶ Enseguida el oficiante dirá:",
  exhortacionLarga:
    "AMADOS hermanos: la Escritura nos exhorta en muchos lugares a reconocer y confesar nuestros pecados y maldades, y a no ocultarlos ni disimularlos delante de Dios, nuestro Padre celestial, sino a confesarlos con corazón humilde, arrepentido y obediente, para alcanzar el perdón por su infinita bondad y misericordia. Y aunque en todo tiempo debemos reconocer humildemente nuestros pecados delante de Dios, hemos de hacerlo sobre todo cuando nos reunimos para darle gracias por los grandes beneficios que hemos recibido de su mano, para proclamar sus alabanzas, escuchar su santa Palabra y pedirle lo necesario para el cuerpo y para el alma. Por eso les pido y ruego a todos los que están presentes que, con corazón puro y voz humilde, me acompañen ante el trono de la gracia celestial, diciendo:",
  exhortacionBreveRubrica: "¶ O bien dirá:",
  exhortacionBreve: "CONFESEMOS humildemente nuestros pecados a Dios todopoderoso.",
  confesionRubrica: "¶ La dirá toda la congregación, de rodillas, repitiéndola después del oficiante.",
  confesion:
    "PADRE todopoderoso y misericordiosísimo: hemos errado y nos hemos apartado de tus caminos como ovejas perdidas. Hemos seguido demasiado los deseos e intenciones de nuestro propio corazón. Hemos quebrantado tus santas leyes. Hemos dejado de hacer lo que debíamos hacer, y hemos hecho lo que no debíamos; y no hay salud en nosotros. Pero tú, Señor, ten compasión de nosotros, pobres pecadores. Perdona, oh Dios, a los que confiesan sus culpas; restaura a los que se arrepienten, conforme a tus promesas anunciadas al género humano en Cristo Jesús, nuestro Señor. Y concédenos, oh Padre misericordiosísimo, por amor de él, vivir de aquí en adelante una vida justa, santa y sobria, para gloria de tu santo Nombre. Amén.",
  absolucionTitulo: "Declaración de la Absolución o Remisión de los Pecados",
  absolucionRubrica: "¶ La hará solo el presbítero, de pie, mientras la congregación permanece de rodillas.",
  absolucion:
    "DIOS todopoderoso, Padre de nuestro Señor Jesucristo, que no quiere la muerte del pecador, sino que se convierta de su maldad y viva, ha dado a sus ministros poder y mandato de declarar y anunciar a su pueblo arrepentido la absolución y el perdón de sus pecados. Él perdona y absuelve a todos los que de veras se arrepienten y creen con sinceridad en su santo Evangelio. Pidámosle, por tanto, que nos conceda verdadero arrepentimiento y su Espíritu Santo, para que lo que ahora hacemos le sea agradable, y para que el resto de nuestra vida sea puro y santo, de modo que al fin lleguemos a su gozo eterno; por Cristo Jesús, nuestro Señor. Amén.",
  absolucionAlternaRubrica: "¶ O ésta:",
  absolucionAlterna:
    "EL Señor Omnipotente y Misericordioso os conceda Absolución y Remisión de todos vuestros pecados, verdadero arrepentimiento, enmienda de vida, y la gracia y el consuelo de su Espíritu Santo. Amén.",
  padreNuestroRubrica:
    "¶ El oficiante se arrodillará y dirá el Padre Nuestro, y el pueblo, también de rodillas, lo repetirá con él.",
  padreNuestro:
    "PADRE nuestro que estás en el cielo, santificado sea tu Nombre; venga a nosotros tu reino; hágase tu voluntad en la tierra como en el cielo. Danos hoy nuestro pan de cada día; perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden; no nos dejes caer en tentación, y líbranos del mal. Amén.",
  precesApertura: [
    { voz: "Ofic.", texto: "Señor, abre nuestros labios." },
    { voz: "R.", texto: "Y nuestra boca proclamará tu alabanza." },
    { rubrica: "¶ Todos de pie." },
    { texto: "Gloria al Padre, y al Hijo, y al Espíritu Santo." },
    { voz: "R.", texto: "Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén." },
    { voz: "Ofic.", texto: "Alaben al Señor." },
    { voz: "R.", texto: "El Nombre del Señor sea alabado." },
  ] as Prece[],
  precesTrasCredoRubrica: "¶ Después, arrodillado devotamente el pueblo, se dirán estas súplicas, diciendo primero el oficiante:",
  precesTrasCredo: [
    { voz: "Ofic.", texto: "El Señor esté con ustedes." },
    { voz: "R.", texto: "Y con tu espíritu." },
    { voz: "Ofic.", texto: "Oremos." },
    { voz: "Ofic.", texto: "Señor, muéstranos tu misericordia." },
    { voz: "R.", texto: "Y concédenos tu salvación." },
    { voz: "Ofic.", texto: "Oh Señor, salva al Estado." },
    { voz: "R.", texto: "Y óyenos misericordiosamente cuando te invocamos." },
    { voz: "Ofic.", texto: "Adorna a tus ministros de rectitud." },
    { voz: "R.", texto: "Y alegra a tu pueblo escogido." },
    { voz: "Ofic.", texto: "Oh Señor, salva a tu pueblo." },
    { voz: "R.", texto: "Y bendice a tu heredad." },
    { voz: "Ofic.", texto: "Danos paz en nuestros días, oh Señor." },
    { voz: "R.", texto: "Porque sólo en ti, Señor, estamos seguros." },
    { voz: "Ofic.", texto: "Oh Dios, purifica nuestros corazones." },
    { voz: "R.", texto: "Y no quites de nosotros tu santo Espíritu." },
  ] as Prece[],
  gloriaPatri:
    "Gloria al Padre, y al Hijo, y al Espíritu Santo. Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén.",
  gloriaInExcelsisTitulo: "Gloria in excelsis",
  gloriaInExcelsis:
    "GLORIA a Dios en el cielo, y en la tierra paz a los hombres que ama el Señor. Por tu inmensa gloria te alabamos, te bendecimos, te adoramos, te glorificamos, te damos gracias, Señor Dios, Rey celestial, Dios Padre Todopoderoso. Oh Señor, Hijo único, Jesucristo; Señor Dios, Cordero de Dios, Hijo del Padre; tú que quitas el pecado del mundo, ten piedad de nosotros; tú que quitas el pecado del mundo, atiende nuestra súplica; tú que estás sentado a la derecha del Padre, ten piedad de nosotros. Porque sólo tú eres Santo, sólo tú Señor, sólo tú Altísimo, Jesucristo, con el Espíritu Santo en la gloria de Dios Padre. Amén.",
  canticoBenedicAnimaTitulo: "Benedic, anima mea",
  canticoBenedicAnimaRef: "Salmo 103",
  canticoBenedicAnima:
    "BENDICE, alma mía, al Señor, * y todo mi ser a su santo nombre. Bendice, alma mía, al Señor, * y no olvides sus beneficios. Él perdona todas tus culpas * y cura todas tus enfermedades; él rescata tu vida de la fosa, * y te colma de gracia y de ternura. Bendecid al Señor, ángeles suyos, poderosos ejecutores de sus órdenes, * prontos a la voz de su palabra. Bendecid al Señor, ejércitos suyos, * servidores que cumplís sus deseos. Bendecid al Señor, todas sus obras, en todo lugar de su imperio. * ¡Bendice, alma mía, al Señor!",
  colectas: [
    {
      titulo: "Colecta por la Paz",
      texto:
        "OH Dios, de quien proceden todos los deseos santos, todos los buenos consejos y todas las obras justas; da a tus siervos la paz que el mundo no les puede dar; a fin de que nuestros corazones se inclinen a cumplir tus mandamientos, y, amparados por ti contra el temor de nuestros enemigos, podamos vivir en tranquila paz; por los méritos de Jesucristo nuestro Señor. Amén.",
    },
    {
      titulo: "Colecta por la Ayuda contra los Peligros",
      texto:
        "TE suplicamos, oh Señor, disipes nuestras tinieblas; y por tu gran misericordia guárdanos de todos los peligros y riesgos de esta noche; por amor de tu Hijo único nuestro Salvador Jesucristo. Amén.",
    },
  ] as Prayer[],
};

/**
 * Oraciones finales del Oficio (comunes a Matutina y Vespertina; el LOC las
 * imprime en ambos con ligeras variantes de la de Autoridades). `office` elige
 * la variante correcta de la Oración por las Autoridades Civiles.
 */
export const FINAL_PRAYERS_RUBRIC =
  "¶ Las siguientes oraciones se omiten cuando se dice la Letanía, y pueden omitirse cuando sigue de inmediato la Santa Comunión. Nótese que el oficiante puede concluir el Oficio con las intercesiones generales de este Libro que juzgue convenientes, o bien con la Gracia.";

export function getFinalPrayers(office: "morning" | "evening"): Prayer[] {
  const autoridadesMorning: Prayer[] = [
    {
      titulo: "Oración por las Autoridades Civiles",
      texto:
        "OH Señor, nuestro Padre Celestial, excelso y poderoso Gobernador del Universo, que desde tu trono contemplas a todos los que moran en la tierra; de todo corazón te suplicamos que mires con favor y bendigas a tu siervo el Presidente de esta Nación, y a todos los otros en autoridad; y que de tal manera los llenes de la gracia de tu Espíritu Santo, que se inclinen siempre a tu voluntad, y anden en tus caminos. Otórgales copiosamente de los dones celestiales; y concédeles salud, prosperidad y larga vida; para que finalmente, después de esta vida, obtengan felicidad y gozo eternos; por Jesucristo nuestro Señor. Amén.",
    },
    {
      titulo: "Oración por las Autoridades Civiles (segunda forma)",
      rubrica: "¶ O bien esta:",
      texto:
        "OH Señor, Gobernador nuestro, cuya gloria llena el Universo; encomendamos esta Nación a tu bondadoso cuidado, para que, siendo guiada por tu Providencia, vivamos seguros en tu paz. Concede al Presidente de esta Nación, y a todas las autoridades, sabiduría y fuerza para conocer y hacer tu voluntad. Llénalos del amor a la verdad y a la justicia; y haz que jamás se olviden de su obligación de servir a este pueblo en tu temor; mediante Jesucristo nuestro Señor, quien contigo y el Espíritu Santo es un solo Dios y vive y reina por los siglos de los siglos. Amén.",
    },
  ];
  const autoridadesEvening: Prayer[] = [
    {
      titulo: "Oración por las Autoridades Civiles",
      texto:
        "OH Dios Omnipotente, cuyo reino es sempiterno, y cuyo poder es infinito; ten piedad de esta tierra; y gobierna de tal manera los corazones de tus siervos, el Presidente y todas las demás autoridades civiles, para que, reconociendo de quién son ministros, busquen sobre todas las cosas tu honra y gloria; y para que nosotros y todo el pueblo, considerando debidamente de quién son autoridad, los honremos con fidelidad y obediencia, conforme a tu bendita Palabra y ordenanza; por medio de Jesucristo nuestro Señor, quien contigo y el Espíritu Santo es un solo Dios, y vive y reina por los siglos de los siglos. Amén.",
    },
  ];
  const comunes: Prayer[] = [
    {
      titulo: "Oración por el Clero y el Pueblo",
      texto:
        "OMNIPOTENTE y Eterno Dios, de quien procede toda buena dádiva y todo don perfecto; envía el saludable Espíritu de tu gracia sobre nuestros Obispos y demás Clero, y sobre las Congregaciones encomendadas a su cargo. Y para que verdaderamente te agraden, derrama sobre ellos el continuo rocío de tu bendición. Concede esto, oh Señor, por el honor de nuestro Mediador y Abogado, Jesucristo. Amén.",
    },
    {
      titulo: "Oración por Todas las Personas",
      texto:
        "OH Dios, Creador y Conservador del género humano, te rogamos humildemente por los hombres de todas clases y condiciones; suplicándote que te dignes hacerles conocer tus caminos, y tu salud eterna a todas las naciones. Y más especialmente te rogamos por tu Santa Iglesia universal; para que sea dirigida y gobernada por tu Santo Espíritu, a fin de que todos los que profesan y se llaman cristianos sean conducidos por el camino de la verdad, y guarden la fe en unidad de espíritu, en vínculo de paz, y en rectitud de vida. Y, finalmente, encomendamos a tu bondad paternal a todos los que de cualquiera manera están afligidos, o angustiados, en mente, cuerpo o haberes; [especialmente a aquellos por quienes se piden nuestras oraciones]; suplicándote que los consueles y alivies según sus diversas necesidades, dándoles paciencia en sus sufrimientos y una feliz liberación de todas sus aflicciones. Todo esto te lo pedimos por amor de Jesucristo nuestro Señor. Amén.",
    },
    {
      titulo: "Acción de Gracias General",
      rubrica: "¶ NOTA. La Acción de Gracias General puede decirse por la congregación con el oficiante.",
      texto:
        "OMNIPOTENTE Dios, Padre de toda misericordia, nosotros, tus indignos siervos, te damos muy humildes y cordiales gracias por toda tu bondad, benignidad y favor para con nosotros y con todos los hombres; [especialmente por aquellos que ahora desean ofrecerte sus alabanzas y acciones de gracias por los beneficios que les has concedido]. Te bendecimos por nuestra creación, conservación y por todos los bienes de esta vida; pero, sobre todo, por tu inestimable amor manifestado en la redención del mundo por nuestro Señor Jesucristo; por los medios de gracia y por la esperanza de gloria. Te suplicamos que nos concedas un pleno conocimiento de todas tus misericordias, para que nuestros corazones sean llenos de verdadera gratitud; y que te alabemos no sólo con nuestros labios, sino también con nuestras vidas, entregándonos enteramente a tu servicio y caminando delante de ti en santidad y justicia todos los días de nuestra vida; por Jesucristo nuestro Señor, a quien, contigo y el Espíritu Santo, sea todo honor y gloria por los siglos de los siglos. Amén.",
    },
    {
      titulo: "Oración de San Juan Crisóstomo",
      texto:
        "OMNIPOTENTE Dios, que nos has dado gracia para que en la ocasión presente te dirijamos de común acuerdo nuestras súplicas; y has prometido que cuando dos o tres estén congregados en tu Nombre, les concederás sus peticiones; cumple ahora, oh Señor, los deseos y ruegos de tus siervos, como más les convenga; concediéndonos en este mundo el conocimiento de tu verdad, y en el venidero, la vida eterna. Amén.",
    },
    {
      titulo: "La Gracia (2 Corintios 13:13)",
      texto:
        "LA gracia de nuestro Señor Jesucristo, y el amor de Dios, y la comunión del Espíritu Santo, sea con todos nosotros, por siempre jamás. Amén.",
    },
  ];
  const autoridades = office === "morning" ? autoridadesMorning : autoridadesEvening;
  return [...autoridades, ...comunes];
}
