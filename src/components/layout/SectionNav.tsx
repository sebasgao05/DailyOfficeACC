"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface SectionLink { id: string; label: string; }

/** Rutas de horas menores cuyas secciones aún no están validadas: el índice de
 *  salto muestra "Próximamente" en lugar de secciones incongruentes. */
const MINOR_HOURS = ["/oficio/prima", "/oficio/tercia", "/oficio/sexta", "/oficio/nona", "/oficio/mediodia", "/oficio/completas"];

/**
 * Botón flotante (abajo a la derecha, SOLO móvil) que despliega el índice de
 * secciones de la página actual y salta a cada una. Lee los encabezados
 * `h2.section-title[id]` presentes en el DOM tras montar.
 */
export function SectionNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [sections, setSections] = useState<SectionLink[]>([]);

  const isMinorHour = MINOR_HOURS.some((p) => pathname?.startsWith(p));

  useEffect(() => {
    const scan = () => {
      const nodes = Array.from(
        document.querySelectorAll<HTMLElement>("h2.section-title[id]")
      );
      setSections(nodes.map((n) => ({ id: n.id, label: n.textContent?.trim() || n.id })));
    };
    scan();
    // Los componentes cliente del oficio montan tras la hidratación; reescanear
    // un par de veces y observar cambios del DOM para captar sus section-title.
    const t1 = setTimeout(scan, 300);
    const t2 = setTimeout(scan, 1200);
    const obs = new MutationObserver(scan);
    obs.observe(document.body, { childList: true, subtree: true });
    return () => { clearTimeout(t1); clearTimeout(t2); obs.disconnect(); };
  }, []);

  // En horas menores mostramos el FAB con aviso; en el resto, solo si hay secciones.
  if (!isMinorHour && sections.length === 0) return null;

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
          {isMinorHour ? (
            <p className="px-2 py-2 text-sm italic text-gray-500">Próximamente</p>
          ) : (
            sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className="block px-2 py-1.5 text-sm text-gray-700 rounded hover:bg-[var(--color-bg-alt)]"
              >
                {s.label}
              </a>
            ))
          )}
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
