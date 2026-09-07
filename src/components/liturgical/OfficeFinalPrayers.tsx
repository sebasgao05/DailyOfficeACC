import { MORNING, EVENING, getFinalPrayers, FINAL_PRAYERS_RUBRIC } from "@/data/officeText";

/**
 * Colectas del oficio + oraciones finales completas del LOC 1928
 * (Autoridades Civiles con su variante por oficio, Clero, Todas las Personas,
 * Acción de Gracias General, San Juan Crisóstomo, la Gracia).
 */
export function OfficeFinalPrayers({ office }: { office: "morning" | "evening" }) {
  const T = office === "morning" ? MORNING : EVENING;
  const finales = getFinalPrayers(office);
  const slug = (s: string) =>
    s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 40);
  return (
    <>
      {/* Colectas del oficio */}
      {T.colectas.map((c, i) => (
        <div key={`col-${i}`}>
          <h2 className="section-title" id={slug(c.titulo)}>{c.titulo}</h2>
          <div className="collect"><p>{c.texto}</p></div>
        </div>
      ))}

      {/* Oraciones finales */}
      <p className="rubric mt-6">{FINAL_PRAYERS_RUBRIC}</p>
      {finales.map((p, i) => (
        <div key={`fin-${i}`}>
          {p.rubrica && <p className="rubric">{p.rubrica}</p>}
          <h2 className="section-title" id={slug(p.titulo)}>{p.titulo}</h2>
          <div className="collect"><p>{p.texto}</p></div>
        </div>
      ))}
    </>
  );
}
