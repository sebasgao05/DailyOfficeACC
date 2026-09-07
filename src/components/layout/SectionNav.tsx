"use client";

import { useEffect, useState } from "react";

interface SectionLink { id: string; label: string; }

/**
 * Botón flotante (abajo a la derecha, SOLO móvil) que despliega el índice de
 * secciones de la página actual y salta a cada una. Lee los encabezados
 * `h2.section-title[id]` presentes en el DOM tras montar.
 */
export function SectionNav() {
  const [open, setOpen] = useState(false);
  const [sections, setSections] = useState<SectionLink[]>([]);

  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("h2.section-title[id]")
    );
    setSections(nodes.map((n) => ({ id: n.id, label: n.textContent?.trim() || n.id })));
  }, []);

  if (sections.length === 0) return null;

  return (
    <div className="sm:hidden">
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/30"
          onClick={() => setOpen(false)}
          aria-hidden
        />
      )}
      {open && (
        <nav className="fixed bottom-36 right-4 z-50 max-h-[55vh] w-64 overflow-y-auto rounded-lg bg-white shadow-xl border border-[var(--color-border)] p-2">
          <p className="text-[10px] uppercase tracking-widest text-[var(--color-primary)] px-2 py-1 font-semibold">
            Secciones
          </p>
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setOpen(false)}
              className="block px-2 py-1.5 text-sm text-gray-700 rounded hover:bg-[var(--color-bg-alt)]"
            >
              {s.label}
            </a>
          ))}
        </nav>
      )}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Índice de secciones"
        className="fixed bottom-20 right-5 z-50 w-11 h-11 rounded-full shadow-lg flex items-center justify-center text-base transition-transform active:scale-95"
        style={{ background: "var(--color-primary-dark)", color: "var(--color-gold)", border: "2px solid var(--color-gold)" }}
      >
        {open ? "✕" : "☰"}
      </button>
    </div>
  );
}
