"use client";

import { useState } from "react";
import { getCanticles, type Period, type Position } from "@/data/canticles";

interface Props {
  period: Period;
  position?: Position; // first = después de la 1ª lectura, second = después de la 2ª lectura
}

export function CanticleSelector({ period, position = "first" }: Props) {
  const options = getCanticles(period, position);
  const [selectedId, setSelectedId] = useState(options[0].id);
  const selected = options.find((c) => c.id === selectedId) ?? options[0];

  return (
    <div className="my-6">
      <p className="text-center text-xs text-gray-500 italic mb-2">
        {position === "first"
          ? "¶ Cántico después de la Primera Lectura:"
          : "¶ Cántico después de la Segunda Lectura:"}
      </p>

      {/* Botones de selección */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {options.map((c) => (
          <button
            key={c.id}
            onClick={() => setSelectedId(c.id)}
            className={`px-4 py-2 text-xs border rounded transition-all ${
              selectedId === c.id
                ? "bg-[var(--color-primary-dark)] text-white border-[var(--color-primary-dark)] font-semibold"
                : "border-[var(--color-border)] text-[var(--color-text-light)] hover:border-[var(--color-gold)] hover:text-[var(--color-primary)]"
            }`}
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Contenido del cántico seleccionado */}
      <h2
        className="text-2xl text-[var(--color-primary-dark)] text-center mb-1"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {selected.title}
      </h2>
      {selected.subtitle && (
        <p className="text-center text-sm text-gray-500 italic mb-4">{selected.subtitle}</p>
      )}

      <div className="my-4 space-y-3">
        {selected.verses.map((verse, i) => {
          const [first, second] = verse.split("*");
          return (
            <p key={i} className="psalm-verse">
              {first.trim()}
              {second !== undefined && (
                <>
                  {" *"}
                  <br />
                  {second.trim()}
                </>
              )}
            </p>
          );
        })}
      </div>

      {selected.gloria && (
        <p className="gloria">
          Gloria al Padre, y al Hijo, y al Espíritu Santo.
          <br />
          Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén.
        </p>
      )}
    </div>
  );
}
