"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { getChurchDay, formatDateSpanish, fromDateParam, toDateParam } from "@/lib/calendar";
import { getLectionary, type LectionaryDay } from "@/lib/lectionary";
import { getOrdoEntry } from "@/lib/ordo";
import { getProperForDay } from "@/lib/propers";
import { useMounted } from "@/lib/useMounted";
import Link from "next/link";

function LeccionarioContent() {
  const searchParams = useSearchParams();
  const dateParam = searchParams.get("date");
  const mounted = useMounted();

  // Sin fecha en la URL usamos la fecha local (solo cliente). Hasta montar,
  // placeholder que coincide con el HTML estático.
  if (!dateParam && !mounted) {
    return <p className="text-center italic text-gray-400">Cargando...</p>;
  }

  const currentDate = dateParam ? fromDateParam(dateParam) : new Date();

  const churchDay = getChurchDay(currentDate);
  const readings = getLectionary(currentDate);
  const ordo = getOrdoEntry(currentDate);
  const proper = getProperForDay(ordo);
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

      {/* Propios del Día — Colecta, Epístola y Evangelio (domingos y fiestas con propios en el LOC) */}
      {ordo.commemorations.length > 0 && (
        <div className="mb-4 text-sm">
          <span className="text-[var(--color-primary)] font-semibold">Conmemoraciones: </span>
          <span className="italic">{ordo.commemorations.join(" · ")}</span>
        </div>
      )}
      {proper && (
        <div className="mb-6 bg-white border border-[var(--color-gold)] rounded-lg overflow-hidden">
          <h2 className="bg-[var(--color-gold)] text-[var(--color-primary-dark)] px-4 py-2 text-sm font-semibold tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>
            ✚ Propios del Día — {proper.title}
          </h2>
          <div className="p-4">
            {ordo.ordoLine && (
              <p className="text-xs font-mono text-[var(--color-primary)] mb-3">{ordo.ordoLine}</p>
            )}
            {proper.entry ? (
              <div className="space-y-3">
                <div>
                  <span className="text-xs uppercase text-[var(--color-primary)] font-semibold tracking-wider">La Colecta</span>
                  <p className="text-sm leading-relaxed mt-1">{proper.entry.collect}</p>
                </div>
                {(proper.entry.epistleText || proper.entry.epistleRef) && (
                  <div className="border-t border-[var(--color-bg-alt)] pt-3">
                    <span className="text-xs uppercase text-[var(--color-primary)] font-semibold tracking-wider">La Epístola{proper.entry.epistleRef ? ` — ${proper.entry.epistleRef}` : ""}</span>
                    {proper.entry.epistleText && <p className="text-sm leading-relaxed mt-1">{proper.entry.epistleText}</p>}
                  </div>
                )}
                {(proper.entry.gospelText || proper.entry.gospelRef) && (
                  <div className="border-t border-[var(--color-bg-alt)] pt-3">
                    <span className="text-xs uppercase text-[var(--color-primary)] font-semibold tracking-wider">El Evangelio{proper.entry.gospelRef ? ` — ${proper.entry.gospelRef}` : ""}</span>
                    {proper.entry.gospelText && <p className="text-sm leading-relaxed mt-1">{proper.entry.gospelText}</p>}
                  </div>
                )}
                <p className="text-[10px] italic text-gray-400 pt-2 border-t border-[var(--color-bg-alt)]">Propios del Libro de Oración Común (LOC) 1928</p>
              </div>
            ) : (
              <p className="text-sm italic text-gray-500 py-1">
                Este día tiene propios asignados. Consúltense la Colecta, la Epístola y el Evangelio en el Misal Anglicano.
              </p>
            )}
          </div>
        </div>
      )}

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
