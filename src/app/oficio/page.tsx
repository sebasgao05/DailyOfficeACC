"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Redirige automáticamente al oficio que corresponde a la hora local:
 *   • Oración Matutina  → de 00:00 a 11:59
 *   • Oración Vespertina → de 12:00 a 23:59
 * La hora debe leerse en el cliente (zona horaria del usuario), por eso esta
 * página es un componente de cliente que redirige tras montar.
 */
export default function OficioDiario() {
  const router = useRouter();

  useEffect(() => {
    const hour = new Date().getHours();
    const destino = hour < 12 ? "/oficio/oracion-matutina" : "/oficio/oracion-vespertina";
    router.replace(destino);
  }, [router]);

  return (
    <p className="rubric text-center">Abriendo el oficio del momento…</p>
  );
}
