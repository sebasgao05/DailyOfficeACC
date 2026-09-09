import type { Metadata } from "next";
import { DonationCard } from "@/components/donations/DonationCard";

export const metadata: Metadata = {
  title: "Donaciones | Oficio Diario",
  description:
    "Apoya el proyecto Oficio Diario mediante una donación única o un aporte mensual.",
};

// Enlaces públicos de Mercado Pago (ya configurados externamente).
const DONATION_URL = "https://link.mercadopago.com.co/oficiodiario";
const SUBSCRIPTION_URL = "https://mpago.la/2bR6EMU";

// Icono de candado (SVG inline, sin dependencias) para la sección de confianza.
function LockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}

// Icono de corazón para el apoyo mensual.
function HeartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-8 w-8"
    >
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
    </svg>
  );
}

// Icono de ofrenda (manos) para la donación única.
function GiftIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-8 w-8"
    >
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13M5 12v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7" />
      <path d="M12 8S10.5 3 8 3a2.5 2.5 0 0 0 0 5h4Zm0 0s1.5-5 4-5a2.5 2.5 0 0 1 0 5h-4Z" />
    </svg>
  );
}

export default function DonacionesPage() {
  return (
    <article className="office-content max-w-[820px] mx-auto">
      {/* Encabezado */}
      <header className="text-center mb-10">
        <h1
          className="text-3xl md:text-4xl text-[var(--color-primary-dark)] font-medium mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Apoya Oficio Diario
        </h1>
        <p className="text-base md:text-lg text-gray-700 max-w-[600px] mx-auto leading-relaxed">
          Tu ayuda nos permite continuar ofreciendo gratuitamente el Oficio
          Diario, recursos de oración y contenidos para quienes desean vivir y
          profundizar su fe.
        </p>
      </header>

      {/* Opciones de apoyo */}
      <section aria-label="Formas de apoyar" className="grid gap-6 md:grid-cols-2">
        <DonationCard
          title="Donación única"
          description="Realiza un aporte por el valor que desees."
          note="Tú eliges el monto de tu donación directamente en Mercado Pago."
          ctaLabel="Donar ahora"
          href={DONATION_URL}
          icon={<GiftIcon />}
        />

        <DonationCard
          title="Apoyo mensual"
          description="Apóyanos cada mes con el valor que tú decidas."
          note="Puedes elegir libremente cuánto deseas aportar mensualmente."
          ctaLabel="Apoyar cada mes"
          href={SUBSCRIPTION_URL}
          badge="Apoyo continuo"
          featured
          icon={<HeartIcon />}
        />
      </section>

      {/* Sección de confianza */}
      <section
        aria-label="Información de seguridad"
        className="mt-10 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-alt)] px-5 py-4 text-center"
      >
        <p className="flex items-center justify-center gap-2 text-sm text-gray-700">
          <span className="text-[var(--color-primary-dark)]">
            <LockIcon />
          </span>
          Los pagos y suscripciones son procesados de forma segura por Mercado
          Pago.
        </p>
        <p className="mt-1 text-xs text-gray-500 italic">
          Oficio Diario no almacena información de tarjetas ni datos bancarios.
        </p>
      </section>
    </article>
  );
}
