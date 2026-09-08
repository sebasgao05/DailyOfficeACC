import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gracias por tu apoyo | Oficio Diario",
  description:
    "Gracias por apoyar el proyecto Oficio Diario y contribuir a mantener disponibles sus recursos de oración.",
};

// Icono decorativo (SVG inline, sin dependencias): cruz sencilla dentro de un circulo.
function BlessingIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mx-auto h-12 w-12"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5v9M9 10.5h6" />
    </svg>
  );
}

export default function GraciasPage() {
  return (
    <article className="office-content max-w-[640px] mx-auto text-center py-6">
      <div className="text-[var(--color-gold)] mb-4">
        <BlessingIcon />
      </div>

      <h1
        className="text-3xl md:text-4xl text-[var(--color-primary-dark)] font-medium mb-6"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Gracias por tu apoyo
      </h1>

      <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
        Tu generosidad nos ayuda a continuar ofreciendo Oficio Diario y recursos
        de oración para quienes desean vivir y profundizar su fe.
      </p>

      <p className="text-base md:text-lg text-[var(--color-primary-dark)] italic leading-relaxed mb-10">
        Que Dios recompense tu generosidad y acompañe siempre tu camino.
      </p>

      <Link
        href="/"
        className="inline-flex items-center justify-center gap-2 text-white bg-[var(--color-primary)] rounded-lg px-8 py-4 text-lg font-medium tracking-wide transition-colors hover:bg-[var(--color-primary-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-gold)]"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Volver a Oficio Diario
      </Link>
    </article>
  );
}
