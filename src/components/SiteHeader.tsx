"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { getChurchDay, formatDateSpanish, toDateParam, type Season } from "@/lib/calendar";
import { getFeastForDate } from "@/data/feasts";

const navLinks = [
  { href: "/oficio", label: "Oficio Diario", matchPaths: ["/oficio"] },
  { href: "/kalendario", label: "Kalendario", matchPaths: ["/kalendario"] },
  { href: "/oficios-horarios", label: "Oficios Horarios", matchPaths: ["/oficios-horarios"] },
  { href: "/familia", label: "Familia", matchPaths: ["/familia"] },
  { href: "/oraciones", label: "Oraciones y Acciones de Gracias", matchPaths: ["/oraciones"] },
  { href: "/letania", label: "Letanía", matchPaths: ["/letania"] },
  { href: "/santa-comunion", label: "Santa Comunión", matchPaths: ["/santa-comunion"] },
  { href: "/salterio", label: "El Salterio", matchPaths: ["/salterio"] },
];

const seasons: { id: Season; label: string }[] = [
  { id: "adviento", label: "Adviento" },
  { id: "navidad", label: "Navidad" },
  { id: "epifania", label: "Epifanía" },
  { id: "cuaresma", label: "Cuaresma" },
  { id: "semana-santa", label: "Semana Santa" },
  { id: "pascua", label: "Pascua" },
  { id: "pentecostes", label: "Pentecostés" },
  { id: "trinidad", label: "Trinidad" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [churchDay, setChurchDay] = useState<{ name: string; season: Season } | null>(null);
  const [dateStr, setDateStr] = useState("");
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    updateDate(currentDate);
  }, [currentDate]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  function updateDate(date: Date) {
    const day = getChurchDay(date);
    setChurchDay(day);
    const abbr = date.toLocaleDateString("es-ES", { weekday: "short" }).replace(".", "");
    const num = date.getDate();
    const month = date.toLocaleDateString("es-ES", { month: "short" }).replace(".", "");
    setDateStr(`${abbr.charAt(0).toUpperCase() + abbr.slice(1)}, ${num} ${month.charAt(0).toUpperCase() + month.slice(1)}`);
  }

  function goDay(offset: number) {
    const d = new Date(currentDate);
    d.setDate(d.getDate() + offset);
    setCurrentDate(d);
  }

  function isActive(link: typeof navLinks[0]) {
    return link.matchPaths.some((p) => pathname.startsWith(p));
  }

  return (
    <header className="bg-[var(--color-primary-dark)] border-b-4 border-[var(--color-gold)]">
      <div className="max-w-[1000px] mx-auto px-4">
        {/* Title */}
        <div className="text-center py-4">
          <Link href="/oficio/oracion-matutina" className="inline-block">
            <h1 className="text-[var(--color-gold)] text-2xl md:text-3xl font-medium tracking-[0.15em]" style={{ fontFamily: "var(--font-heading)" }}>
              ORACIÓN COMÚN EN LÍNEA
            </h1>
          </Link>
          <p className="text-white/60 text-xs italic mt-1">Según el Libro de Oración Común de 1928</p>
          <p className="text-white/50 text-[10px] uppercase tracking-[0.2em] mt-0.5">
            Presentado por la Iglesia Anglicana Católica
          </p>
        </div>

        {/* Navigation Buttons */}
        <nav className="pb-3">
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden w-full text-white text-sm py-2 border border-white/30 rounded mb-2">
            {isOpen ? "✕ Cerrar" : "☰ Menú"}
          </button>
          <div className={`${isOpen ? "flex" : "hidden"} md:flex flex-wrap items-center justify-center gap-2`}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[11px] border rounded px-3 py-1.5 transition-all whitespace-nowrap ${
                  isActive(link)
                    ? "bg-white/20 border-white text-white font-semibold"
                    : "border-white/40 text-white/80 hover:bg-white/10 hover:border-white/70"
                }`}
                style={{ fontFamily: "var(--font-heading)" }}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Date Bar */}
        <div className="flex items-center justify-center gap-4 py-2 border-t border-white/10 relative">
          <button onClick={() => goDay(-1)} className="text-white/70 text-lg hover:text-white transition-colors" aria-label="Día anterior">←</button>
          <span className="text-white text-lg italic tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>
            {dateStr}
          </span>
          <button onClick={() => goDay(1)} className="text-white/70 text-lg hover:text-white transition-colors" aria-label="Día siguiente">→</button>
          
          {/* Calendar date picker */}
          <div className="relative">
            <button
              onClick={() => setShowDatePicker(!showDatePicker)}
              className="text-lg hover:scale-110 transition-transform"
              title="Seleccionar fecha"
            >
              📅
            </button>
            {showDatePicker && (
              <div className="absolute top-10 right-0 z-50 bg-white rounded-lg shadow-xl p-3 min-w-[200px]">
                <input
                  type="date"
                  defaultValue={toDateParam(currentDate)}
                  onChange={(e) => {
                    if (e.target.value) {
                      const [y, m, d] = e.target.value.split("-").map(Number);
                      const newDate = new Date(y, m - 1, d);
                      setCurrentDate(newDate);
                      setShowDatePicker(false);
                      // Navigate to lectionary for selected date
                      window.location.href = `/leccionario?date=${toDateParam(newDate)}`;
                    }
                  }}
                  className="w-full p-2 border border-gray-300 rounded text-sm text-gray-800"
                />
                <button
                  onClick={() => { setCurrentDate(new Date()); setShowDatePicker(false); }}
                  className="w-full mt-2 text-xs text-[var(--color-primary)] hover:underline"
                >
                  Ir a hoy
                </button>
              </div>
            )}
          </div>

          {/* Dark mode toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-lg hover:scale-110 transition-transform"
            title={darkMode ? "Modo claro" : "Modo oscuro"}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Seasons */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 py-2 border-t border-white/10 text-xs">
          {seasons.map((season) => (
            <span
              key={season.id}
              className={`transition-colors ${
                churchDay?.season === season.id
                  ? "text-[var(--color-gold)] font-bold"
                  : "text-white/60 hover:text-white/90"
              }`}
            >
              {season.label}
            </span>
          ))}
        </div>

        {/* Church Day + Feast */}
        {churchDay && (
          <div className="text-center py-2 border-t border-white/10">
            <p className="text-[var(--color-gold)] text-sm italic" style={{ fontFamily: "var(--font-heading)" }}>
              {churchDay.name}
            </p>
            {(() => {
              const feast = getFeastForDate(currentDate);
              if (feast && feast.name !== churchDay.name) {
                return (
                  <p className="text-white/80 text-xs mt-1">
                    {feast.hasPropers ? (
                      <Link href="/santa-comunion" className="hover:text-[var(--color-gold)] underline decoration-dotted">
                        {feast.name} — ver propios
                      </Link>
                    ) : (
                      <span>{feast.name} <span className="text-white/50">(consultar el Misal)</span></span>
                    )}
                  </p>
                );
              }
              return null;
            })()}
          </div>
        )}
      </div>
    </header>
  );
}
