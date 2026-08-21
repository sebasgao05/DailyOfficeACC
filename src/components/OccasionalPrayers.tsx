"use client";

import { useState } from "react";
import Link from "next/link";

export function OccasionalPrayers() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="my-8 border-t-2 border-[var(--color-primary)] pt-6">
      <p className="text-center text-[var(--color-primary)] italic mb-4" style={{ fontFamily: "var(--font-heading)" }}>
        Oraciones Ocasionales
      </p>

      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-4 border border-[var(--color-border)] rounded-lg hover:border-[var(--color-gold)] transition-colors"
      >
        <span className="font-medium text-[var(--color-primary-dark)]" style={{ fontFamily: "var(--font-heading)" }}>
          Oraciones y Acciones de Gracias Opcionales
        </span>
        <span className="text-[var(--color-gold)] text-xl">{expanded ? "−" : "+"}</span>
      </button>

      {expanded && (
        <div className="mt-4 p-4 border border-[var(--color-border)] rounded-lg space-y-4">
          <Link href="/oraciones" className="block text-sm text-[var(--color-primary)] hover:text-[var(--color-gold)]">
            → Ver todas las Oraciones y Acciones de Gracias
          </Link>
          <Link href="/letania" className="block text-sm text-[var(--color-primary)] hover:text-[var(--color-gold)]">
            → La Letanía o Plegaria General
          </Link>
          <div className="pt-3 border-t border-[var(--color-border)]">
            <p className="text-xs text-gray-500 italic">
              ¶ Las siguientes oraciones se omiten cuando se dice la Letanía, y pueden omitirse cuando sigue de inmediato la Santa Comunión.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
