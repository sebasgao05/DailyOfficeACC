"use client";

import { useEffect, useState } from "react";
import { getChurchDay } from "@/lib/calendar";

export function ChurchDayBanner() {
  const [dayName, setDayName] = useState("");

  useEffect(() => {
    const churchDay = getChurchDay(new Date());
    setDayName(churchDay.name);
  }, []);

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
