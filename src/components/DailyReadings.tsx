"use client";

import { useEffect, useState } from "react";
import { getLectionary, type LectionaryDay } from "@/lib/lectionary";
import { psalms } from "@/data/psalms";
import Link from "next/link";

interface Props {
  period: "morning" | "evening";
}

export function DailyReadings({ period }: Props) {
  const [readings, setReadings] = useState<LectionaryDay | null>(null);
  const [showPsalmText, setShowPsalmText] = useState(true); // Show by default

  useEffect(() => {
    const today = new Date();
    setReadings(getLectionary(today));
  }, []);

  if (!readings) return <p className="text-center italic text-gray-400 py-4">Cargando lecturas del día...</p>;

  const current = period === "morning" ? readings.morning : readings.evening;
  const psalmNumbers = current.psalms.match(/\d+/g)?.map(Number).filter(n => n <= 150) || [];

  return (
    <div className="my-8">
      {/* Psalms Section */}
      <p className="text-center text-sm mb-3 italic">
        <span className="text-[var(--color-primary)] font-medium">Salmos:</span> {current.psalms}
      </p>

      {psalmNumbers.length > 0 && (
        <>
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {psalmNumbers.slice(0, 8).map((num) => (
              <Link
                key={num}
                href={`/salterio/${num}`}
                className="px-3 py-1.5 text-sm border border-[var(--color-primary)] text-[var(--color-primary)] rounded hover:bg-[var(--color-primary)] hover:text-white transition-colors"
              >
                Salmo {num}
              </Link>
            ))}
          </div>

          {/* Toggle psalm text visibility */}
          <button
            onClick={() => setShowPsalmText(!showPsalmText)}
            className="block mx-auto text-xs text-[var(--color-gold)] hover:text-[var(--color-primary)] mb-4"
          >
            {showPsalmText ? "▲ Ocultar texto de los Salmos" : "▼ Mostrar texto de los Salmos"}
          </button>

          {showPsalmText && (
            <div className="space-y-6 mb-6">
              {psalmNumbers.slice(0, 6).map((num) => {
                const psalm = psalms.find((p) => p.number === num);
                if (!psalm || psalm.verses.length === 0) return null;
                return (
                  <div key={num} className="border-l-2 border-[var(--color-gold)] pl-4">
                    <h4 className="text-sm font-semibold text-[var(--color-primary-dark)] mb-2">
                      Salmo {psalm.number} — <span className="italic font-normal">{psalm.latinTitle}</span>
                    </h4>
                    <div className="text-sm space-y-1">
                      {psalm.verses.map((v, i) => (
                        <p key={i} className="leading-relaxed">{v.replace(/\*/g, " · ")}</p>
                      ))}
                    </div>
                    <p className="text-xs italic text-gray-500 mt-2">
                      Gloria al Padre, y al Hijo, y al Espíritu Santo; como era al principio, es ahora y será siempre, por los siglos de los siglos. Amén.
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}

      {/* Lessons */}
      <div className="readings-box bg-white border border-[var(--color-border)] rounded-lg p-4 space-y-3">
        <p className="text-[10px] uppercase tracking-widest text-gray-400 text-center mb-2">
          {period === "morning" ? "☀ Oración Matutina" : "☽ Oración Vespertina"}
        </p>
        <div>
          <span className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider">Primera Lectura: </span>
          <span className="text-sm font-medium">{current.firstLesson}</span>
        </div>
        <div>
          <span className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider">Segunda Lectura: </span>
          <span className="text-sm font-medium">{current.secondLesson}</span>
        </div>
      </div>
    </div>
  );
}
