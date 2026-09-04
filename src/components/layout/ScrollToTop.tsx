"use client";

import { useEffect, useState } from "react";

/**
 * Botón flotante para volver al inicio de la página. Aparece tras desplazarse
 * un poco; útil sobre todo en móvil, donde los oficios son muy largos.
 */
export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Volver arriba"
      className="fixed bottom-5 right-5 z-50 w-11 h-11 rounded-full shadow-lg flex items-center justify-center text-lg transition-transform hover:scale-110 active:scale-95"
      style={{ background: "var(--color-primary-dark)", color: "var(--color-gold)", border: "2px solid var(--color-gold)" }}
    >
      ↑
    </button>
  );
}
