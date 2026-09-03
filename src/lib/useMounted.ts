"use client";

import { useSyncExternalStore } from "react";

// Store externo trivial: nunca cambia tras el montaje.
const emptySubscribe = () => () => {};

/**
 * Devuelve `false` durante el render del servidor y el primer render del
 * cliente (para que la hidratación coincida con el HTML estático), y `true`
 * una vez montado en el navegador.
 *
 * Se apoya en `useSyncExternalStore`, cuyo tercer argumento (`getServerSnapshot`)
 * es el valor usado en servidor/primera hidratación. Así evitamos el
 * anti-patrón de llamar a `setState` dentro de un `useEffect` solo para
 * detectar que estamos en el cliente.
 */
export function useMounted(): boolean {
  return useSyncExternalStore(
    emptySubscribe,
    () => true, // snapshot del cliente
    () => false // snapshot del servidor / primera hidratación
  );
}
