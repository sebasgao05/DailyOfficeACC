"use client";

import { useState } from "react";
import { EXHORTACIONES } from "@/data/exhortaciones";

export default function ExhortacionesPage() {
  const [sel, setSel] = useState(0);
  const ex = EXHORTACIONES[sel];
  return (
    <article className="office-content max-w-[720px] mx-auto">
      <h1
        className="text-3xl text-[var(--color-primary-dark)] text-center mb-1 font-medium tracking-wider"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Exhortaciones
      </h1>
      <p className="text-center text-gray-500 italic mb-6">
        Las tres Exhortaciones de la Santa Comunión del Libro de Oración Común de 1928. El presbítero escoge la que corresponde a la ocasión.
      </p>

      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {EXHORTACIONES.map((e, i) => (
          <button
            key={e.id}
            onClick={() => setSel(i)}
            className={`text-xs px-3 py-2 rounded-md border transition-colors ${
              sel === i
                ? "bg-[var(--color-primary-dark)] text-white border-[var(--color-primary-dark)] font-medium"
                : "bg-white text-[var(--color-primary)] border-[var(--color-border)] hover:bg-[var(--color-bg-alt)]"
            }`}
          >
            {i + 1}ª
          </button>
        ))}
      </div>

      <h2 className="section-title" id="exhortacion">{ex.titulo}</h2>
      <p className="rubric">{ex.rubrica}</p>
      <div className="collect"><p>{ex.texto}</p></div>
    </article>
  );
}
