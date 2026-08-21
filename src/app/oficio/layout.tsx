"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarSections = [
  { href: "#sentencias", label: "Sentencias" },
  { href: "#confesion", label: "Confesión" },
  { href: "#invitatorio", label: "Invitatorio" },
  { href: "#salmos", label: "Salmos del Día" },
  { href: "#lecturas", label: "Lecturas" },
  { href: "#credo", label: "Credo" },
  { href: "#preces", label: "Preces" },
  { href: "#colectas", label: "Colectas" },
  { href: "#accion-gracias", label: "Acción de Gracias" },
];

export default function OficioLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isMorning = pathname.includes("matutina");
  const isEvening = pathname.includes("vespertina");

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Sidebar */}
      <aside className="md:w-52 shrink-0 hidden md:block">
        <nav className="sticky top-24 space-y-1">
          <p className="font-semibold text-xs uppercase tracking-wider text-gray-400 mb-3" style={{ fontFamily: "var(--font-heading)" }}>
            {isMorning ? "Oración Matutina" : isEvening ? "Oración Vespertina" : "Oficio Diario"}
          </p>
          
          <div className="space-y-2 mb-6">
            <Link href="/oficio/oracion-matutina" className={`block text-sm ${isMorning ? "text-[var(--color-primary)] font-medium" : "text-gray-600 hover:text-[var(--color-primary)]"}`}>
              Oración Matutina
            </Link>
            <Link href="/oficio/oracion-vespertina" className={`block text-sm ${isEvening ? "text-[var(--color-primary)] font-medium" : "text-gray-600 hover:text-[var(--color-primary)]"}`}>
              Oración Vespertina
            </Link>
            <Link href="/oficio/mediodia" className={`block text-sm ${pathname.includes("mediodia") ? "text-[var(--color-primary)] font-medium" : "text-gray-600 hover:text-[var(--color-primary)]"}`}>
              Mediodía
            </Link>
            <Link href="/oficio/completas" className={`block text-sm ${pathname.includes("completas") ? "text-[var(--color-primary)] font-medium" : "text-gray-600 hover:text-[var(--color-primary)]"}`}>
              Completas
            </Link>
          </div>

          <hr className="border-[var(--color-border)] my-4" />
          
          <p className="font-semibold text-xs uppercase tracking-wider text-gray-400 mb-3" style={{ fontFamily: "var(--font-heading)" }}>
            Secciones
          </p>
          <div className="space-y-2">
            {sidebarSections.map((section) => (
              <a
                key={section.href}
                href={section.href}
                className="block text-sm text-[var(--color-primary)] hover:text-[var(--color-gold)] transition-colors"
              >
                {section.label}
              </a>
            ))}
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 min-w-0">
        {/* Morning/Evening Toggle */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <Link
            href="/oficio/oracion-matutina"
            className={`px-5 py-2.5 text-xs tracking-wider rounded transition-all ${
              isMorning
                ? "bg-[var(--color-primary-dark)] text-white shadow-md"
                : "border border-[var(--color-border)] text-[var(--color-text-light)] hover:border-[var(--color-gold)] dark:text-[#ccc] dark:border-[#4d4438]"
            }`}
            style={{ fontFamily: "var(--font-heading)" }}
          >
            ORACIÓN MATUTINA
          </Link>
          <Link
            href="/oficio/oracion-vespertina"
            className={`px-5 py-2.5 text-xs tracking-wider rounded transition-all ${
              isEvening
                ? "bg-[var(--color-primary-dark)] text-white shadow-md"
                : "border border-[var(--color-border)] text-[var(--color-text-light)] hover:border-[var(--color-gold)] dark:text-[#ccc] dark:border-[#4d4438]"
            }`}
            style={{ fontFamily: "var(--font-heading)" }}
          >
            ORACIÓN VESPERTINA
          </Link>
        </div>

        {children}
      </div>
    </div>
  );
}
