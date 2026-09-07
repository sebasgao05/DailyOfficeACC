import { Metadata } from "next";
import { familyPrayers } from "@/data/familyPrayers";

export const metadata: Metadata = { title: "Oración Familiar – LOC 1928" };

export default function Familia() {
  return (
    <article className="office-content max-w-[720px] mx-auto">
      <h1
        className="text-3xl text-[var(--color-primary-dark)] text-center mb-1 font-medium tracking-wider"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Oraciones para uso de las Familias
      </h1>
      <p className="text-center text-gray-500 italic mb-8">
        Formas de oración para el hogar, según el Libro de Oración Común de 1928.
      </p>

      {familyPrayers.map((it, i) => {
        if (it.heading) {
          return (
            <h2 key={i} className="section-title" id={`fam-${i}`}>
              {it.heading}
            </h2>
          );
        }
        return (
          <div key={i} className="mb-5">
            {it.rubrica && <p className="rubric">{it.rubrica}</p>}
            {it.titulo && (
              <h3 className="text-sm font-semibold text-[var(--color-primary)] italic mb-1">
                {it.titulo}
              </h3>
            )}
            {it.texto && (
              <div className="collect"><p>{it.texto}</p></div>
            )}
          </div>
        );
      })}
    </article>
  );
}
