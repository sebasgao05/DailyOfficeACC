"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { getChurchDay, formatDateSpanish, fromDateParam, toDateParam } from "@/lib/calendar";
import { getLectionary, type LectionaryDay } from "@/lib/lectionary";
import Link from "next/link";

function LeccionarioContent() {
  const searchParams = useSearchParams();
  const dateParam = searchParams.get("date");
  const [currentDate, setCurrentDate] = useState<Date | null>(null);

  useEffect(() => {
    if (dateParam) {
      setCurrentDate(fromDateParam(dateParam));
    } else {
      setCurrentDate(new Date());
    }
  }, [dateParam]);

  if (!currentDate) return <p className="text-center italic text-gray-400">Cargando...</p>;

  const churchDay = getChurchDay(currentDate);
  const readings = getLectionary(currentDate);
  const prevDate = new Date(currentDate);
  prevDate.setDate(prevDate.getDate() - 1);
  const nextDate = new Date(currentDate);
  nextDate.setDate(nextDate.getDate() + 1);

  return (
    <div>
      {/* Date Navigation */}
      <div className="flex items-center justify-between mb-6 bg-white border border-[var(--color-border)] rounded-lg p-4">
        <Link
          href={`/leccionario?date=${toDateParam(prevDate)}`}
          className="text-[var(--color-primary)] hover:text-[var(--color-gold)] text-lg"
        >
          ← Anterior
        </Link>
        <div className="text-center">
          <p className="font-medium">{formatDateSpanish(currentDate)}</p>
          <p className="text-sm text-[var(--color-primary)] italic">{churchDay.name}</p>
        </div>
        <Link
          href={`/leccionario?date=${toDateParam(nextDate)}`}
          className="text-[var(--color-primary)] hover:text-[var(--color-gold)] text-lg"
        >
          Siguiente →
        </Link>
      </div>

      {/* Readings */}
      <div className="space-y-4">
        <ReadingSection title="Oración Matutina" readings={readings.morning} />
        <ReadingSection title="Oración Vespertina" readings={readings.evening} />
      </div>
    </div>
  );
}

function ReadingSection({ title, readings }: { title: string; readings: LectionaryDay["morning"] }) {
  return (
    <div className="bg-white border border-[var(--color-border)] rounded-lg overflow-hidden">
      <h2
        className="bg-[var(--color-primary-dark)] text-white px-4 py-2 text-sm font-medium tracking-wide"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h2>
      <div className="p-4 space-y-3">
        <div className="flex items-start gap-3">
          <span className="text-xs uppercase text-[var(--color-primary)] font-semibold tracking-wider min-w-[80px]">
            Salmos
          </span>
          <span>{readings.psalms}</span>
        </div>
        <div className="flex items-start gap-3 border-t border-[var(--color-bg-alt)] pt-3">
          <span className="text-xs uppercase text-[var(--color-primary)] font-semibold tracking-wider min-w-[80px]">
            1ª Lectura
          </span>
          <span>{readings.firstLesson}</span>
        </div>
        <div className="flex items-start gap-3 border-t border-[var(--color-bg-alt)] pt-3">
          <span className="text-xs uppercase text-[var(--color-primary)] font-semibold tracking-wider min-w-[80px]">
            2ª Lectura
          </span>
          <span>{readings.secondLesson}</span>
        </div>
      </div>
    </div>
  );
}

export function LeccionarioView() {
  return (
    <Suspense fallback={<p className="text-center italic text-gray-400">Cargando leccionario...</p>}>
      <LeccionarioContent />
    </Suspense>
  );
}
