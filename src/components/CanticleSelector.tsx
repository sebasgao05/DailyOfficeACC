"use client";

import { useState } from "react";

interface Props {
  period: "morning" | "evening";
  position?: "first" | "second"; // first = after 1st lesson, second = after 2nd lesson
}

export function CanticleSelector({ period, position = "first" }: Props) {
  const options = getOptions(period, position);
  const [selected, setSelected] = useState(options[0].id);

  return (
    <div className="my-6">
      <p className="text-center text-xs text-gray-500 italic mb-2">
        {position === "first" ? "¶ Cántico después de la Primera Lectura:" : "¶ Cántico después de la Segunda Lectura:"}
      </p>
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {options.map((c) => (
          <button
            key={c.id}
            onClick={() => setSelected(c.id)}
            className={`px-4 py-2 text-xs border rounded transition-all ${
              selected === c.id
                ? "bg-[var(--color-primary-dark)] text-white border-[var(--color-primary-dark)] font-semibold"
                : "border-[var(--color-border)] text-[var(--color-text-light)] hover:border-[var(--color-gold)] hover:text-[var(--color-primary)]"
            }`}
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {c.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function getOptions(period: "morning" | "evening", position: "first" | "second") {
  if (period === "morning" && position === "first") {
    return [
      { id: "tedeum", label: "Te Deum" },
      { id: "benedictus-es", label: "Benedictus es, Domine" },
      { id: "benedicite", label: "Benedicite, omnia opera" },
    ];
  }
  if (period === "morning" && position === "second") {
    return [
      { id: "benedictus", label: "Benedictus" },
      { id: "jubilate", label: "Jubilate Deo" },
    ];
  }
  if (period === "evening" && position === "first") {
    return [
      { id: "magnificat", label: "Magnificat" },
      { id: "cantate", label: "Cantate Domino" },
      { id: "bonum-est", label: "Bonum est confiteri" },
    ];
  }
  // evening second
  return [
    { id: "nunc-dimittis", label: "Nunc Dimittis" },
    { id: "deus-misereatur", label: "Deus Misereatur" },
  ];
}
