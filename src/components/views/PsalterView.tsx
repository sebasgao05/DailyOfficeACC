"use client";

import { useState } from "react";
import { psalms } from "@/data/psalms";
import { useMounted } from "@/lib/useMounted";
import Link from "next/link";

// 30-day psalm cycle from LOC 1928
const psalmCycle: { morning: number[][]; evening: number[][] } = {
  morning: [
    [1,2,3,4,5],[9,10,11],[15,16,17],[19,20,21],[24,25,26],[30,31],[35,36],
    [38,39,40],[44,45,46],[50,51,52],[56,57,58],[62,63,64],[68],[71,72],
    [75,76,77],[79,80,81],[86,87,88],[90,91,92],[95,96,97],[102,103],[105],
    [107],[110,111,112,113],[116,117,118],[119],[119],[120,121,122,123,124,125],
    [132,133,134,135],[139,140,141],[144,145,146],
  ],
  evening: [
    [6,7,8],[12,13,14],[18],[22,23],[27,28,29],[32,33,34],[37],
    [41,42,43],[47,48,49],[53,54,55],[59,60,61],[65,66,67],[69,70],[73,74],
    [78],[82,83,84,85],[89],[93,94],[98,99,100,101],[104],[106],
    [108,109],[114,115],[119],[119],[119],[126,127,128,129,130,131],
    [136,137,138],[142,143],[147,148,149,150],
  ],
};

type Tab = "cycle" | "selections" | "topical";

export function PsalterView() {
  const mounted = useMounted();
  const [tab, setTab] = useState<Tab>("cycle");
  // `null` = el usuario aún no ha elegido; se usa el valor por defecto derivado
  // de la fecha/hora local del navegador. Al pulsar el grid o el toggle, pasan
  // a un valor explícito.
  const [pickedDay, setToday] = useState<number | null>(null);
  const [pickedPeriod, setPeriod] = useState<"morning" | "evening" | null>(null);

  const now = mounted ? new Date() : null;
  const today = pickedDay ?? (now ? now.getDate() : 1);
  const period: "morning" | "evening" =
    pickedPeriod ?? (now && now.getHours() >= 14 ? "evening" : "morning");

  const dayIndex = today - 1;
  const currentPsalms = psalmCycle[period][dayIndex] || [];

  return (
    <div>
      {/* Tabs */}
      <div className="flex items-center justify-center gap-6 mb-6 border-b border-[var(--color-border)] pb-3">
        {[
          { id: "cycle" as Tab, label: "Ciclo de 30 Días" },
          { id: "selections" as Tab, label: "Selecciones" },
          { id: "topical" as Tab, label: "Salmos por Tema" },
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`text-sm transition-colors ${
              tab === t.id
                ? "text-[var(--color-primary)] border-b-2 border-[var(--color-primary)] pb-1 font-medium"
                : "text-gray-500 hover:text-[var(--color-primary)]"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "cycle" && (
        <>
          <p className="text-center text-xs uppercase tracking-widest text-gray-500 mb-3" style={{ fontFamily: "var(--font-heading)" }}>
            Día del Mes
          </p>

          {/* Day Grid - 5 columns x 6 rows like the reference image */}
          <div className="grid grid-cols-5 sm:grid-cols-8 gap-2 mb-6 max-w-[450px] mx-auto">
            {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => (
              <button
                key={day}
                onClick={() => setToday(day)}
                className={`w-11 h-11 text-sm rounded transition-all ${
                  day === today
                    ? "bg-[var(--color-gold)] text-white font-bold shadow-md"
                    : "border border-[var(--color-border)] hover:border-[var(--color-gold)] hover:bg-[var(--color-bg-alt)]"
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Morning/Evening Toggle */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <button
              onClick={() => setPeriod("morning")}
              className={`px-5 py-2 text-sm rounded transition-all ${
                period === "morning"
                  ? "bg-[var(--color-primary-dark)] text-white"
                  : "border border-[var(--color-border)] hover:border-[var(--color-primary)]"
              }`}
            >
              Mañana
            </button>
            <button
              onClick={() => setPeriod("evening")}
              className={`px-5 py-2 text-sm rounded transition-all ${
                period === "evening"
                  ? "bg-[var(--color-primary-dark)] text-white"
                  : "border border-[var(--color-border)] hover:border-[var(--color-primary)]"
              }`}
            >
              Tarde
            </button>
          </div>

          <p className="text-center text-xs uppercase tracking-widest text-gray-500 mb-2">
            Día {today} · {period === "morning" ? "Mañana" : "Tarde"}
          </p>
          <p className="text-center text-sm text-gray-600 mb-6">
            Salmo{currentPsalms.length > 1 ? "s" : ""} {currentPsalms.join(", ")}
          </p>

          {/* Display Psalms */}
          <div className="space-y-8 max-w-[650px] mx-auto">
            {currentPsalms.map((psalmNum) => {
              const psalm = psalms.find((p) => p.number === psalmNum);
              if (!psalm || psalm.verses.length === 0) {
                return (
                  <div key={psalmNum} className="text-center text-gray-400 italic py-4">
                    <Link href={`/salterio/${psalmNum}`} className="hover:text-[var(--color-primary)]">
                      Salmo {psalmNum} — ver →
                    </Link>
                  </div>
                );
              }
              return (
                <section key={psalm.number}>
                  <h2 className="text-xl text-[var(--color-primary-dark)] text-center mb-1 font-medium" style={{ fontFamily: "var(--font-heading)" }}>
                    Salmo {psalm.number}
                  </h2>
                  <p className="text-center text-sm italic text-gray-500 mb-4">{psalm.latinTitle}</p>
                  <div className="space-y-3">
                    {psalm.verses.map((verse, i) => {
                      const parts = verse.split("*");
                      const verseNum = verse.match(/^(\d+)/)?.[1];
                      return (
                        <p key={i} className="leading-relaxed">
                          {verseNum && <sup className="text-xs text-gray-400 mr-1">{verseNum}</sup>}
                          {parts.map((part, j) => (
                            <span key={j}>
                              {j > 0 && <span className="text-[var(--color-gold)] mx-1">*</span>}
                              {j === 0 ? part.replace(/^\d+\s*(\([^)]*\)\s*)?/, "").trim() : part.trim()}
                            </span>
                          ))}
                        </p>
                      );
                    })}
                  </div>
                  <p className="text-center italic mt-4 text-sm text-gray-500">
                    Gloria al Padre, y al Hijo, y al Espíritu Santo;<br />
                    como era al principio, es ahora y será siempre, por los siglos de los siglos. Amén.
                  </p>
                  <hr className="my-6 border-[var(--color-border)]" />
                </section>
              );
            })}
          </div>
        </>
      )}

      {tab === "selections" && (
        <div className="grid grid-cols-10 gap-[2px] max-w-[650px] mx-auto">
          {Array.from({ length: 150 }, (_, i) => i + 1).map((num) => {
            const exists = psalms.find((p) => p.number === num && p.verses.length > 0);
            return (
              <Link
                key={num}
                href={`/salterio/${num}`}
                className={`text-center py-2.5 rounded text-sm border transition-colors ${
                  exists
                    ? "border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white cursor-pointer"
                    : "border-[var(--color-border)] text-gray-400 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                }`}
              >
                {num}
              </Link>
            );
          })}
        </div>
      )}

      {tab === "topical" && (
        <div className="space-y-6 max-w-[650px] mx-auto">
          <p className="text-center text-sm text-gray-500 mb-4">Haga clic en cualquier número de Salmo para leerlo.</p>
          {[
            { topic: "Adoración y Alabanza a Dios", psalms: [8,19,29,33,46,47,48,65,66,67,68,76,84,87,93,95,96,97,98,99,100,103,104,111,113,114,115,117,134,135,136,145,146,147,148,149,150] },
            { topic: "La Sabiduría y Ley de Dios", psalms: [1,15,19,24,25,34,37,49,73,90,91,101,111,112,119] },
            { topic: "Penitencia", psalms: [6,32,38,51,102,130,143] },
            { topic: "Oración e Intercesión", psalms: [4,5,17,20,27,28,54,61,64,70,86,88,109,141,142] },
            { topic: "Confianza en Dios", psalms: [11,16,23,26,27,31,46,56,57,62,63,71,91,121,125,131] },
            { topic: "Acción de Gracias", psalms: [30,34,65,66,67,92,100,103,107,116,118,136,138,145,147,148,150] },
            { topic: "Dios Creador", psalms: [8,19,33,65,104,145,147] },
            { topic: "Dios Redentor", psalms: [33,103,111,126,113,130,138] },
            { topic: "Dios Juez", psalms: [1,7,46,50,62,75,90,96,98] },
            { topic: "La Iglesia", psalms: [46,48,84,122,133,147] },
            { topic: "La Pasión", psalms: [22,40,42,54,69,88,116] },
            { topic: "Matutinos", psalms: [3,5,63,90,143] },
            { topic: "Vespertinos", psalms: [4,31,91,134] },
          ].map((item) => (
            <div key={item.topic}>
              <h3 className="text-[var(--color-primary)] font-medium mb-2 italic" style={{ fontFamily: "var(--font-heading)" }}>
                {item.topic}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {item.psalms.map((num) => (
                  <Link
                    key={num}
                    href={`/salterio/${num}`}
                    className="px-2 py-1 text-xs border border-[var(--color-border)] rounded hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    {num} ·
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
