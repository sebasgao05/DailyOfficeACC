import type { LiturgicalColor, Season } from "@/lib/calendar";

/** Color de TEXTO (tono fuerte) para nombres de fiesta/tiempo sobre fondo claro. */
export const colorTextHex: Record<LiturgicalColor, string> = {
  rojo: "#b91c1c",     // red-700
  morado: "#7e22ce",   // purple-700
  blanco: "#a16207",   // amber-700 (dorado, legible sobre claro)
  verde: "#15803d",    // green-700
  negro: "#1f2937",    // gray-800
  rosa: "#be185d",     // pink-700
};

/** Color de TEXTO claro para nombres sobre fondo OSCURO (barra del header). */
export const colorTextOnDarkHex: Record<LiturgicalColor, string> = {
  rojo: "#fca5a5",     // red-300
  morado: "#d8b4fe",   // purple-300
  blanco: "#fde68a",   // amber-300 (dorado)
  verde: "#86efac",    // green-300
  negro: "#d1d5db",    // gray-300
  rosa: "#f9a8d4",     // pink-300
};

/** Color litúrgico predilecto de cada TIEMPO (para la barra de tiempos). */
export const seasonColor: Record<Season, LiturgicalColor> = {
  adviento: "morado",
  navidad: "blanco",
  epifania: "verde",       // Tiempo después de Epifanía = verde
  cuaresma: "morado",
  "semana-santa": "morado",
  pascua: "blanco",
  pentecostes: "rojo",
  trinidad: "verde",       // Tiempo después de la Trinidad = verde
};
