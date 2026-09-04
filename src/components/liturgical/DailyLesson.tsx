"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getLectionary } from "@/lib/lectionary";
import { fromDateParam } from "@/lib/calendar";
import { useMounted } from "@/lib/useMounted";
import { getPassage, splitAlternatives, BIBLE_VERSION } from "@/data/bible";

interface Props {
  period: "morning" | "evening";
  which: "first" | "second";
}

/**
 * Muestra UNA lección del día (Primera o Segunda) con su referencia y texto,
 * para colocarla en su sección litúrgica del oficio ("La Primera Lectura" /
 * "La Segunda Lectura"). Si el texto no está poblado en bible.ts, muestra la
 * referencia con un aviso para consultar la Biblia. Si la lección ofrece más de
 * una opción ("A o B"), un selector deja escoger cuál leer.
 */
function DailyLessonContent({ period, which }: Props) {
  const searchParams = useSearchParams();
  const dateParam = searchParams.get("date");
  const mounted = useMounted();
  const [optIdx, setOptIdx] = useState(0);

  // Sin fecha en la URL, dependemos de `new Date()` (solo en cliente). Hasta
  // montar mostramos el placeholder para que coincida con el HTML estático.
  if (!dateParam && !mounted) {
    return <p className="text-xs italic text-gray-400">Cargando la lección…</p>;
  }

  const d = dateParam ? fromDateParam(dateParam) : new Date();
  const r = getLectionary(d);
  const office = period === "morning" ? r.morning : r.evening;
  const rawRef = which === "first" ? office.firstLesson : office.secondLesson;

  if (!rawRef) return <p className="text-xs italic text-gray-400">Cargando la lección…</p>;

  const options = splitAlternatives(rawRef);
  const ref = options[Math.min(optIdx, options.length - 1)];
  const passage = getPassage(ref);

  return (
    <div className="my-3">
      {options.length > 1 && (
        <div className="inline-flex rounded-md border border-[var(--color-border)] overflow-hidden text-xs mb-2">
          {options.map((opt, i) => (
            <button
              key={opt}
              onClick={() => setOptIdx(i)}
              className={`px-2.5 py-1 transition-colors ${i > 0 ? "border-l border-[var(--color-border)]" : ""} ${
                i === optIdx ? "bg-[var(--color-primary-dark)] text-white font-medium" : "bg-white text-[var(--color-primary)] hover:bg-[var(--color-bg-alt)]"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
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
