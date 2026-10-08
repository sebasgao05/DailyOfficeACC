import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acerca",
  description:
    "Acerca de Oración Común en Línea: dedicatoria, propósito y herencia de la Iglesia Católica Anglicana.",
};

/**
 * Página «Acerca» a modo de pequeño blog. Por ahora recoge la DEDICATORIA.
 * Más adelante se podrán añadir entradas: historia del LOC, de la ACC, créditos
 * del creador, patronato, etc. (ver el arreglo `entradas`).
 */
interface Entrada {
  id: string;
  titulo: string;
  resumen?: string;
  parrafos: string[];
}

const entradas: Entrada[] = [
  {
    id: "dedicatoria",
    titulo: "Dedicatoria",
    resumen: "A la mayor gloria de Dios y para la edificación de su Santa Iglesia.",
    parrafos: [
      "Esta página nace del profundo amor por la fe, la liturgia y la sagrada tradición de la Iglesia Católica Anglicana, con el propósito de acercar a clérigos y fieles la riqueza espiritual del Libro de Oración Común de 1928, conforme a la tradición litúrgica preservada por la Iglesia Católica Anglicana (ACC).",
      "Conscientes de que la oración es el corazón de la vida cristiana y de que la liturgia constituye un tesoro recibido de nuestros antepasados en la fe, hemos emprendido esta labor para ofrecer, en lengua española, un instrumento que facilite el conocimiento, la comprensión y la práctica del Oficio Diario.",
      "Esta traducción ha sido realizada procurando guardar fidelidad al sentido, la doctrina y el espíritu del texto tradicional, empleando un lenguaje claro y comprensible para nuestro tiempo, sin sacrificar la reverencia, la solemnidad ni la belleza propias de la oración litúrgica. Porque hacer accesible la tradición no significa despojarla de su dignidad, sino permitir que su riqueza continúe iluminando los corazones de nuevas generaciones.",
      "Que esta obra sirva no solamente como una herramienta para la oración, sino también como una puerta al conocimiento de nuestra identidad católica anglicana, de nuestra herencia apostólica y de aquella fe que hemos recibido, custodiado y estamos llamados a transmitir.",
      "Dedicamos especialmente esta obra a dos grandes santos de la Iglesia:",
      "A San Jerónimo, presbítero y doctor de la Iglesia, insigne traductor de las Sagradas Escrituras, cuya entrega al estudio y a la transmisión fiel de la Palabra de Dios inspira este esfuerzo de traducción. Que por su intercesión aprendamos a servir a la verdad con humildad, fidelidad y amor, recordando que traducir los textos sagrados es también una forma de servir a quienes buscan acercarse a Dios.",
      "Y a San José, castísimo esposo de la Santísima Virgen María, padre custodio de Nuestro Señor Jesucristo y protector de la Santa Iglesia, a quien confiamos esta obra y a todos aquellos que harán uso de ella. Que bajo su paternal patrocinio permanezcamos firmes en la fe, perseverantes en la oración y fieles a la tradición que hemos recibido.",
      "Que cada palabra pronunciada en este Oficio, cada salmo elevado al cielo y cada oración ofrecida en la intimidad del corazón sean para gloria de la Santísima Trinidad y para la santificación de su pueblo.",
      "Que la antigua fe encuentre siempre nuevas voces que la proclamen, y que la oración de la Iglesia jamás deje de elevarse desde los labios de sus hijos.",
    ],
  },
];

export default function AcercaPage() {
  return (
    <article className="office-content max-w-[720px] mx-auto">
      <h1
        className="text-3xl text-[var(--color-primary-dark)] text-center mb-2 font-medium tracking-wider"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Acerca
      </h1>
      <p className="text-center text-gray-500 italic mb-10">
        Historia, propósito y herencia de esta obra
      </p>

      {entradas.map((entrada) => (
        <section key={entrada.id} id={entrada.id} className="mb-12">
          <h2 className="section-title">{entrada.titulo}</h2>

          {entrada.resumen && (
            <p className="text-center text-lg italic text-[var(--color-primary)] mb-6">
              {entrada.resumen}
            </p>
          )}

          <div className="space-y-4 text-justify">
            {entrada.parrafos.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Lema final de la dedicatoria */}
          {entrada.id === "dedicatoria" && (
            <p
              className="text-center text-xl italic text-[var(--color-gold)] mt-8"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Ad maiorem Dei gloriam.
            </p>
          )}
        </section>
      ))}
    </article>
  );
}
