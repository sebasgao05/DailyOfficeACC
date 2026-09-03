"use client";

import { getChurchDay, formatDateSpanish, toDateParam } from "@/lib/calendar";
import { useMounted } from "@/lib/useMounted";
import Link from "next/link";

export function DateDisplay() {
  const mounted = useMounted();

  if (!mounted) return <p className="text-gray-400 italic">Cargando fecha...</p>;

  const today = new Date();
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
