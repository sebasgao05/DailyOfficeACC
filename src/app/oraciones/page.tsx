import { Metadata } from "next";
import { prayers, thanksgivings } from "@/data/occasionalPrayers";

export const metadata: Metadata = { title: "Oraciones y Acciones de Gracias – LOC 1928" };

export default function Oraciones() {
  return (
    <article className="office-content max-w-[720px] mx-auto">
      <h1
        className="text-3xl text-[var(--color-primary-dark)] text-center mb-1 font-medium tracking-wider"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Oraciones y Acciones de Gracias
      </h1>
      <p className="text-center text-gray-500 italic mb-8">
        Oraciones diversas y acciones de gracias del Libro de Oración Común de 1928.
      </p>

      <h2 className="section-title" id="oraciones">Oraciones</h2>
      {prayers.map((p, i) => (
        <div key={`o-${i}`} className="mb-5">
          {p.rubrica && <p className="rubric">{p.rubrica}</p>}
          {p.titulo && (
            <h3 className="text-sm font-semibold text-[var(--color-primary)] italic mb-1">{p.titulo}</h3>
          )}
          <div className="collect"><p>{p.texto}</p></div>
        </div>
      ))}

      <h2 className="section-title" id="acciones-de-gracias">Acciones de Gracias</h2>
      {thanksgivings.map((p, i) => (
        <div key={`t-${i}`} className="mb-5">
          {p.rubrica && <p className="rubric">{p.rubrica}</p>}
          {p.titulo && (
            <h3 className="text-sm font-semibold text-[var(--color-primary)] italic mb-1">{p.titulo}</h3>
          )}
          <div className="collect"><p>{p.texto}</p></div>
        </div>
      ))}
    </article>
  );
}
