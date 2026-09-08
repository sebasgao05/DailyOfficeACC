import type { ReactNode } from "react";

interface DonationCardProps {
  /** Título de la opción de apoyo (p. ej. "Donación única"). */
  title: string;
  /** Descripción breve de la opción. */
  description: string;
  /** Texto complementario que aclara el funcionamiento. */
  note: string;
  /** Texto del botón (p. ej. "Donar ahora"). */
  ctaLabel: string;
  /** Enlace externo de Mercado Pago que abre el botón. */
  href: string;
  /** Etiqueta sutil opcional (p. ej. "Apoyo continuo"). */
  badge?: string;
  /** Resalta la card (usado para el apoyo mensual). */
  featured?: boolean;
  /** Icono decorativo opcional que se muestra sobre el título. */
  icon?: ReactNode;
}

/**
 * Card presentacional para una opción de apoyo. No maneja pagos:
 * el botón es un enlace externo a Mercado Pago que abre en nueva pestaña.
 */
export function DonationCard({
  title,
  description,
  note,
  ctaLabel,
  href,
  badge,
  featured = false,
  icon,
}: DonationCardProps) {
  return (
    <div
      className={`flex flex-col bg-white rounded-lg p-6 transition-all ${
        featured
          ? "border-2 border-[var(--color-gold)] shadow-md"
          : "border border-[var(--color-border)] hover:shadow-md hover:border-[var(--color-gold)]"
      }`}
    >
      {badge && (
        <span className="self-start mb-3 inline-block text-[11px] uppercase tracking-[0.15em] text-[var(--color-primary-dark)] bg-[var(--color-gold-light)] rounded-full px-3 py-1">
          {badge}
        </span>
      )}

      {icon && (
        <div className="text-[var(--color-gold)] mb-2" aria-hidden="true">
          {icon}
        </div>
      )}

      <h2
        className="text-2xl text-[var(--color-primary-dark)] font-medium mb-2"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h2>

      <p className="text-base text-gray-700 mb-1">{description}</p>
      <p className="text-sm text-gray-500 italic mb-6">{note}</p>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center justify-center gap-2 w-full text-center text-white bg-[var(--color-primary)] rounded-lg px-6 py-4 text-lg font-medium tracking-wide transition-colors hover:bg-[var(--color-primary-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-gold)]"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {ctaLabel}
        <span aria-hidden="true">↗</span>
        <span className="sr-only"> (se abre en una pestaña nueva)</span>
      </a>
    </div>
  );
}
