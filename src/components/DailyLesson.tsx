"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { getLectionary } from "@/lib/lectionary";
import { fromDateParam } from "@/lib/calendar";
import { getPassage, BIBLE_VERSION } from "@/data/bible";

interface Props {
  period: "morning" | "evening";
  which: "first" | "second";
}

/**
 * Muestra UNA lección del día (Primera o Segunda) con su referencia y texto,
 * para colocarla en su sección litúrgica del oficio ("La Primera Lectura" /
 * "La Segunda Lectura"). Si el texto no está poblado en bible.ts, muestra la
 * referencia con un aviso para consultar la Biblia.
 */
function DailyLessonContent({ period, which }: Props) {
  const searchParams = useSearchParams();
  const dateParam = searchParams.get("date");
  const [ref, setRef] = useState<string | null>(null);

  useEffect(() => {
    const d = dateParam ? fromDateParam(dateParam) : new Date();
    const r = getLectionary(d);
    const office = period === "morning" ? r.morning : r.evening;
    setRef(which === "first" ? office.firstLesson : office.secondLesson);
  }, [dateParam, period, which]);

  if (!ref) return <p className="text-xs italic text-gray-400">Cargando la lección…</p>;

  const passage = getPassage(ref);
  return (
    <div className="my-3">
      <p className="mb-1">
        <span className="text-sm font-medium">{ref}</span>
      </p>
      {passage ? (
        <div className="text-sm space-y-1 pl-3 border-l-2 border-[var(--color-gold)]">
          {passage.verses.map((v, i) => (
            <p key={i} className="leading-relaxed">
              {v.replace(/^(\d+(?::\d+)?)\s/, "")}
              <sup className="text-[9px] text-gray-400 ml-0.5">{(v.match(/^(\d+(?::\d+)?)/) || [])[1]}</sup>
            </p>
          ))}
          <p className="text-[10px] italic text-gray-400 pt-1">Texto bíblico: {BIBLE_VERSION}</p>
        </div>
      ) : (
        <p className="text-xs italic text-gray-400 pl-3">
          Texto no disponible — consúltese la Biblia en {ref}.
        </p>
      )}
    </div>
  );
}

export function DailyLesson({ period, which }: Props) {
  return (
    <Suspense fallback={<p className="text-xs italic text-gray-400">Cargando la lección…</p>}>
      <DailyLessonContent period={period} which={which} />
    </Suspense>
  );
}
