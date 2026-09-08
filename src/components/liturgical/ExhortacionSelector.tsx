"use client";

import { useState } from "react";
import { EXHORTACIONES } from "@/data/exhortaciones";

/** Selector compacto de las 3 Exhortaciones, para embeber en los propios del
 *  día cuando el ORDO manda leer una (Adviento I, Cuaresma I, Trinidad). */
export function ExhortacionSelector() {
  const [sel, setSel] = useState(0);
  const ex = EXHORTACIONES[sel];
  return (
    <div className="mb-6 bg-white border rounded-lg overflow-hidden" style={{ borderColor: "#1d4ed8" }}>
      <h2 className="px-4 py-2 text-sm font-semibold tracking-wide text-white" style={{ background: "#1d4ed8", fontFamily: "var(--font-heading)" }}>
        ✚ Exhortación de hoy
      </h2>
      <div className="p-4">
        <div className="flex flex-wrap gap-2 mb-3">
          {EXHORTACIONES.map((e, i) => (
            <button
              key={e.id}
              onClick={() => setSel(i)}
              className={`text-xs px-3 py-1.5 rounded-md border transition-colors ${
                sel === i ? "bg-[var(--color-primary-dark)] text-white font-medium" : "bg-white text-[var(--color-primary)] border-[var(--color-border)]"
              }`}
            >
              {i + 1}ª
            </button>
          ))}
        </div>
        <h3 className="text-sm font-semibold text-[var(--color-primary)] mb-1">{ex.titulo}</h3>
        <p className="rubric">{ex.rubrica}</p>
        <p className="text-sm leading-relaxed mt-1">{ex.texto}</p>
      </div>
    </div>
  );
}
