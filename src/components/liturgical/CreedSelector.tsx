"use client";

import { useState } from "react";
import { APOSTLES_CREED, NICENE_CREED } from "@/data/creeds";

/**
 * Selector del Credo (Apóstoles / Niceno) para el Oficio.
 * En Matutina/Vespertina el Credo de los Apóstoles es el habitual, pero el
 * oficiante puede optar por el Niceno; este control deja escoger cuál rezar.
 */
export function CreedSelector() {
  const [creed, setCreed] = useState<"apostles" | "nicene">("apostles");
  const text = creed === "apostles" ? APOSTLES_CREED : NICENE_CREED;
  return (
    <div>
      <div className="flex items-center justify-between gap-3 mb-2 flex-wrap">
        <h2 className="section-title mb-0" id="credo">El Credo</h2>
        <div className="inline-flex rounded-md border border-[var(--color-border)] overflow-hidden text-xs">
          <button
            onClick={() => setCreed("apostles")}
            className={`px-3 py-1.5 transition-colors ${creed === "apostles" ? "bg-[var(--color-primary-dark)] text-white font-medium" : "bg-white text-[var(--color-primary)] hover:bg-[var(--color-bg-alt)]"}`}
          >
            de los Apóstoles
          </button>
          <button
            onClick={() => setCreed("nicene")}
            className={`px-3 py-1.5 transition-colors border-l border-[var(--color-border)] ${creed === "nicene" ? "bg-[var(--color-primary-dark)] text-white font-medium" : "bg-white text-[var(--color-primary)] hover:bg-[var(--color-bg-alt)]"}`}
          >
            Niceno
          </button>
        </div>
      </div>
      <p className="rubric">¶ Entonces el oficiante y el pueblo, de pie, dirán el Credo.</p>
      <div className="collect space-y-2">
        {text.split("\n").map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </div>
  );
}
