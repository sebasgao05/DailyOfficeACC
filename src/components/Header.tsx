"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/oficio", label: "Oficio Diario" },
  { href: "/kalendario", label: "Kalendario" },
  { href: "/oficios-horarios", label: "Oficios Horarios" },
  { href: "/familia", label: "Familia" },
  { href: "/oraciones", label: "Oraciones y Acciones de Gracias" },
  { href: "/letania", label: "Letanía" },
  { href: "/santa-comunion", label: "Santa Comunión" },
  { href: "/salterio", label: "El Salterio" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[var(--color-primary-dark)] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-[1100px] mx-auto px-4">
        {/* Top bar with title */}
        <div className="text-center py-3 border-b border-white/10">
          <Link
            href="/"
            className="text-[var(--color-gold)] text-xl md:text-2xl font-medium tracking-wider hover:text-[var(--color-gold-light)] transition-colors"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            ORACIÓN COMÚN EN LÍNEA
          </Link>
          <p className="text-[10px] text-white/60 mt-0.5 italic">
            Según el Libro de Oración Común de 1928
          </p>
          <p className="text-[10px] text-white/50 uppercase tracking-widest">
            Presentado por la Iglesia Anglicana Católica
          </p>
        </div>

        {/* Navigation */}
        <nav className="py-2 flex items-center justify-between">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-xl p-1"
            aria-label="Abrir menú"
          >
            {isOpen ? "✕" : "☰"}
          </button>

          <ul
            className={`${
              isOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row w-full md:w-auto gap-1 md:gap-3 items-start md:items-center md:justify-center md:mx-auto`}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white text-[11px] md:text-xs tracking-wide py-1 px-2 border border-white/30 rounded hover:bg-white/10 hover:border-white/60 transition-all whitespace-nowrap"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
