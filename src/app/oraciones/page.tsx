import { Metadata } from "next";

export const metadata: Metadata = { title: "Oraciones y Acciones de Gracias – LOC 1928" };

const prayers = [
  { title: "Por la Dirección Divina", text: "Dirigenos, oh Señor, en todas nuestras acciones, con tu benignísimo favor, y auxílianos con tu continua ayuda; para que en todas nuestras obras principiadas, continuadas y terminadas en ti, glorifiquemos tu Santo Nombre, y finalmente, por tu misericordia, obtengamos la vida eterna; por Jesucristo nuestro Señor. Amén." },
  { title: "Por las Necesidades Desconocidas", text: "Omnipotente Dios, fuente de toda sabiduría, que conoces nuestras necesidades antes de que te pidamos, y nuestra ignorancia en pedir; Te rogamos tengas compasión de nuestras debilidades; y te dignes otorgarnos aquellas cosas que por nuestra indignidad y ceguedad no sabemos ni nos atrevemos a pedir; te lo suplicamos, por los méritos de tu Hijo Jesucristo nuestro Señor. Amén." },
  { title: "Por ser Oídos", text: "Omnipotente Dios, que has prometido oír las peticiones que se hagan en el Nombre de tu Hijo; Te suplicamos que misericordiosamente escuches a los que te dirigimos nuestras súplicas y plegarias; y concede que aquellas cosas que fielmente hemos pedido según tu voluntad, sean efectivamente obtenidas, para alivio de nuestra necesidad, y manifestación de tu gloria; por Jesucristo nuestro Señor. Amén." },
];

const thanksgivings = [
  { title: "Por los Frutos de la Tierra", text: "Benigísimo Dios, por cuya sabiduría se levantan las aguas de los mares y las nubes derraman la lluvia sobre la tierra: te ofrecemos nuestra sincera gratitud y alabanza por el tiempo de la siembra y de la cosecha, por la fecundidad de la tierra, por la recolección de sus frutos y por todas las demás bendiciones que, en tu misericordiosa providencia, has concedido a este pueblo y a nuestra nación. Te suplicamos que nos concedas reconocer justamente estos grandes beneficios y demostrar nuestra gratitud mediante una vida humilde, santa y obediente delante de ti, todos los días de nuestra existencia; por Jesucristo nuestro Señor. Amén." },
  { title: "Por la Lluvia", text: "Dios, Padre celestial, que en tu bondadosa providencia haces descender sobre la tierra la lluvia oportuna para que produzca frutos para nuestro sustento: te damos humildemente gracias porque te has dignado enviarnos la lluvia para nuestro bienestar y para gloria de tu santo Nombre; por Jesucristo nuestro Señor. Amén." },
];

export default function Oraciones() {
  return (
    <article className="max-w-[700px] mx-auto">
      <h1 className="text-3xl text-[var(--color-primary-dark)] text-center mb-1 font-medium tracking-wider" style={{ fontFamily: "var(--font-heading)" }}>
        Oraciones y Acciones de Gracias
      </h1>
      <p className="text-center text-gray-500 italic mb-2">En varias ocasiones</p>
      <p className="text-center text-sm text-gray-400 mb-8">
        Para usarse antes de las dos Oraciones finales de la Oración Matutina y Vespertina.
      </p>

      <h2 className="section-title">Oraciones</h2>

      <div className="space-y-6 mb-10">
        {prayers.map((prayer, i) => (
          <section key={i}>
            <h3 className="text-base font-medium text-[var(--color-primary-dark)] mb-2 text-center uppercase tracking-wider text-xs">
              {prayer.title}
            </h3>
            <div className="collect">
              <p>{prayer.text}</p>
            </div>
          </section>
        ))}
      </div>

      <h2 className="section-title">Acciones de Gracias</h2>
      <p className="rubric mb-4">¶ Para usarse después de la Acción de Gracias General, o cuando ésta no sea dicha, antes de la Oración Final o de la Bendición.</p>

      <div className="space-y-6">
        {thanksgivings.map((t, i) => (
          <section key={i}>
            <h3 className="text-base font-medium text-[var(--color-primary-dark)] mb-2 text-center uppercase tracking-wider text-xs">
              {t.title}
            </h3>
            <div className="collect">
              <p>{t.text}</p>
            </div>
          </section>
        ))}
      </div>

      <div className="mt-8 p-4 bg-[var(--color-bg-alt)] rounded-lg text-center text-sm text-gray-600">
        <p>Las demás oraciones y acciones de gracias se están añadiendo progresivamente desde el LOC 1928.</p>
      </div>
    </article>
  );
}
