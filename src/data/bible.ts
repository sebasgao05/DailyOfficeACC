/**
 * Fuente única del texto bíblico para el Oficio Diario (LOC 1928 / ACC).
 *
 * Los oficios y el leccionario NO llevan texto bíblico embebido: piden el
 * pasaje que necesitan con `getPassage("Isa. 40:1-11")` y este módulo devuelve
 * los versículos. El texto procede del rito tradicional (maternalheart.org) con
 * pasajes faltantes completados de la Biblia católica (conferenciaepiscopal.es),
 * en el mismo registro solemne del proyecto.
 *
 * `verses` de cada pasaje es un array de líneas ya numeradas ("1 En el
 * principio…"). Las claves son la referencia CANÓNICA normalizada (ver
 * `normalizeRef`). El poblado se hace por lotes; un pasaje aún no cargado
 * devuelve null y el componente muestra solo la referencia como respaldo.
 */

/** Versión del texto actualmente cargada (provisional). */
export const BIBLE_VERSION = "Biblia (Conferencia Episcopal Española)";

export interface Passage {
  /** Referencia canónica normalizada, p.ej. "Isaías 40:1-11". */
  ref: string;
  /** Versículos como líneas ya numeradas. */
  verses: string[];
}

/**
 * Mapa de abreviaturas del leccionario (estilo LOC) al nombre canónico
 * en español. Cubre las formas que aparecen en lectionary.ts.
 */
const BOOK_ALIASES: Record<string, string> = {
  // Pentateuco
  "gen": "Génesis", "gén": "Génesis", "génesis": "Génesis", "genesis": "Génesis",
  "ex": "Éxodo", "éxodo": "Éxodo", "exodo": "Éxodo", "éxo": "Éxodo", "éxod": "Éxodo", "exod": "Éxodo", "éx": "Éxodo",
  "lev": "Levítico", "levítico": "Levítico", "levitico": "Levítico",
  "num": "Números", "núm": "Números", "números": "Números", "numeros": "Números",
  "deut": "Deuteronomio", "dt": "Deuteronomio", "deuteronomio": "Deuteronomio", "deu": "Deuteronomio",
  // Históricos
  "jos": "Josué", "josué": "Josué", "josue": "Josué",
  "jue": "Jueces", "jueces": "Jueces",
  "rut": "Rut",
  "1 sam": "1 Samuel", "1sam": "1 Samuel", "1 s": "1 Samuel", "2 sam": "2 Samuel", "2sam": "2 Samuel", "2 s": "2 Samuel",
  "i sam": "1 Samuel", "ii sam": "2 Samuel",
  "1 rey": "1 Reyes", "1rey": "1 Reyes", "1 r": "1 Reyes", "2 rey": "2 Reyes", "2rey": "2 Reyes", "2 r": "2 Reyes",
  "i rey": "1 Reyes", "ii rey": "2 Reyes",
  "1 cron": "1 Crónicas", "1 crón": "1 Crónicas", "2 cron": "2 Crónicas", "2 crón": "2 Crónicas",
  "1 cr": "1 Crónicas", "2 cr": "2 Crónicas", "1 crónicas": "1 Crónicas", "2 crónicas": "2 Crónicas",
  "esd": "Esdras", "esdras": "Esdras",
  "neh": "Nehemías", "nehemías": "Nehemías", "nehemias": "Nehemías",
  "est": "Ester", "ester": "Ester",
  "job": "Job",
  "prov": "Proverbios", "prv": "Proverbios", "proverbios": "Proverbios", "pr": "Proverbios",
  "ecl": "Eclesiastés", "eclesiastés": "Eclesiastés", "eclesiastes": "Eclesiastés", "eclés": "Eclesiastés", "ecles": "Eclesiastés", "qoh": "Eclesiastés", "qo": "Eclesiastés",
  "cant": "Cantar de los Cantares", "cnt": "Cantar de los Cantares", "cantares": "Cantar de los Cantares",
  "sab": "Sabiduría", "sabiduría": "Sabiduría", "sabid": "Sabiduría", "sabiduria": "Sabiduría", "sb": "Sabiduría",
  "eclo": "Eclesiástico", "eclco": "Eclesiástico", "sir": "Eclesiástico", "eclesiástico": "Eclesiástico", "eclesiastico": "Eclesiástico",
  // Proféticos
  "isa": "Isaías", "isaías": "Isaías", "isaias": "Isaías", "is": "Isaías",
  "jer": "Jeremías", "jeremías": "Jeremías", "jeremias": "Jeremías",
  "lam": "Lamentaciones", "lamentaciones": "Lamentaciones",
  "bar": "Baruc", "baruc": "Baruc",
  "ez": "Ezequiel", "eze": "Ezequiel", "ezeq": "Ezequiel", "ezequiel": "Ezequiel",
  "dan": "Daniel", "daniel": "Daniel",
  "tres mancebos": "Daniel", "cántico de los tres jóvenes": "Daniel", "cantico de los tres jovenes": "Daniel",
  "os": "Oseas", "oseas": "Oseas",
  "joel": "Joel",
  "amós": "Amós", "amos": "Amós", "am": "Amós",
  "abd": "Abdías", "abdías": "Abdías", "abdias": "Abdías",
  "jon": "Jonás", "jonás": "Jonás", "jonas": "Jonás",
  "miq": "Miqueas", "miqu": "Miqueas", "miqueas": "Miqueas",
  "nah": "Nahúm", "nahum": "Nahúm", "nahúm": "Nahúm",
  "hab": "Habacuc", "habacuc": "Habacuc",
  "sof": "Sofonías", "sofonías": "Sofonías", "sofonias": "Sofonías",
  "ag": "Ageo", "ageo": "Ageo", "hag": "Ageo",
  "zac": "Zacarías", "zacarías": "Zacarías", "zacarias": "Zacarías",
  "mal": "Malaquías", "malaquías": "Malaquías", "malaquias": "Malaquías",
  // Deuterocanónicos históricos
  "tob": "Tobías", "tobías": "Tobías", "tobias": "Tobías", "tb": "Tobías",
  "jdt": "Judit", "jud.": "Judit", "judit": "Judit",
  "1 mac": "1 Macabeos", "2 mac": "2 Macabeos", "1mac": "1 Macabeos", "2mac": "2 Macabeos",
  "i mac": "1 Macabeos", "ii mac": "2 Macabeos", "1 macabeos": "1 Macabeos", "2 macabeos": "2 Macabeos",
  // Evangelios y NT
  "mat": "San Mateo", "mt": "San Mateo", "mateo": "San Mateo", "s. mateo": "San Mateo", "s mateo": "San Mateo",
  "marc": "San Marcos", "mc": "San Marcos", "marcos": "San Marcos", "s. marcos": "San Marcos", "s marcos": "San Marcos", "mar": "San Marcos",
  "luc": "San Lucas", "lc": "San Lucas", "lucas": "San Lucas", "s. lucas": "San Lucas", "s lucas": "San Lucas",
  "juan": "San Juan", "jn": "San Juan", "s. juan": "San Juan", "s juan": "San Juan", "1 s. juan": "1 San Juan", "1 juan": "1 San Juan",
  "hech": "Hechos", "hechos": "Hechos", "hch": "Hechos",
  "rom": "Romanos", "romanos": "Romanos",
  "1 cor": "1 Corintios", "1cor": "1 Corintios", "2 cor": "2 Corintios", "2cor": "2 Corintios",
  "i cor": "1 Corintios", "ii cor": "2 Corintios", "1 corintios": "1 Corintios", "2 corintios": "2 Corintios",
  "gal": "Gálatas", "gálatas": "Gálatas", "galatas": "Gálatas",
  "ef": "Efesios", "efes": "Efesios", "efesios": "Efesios",
  "fil": "Filipenses", "filip": "Filipenses", "filipenses": "Filipenses", "flp": "Filipenses",
  "col": "Colosenses", "colosenses": "Colosenses",
  "1 tes": "1 Tesalonicenses", "2 tes": "2 Tesalonicenses", "1 tesalonicenses": "1 Tesalonicenses", "2 tesalonicenses": "2 Tesalonicenses",
  "1 tim": "1 Timoteo", "2 tim": "2 Timoteo", "1 ti": "1 Timoteo", "2 ti": "2 Timoteo", "1 timoteo": "1 Timoteo", "2 timoteo": "2 Timoteo",
  "tit": "Tito", "tito": "Tito",
  "flm": "Filemón", "film": "Filemón", "filemón": "Filemón", "filemon": "Filemón",
  "heb": "Hebreos", "hebreos": "Hebreos",
  "sant": "Santiago", "santiago": "Santiago", "stg": "Santiago", "stgo": "Santiago",
  "1 pe": "1 San Pedro", "2 pe": "2 San Pedro", "1 ped": "1 San Pedro", "2 ped": "2 San Pedro", "1 pedro": "1 San Pedro", "2 pedro": "2 San Pedro",
  "1 jn": "1 San Juan", "2 jn": "2 San Juan", "3 jn": "3 San Juan",
  "2 juan": "2 San Juan", "3 juan": "3 San Juan",
  "jud": "San Judas", "judas": "San Judas",
  "rev": "Apocalipsis", "ap": "Apocalipsis", "apoc": "Apocalipsis", "apocalipsis": "Apocalipsis",
};

/**
 * Conjunto de libros deuterocanónicos SIN texto en la Reina Valera
 * Actualizada (rva). getPassage devuelve null para ellos y la UI muestra
 * solo la referencia. Documentado y aceptado.
 */
const DEUTEROCANONICAL = new Set<string>([
  "Sabiduría", "Eclesiástico", "Baruc", "Tobías", "Judit",
  "1 Macabeos", "2 Macabeos",
]);

/** ¿Pertenece esta referencia canónica a un libro deuterocanónico sin texto rva? */
export function isDeuterocanonical(canonicalRef: string): boolean {
  for (const b of DEUTEROCANONICAL) {
    if (canonicalRef === b || canonicalRef.startsWith(b + " ")) return true;
  }
  return false;
}

/**
 * Normaliza una referencia del leccionario a su forma canónica.
 * "Isa. 40:1-11" -> "Isaías 40:1-11"; "1 S. Juan 1:8-9" -> "1 San Juan 1:8-9".
 * Conserva el rango de capítulo/versículo tal cual.
 */
export function normalizeRef(raw: string): string {
  const parsed = parseRef(raw);
  return parsed ? parsed.canonical : raw.trim();
}

/**
 * Resultado de analizar una referencia: nombre canónico del libro y la
 * cadena de rango normalizada (sin espacios, guiones ASCII).
 */
interface ParsedRef {
  book: string;        // nombre canónico del libro, p.ej. "1 Corintios"
  range: string;       // "12:31b-13:13", "6", "11:16-17,24-30", "" si solo libro
  canonical: string;   // `${book} ${range}` (o solo book)
}

/**
 * Analiza una referencia del leccionario a libro canónico + rango.
 * Maneja: abreviaturas de BOOK_ALIASES, ausencia de espacio libro-número
 * ("Mat.26:6-13"), en-dash y guion largo, comas y puntos como separadores de
 * tramo, y sufijos de letra en versos ("17ª","31b").
 */
function parseRef(raw: string): ParsedRef | null {
  let s = raw.trim();
  if (!s) return null;
  // Normaliza dashes unicode a guion ASCII.
  s = s.replace(/[\u2010-\u2015\u2212]/g, "-");
  // Inserta espacio entre libro y número pegado: "Mat.26" / "Film." -> "Mat. 26".
  // (Solo cuando hay un dígito inmediatamente tras letra o punto.)
  s = s.replace(/^([1-3]?\s*[A-Za-zÁÉÍÓÚáéíóúñ.]+?)\.?(\d)/, "$1 $2");

  // Separa libro (posible número romano/arábigo + palabras) del rango numérico.
  // El prefijo romano/arábigo debe ser un token separado (seguido de espacio),
  // para no confundir la "I" inicial de un nombre (Isaías) con el numeral I.
  const m = s.match(/^((?:[1-3]|I{1,3})\s+)?([A-Za-zÁÉÍÓÚáéíóúñ.\s]+?)\.?\s*([\d].*)?$/);
  if (!m) return null;
  const numPrefix = (m[1] ?? "").trim();
  const bookWords = m[2].replace(/\./g, " ").replace(/\s+/g, " ").trim().toLowerCase();
  // Número romano a arábigo para la clave de alias.
  const roman: Record<string, string> = { i: "1", ii: "2", iii: "3" };
  const arabicPrefix = roman[numPrefix.toLowerCase()] ?? numPrefix;
  const aliasKey = (arabicPrefix ? `${arabicPrefix} ${bookWords}` : bookWords).trim();

  let canonicalBook = BOOK_ALIASES[aliasKey];
  if (!canonicalBook) {
    // Reintenta sin prefijo por si el prefijo era parte del nombre.
    canonicalBook = BOOK_ALIASES[bookWords];
  }
  if (!canonicalBook) return null;

  const range = normalizeRange(m[3] ?? "");
  const canonical = range ? `${canonicalBook} ${range}` : canonicalBook;
  return { book: canonicalBook, range, canonical };
}

/**
 * Normaliza la parte de rango: quita espacios, arregla separadores.
 * "11:16-17, 24-30" -> "11:16-17,24-30"; "1:2-8, 17ª" -> "1:2-8,17ª".
 * Deja los sufijos de letra intactos en la clave (se ignoran al extraer).
 */
function normalizeRange(range: string): string {
  let r = range.trim();
  if (!r) return "";
  // Un punto usado como separador de tramo (". 13-15" o ". 25,") -> coma.
  r = r.replace(/\.\s*(?=\d)/g, ",");
  // ' y ' entre tramos del MISMO libro -> coma. (' o ' NO: separa referencias
  // alternativas de libros distintos; se maneja en getPassage.)
  r = r.replace(/\s+y\s+/g, ",");
  r = r.replace(/\s+/g, "");
  r = r.replace(/[\u2010-\u2015\u2212]/g, "-");
  // Quita coma/punto final colgante.
  r = r.replace(/[.,]+$/, "");
  return r;
}

/**
 * Libros de un solo capítulo: una referencia con números "sueltos" (sin ':')
 * apunta a VERSÍCULOS del capítulo 1, no a capítulos.
 * P.ej. "Abdías 1-9" -> versos 1..9 del cap 1; "San Judas 17-25".
 */
const SINGLE_CHAPTER = new Set<string>([
  "Abdías", "Filemón", "2 San Juan", "3 San Juan", "San Judas",
]);

/**
 * Store del texto bíblico. Clave = referencia canónica; valor = versículos.
 * Poblado por lotes (ver scripts/gen-bible). Vacío al inicio.
 */
/**
 * Store del texto bíblico: la Biblia completa de la Conferencia Episcopal
 * Española (CEE), 73 libros / 1327 capítulos, importada desde bibleData.json.
 * Clave = referencia canónica (libro + capítulo); valor = versículos numerados.
 * getPassage() corta el rango pedido a partir del capítulo completo.
 */
import bibleData from "./bibleData.json";

export const bible: Record<string, string[]> = bibleData as Record<string, string[]>;

/**
 * Devuelve los versículos de una referencia, o null si aún no está cargada.
 * Acepta tanto la referencia del leccionario ("Isa. 40:1-11") como la canónica.
 */
/**
 * Devuelve los versículos de una referencia, o null si no se puede resolver.
 * Estrategia:
 *  1) Match exacto de la clave canónica (o de la cruda) — no rompe lo que ya
 *     funciona.
 *  2) Si el rango no está poblado pero SÍ el/los capítulo(s) completos,
 *     corta los versículos pedidos del capítulo.
 *  3) Rangos multi-tramo ("11:16-17,24-30") o cruza-capítulos: concatena los
 *     versos de cada tramo tomándolos de las claves de capítulo pobladas.
 * Devuelve null si es deuterocanónico sin texto o si no hay fuente poblada.
 */
export function getPassage(ref: string): Passage | null {
  // (1) Match exacto.
  const parsed = parseRef(ref);
  const canonical = parsed ? parsed.canonical : ref.trim();
  const exact = bible[canonical] ?? bible[ref.trim()];
  if (exact && exact.length > 0) return { ref: canonical, verses: exact };

  // (1b) Referencias alternativas separadas por ' o ' (libros distintos):
  // toma la PRIMERA que resuelva.
  if (/\s+o\s+/.test(ref)) {
    for (const alt of ref.split(/\s+o\s+/)) {
      const p = getPassage(alt.trim());
      if (p) return p;
    }
    // sigue intentando con la primera parte sola más abajo
  }

  if (!parsed || !parsed.range) {
    // Libro de un solo capítulo citado sin rango ("2 Juan", "Filemón"): cap 1.
    if (parsed && SINGLE_CHAPTER.has(parsed.book)) {
      const ch1 = bible[`${parsed.book} 1`];
      if (ch1 && ch1.length > 0) return { ref: parsed.book, verses: ch1 };
    }
    return null;
  }

  // (2)/(3) Intenta reconstruir desde capítulos poblados.
  // En libros de un solo capítulo, un número suelto es VERSO del cap 1.
  const defaultCh = SINGLE_CHAPTER.has(parsed.book) ? 1 : null;
  const segments = parseSegments(parsed.range, defaultCh);
  if (!segments) return null;
  const out: string[] = [];
  for (const seg of segments) {
    const got = extractSegment(parsed.book, seg);
    if (!got) return null; // si falta cualquier tramo, no entregamos texto parcial
    out.push(...got);
  }
  if (out.length === 0) return null;
  return { ref: canonical, verses: out };
}

/** Un tramo de versículos: capítulo/verso inicial y final. */
interface Segment {
  startCh: number;
  startV: number | null; // null = capítulo entero
  endCh: number;
  endV: number | null;    // null = hasta fin del capítulo
}

/**
 * Analiza "12:31-13:13", "11:16-17,24-30", "6", "43:1-12,27-33" en tramos.
 * El capítulo del primer tramo se hereda a tramos posteriores sin capítulo
 * explícito ("11:16-17,24-30" -> cap 11 en ambos). Ignora sufijos de letra.
 */
function parseSegments(range: string, defaultCh: number | null = null): Segment[] | null {
  const parts = range.split(",").map((p) => p.trim()).filter(Boolean);
  if (parts.length === 0) return null;
  const segs: Segment[] = [];
  let lastCh: number | null = defaultCh;
  for (const part of parts) {
    const seg = parseOneSegment(part, lastCh);
    if (!seg) return null;
    segs.push(seg);
    lastCh = seg.endCh;
  }
  return segs;
}

const stripLetter = (v: string): number => parseInt(v.replace(/[^\d]/g, ""), 10);

function parseOneSegment(part: string, inheritedCh: number | null): Segment | null {
  // Formas: "C" | "C:V" | "C:V-V2" | "C:V-C2:V2" | "V" | "V-V2" (hereda cap)
  const [lhs, rhs] = part.split("-").map((x) => x.trim());
  const parseRef1 = (tok: string): { ch: number | null; v: number | null } | null => {
    if (tok.includes(":")) {
      const [c, v] = tok.split(":");
      const cn = stripLetter(c);
      const vn = stripLetter(v);
      if (isNaN(cn) || isNaN(vn)) return null;
      return { ch: cn, v: vn };
    }
    const n = stripLetter(tok);
    if (isNaN(n)) return null;
    // Sin ':' — si hereda capítulo, este número es verso; si no, es capítulo entero.
    return inheritedCh != null ? { ch: null, v: n } : { ch: n, v: null };
  };

  const start = parseRef1(lhs);
  if (!start) return null;
  const startCh = start.ch ?? inheritedCh;
  if (startCh == null) return null;
  const startV = start.v;

  if (!rhs) {
    // Tramo de un solo punto: un verso, o capítulo entero si no había ':'.
    return { startCh, startV, endCh: startCh, endV: startV };
  }
  // El RHS hereda el capítulo del LHS: en "1:1-17" el 17 es verso de cap 1;
  // solo un "C2:V2" explícito cambia de capítulo.
  const end = rhs.includes(":") ? parseRef1(rhs) : { ch: null, v: stripLetter(rhs) };
  if (!end || (end.v != null && isNaN(end.v))) return null;
  const endCh = end.ch ?? startCh;
  // Si el LHS fijó un verso, el RHS sin ':' es verso; si el LHS era capítulo
  // entero (startV null) y RHS sin ':' es un capítulo final.
  const endV = end.v != null ? end.v : (startV != null ? null : null);
  if (!rhs.includes(":") && startV == null) {
    // "C1-C2": rango de capítulos enteros.
    const c2 = stripLetter(rhs);
    if (isNaN(c2)) return null;
    return { startCh, startV: null, endCh: c2, endV: null };
  }
  return { startCh, startV, endCh, endV };
}

/**
 * Extrae los versos de un tramo desde las claves de capítulo pobladas
 * ("Libro C"). Soporta tramos que cruzan capítulos. Devuelve null si algún
 * capítulo necesario no está poblado o falta algún verso del rango.
 */
function extractSegment(book: string, seg: Segment): string[] | null {
  const out: string[] = [];
  for (let ch = seg.startCh; ch <= seg.endCh; ch++) {
    const chapter = bible[`${book} ${ch}`];
    if (!chapter || chapter.length === 0) return null;
    const from = ch === seg.startCh ? seg.startV : null;         // null = desde v1
    const to = ch === seg.endCh ? seg.endV : null;               // null = hasta fin
    for (const line of chapter) {
      const vnum = verseNumberOf(line);
      if (vnum == null) continue;
      if (from != null && vnum < from) continue;
      if (to != null && vnum > to) continue;
      out.push(line);
    }
  }
  return out.length > 0 ? out : null;
}

/**
 * Número de verso de una línea. Las líneas empiezan por "12 ..." o, en
 * entradas cruza-capítulo, por "10:23 ...". Devuelve el verso (parte tras ':').
 */
function verseNumberOf(line: string): number | null {
  const m = line.match(/^\s*(?:(\d+):)?(\d+)/);
  if (!m) return null;
  return parseInt(m[2], 10);
}

/** ¿Está disponible el texto de esta referencia? */
export function hasPassage(ref: string): boolean {
  return getPassage(ref) !== null;
}

/**
 * Separa una referencia con alternativas (" o ") en sus opciones.
 * "Gen. 22:1-18 o Sab. 2:1, 12-24" -> ["Gen. 22:1-18", "Sab. 2:1, 12-24"].
 * Devuelve un solo elemento si no hay alternativa. También aplica a salmos
 * ("68 o 18:1-19").
 */
export function splitAlternatives(ref: string): string[] {
  if (!ref) return [];
  return ref.split(/\s+o\s+/i).map((s) => s.trim()).filter(Boolean);
}
