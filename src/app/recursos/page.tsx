import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Recursos Extras",
  description:
    "Recursos del Oficio: siglas y abreviaturas, reglas y tablas del LOC, y las Exhortaciones de la Santa Comunión.",
};

const recursos = [
  {
    href: "/siglas",
    titulo: "Siglas y Abreviaturas",
    desc: "Glosario de las abreviaturas del ORDO Kalendar y del LOC (propios, ayuno, rangos de santo, colores litúrgicos).",
  },
  {
    href: "/rubricas",
    titulo: "Reglas y Tablas del LOC",
    desc: "Reglas de las fiestas movibles, días de fiesta, ayunos, rogativas y tablas de precedencias.",
  },
  {
    href: "/exhortaciones",
    titulo: "Exhortaciones",
    desc: "Las tres Exhortaciones de la Santa Comunión, para que el presbítero escoja la que corresponde a la ocasión.",
  },
];

export default function RecursosPage() {
  return (
    <article className="office-content max-w-[720px] mx-auto">
      <h1
        className="text-3xl text-[var(--color-primary-dark)] text-center mb-2 font-medium"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Recursos Extras
      </h1>
      <p className="text-center text-sm text-gray-500 italic mb-8 px-2">
        Siglas, reglas y tablas del LOC, y las Exhortaciones.
      </p>

      <div className="space-y-3">
        {recursos.map((r) => (
          <Link
            key={r.href}
            href={r.href}
            className="block bg-white border border-[var(--color-border)] rounded-lg p-4 hover:shadow-md hover:border-[var(--color-gold)] transition-all"
          >
            <h2
              className="text-lg text-[var(--color-primary-dark)] font-medium"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {r.titulo} →
            </h2>
            <p className="text-sm text-gray-600 mt-1">{r.desc}</p>
          </Link>
        ))}
      </div>
    </article>
  );
}
