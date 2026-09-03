"use client";

import { useState, useEffect } from "react";
import { type LiturgicalColor } from "@/lib/calendar";
import { getOrdoEntry, getOrdoMonth, type OrdoEntry } from "@/lib/ordo";
import Link from "next/link";

const DAYS_ES = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
const MONTHS_ES = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
];

// Fondo de la celda según el color litúrgico (los 6 colores del Ordo, saturación legible)
const colorBg: Record<LiturgicalColor, string> = {
  rojo: "bg-red-100 border-red-300",
  morado: "bg-purple-100 border-purple-300",
  blanco: "bg-amber-50 border-amber-200",
  verde: "bg-green-100 border-green-300",
  negro: "bg-neutral-300 border-neutral-500",
  rosa: "bg-pink-100 border-pink-300",
};

const colorDot: Record<LiturgicalColor, string> = {
  rojo: "bg-red-600",
  morado: "bg-purple-600",
  blanco: "bg-amber-300 border border-gray-300",
  verde: "bg-green-600",
  negro: "bg-neutral-800",
  rosa: "bg-pink-400",
};

// Color del NÚMERO del día en la celda (como en el Ordo PDF)
const colorNumber: Record<LiturgicalColor, string> = {
  rojo: "text-red-700",
  morado: "text-purple-700",
  blanco: "text-gray-700",
  verde: "text-green-800",
  negro: "text-neutral-800",
  rosa: "text-pink-600",
};

const colorStripe: Record<LiturgicalColor, string> = {
  rojo: "border-l-red-600",
  morado: "border-l-purple-600",
  blanco: "border-l-yellow-400",
  verde: "border-l-green-600",
  negro: "border-l-neutral-800",
  rosa: "border-l-pink-400",
};

const COLOR_LABEL: Record<LiturgicalColor, string> = {
  rojo: "Rojo",
  morado: "Morado",
  blanco: "Blanco",
  verde: "Verde",
  negro: "Negro",
  rosa: "Rosa",
};

// Tonos de fondo (hex) para construir el degradado de días con dos colores (ORDO).
// Deben coincidir aproximadamente con los tonos de colorBg.
const colorBgHex: Record<LiturgicalColor, string> = {
  rojo: "#fee2e2",
  morado: "#f3e8ff",
  blanco: "#fffbeb",
  verde: "#dcfce7",
  negro: "#d4d4d4",
  rosa: "#fce7f3",
};

export function KalendarView() {
  const [current, setCurrent] = useState<{ year: number; month: number } | null>(null);
  const [selected, setSelected] = useState<OrdoEntry | null>(null);

  useEffect(() => {
    const now = new Date();
    setCurrent({ year: now.getFullYear(), month: now.getMonth() });
  }, []);

  if (!current) return null;

  const { year, month } = current;
  const today = new Date();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startOffset = firstDay.getDay();
  const daysInMonth = lastDay.getDate();

  function shiftMonth(delta: number) {
    const base = new Date(year, month + delta, 1);
    setCurrent({ year: base.getFullYear(), month: base.getMonth() });
    setSelected(null);
  }
  function goToday() {
    const now = new Date();
    setCurrent({ year: now.getFullYear(), month: now.getMonth() });
    setSelected(null);
  }
  function setYear(y: number) {
    if (!Number.isNaN(y) && y >= 1583 && y <= 4099) {
      setCurrent({ year: y, month });
      setSelected(null);
    }
  }

  const monthEntries = getOrdoMonth(year, month);

  const cells: (null | Date)[] = [];
  for (let i = 0; i < startOffset; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));
  while (cells.length % 7 !== 0) cells.push(null);

  return (
    <div className="bg-white border border-[var(--color-border)] rounded-lg p-4 md:p-6">
      {/* Cabecera del mes + selector de año */}
      <div className="text-center mb-4">
        <h2 className="text-2xl italic text-[var(--color-primary-dark)] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
          {MONTHS_ES[month]} {year}
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <button onClick={() => shiftMonth(-1)} className="px-3 py-1 border border-[var(--color-border)] rounded text-sm hover:bg-[var(--color-bg-alt)]">← Mes</button>
          <button onClick={goToday} className="px-3 py-1 border border-[var(--color-border)] rounded text-sm hover:bg-[var(--color-bg-alt)]">Hoy</button>
          <button onClick={() => shiftMonth(1)} className="px-3 py-1 border border-[var(--color-border)] rounded text-sm hover:bg-[var(--color-bg-alt)]">Mes →</button>
          <span className="mx-2 h-5 w-px bg-[var(--color-border)]" />
          <label className="flex items-center gap-1 text-sm text-gray-500">
            Año:
            <input
              type="number"
              value={year}
              min={1583}
              max={4099}
              onChange={(e) => setYear(parseInt(e.target.value, 10))}
              className="w-20 px-2 py-1 border border-[var(--color-border)] rounded text-sm text-center bg-white dark:bg-[#2a2520]"
              aria-label="Buscar año"
            />
          </label>
          <button onClick={() => setYear(year - 1)} className="px-2 py-1 border border-[var(--color-border)] rounded text-sm hover:bg-[var(--color-bg-alt)]">−</button>
          <button onClick={() => setYear(year + 1)} className="px-2 py-1 border border-[var(--color-border)] rounded text-sm hover:bg-[var(--color-bg-alt)]">+</button>
        </div>
        <p className="text-[11px] text-gray-400 mt-2 italic">
          El ORDO se calcula año a año (fecha de Pascua, Adviento, precedencia y transferencia de fiestas).
        </p>
      </div>

      {/* Leyenda de colores */}
      <div className="flex flex-wrap items-center justify-center gap-3 text-[10px] mb-4 pb-3 border-b border-[var(--color-border)]">
        {(Object.keys(colorDot) as LiturgicalColor[]).map((c) => (
          <span key={c} className="flex items-center gap-1">
            <span className={`w-2.5 h-2.5 rounded-full ${colorDot[c]}`}></span>
            {COLOR_LABEL[c]}
          </span>
        ))}
      </div>

      {/* Encabezados de días */}
      <div className="grid grid-cols-7 gap-px mb-1">
        {DAYS_ES.map((day) => (
          <div key={day} className="text-center text-[10px] font-semibold text-[var(--color-primary-dark)] py-2" style={{ fontFamily: "var(--font-heading)" }}>
            {day}
          </div>
        ))}
      </div>

      {/* Rejilla del calendario */}
      <div className="grid grid-cols-7 gap-1">
        {cells.map((date, i) => {
          if (!date) {
            return <div key={`empty-${i}`} className="min-h-[90px] bg-gray-50/50 rounded"></div>;
          }
          const ordo = getOrdoEntry(date);
          const isToday =
            date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear();
          const isSunday = date.getDay() === 0;
          const isHighRank = ordo.rank === "principal" || ordo.rank === "mayor";

          return (
            <button
              key={date.toISOString()}
              onClick={() => setSelected(ordo)}
              style={ordo.color2 ? { backgroundImage: `linear-gradient(135deg, ${colorBgHex[ordo.color]} 0%, ${colorBgHex[ordo.color]} 45%, ${colorBgHex[ordo.color2]} 55%, ${colorBgHex[ordo.color2]} 100%)` } : undefined}
              className={`text-left min-h-[90px] p-1.5 rounded border transition-all hover:shadow-md ${ordo.color2 ? "border-gray-300" : colorBg[ordo.color]} ${
                isToday ? "ring-2 ring-[var(--color-gold)] ring-offset-1" : ""
              } ${selected?.date.toDateString() === date.toDateString() ? "ring-2 ring-[var(--color-primary)]" : ""}`}
            >
              <div className={`text-lg font-bold ${colorNumber[ordo.color]} ${isSunday ? "text-xl" : ""}`}>
                {date.getDate()}
              </div>
              <div className={`text-[9px] leading-tight mt-0.5 ${isHighRank ? "font-bold uppercase" : isSunday ? "text-[var(--color-primary)] font-bold" : "text-gray-600"} ${colorNumber[ordo.color]}`}>
                {ordo.title.length > 50 ? ordo.title.slice(0, 47) + "…" : ordo.title}
              </div>
              {ordo.fast && (
                <div className="text-[7px] mt-0.5 italic text-gray-500">
                  {ordo.fast === "ayuno-y-abstinencia" ? "Ayuno y Abst." : "Abst."}
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Panel de detalle del día seleccionado */}
      {selected && (
        <div className="mt-5 p-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-alt)]">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                {selected.date.toLocaleDateString("es-ES", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
              </p>
              <h3 className="text-lg font-semibold text-[var(--color-primary-dark)]" style={{ fontFamily: "var(--font-heading)" }}>
                {selected.title}
              </h3>
            </div>
            <span className="flex items-center gap-1.5 text-xs shrink-0">
              <span className={`w-3 h-3 rounded-full ${colorDot[selected.color]}`}></span>
              {selected.color2 ? (
                <>
                  <span className={`w-3 h-3 rounded-full ${colorDot[selected.color2]}`}></span>
                  {COLOR_LABEL[selected.color]} / {COLOR_LABEL[selected.color2]}
                </>
              ) : (
                COLOR_LABEL[selected.color]
              )}
            </span>
          </div>
          {selected.propers.length > 0 && (
            <p className="text-sm mt-2"><span className="text-gray-500">Propios:</span> {selected.propers.join(" · ")}</p>
          )}
          {selected.ordoLine && (
            <p className="text-xs mt-1 font-mono text-[var(--color-gold)]" title="Notación del ORDO Kalendar">{selected.ordoLine}</p>
          )}
          {selected.commemorations.length > 0 && (
            <p className="text-sm mt-1"><span className="text-gray-500">Conmemoraciones:</span> {selected.commemorations.join("; ")}</p>
          )}
          {selected.fast && (
            <p className="text-sm mt-1"><span className="text-gray-500">Ayuno:</span> {selected.fast === "ayuno-y-abstinencia" ? "Ayuno y Abstinencia" : "Abstinencia"}</p>
          )}
          {selected.note && (
            <p className="text-sm mt-1 italic text-[var(--color-primary)]">Nota: {selected.note}</p>
          )}
          <Link
            href={`/leccionario?date=${selected.date.toISOString().split("T")[0]}`}
            className="inline-block mt-3 text-xs text-[var(--color-primary)] hover:text-[var(--color-gold)] underline"
          >
            Ver leccionario y propios del día →
          </Link>
        </div>
      )}

      {/* Nota sobre propios */}
      <div className="mt-4 text-center text-xs text-gray-500 italic">
        <p>Haz clic en cualquier día para ver su color, propios, conmemoraciones y ayuno.</p>
        <p>Para los propios de fiestas menores, consultar el Misal.</p>
      </div>

      {/* Lista estilo ORDO del mes */}
      <div className="mt-6 border-t border-[var(--color-border)] pt-4">
        <h3 className="text-center text-sm font-semibold text-[var(--color-primary-dark)] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
          ORDO DEL MES — {MONTHS_ES[month]} {year}
        </h3>
        <div className="space-y-1 max-w-[680px] mx-auto">
          {monthEntries.map((ordo) => {
            const d = ordo.date.getDate();
            const dayName = ordo.date.toLocaleDateString("es-ES", { weekday: "short" }).replace(".", "");
            const isSunday = ordo.date.getDay() === 0;
            const isHighRank = ordo.rank === "principal" || ordo.rank === "mayor";
            return (
              <button
                key={d}
                onClick={() => setSelected(ordo)}
                className={`w-full text-left flex items-baseline gap-2 py-1 px-2 border-l-4 ${colorStripe[ordo.color]} ${isSunday ? "bg-[var(--color-bg-alt)] rounded-r" : ""} hover:bg-[var(--color-bg-alt)]`}
              >
                <span className="text-xs text-gray-400 w-5 shrink-0">{d}</span>
                <span className={`text-xs w-8 shrink-0 uppercase ${isSunday ? "font-bold text-[var(--color-primary)]" : "text-gray-500"}`}>
                  {dayName}
                </span>
                <span className={`text-xs flex-1 ${isSunday ? "font-semibold" : ""} ${isHighRank ? "font-medium uppercase" : ""}`}>
                  {ordo.title}
                  {ordo.propers.length > 0 && (
                    <span className="text-gray-400 ml-1 normal-case">— {ordo.propers.join(" · ")}</span>
                  )}
                  {ordo.commemorations.length > 0 && (
                    <span className="italic text-gray-500 ml-1 normal-case">({ordo.commemorations.map((c) => `Comm. ${c}`).join("; ")})</span>
                  )}
                </span>
                <span className="text-[10px] text-gray-400 shrink-0">{COLOR_LABEL[ordo.color]}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
