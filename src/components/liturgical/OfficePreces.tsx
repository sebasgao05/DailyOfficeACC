"use client";

import { MORNING, EVENING, type Prece } from "@/data/officeText";
import { useOffice } from "@/components/liturgical/OfficeContext";

/**
 * Bloque de Preces TRAS EL CREDO, tal como el LOC lo ordena:
 *   Ofic. El Señor esté con ustedes. / R. Y con tu espíritu. / Ofic. Oremos.
 *   ¶ Aquí se dirá el Padre Nuestro, si no se dijo antes.   ← si el usuario lo eligió aquí
 *   (segunda parte de las súplicas: Señor, muéstranos tu misericordia… etc.)
 *   ¶ Enseguida se dice la Colecta del Día…
 */
function Line({ p }: { p: Prece }) {
  if (p.rubrica) return <p className="rubric">{p.rubrica}</p>;
  return (
    <p className={`versicle ${p.voz === "R." ? "response" : ""}`}>
      {p.voz && <strong>{p.voz} </strong>}
      {p.texto}
    </p>
  );
}

export function OfficePreces({ office }: { office: "morning" | "evening" }) {
  const T = office === "morning" ? MORNING : EVENING;
  const { pnPos } = useOffice();

  // La primera línea del bloque tras el credo es siempre "El Señor esté con
  // ustedes / Y con tu espíritu / Oremos"; el resto son las súplicas.
  const salutation = T.precesTrasCredo.slice(0, 3);
  const supplications = T.precesTrasCredo.slice(3);

  return (
    <>
      <div className="my-4 space-y-1">
        {salutation.map((p, i) => <Line key={`s-${i}`} p={p} />)}
      </div>

      {/* Padre Nuestro entre las Preces (si el usuario lo eligió aquí) */}
      <p className="rubric">¶ Aquí se dirá el Padre Nuestro, si no se dijo antes.</p>
      {pnPos === "preces" && (
        <div className="collect"><p>{T.padreNuestro}</p></div>
      )}

      {/* Segunda parte de las súplicas */}
      <div className="my-4 space-y-1">
        {supplications.map((p, i) => <Line key={`sup-${i}`} p={p} />)}
      </div>

      <p className="rubric">
        ¶ Enseguida se dice la Colecta del Día (véase «Colectas, Epístolas y Evangelios»), salvo cuando ha de leerse el Oficio de la Santa Comunión, en cuyo caso aquí se omite.
      </p>
    </>
  );
}
