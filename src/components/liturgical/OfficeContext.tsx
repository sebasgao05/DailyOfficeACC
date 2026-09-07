"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type PNPos = "absolucion" | "preces";

interface OfficeCtx {
  pnPos: PNPos;
  setPnPos: (p: PNPos) => void;
}

const Ctx = createContext<OfficeCtx | null>(null);

/** Envuelve una página de oficio para compartir la posición elegida del Padre
 *  Nuestro entre el selector (OfficeIntro) y el bloque tras el credo (OfficePreces). */
export function OfficeProvider({ children }: { children: ReactNode }) {
  const [pnPos, setPnPos] = useState<PNPos>("absolucion");
  return <Ctx.Provider value={{ pnPos, setPnPos }}>{children}</Ctx.Provider>;
}

export function useOffice(): OfficeCtx {
  const c = useContext(Ctx);
  // Fallback defensivo si algún componente se usa fuera del provider.
  if (!c) return { pnPos: "absolucion", setPnPos: () => {} };
  return c;
}
