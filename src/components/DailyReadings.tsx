"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { getLectionary, type LectionaryDay } from "@/lib/lectionary";
import { fromDateParam } from "@/lib/calendar";
import { getOrdoEntry } from "@/lib/ordo";
import { getProperForDay, type ResolvedProper } from "@/lib/propers";
import { psalms, parsePsalmRefs, getPsalmPortion } from "@/data/psalms";
import { getPassage, BIBLE_VERSION } from "@/data/bible";
import Link from "next/link";

interface Props {
  period: "morning" | "evening";
}

function DailyReadingsContent({ period }: Props) {
  const searchParams = useSearchParams();
  const dateParam = searchParams.get("date");
  const [readings, setReadings] = useState<LectionaryDay | null>(null);
  const [proper, setProper] = useState<ResolvedProper | null>(null);
  const [ordoLine, setOrdoLine] = useState<string>("");
  const [showPsalmText, setShowPsalmText] = useState(true); // Show by default

  useEffect(() => {
    const date = dateParam ? fromDateParam(dateParam) : new Date();
    setReadings(getLectionary(date));
    const ordo = getOrdoEntry(date);
    setProper(getProperForDay(ordo));
    setOrdoLine(ordo.ordoLine);
  }, [dateParam]);

  if (!readings) return <p className="text-center italic text-gray-400 py-4">Cargando lecturas del día...</p>;

  const current = period === "morning" ? readings.morning : readings.evening;
  const psalmRefs = parsePsalmRefs(current.psalms);

  // Preservar la fecha seleccionada al enlazar a los salmos
  const dateQuery = dateParam ? `?date=${dateParam}` : "";

  return (
    <div className="my-8">
      {/* Psalms Section */}
      <p className="text-center text-sm mb-3 italic">
        <span className="text-[var(--color-primary)] font-medium">Salmos:</span> {current.psalms}
      </p>

      {psalmRefs.length > 0 && (
        <>
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {psalmRefs.slice(0, 8).map((ref, i) => (
              <Link
                key={`${ref.number}-${i}`}
                href={`/salterio/${ref.number}${dateQuery}`}
                className="px-3 py-1.5 text-sm border border-[var(--color-primary)] text-[var(--color-primary)] rounded hover:bg-[var(--color-primary)] hover:text-white transition-colors"
              >
                Salmo {ref.number}{ref.from ? `:${ref.from}${ref.to && ref.to !== ref.from ? "-" + ref.to : ""}` : ""}
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
              {psalmRefs.slice(0, 6).map((ref, idx) => {
                const portion = getPsalmPortion(ref);
                if (!portion || portion.verses.length === 0) return null;
                const { psalm, verses } = portion;
                const rangeLabel = ref.from ? ` (vv. ${ref.from}${ref.to && ref.to !== ref.from ? "–" + ref.to : ""})` : "";
                return (
                  <div key={`${ref.number}-${idx}`} className="border-l-2 border-[var(--color-gold)] pl-4">
                    <h4 className="text-sm font-semibold text-[var(--color-primary-dark)] mb-2">
                      Salmo {psalm.number}{rangeLabel} — <span className="italic font-normal">{psalm.latinTitle}</span>
                    </h4>
                    <div className="text-sm space-y-1">
                      {verses.map((v, i) => (
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

      {/* Propios del Día (Colecta, Epístola, Evangelio) — domingos y fiestas con propios en el LOC */}
      {proper && (
        <div className="my-6 border border-[var(--color-gold)] rounded-lg p-4 bg-[var(--color-bg-alt)]">
          <p className="text-[10px] uppercase tracking-widest text-[var(--color-gold)] text-center mb-2">
            ✚ Propios del Día — {proper.title}
          </p>
          {ordoLine && (
            <p className="text-center text-xs font-mono text-[var(--color-primary)] mb-3" title="Notación del ORDO Kalendar">{ordoLine}</p>
          )}
          {proper.entry ? (
            <div className="space-y-3">
              <div>
                <span className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider">La Colecta</span>
                <p className="text-sm leading-relaxed mt-1">{proper.entry.collect}</p>
              </div>
              {(proper.entry.epistleText || proper.entry.epistleRef) && (
                <div>
                  <span className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider">La Epístola{proper.entry.epistleRef ? ` — ${proper.entry.epistleRef}` : ""}</span>
                  {proper.entry.epistleText && <p className="text-sm leading-relaxed mt-1">{proper.entry.epistleText}</p>}
                </div>
              )}
              {(proper.entry.gospelText || proper.entry.gospelRef) && (
                <div>
                  <span className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider">El Evangelio{proper.entry.gospelRef ? ` — ${proper.entry.gospelRef}` : ""}</span>
                  {proper.entry.gospelText && <p className="text-sm leading-relaxed mt-1">{proper.entry.gospelText}</p>}
                </div>
              )}
              <p className="text-[10px] italic text-gray-400 text-center pt-2 border-t border-[var(--color-border)]">
                Propios del Libro de Oración Común (LOC) 1928
              </p>
            </div>
          ) : (
            <p className="text-sm italic text-gray-500 text-center py-2">
              Este día tiene propios asignados. Consúltense la Colecta, la Epístola y el Evangelio en el Misal Anglicano.
            </p>
          )}
        </div>
      )}

      {/* Lessons */}
      <div className="readings-box bg-white border border-[var(--color-border)] rounded-lg p-4 space-y-4">
        <p className="text-[10px] uppercase tracking-widest text-gray-400 text-center mb-2">
          {period === "morning" ? "☀ Oración Matutina" : "☽ Oración Vespertina"}
        </p>
        {([["Primera Lectura", current.firstLesson], ["Segunda Lectura", current.secondLesson]] as const).map(
          ([label, ref]) => {
            const passage = getPassage(ref);
            return (
              <div key={label}>
                <div className="mb-1">
                  <span className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider">{label}: </span>
                  <span className="text-sm font-medium">{ref}</span>
                </div>
                {passage ? (
                  <div className="text-sm space-y-1 pl-3 border-l-2 border-[var(--color-gold)]">
                    {passage.verses.map((v, i) => (
                      <p key={i} className="leading-relaxed">
                        {v.replace(/^(\d+(?::\d+)?)\s/, "")}
                        <sup className="text-[9px] text-gray-400 ml-0.5">{(v.match(/^(\d+(?::\d+)?)/) || [])[1]}</sup>
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs italic text-gray-400 pl-3">Texto no disponible — consultar la Biblia en {ref}.</p>
                )}
              </div>
            );
          }
        )}
        <p className="text-[10px] italic text-gray-400 text-center pt-2 border-t border-[var(--color-border)]">
          Texto bíblico: {BIBLE_VERSION}
        </p>
      </div>
    </div>
  );
}

export function DailyReadings({ period }: Props) {
  return (
    <Suspense fallback={<p className="text-center italic text-gray-400 py-4">Cargando lecturas del día...</p>}>
      <DailyReadingsContent period={period} />
    </Suspense>
  );
}
