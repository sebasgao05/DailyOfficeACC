"use client";

import { useEffect, useState } from "react";
import { toDateParam } from "@/lib/calendar";
import Link from "next/link";

export function DateSelector() {
  const [currentDate, setCurrentDate] = useState<Date | null>(null);

  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  if (!currentDate) return null;

  const prevDate = new Date(currentDate);
  prevDate.setDate(prevDate.getDate() - 1);
  const nextDate = new Date(currentDate);
  nextDate.setDate(nextDate.getDate() + 1);

  // Format like "Jue, 20 Ago" matching the screenshot style
  const dayAbbr = currentDate.toLocaleDateString("es-ES", { weekday: "short" }).replace(".", "");
  const dayNum = currentDate.getDate();
  const monthAbbr = currentDate.toLocaleDateString("es-ES", { month: "short" }).replace(".", "");
  const formatted = `${dayAbbr.charAt(0).toUpperCase() + dayAbbr.slice(1)}, ${dayNum} ${monthAbbr.toUpperCase()}`;

  return (
    <div className="flex items-center justify-center gap-5 py-5 bg-[var(--color-bg-alt)] rounded-lg">
      <Link
        href={`/leccionario?date=${toDateParam(currentDate)}`}
        className="text-[var(--color-gold)] hover:text-[var(--color-primary)] text-2xl"
        title="Descargar lecturas"
      >
        ⬇
      </Link>
      <button
        onClick={() => setCurrentDate(prevDate)}
        className="text-[var(--color-text)] hover:text-[var(--color-primary)] text-2xl px-2 transition-colors"
        aria-label="Día anterior"
      >
        ←
      </button>
      <span
        className="text-xl md:text-2xl italic text-[var(--color-primary-dark)] tracking-wide"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {formatted}
      </span>
      <button
        onClick={() => setCurrentDate(nextDate)}
        className="text-[var(--color-text)] hover:text-[var(--color-primary)] text-2xl px-2 transition-colors"
        aria-label="Día siguiente"
      >
        →
      </button>
      <span className="text-2xl" title="Calendario">📅</span>
      <span className="text-2xl" title="Modo nocturno">🌙</span>
    </div>
  );
}
