/**
 * Notas de rúbrica del ORDO Kalendar 2026 (traducidas del PDF, verbatim en
 * cuanto al sentido). Son anotaciones condicionales del día: color del velo,
 * observancias opcionales, prefacios. Se muestran en el detalle del Kalendario
 * y en el ORDO del día. Clave: "mes-día" (mes 1–12).
 *
 * Solo se incluyen las de fecha CIERTA (fija). Las que dependen del ciclo
 * temporal (Vigilia Pascual, Domingo de Pasión) se resuelven por nombre del día
 * en getOrdoNote más abajo.
 */
export const ORDO_NOTES_FIXED: Record<string, string[]> = {
  "1-1": [
    "Si se observa el Santísimo Nombre de Jesús, úsese blanco, con Gloria, Credo y Prefacio de la Purificación, y conmemoración de la Octava de la Natividad.",
    "Misa para la Colación del Episcopado Americano, como el 14 de noviembre.",
  ],
  "2-3": [
    "Bendición de las gargantas hoy (San Blas), o el domingo siguiente.",
  ],
  "5-3": [
    "Invención de la Santa Cruz: la Cruz del altar se vela en blanco. Blanco para la Misa; violeta fuera de la Misa.",
  ],
  "12-24": [
    "Violeta para la Vigilia; blanco para la Misa de Medianoche.",
  ],
};

/**
 * Notas del ORDO que dependen del ciclo TEMPORAL (se resuelven por nombre del
 * día litúrgico, no por fecha fija).
 */
const ORDO_NOTES_TEMPORAL: { match: (name: string) => boolean; notes: string[] }[] = [
  {
    match: (n) => n.includes("Pasión") || n === "Quinto Domingo de Cuaresma",
    notes: [
      "La Cruz se vela hasta su Veneración el Viernes Santo. Las estatuas e imágenes se velan hasta el Gloria de la Vigilia Pascual.",
    ],
  },
  {
    match: (n) => n === "Sábado Santo" || n.includes("Vigilia Pascual"),
    notes: [
      "Violeta para las Profecías y la Bendición de la Fuente; rojo/blanco para la Misa. Las imágenes se descubren al Gloria.",
    ],
  },
  {
    match: (n) => n.includes("antes de Adviento") || n === "Domínica antes de Adviento",
    notes: [
      "El Libro de Oración manda decir la Colecta de Adviento después de la del día, hasta la Navidad.",
    ],
  },
];

/** Devuelve las notas del ORDO aplicables a una fecha y día litúrgico. */
export function getOrdoNotes(date: Date, dayName: string): string[] {
  const key = `${date.getMonth() + 1}-${date.getDate()}`;
  const out = [...(ORDO_NOTES_FIXED[key] ?? [])];
  for (const t of ORDO_NOTES_TEMPORAL) {
    if (t.match(dayName)) out.push(...t.notes);
  }
  return out;
}
