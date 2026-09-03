import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Horarios de Oficios – LOC 1928" };

const times = [
  { name: "Maitines", time: "Al despertar/Levantarse" },
  { name: "Laudes", time: "Amanecer/Aurora" },
  { name: "Prima", time: "6:00 A.M. (Inicio del día)" },
  { name: "Tercia", time: "9:00 A.M. (Tercera hora del día)" },
  { name: "Sexta", time: "12:00 Mediodía (Sexta hora del día)" },
  { name: "Nona", time: "3:00 P.M. (Novena hora del día)" },
  { name: "Vísperas", time: "Atardecer/Puesta del sol" },
  { name: "Completas", time: "Antes de retirarse a dormir" },
];

const offices = [
  { href: "/oficio/oracion-matutina", label: "MAITINES" },
  { href: "/oficio/oracion-matutina", label: "LAUDES" },
  { href: "/oficio/prima", label: "PRIMA" },
  { href: "/oficio/tercia", label: "TERCIA" },
  { href: "/oficio/sexta", label: "SEXTA" },
  { href: "/oficio/nona", label: "NONA" },
  { href: "/oficio/oracion-vespertina", label: "VÍSPERAS" },
  { href: "/oficio/completas", label: "COMPLETAS" },
];

export default function OficiosHorarios() {
  return (
    <div className="max-w-[600px] mx-auto">
      <h1 className="text-3xl text-[var(--color-primary-dark)] text-center mb-8 font-medium tracking-wider" style={{ fontFamily: "var(--font-heading)" }}>
        Horarios de Oficios
      </h1>

      {/* Customary Times Table */}
      <div className="border border-[var(--color-border)] rounded-lg p-6 mb-8">
        <h2 className="text-xl text-[var(--color-primary-dark)] mb-4 pb-2 border-b border-[var(--color-border)] font-medium" style={{ fontFamily: "var(--font-heading)" }}>
          Horarios Acostumbrados
        </h2>
        <div className="space-y-3">
          {times.map((t) => (
            <div key={t.name} className="flex items-baseline gap-4">
              <span className="font-semibold text-[var(--color-primary)] min-w-[90px]" style={{ fontFamily: "var(--font-heading)" }}>
                {t.name}
              </span>
              <span className="text-sm text-gray-600">{t.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Office Grid */}
      <div className="grid grid-cols-2 gap-3 mb-8">
        {offices.map((office) => (
          <Link
            key={office.label}
            href={office.href}
            className="py-4 text-center border border-[var(--color-border)] rounded-lg hover:border-[var(--color-gold)] hover:shadow-md transition-all text-[var(--color-primary-dark)] tracking-wider font-medium"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {office.label}
          </Link>
        ))}
      </div>

      <div className="text-center">
        <Link href="/oficio/oracion-matutina" className="text-sm text-[var(--color-primary)] hover:text-[var(--color-gold)]">
          ← Volver al Oficio Diario
        </Link>
      </div>
    </div>
  );
}
