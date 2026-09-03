/**
 * Cánticos del Oficio Diario — LOC 1928 (traducción española)
 *
 * Cada cántico incluye su título, subtítulo (referencia bíblica) y los versos.
 * Los versos se muestran con la clase "psalm-verse"; usar <br/> para el segundo hemistiquio.
 */

export interface Canticle {
  id: string;
  label: string;
  title: string;
  subtitle?: string;
  /** Cada verso puede tener dos líneas separadas por el asterisco tradicional. */
  verses: string[];
  /** Si true, se añade el Gloria Patri al final. */
  gloria?: boolean;
}

const GLORIA = true;

// ===== ORACIÓN MATUTINA — después de la Primera Lectura =====

const teDeum: Canticle = {
  id: "tedeum",
  label: "Te Deum",
  title: "Te Deum laudamus",
  subtitle: "A ti, oh Dios, te alabamos",
  verses: [
    "A ti, oh Dios, te alabamos, * a ti, Señor, te reconocemos.",
    "A ti, eterno Padre, * te venera toda la creación.",
    "Los ángeles todos, los cielos y todas las potestades, * los querubines y serafines, te cantan sin cesar:",
    "Santo, Santo, Santo es el Señor, Dios del universo; * los cielos y la tierra están llenos de la majestad de tu gloria.",
    "A ti te ensalza el glorioso coro de los Apóstoles, * la multitud admirable de los Profetas, el blanco ejército de los mártires.",
    "A ti la Iglesia santa, extendida por toda la tierra, te proclama: * Padre de inmensa majestad,",
    "Hijo único y verdadero, digno de adoración, * y el Espíritu Santo, Defensor.",
    "Tú eres el Rey de la gloria, Cristo. * Tú eres el Hijo único del Padre.",
    "Tú, para liberar al hombre, aceptaste la condición humana * sin desdeñar el seno de la Virgen.",
    "Tú, rotas las cadenas de la muerte, * abriste a los creyentes el reino de los cielos.",
    "Tú te sientas a la derecha de Dios, en la gloria del Padre. * Creemos que un día has de venir como juez.",
    "Te rogamos, pues, que vengas en ayuda de tus siervos, * a quienes redimiste con tu preciosa sangre.",
    "Haz que en la gloria eterna * nos asociemos a tus santos.",
    "Salva a tu pueblo, Señor, y bendice tu heredad; * sé su pastor y ensálzalo eternamente.",
    "Día tras día te bendecimos * y alabamos tu nombre para siempre, por eternidad de eternidades.",
    "Dígnate, Señor, en este día * guardarnos del pecado.",
    "Ten piedad de nosotros, Señor, ten piedad de nosotros. * Que tu misericordia, Señor, venga sobre nosotros, como lo esperamos de ti.",
    "En ti, Señor, confié: * no me veré defraudado para siempre.",
  ],
};

const benedictusEs: Canticle = {
  id: "benedictus-es",
  label: "Benedictus es, Domine",
  title: "Benedictus es, Domine",
  subtitle: "El Cántico de los tres jóvenes — Bendito eres, Señor",
  verses: [
    "Bendito eres, Señor, Dios de nuestros padres; * digno de alabanza y exaltado sobre todo para siempre.",
    "Bendito el santo Nombre de tu gloria; * digno de suprema alabanza y gloria para siempre.",
    "Bendito eres tú en el templo de tu santa gloria; * digno de alabanza y gloria sobre todo para siempre.",
    "Bendito eres tú que contemplas los abismos, y te sientas sobre los querubines; * digno de alabanza y exaltado sobre todo para siempre.",
    "Bendito eres tú en el trono glorioso de tu reino; * digno de suprema alabanza y exaltado sobre todo para siempre.",
    "Bendito eres tú en el firmamento del cielo; * digno de himnos y de gloria para siempre.",
  ],
  gloria: GLORIA,
};

const benedicite: Canticle = {
  id: "benedicite",
  label: "Benedicite, omnia opera",
  title: "Benedicite, omnia opera Domini",
  subtitle: "El Cántico de la Creación — Daniel 3",
  verses: [
    "Bendecid al Señor todas las obras del Señor; * alabadle y ensalzadle por los siglos.",
    "Bendecid al Señor, ángeles del Señor; * bendecid al Señor, cielos.",
    "Bendecid al Señor, sol y luna; * bendecid al Señor, estrellas del cielo.",
    "Bendecid al Señor, lluvias y rocíos; * bendecid al Señor, vientos todos.",
    "Bendecid al Señor, fuego y calor; * bendecid al Señor, hielos y escarchas.",
    "Bendecid al Señor, montes y colinas; * bendecid al Señor, cuanto germina en la tierra.",
    "Bendecid al Señor, mares y ríos; * bendecid al Señor, ballenas y peces.",
    "Bendecid al Señor, aves del cielo; * bendecid al Señor, fieras y ganados.",
    "Bendecidle, hijos de los hombres; * bendecid al Señor, siervos del Señor.",
  ],
  gloria: GLORIA,
};

// ===== ORACIÓN MATUTINA — después de la Segunda Lectura =====

const benedictus: Canticle = {
  id: "benedictus",
  label: "Benedictus",
  title: "Benedictus",
  subtitle: "El Cántico de Zacarías — Lucas 1:68-79",
  verses: [
    "Bendito sea el Señor, Dios de Israel, * porque ha visitado y redimido a su pueblo",
    "Suscitándonos una fuerza de salvación * en la casa de David, su siervo,",
    "Según lo había predicho desde antiguo * por boca de sus santos profetas.",
    "Es la salvación que nos libra de nuestros enemigos * y de la mano de todos los que nos odian",
    "Realizando la misericordia que tuvo con nuestros padres, * recordando su santa alianza",
    "Y el juramento que juró a nuestro padre Abrahán * para concedernos",
    "Que, libres de temor, arrancados de la mano de los enemigos, * le sirvamos",
    "Con santidad y justicia, en su presencia, * todos nuestros días.",
    "Y a ti, niño, te llamarán profeta del Altísimo, * porque irás delante del Señor a preparar sus caminos,",
    "Anunciando a su pueblo la salvación * por el perdón de sus pecados.",
    "Por la entrañable misericordia de nuestro Dios, * nos visitará el sol que nace de lo alto",
    "Para iluminar a los que viven en tinieblas y en sombra de muerte, * para guiar nuestros pasos por el camino de la paz.",
  ],
  gloria: GLORIA,
};

const jubilate: Canticle = {
  id: "jubilate",
  label: "Jubilate Deo",
  title: "Jubilate Deo",
  subtitle: "Salmo 100",
  verses: [
    "Aclamad al Señor, tierra entera; * servid al Señor con alegría, entrad en su presencia con vítores.",
    "Sabed que el Señor es Dios: * que él nos hizo y somos suyos, su pueblo y ovejas de su rebaño.",
    "Entrad por sus puertas con acción de gracias, * por sus atrios con himnos, dándole gracias y bendiciendo su nombre.",
    "Porque el Señor es bueno, su misericordia es eterna, * su fidelidad por todas las edades.",
  ],
  gloria: GLORIA,
};

// ===== ORACIÓN VESPERTINA — después de la Primera Lectura =====

const magnificat: Canticle = {
  id: "magnificat",
  label: "Magnificat",
  title: "Magnificat",
  subtitle: "El Cántico de la Bienaventurada Virgen María — Lucas 1:46-55",
  verses: [
    "Proclama mi alma la grandeza del Señor, * se alegra mi espíritu en Dios mi Salvador.",
    "Porque ha mirado * la humillación de su esclava.",
    "Desde ahora me felicitarán * todas las generaciones.",
    "Porque el Poderoso ha hecho obras grandes por mí. * Su nombre es Santo.",
    "Y su misericordia llega a sus fieles, * de generación en generación.",
    "Él hace proezas con su brazo; * dispersa a los soberbios de corazón.",
    "Derriba del trono a los poderosos, * y enaltece a los humildes.",
    "A los hambrientos los colma de bienes, * y a los ricos despide vacíos.",
    "Auxilia a Israel su siervo, acordándose de su misericordia, * como lo había prometido a nuestros padres en favor de Abrahán y su descendencia por siempre.",
  ],
  gloria: GLORIA,
};

const cantate: Canticle = {
  id: "cantate",
  label: "Cantate Domino",
  title: "Cantate Domino",
  subtitle: "Salmo 98",
  verses: [
    "Cantad al Señor un cántico nuevo, * porque ha hecho maravillas.",
    "Su diestra le ha dado la victoria, * su santo brazo.",
    "El Señor da a conocer su salvación, * revela a las naciones su justicia.",
    "Se acordó de su misericordia y su fidelidad * en favor de la casa de Israel.",
    "Los confines de la tierra han contemplado * la salvación de nuestro Dios.",
    "Aclamad al Señor, tierra entera; * gritad, vitoread, tocad.",
  ],
  gloria: GLORIA,
};

const bonumEst: Canticle = {
  id: "bonum-est",
  label: "Bonum est confiteri",
  title: "Bonum est confiteri",
  subtitle: "Salmo 92",
  verses: [
    "Es bueno dar gracias al Señor * y tocar para tu nombre, oh Altísimo,",
    "Proclamar por la mañana tu misericordia * y de noche tu fidelidad.",
    "Porque tus acciones, Señor, son mi alegría, * y mi júbilo, las obras de tus manos.",
    "¡Qué magníficas son tus obras, Señor, * qué profundos tus designios!",
  ],
  gloria: GLORIA,
};

// ===== ORACIÓN VESPERTINA — después de la Segunda Lectura =====

const nuncDimittis: Canticle = {
  id: "nunc-dimittis",
  label: "Nunc Dimittis",
  title: "Nunc Dimittis",
  subtitle: "El Cántico de Simeón — Lucas 2:29-32",
  verses: [
    "Ahora, Señor, según tu promesa, * puedes dejar a tu siervo irse en paz.",
    "Porque mis ojos han visto * tu Salvador,",
    "A quien has presentado * ante todos los pueblos:",
    "Luz para alumbrar a las naciones * y gloria de tu pueblo Israel.",
  ],
  gloria: GLORIA,
};

const deusMisereatur: Canticle = {
  id: "deus-misereatur",
  label: "Deus Misereatur",
  title: "Deus Misereatur",
  subtitle: "Salmo 67",
  verses: [
    "El Señor tenga piedad y nos bendiga, * ilumine su rostro sobre nosotros;",
    "Conozca la tierra tus caminos, * todos los pueblos tu salvación.",
    "Que te alaben los pueblos, oh Dios, * que todos los pueblos te alaben.",
    "Que canten de alegría las naciones, * porque riges el mundo con justicia.",
    "Que te alaben los pueblos, oh Dios, * que todos los pueblos te alaben.",
    "La tierra ha dado su fruto, * nos bendice el Señor, nuestro Dios.",
  ],
  gloria: GLORIA,
};

// ===== ÍNDICE POR PERIODO Y POSICIÓN =====

export type Period = "morning" | "evening";
export type Position = "first" | "second";

const CANTICLES: Record<Period, Record<Position, Canticle[]>> = {
  morning: {
    first: [teDeum, benedictusEs, benedicite],
    second: [benedictus, jubilate],
  },
  evening: {
    first: [magnificat, cantate, bonumEst],
    second: [nuncDimittis, deusMisereatur],
  },
};

export function getCanticles(period: Period, position: Position): Canticle[] {
  return CANTICLES[period][position];
}
