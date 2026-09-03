"use client";

import { getChurchDay } from "@/lib/calendar";
import { useMounted } from "@/lib/useMounted";

export function ChurchDayBanner() {
  const mounted = useMounted();

  // Antes de montar en el cliente no conocemos la fecha local, así que no
  // renderizamos nada (coincide con el HTML estático).
  if (!mounted) return null;

  const dayName = getChurchDay(new Date()).name;
  if (!dayName) return null;

  return (
    <p
      className="text-center text-sm italic text-[var(--color-primary-dark)] py-2 border-t border-[var(--color-border)]"
      style={{ fontFamily: "var(--font-heading)" }}
    >
      {dayName}
    </p>
  );
}
