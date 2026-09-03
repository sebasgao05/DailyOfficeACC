"use client";

import { getChurchDay, type Season } from "@/lib/calendar";
import { useMounted } from "@/lib/useMounted";
import Link from "next/link";

const seasons: { id: Season; label: string; href: string }[] = [
  { id: "adviento", label: "Adviento", href: "/kalendario?season=adviento" },
  { id: "navidad", label: "Navidad", href: "/kalendario?season=navidad" },
  { id: "epifania", label: "Epifanía", href: "/kalendario?season=epifania" },
  { id: "cuaresma", label: "Cuaresma", href: "/kalendario?season=cuaresma" },
  { id: "semana-santa", label: "Semana Santa", href: "/kalendario?season=semana-santa" },
  { id: "pascua", label: "Pascua", href: "/kalendario?season=pascua" },
  { id: "pentecostes", label: "Pentecostés", href: "/kalendario?season=pentecostes" },
  { id: "trinidad", label: "Trinidad", href: "/kalendario?season=trinidad" },
];

export function SeasonIndicator() {
  const mounted = useMounted();
  // Solo resaltamos la temporada actual una vez en el cliente (depende de la
  // fecha local). En el servidor no hay temporada activa: ningún resaltado.
  const currentSeason: Season | null = mounted
    ? getChurchDay(new Date()).season
    : null;

  return (
    <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm py-3">
      {seasons.map((season, i) => (
        <span key={season.id} className="flex items-center gap-1">
          {i > 0 && <span className="text-[var(--color-border)]">·</span>}
          <Link
            href={season.href}
            className={`transition-colors ${
              currentSeason === season.id
                ? "text-[var(--color-primary)] font-bold"
                : "text-[var(--color-text-light)] hover:text-[var(--color-primary)]"
            }`}
          >
            {season.label}
          </Link>
        </span>
      ))}
    </div>
  );
}
