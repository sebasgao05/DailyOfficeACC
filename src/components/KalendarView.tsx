"use client";

import { useState, useEffect } from "react";
import { getChurchDay, type LiturgicalColor } from "@/lib/calendar";
import { getFeastForDate, type Feast } from "@/data/feasts";
import Link from "next/link";

const DAYS_ES = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
const MONTHS_ES = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

const colorBg: Record<LiturgicalColor, string> = {
  rojo: "bg-red-50/70 border-red-200",
  morado: "bg-purple-50/70 border-purple-200",
  blanco: "bg-amber-50/50 border-amber-100",
  verde: "bg-green-50/70 border-green-200",
};

const colorDot: Record<LiturgicalColor, string> = {
  rojo: "bg-red-600",
  morado: "bg-purple-600",
  blanco: "bg-amber-300 border border-gray-300",
  verde: "bg-green-600",
};

// Color for the day NUMBER in the calendar cell (like the Ordo PDF)
const colorNumber: Record<LiturgicalColor, string> = {
  rojo: "text-red-700",
  morado: "text-purple-700",
  blanco: "text-gray-700",
  verde: "text-green-800",
};

const feastColorText: Record<Feast["color"], string> = {
  rojo: "text-red-700",
  blanco: "text-[var(--color-primary-dark)]",
  morado: "text-purple-700",
  verde: "text-green-700",
};

export function KalendarView() {
  const [currentMonth, setCurrentMonth] = useState<Date | null>(null);

  useEffect(() => {
    setCurrentMonth(new Date());
  }, []);

  if (!currentMonth) return null;

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const today = new Date();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startOffset = firstDay.getDay();
  const daysInMonth = lastDay.getDate();

  function prevMonth() { setCurrentMonth(new Date(year, month - 1, 1)); }
  function nextMonth() { setCurrentMonth(new Date(year, month + 1, 1)); }
  function goToday() { setCurrentMonth(new Date()); }

  const cells: (null | Date)[] = [];
  for (let i = 0; i < startOffset; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));
  while (cells.length % 7 !== 0) cells.push(null);

  return (
    <div className="bg-white border border-[var(--color-border)] rounded-lg p-4 md:p-6">
      {/* Month Header */}
      <div className="text-center mb-4">
        <h2 className="text-2xl italic text-[var(--color-primary-dark)] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
          {MONTHS_ES[month]} {year}
        </h2>
        <div className="flex items-center justify-center gap-2">
          <button onClick={prevMonth} className="px-3 py-1 border border-[var(--color-border)] rounded text-sm hover:bg-[var(--color-bg-alt)]">← Anterior</button>
          <button onClick={goToday} className="px-3 py-1 border border-[var(--color-border)] rounded text-sm hover:bg-[var(--color-bg-alt)]">Hoy</button>
          <button onClick={nextMonth} className="px-3 py-1 border border-[var(--color-border)] rounded text-sm hover:bg-[var(--color-bg-alt)]">Siguiente →</button>
        </div>
      </div>

      {/* Color Legend */}
      <div className="flex flex-wrap items-center justify-center gap-4 text-[10px] mb-4 pb-3 border-b border-[var(--color-border)]">
        <span className="flex items-center gap-1"><span className={`w-2.5 h-2.5 rounded-full ${colorDot.rojo}`}></span>Rojo (Mártires, Pentecostés)</span>
        <span className="flex items-center gap-1"><span className={`w-2.5 h-2.5 rounded-full ${colorDot.morado}`}></span>Morado (Adviento, Cuaresma)</span>
        <span className="flex items-center gap-1"><span className={`w-2.5 h-2.5 rounded-full ${colorDot.blanco}`}></span>Blanco (Navidad, Pascua, Fiestas)</span>
        <span className="flex items-center gap-1"><span className={`w-2.5 h-2.5 rounded-full ${colorDot.verde}`}></span>Verde (Epifanía, Trinidad)</span>
      </div>

      {/* Day Headers */}
      <div className="grid grid-cols-7 gap-px mb-1">
        {DAYS_ES.map((day) => (
          <div key={day} className="text-center text-[10px] font-semibold text-[var(--color-primary-dark)] py-2" style={{ fontFamily: "var(--font-heading)" }}>
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {cells.map((date, i) => {
          if (!date) {
            return <div key={`empty-${i}`} className="min-h-[90px] bg-gray-50/50 rounded"></div>;
          }

          const churchDay = getChurchDay(date);
          const feast = getFeastForDate(date);
          const isToday = date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
          const isSunday = date.getDay() === 0;
          // Ordo rule: If there's a feast, the color is the FEAST color (for the Mass)
          // If no feast, use the seasonal color (green for Trinity ferials, etc.)
          const massColor = feast ? feast.color : churchDay.color;
          const displayColor = colorBg[massColor];

          return (
            <Link
              key={date.toISOString()}
              href={`/leccionario?date=${date.toISOString().split("T")[0]}`}
              className={`min-h-[90px] p-1.5 rounded border transition-all hover:shadow-md ${displayColor} ${
                isToday ? "ring-2 ring-[var(--color-gold)] ring-offset-1" : ""
              }`}
            >
              {/* Day number in liturgical color (like Ordo PDF) */}
              <div className={`text-lg font-bold ${colorNumber[massColor]} ${isSunday ? "text-xl" : ""}`}>
                {date.getDate()}
              </div>
              {/* Feast name (high rank) */}
              {feast && (feast.rank === "principal" || feast.rank === "mayor") && (
                <div className={`text-[9px] leading-tight mt-0.5 font-bold uppercase ${feastColorText[feast.color]}`}>
                  {feast.name}
                </div>
              )}
              {/* Church day name (for Sundays or if no feast) */}
              {(!feast || feast.rank === "menor") && (
                <div className={`text-[9px] leading-tight mt-0.5 ${isSunday ? "text-[var(--color-primary)] font-bold" : "text-gray-600"}`}>
                  {churchDay.name.length > 50 ? churchDay.name.slice(0, 47) + "..." : churchDay.name}
                </div>
              )}
              {/* Minor feast indicator */}
              {feast && feast.rank === "menor" && (
                <div className={`text-[8px] mt-0.5 italic ${feastColorText[feast.color]}`}>
                  {feast.name}
                </div>
              )}
            </Link>
          );
        })}
      </div>

      {/* Note about propers */}
      <div className="mt-4 text-center text-xs text-gray-500 italic">
        <p>Las fiestas en <span className="font-bold text-[var(--color-primary)]">rojo</span> o <span className="font-bold">negrita</span> tienen propios (Colecta, Epístola y Evangelio).</p>
        <p>Para los propios de fiestas menores, consultar el Misal.</p>
      </div>

      {/* Ordo-style list for the month */}
      <div className="mt-6 border-t border-[var(--color-border)] pt-4">
        <h3 className="text-center text-sm font-semibold text-[var(--color-primary-dark)] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
          ORDO DEL MES
        </h3>
        <div className="space-y-1 max-w-[600px] mx-auto">
          {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((d) => {
            const date = new Date(year, month, d);
            const churchDay = getChurchDay(date);
            const feast = getFeastForDate(date);
            const dayName = date.toLocaleDateString("es-ES", { weekday: "short" }).replace(".", "");
            const isSunday = date.getDay() === 0;
            const displayColor = feast ? feast.color : churchDay.color;
            const colorStripe: Record<string, string> = {
              rojo: "border-l-red-600",
              morado: "border-l-purple-600",
              blanco: "border-l-yellow-400",
              verde: "border-l-green-600",
            };

            return (
              <div
                key={d}
                className={`flex items-baseline gap-2 py-1 px-2 border-l-4 ${colorStripe[displayColor] || "border-l-green-600"} ${isSunday ? "bg-[var(--color-bg-alt)] rounded-r" : ""}`}
              >
                <span className="text-xs text-gray-400 w-5 shrink-0">{d}</span>
                <span className={`text-xs w-8 shrink-0 uppercase ${isSunday ? "font-bold text-[var(--color-primary)]" : "text-gray-500"}`}>
                  {dayName}
                </span>
                <span className={`text-xs flex-1 ${isSunday ? "font-semibold" : ""} ${feast && feast.rank !== "conmemoración" ? "font-medium" : ""}`}>
                  {feast && (feast.rank === "principal" || feast.rank === "mayor")
                    ? feast.name
                    : churchDay.name.length > 60
                    ? churchDay.name.slice(0, 57) + "..."
                    : churchDay.name}
                  {feast && feast.rank === "menor" && (
                    <span className="italic text-gray-500 ml-1">— {feast.name}</span>
                  )}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
