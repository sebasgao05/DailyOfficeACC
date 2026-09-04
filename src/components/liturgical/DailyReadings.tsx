"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { getLectionary } from "@/lib/lectionary";
import { fromDateParam } from "@/lib/calendar";
import { getOrdoEntry } from "@/lib/ordo";
import { getProperForDay, type ResolvedProper } from "@/lib/propers";
import { useMounted } from "@/lib/useMounted";
import { parsePsalmRefs, getPsalmPortion } from "@/data/psalms";
import { getMonthlyPsalms } from "@/data/monthlyPsalter";
import { APOSTLES_CREED, NICENE_CREED } from "@/data/creeds";
import { getPassage, splitAlternatives, BIBLE_VERSION } from "@/data/bible";
import Link from "next/link";

interface Props {
  period: "morning" | "evening";
  /** Si true, muestra SOLO la sección de salmos (para páginas de oficio que colocan las lecturas aparte). */
  psalmsOnly?: boolean;
}

function DailyReadingsContent({ period, psalmsOnly }: Props) {
  const searchParams = useSearchParams();
  const dateParam = searchParams.get("date");
  const mounted = useMounted();
  // Estado de UI puro (no depende de la fecha).
  const [showPsalmText, setShowPsalmText] = useState(true); // Show by default
  const [psalterMode, setPsalterMode] = useState<"lectionary" | "monthly">("lectionary");
  const [creed, setCreed] = useState<"apostles" | "nicene">("apostles");
  const [psalmAltIdx, setPsalmAltIdx] = useState(0);

  // Sin fecha en la URL dependemos de `new Date()` (solo cliente). Hasta
  // montar mostramos el placeholder para que coincida con el HTML estático.
  if (!dateParam && !mounted) {
    return <p className="text-center italic text-gray-400 py-4">Cargando lecturas del día...</p>;
  }

  // Todo lo que depende de la fecha se deriva durante el render (determinista).
  const date = dateParam ? fromDateParam(dateParam) : new Date();
  const readings = getLectionary(date);
  const ordo = getOrdoEntry(date);
  const proper: ResolvedProper | null = getProperForDay(ordo);
  const ordoLine = ordo.ordoLine;

  const current = period === "morning" ? readings.morning : readings.evening;
  // El Salterio del leccionario puede ofrecer alternativas ("68 o 18:1-19").
  const psalmOptions = splitAlternatives(current.psalms);
  const lectPsalms = psalmOptions[Math.min(psalmAltIdx, psalmOptions.length - 1)] || current.psalms;
  // El Salterio: "Lectionary" usa la tabla del leccionario del día; "Monthly" usa el
  // Salterio distribuido en 30 días (por día del mes).
  const monthlyNums = getMonthlyPsalms(date, period);
  const psalmRefs = psalterMode === "monthly"
    ? monthlyNums.map((n) => ({ number: n, from: undefined as number | undefined, to: undefined as number | undefined }))
    : parsePsalmRefs(lectPsalms);
  const psalmsLabel = psalterMode === "monthly" ? monthlyNums.join(", ") : lectPsalms;

  // Preservar la fecha seleccionada al enlazar a los salmos
  const dateQuery = dateParam ? `?date=${dateParam}` : "";

  return (
    <div className="my-8">
      {/* Selector de Salterio: Mensual (30 días) vs Leccionario (tabla del día) */}
      <div className="flex justify-center mb-3">
        <div className="inline-flex rounded-md border border-[var(--color-border)] overflow-hidden text-sm">
          <button
            onClick={() => setPsalterMode("monthly")}
            className={`px-3 py-1.5 transition-colors ${psalterMode === "monthly" ? "bg-[var(--color-primary-dark)] text-white font-medium" : "bg-white text-[var(--color-primary)] hover:bg-[var(--color-bg-alt)]"}`}
          >
            Salterio Mensual
          </button>
          <button
            onClick={() => setPsalterMode("lectionary")}
            className={`px-3 py-1.5 transition-colors border-l border-[var(--color-border)] ${psalterMode === "lectionary" ? "bg-[var(--color-primary-dark)] text-white font-medium" : "bg-white text-[var(--color-primary)] hover:bg-[var(--color-bg-alt)]"}`}
          >
            Salterio del Leccionario
          </button>
        </div>
      </div>

      {/* Psalms Section */}
      {psalterMode === "lectionary" && psalmOptions.length > 1 && (
        <div className="flex justify-center mb-2">
          <div className="inline-flex rounded-md border border-[var(--color-border)] overflow-hidden text-xs">
            {psalmOptions.map((opt, i) => (
              <button
                key={opt}
                onClick={() => setPsalmAltIdx(i)}
                className={`px-2.5 py-1 transition-colors ${i > 0 ? "border-l border-[var(--color-border)]" : ""} ${
                  i === psalmAltIdx ? "bg-[var(--color-primary-dark)] text-white font-medium" : "bg-white text-[var(--color-primary)] hover:bg-[var(--color-bg-alt)]"
                }`}
              >
                Salmo {opt}
              </button>
            ))}
          </div>
        </div>
      )}
      <p className="text-center text-sm mb-3 italic">
        <span className="text-[var(--color-primary)] font-medium">Salmos:</span> {psalmsLabel}
        <span className="text-[10px] text-gray-400 ml-2">({psalterMode === "monthly" ? "reparto en 30 días" : "según el leccionario"})</span>
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

      {psalmsOnly && (
        <p className="text-[10px] italic text-gray-400 text-center mt-2">Las lecciones del día se leen en sus secciones a continuación.</p>
      )}
      {psalmsOnly ? null : (
      <>
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

      {/* El Credo — selector Apóstoles / Niceno */}
      <div className="my-6 border border-[var(--color-border)] rounded-lg p-4 bg-white">
        <div className="flex items-center justify-between gap-3 mb-3 flex-wrap">
          <span className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider">El Credo</span>
          <div className="inline-flex rounded-md border border-[var(--color-border)] overflow-hidden text-xs">
            <button
              onClick={() => setCreed("apostles")}
              className={`px-3 py-1.5 transition-colors ${creed === "apostles" ? "bg-[var(--color-primary-dark)] text-white font-medium" : "bg-white text-[var(--color-primary)] hover:bg-[var(--color-bg-alt)]"}`}
            >
              Credo de los Apóstoles
            </button>
            <button
              onClick={() => setCreed("nicene")}
              className={`px-3 py-1.5 transition-colors border-l border-[var(--color-border)] ${creed === "nicene" ? "bg-[var(--color-primary-dark)] text-white font-medium" : "bg-white text-[var(--color-primary)] hover:bg-[var(--color-bg-alt)]"}`}
            >
              Credo Niceno
            </button>
          </div>
        </div>
        <div className="text-sm leading-relaxed space-y-2">
          {(creed === "apostles" ? APOSTLES_CREED : NICENE_CREED).split("\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>

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
      </>
      )}
    </div>
  );
}

export function DailyReadings({ period, psalmsOnly }: Props) {
  return (
    <Suspense fallback={<p className="text-center italic text-gray-400 py-4">Cargando lecturas del día...</p>}>
      <DailyReadingsContent period={period} psalmsOnly={psalmsOnly} />
    </Suspense>
  );
}
