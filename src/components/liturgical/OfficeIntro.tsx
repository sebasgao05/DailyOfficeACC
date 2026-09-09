"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { getChurchDay, fromDateParam } from "@/lib/calendar";
import { useOffice } from "@/components/liturgical/OfficeContext";
import {
  MORNING,
  EVENING,
  getAllSentencesGrouped,
  INVITATORIES,
  type Prece,
} from "@/data/officeText";

/**
 * Parte superior variable del Oficio (Matutina/Vespertina):
 * sentencias por TIEMPO litúrgico, exhortación (larga/breve), confesión,
 * absolución (+ alterna en Vespertina), Padre Nuestro con SELECTOR de posición
 * (tras la Absolución o entre las Preces) e invitatorio antes del Venite.
 *
 * padreNuestroPos se comparte con el resto del oficio: cuando el usuario elige
 * rezarlo en las Preces, aquí se oculta y el componente OfficePreces lo muestra.
 */
function Preces({ items }: { items: Prece[] }) {
  return (
    <div className="my-4 space-y-1">
      {items.map((p, i) =>
        p.rubrica ? (
          <p key={i} className="rubric">{p.rubrica}</p>
        ) : (
          <p key={i} className={`versicle ${p.voz === "R." ? "response" : ""}`}>
            {p.voz && (
              <strong style={{ color: p.voz === "R." ? "var(--color-gold)" : "var(--color-primary)" }}>
                {p.voz}{" "}
              </strong>
            )}
            {p.texto}
          </p>
        )
      )}
    </div>
  );
}

function OfficeIntroInner({ office }: { office: "morning" | "evening" }) {
  const searchParams = useSearchParams();
  const dateParam = searchParams.get("date");
  const date = dateParam ? fromDateParam(dateParam) : new Date();
  const churchDay = getChurchDay(date);

  const [exhortBreve, setExhortBreve] = useState(false);
  const { pnPos, setPnPos } = useOffice();
  const [absAlterna, setAbsAlterna] = useState(false);

  const T = office === "morning" ? MORNING : EVENING;
  const sentenceGroups = getAllSentencesGrouped(office, churchDay.season, churchDay.name);

  const PadreNuestro = (
    <>
      <h2 className="section-title" id="padrenuestro">El Padre Nuestro</h2>
      <p className="rubric">{T.padreNuestroRubrica}</p>
      <div className="collect"><p>{T.padreNuestro}</p></div>
    </>
  );

  return (
    <>
      <p className="rubric">{T.rubricaApertura}</p>

      {/* Sentencias por tiempo litúrgico */}
      <h2 className="section-title" id="sentencias">Sentencias de la Escritura</h2>
      <div className="my-4 space-y-4">
        {sentenceGroups.map((g) => (
          <div
            key={g.etiqueta}
            className={g.activo ? "rounded-md p-2 -mx-2" : ""}
            style={g.activo ? { background: "var(--color-bg-alt)", borderLeft: "3px solid var(--color-gold)" } : undefined}
          >
            <p className="text-[11px] uppercase tracking-widest font-semibold mb-1" style={{ color: g.activo ? "var(--color-primary-dark)" : "var(--color-primary)" }}>
              {g.etiqueta}{g.activo ? " — hoy" : ""}
            </p>
            <div className="space-y-2">
              {g.sentencias.map((s, i) => (
                <p key={i} className="text-sm">
                  {s.texto} <em className="text-gray-500">{s.cita}</em>
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Exhortación con selector larga/breve */}
      <div className="flex items-center justify-between gap-3 mb-2 flex-wrap">
        <h2 className="section-title mb-0" id="exhortacion">Exhortación</h2>
        <div className="inline-flex rounded-md border border-[var(--color-border)] overflow-hidden text-xs">
          <button
            onClick={() => setExhortBreve(false)}
            className={`px-3 py-1.5 transition-colors ${!exhortBreve ? "bg-[var(--color-primary-dark)] text-white font-medium" : "bg-white text-[var(--color-primary)]"}`}
          >
            Larga
          </button>
          <button
            onClick={() => setExhortBreve(true)}
            className={`px-3 py-1.5 border-l border-[var(--color-border)] transition-colors ${exhortBreve ? "bg-[var(--color-primary-dark)] text-white font-medium" : "bg-white text-[var(--color-primary)]"}`}
          >
            Breve
          </button>
        </div>
      </div>
      <p className="rubric">{exhortBreve ? T.exhortacionBreveRubrica : T.exhortacionRubrica}</p>
      <div className="my-4"><p>{exhortBreve ? T.exhortacionBreve : T.exhortacionLarga}</p></div>

      {/* Confesión */}
      <h2 className="section-title" id="confesion">Confesión General</h2>
      <p className="rubric">{T.confesionRubrica}</p>
      <div className="collect"><p>{T.confesion}</p></div>

      {/* Absolución (con alterna en Vespertina) */}
      <div className="flex items-center justify-between gap-3 mb-2 flex-wrap">
        <h2 className="section-title mb-0" id="absolucion">{T.absolucionTitulo}</h2>
        {office === "evening" && (
          <div className="inline-flex rounded-md border border-[var(--color-border)] overflow-hidden text-xs">
            <button
              onClick={() => setAbsAlterna(false)}
              className={`px-3 py-1.5 transition-colors ${!absAlterna ? "bg-[var(--color-primary-dark)] text-white font-medium" : "bg-white text-[var(--color-primary)]"}`}
            >
              Forma principal
            </button>
            <button
              onClick={() => setAbsAlterna(true)}
              className={`px-3 py-1.5 border-l border-[var(--color-border)] transition-colors ${absAlterna ? "bg-[var(--color-primary-dark)] text-white font-medium" : "bg-white text-[var(--color-primary)]"}`}
            >
              Forma alterna
            </button>
          </div>
        )}
      </div>
      <p className="rubric">
        {office === "evening" && absAlterna ? EVENING.absolucionAlternaRubrica : T.absolucionRubrica}
      </p>
      <div className="collect">
        <p>{office === "evening" && absAlterna ? EVENING.absolucionAlterna : T.absolucion}</p>
      </div>

      {/* Selector de posición del Padre Nuestro */}
      <div className="my-4 p-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-alt)]">
        <p className="text-xs text-[var(--color-primary)] font-semibold mb-2">
          ¿Dónde rezar el Padre Nuestro?
        </p>
        <div className="inline-flex rounded-md border border-[var(--color-border)] overflow-hidden text-xs">
          <button
            onClick={() => setPnPos("absolucion")}
            className={`px-3 py-1.5 transition-colors ${pnPos === "absolucion" ? "bg-[var(--color-primary-dark)] text-white font-medium" : "bg-white text-[var(--color-primary)]"}`}
          >
            Tras la Absolución
          </button>
          <button
            onClick={() => setPnPos("preces")}
            className={`px-3 py-1.5 border-l border-[var(--color-border)] transition-colors ${pnPos === "preces" ? "bg-[var(--color-primary-dark)] text-white font-medium" : "bg-white text-[var(--color-primary)]"}`}
          >
            Entre las Preces
          </button>
        </div>
      </div>

      {pnPos === "absolucion" && PadreNuestro}

      {/* Preces de apertura */}
      <h2 className="section-title" id="preces">Las Preces</h2>
      <Preces items={T.precesApertura} />

      {/* Invitatorio antes del Venite */}
      <p className="rubric">¶ En los días siguientes, antes del Venite se puede cantar o decir:</p>
      <div className="my-4 text-sm space-y-1 pl-4 border-l-2 border-[var(--color-border)]">
        {INVITATORIES.map((inv, i) => (
          <p key={i}><strong>{inv.ocasion}.</strong> {inv.texto}</p>
        ))}
      </div>
    </>
  );
}

export function OfficeIntro({ office }: { office: "morning" | "evening" }) {
  return (
    <Suspense fallback={<p className="rubric">Cargando…</p>}>
      <OfficeIntroInner office={office} />
    </Suspense>
  );
}
