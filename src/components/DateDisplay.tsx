"use client";

import { useEffect, useState } from "react";
import { getChurchDay, formatDateSpanish, toDateParam } from "@/lib/calendar";
import Link from "next/link";

export function DateDisplay() {
  const [today, setToday] = useState<Date | null>(null);

  useEffect(() => {
    setToday(new Date());
  }, []);

  if (!today) return <p className="text-gray-400 italic">Cargando fecha...</p>;

  const churchDay = getChurchDay(today);
  const dateStr = formatDateSpanish(today);
  const dateParam = toDateParam(today);

  return (
    <div>
      <p className="text-lg font-medium">{dateStr}</p>
      <p className="text-[var(--color-primary)] italic mt-1">{churchDay.name}</p>
      <Link
        href={`/leccionario?date=${dateParam}`}
        className="inline-block mt-3 text-sm text-[var(--color-primary)] border border-[var(--color-primary)] rounded px-4 py-1 hover:bg-[var(--color-primary)] hover:text-white transition-colors"
      >
        Ver lecturas del día →
      </Link>
    </div>
  );
}
