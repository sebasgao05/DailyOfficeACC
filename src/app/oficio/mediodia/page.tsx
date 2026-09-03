import { Metadata } from "next";
import { DailyReadings } from "@/components/DailyReadings";

export const metadata: Metadata = {
  title: "Oración del Mediodía – LOC 1928",
};

export default function Mediodia() {
  return (
    <article className="office-content">
      <h1
        className="text-3xl text-[var(--color-primary-dark)] text-center mb-2 font-medium"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Oración del Mediodía
      </h1>
      <p className="text-center text-gray-500 italic mb-8">
        El Orden para la Oración del Mediodía — Hora Sexta
      </p>

      <p className="rubric">
        ¶ Al mediodía, o a la hora más conveniente, todos de pie, el oficiante comenzará el
        oficio con los versos de apertura.
      </p>

      {/* Versos de apertura */}
      <h2 className="section-title" id="apertura">Versos de Apertura</h2>
      <div className="my-4 space-y-1">
        <p className="versicle"><strong>Ofic.</strong> Oh Dios, ven en mi auxilio.</p>
        <p className="versicle response"><strong>R.</strong> Señor, date prisa en socorrerme.</p>
        <p className="versicle">Gloria al Padre, y al Hijo, y al Espíritu Santo.</p>
        <p className="versicle response"><strong>R.</strong> Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén.</p>
        <p className="versicle"><strong>Ofic.</strong> Alaben al Señor.</p>
        <p className="versicle response"><strong>R.</strong> El Nombre del Señor sea alabado.</p>
      </div>

      {/* Himno */}
      <h2 className="section-title" id="himno">Himno</h2>
      <p className="text-center text-sm text-gray-500 italic mb-4">Rector potens, verax Deus</p>
      <div className="my-4 space-y-3">
        <p className="psalm-verse">Oh Dios, Regidor poderoso y verdadero, *<br/>que gobiernas los tiempos y las horas,</p>
        <p className="psalm-verse">Que enciendes la mañana con fulgores *<br/>y abrasas el mediodía con ardientes rayos:</p>
        <p className="psalm-verse">Apaga las llamas de las contiendas, *<br/>aparta de nosotros el calor dañoso,</p>
        <p className="psalm-verse">Concede la salud a nuestros cuerpos *<br/>y la verdadera paz a nuestros corazones.</p>
        <p className="psalm-verse">Concédelo, Padre piadosísimo, *<br/>y Tú, Unigénito igual al Padre,</p>
        <p className="psalm-verse">Que con el Espíritu Consolador *<br/>reinas por todos los siglos. Amén.</p>
      </div>

      {/* Salmodia */}
      <h2 className="section-title" id="salmos">Los Salmos</h2>
      <p className="rubric">
        ¶ Después seguirá una porción de los Salmos según el uso de la Iglesia. En el uso
        tradicional de la Hora Sexta se dicen los Salmos 119:33-48 (o los graduales 120, 121 y
        122); aquí se ofrece la porción del día.
      </p>
      {/* El componente DailyReadings sólo admite los periodos "morning" | "evening";
          no existe un periodo "midday". Se usa "evening" como porción disponible del día. */}
      <DailyReadings period="evening" />
      <p className="gloria">Gloria al Padre, y al Hijo, y al Espíritu Santo.<br/>Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén.</p>

      {/* Lectura breve */}
      <h2 className="section-title" id="lectura">Lectura Breve</h2>
      <p className="rubric">¶ Todos sentados.</p>
      <div className="my-4">
        <p>Hermanos: Sea vuestra manera de vivir sin avaricia, contentos con lo que tenéis; porque él mismo ha dicho: «No te desampararé, ni te dejaré». <em className="text-gray-500">Hebreos 13:5</em></p>
      </div>
      <div className="my-4 space-y-1">
        <p className="versicle"><strong>Ofic.</strong> Demos gracias a Dios.</p>
      </div>

      {/* Versos */}
      <h2 className="section-title" id="versiculos">Versículos</h2>
      <div className="my-4 space-y-1">
        <p className="versicle"><strong>Ofic.</strong> El Señor es mi fortaleza y mi cántico.</p>
        <p className="versicle response"><strong>R.</strong> Y ha sido mi salvación.</p>
      </div>

      {/* Kyrie */}
      <h2 className="section-title" id="kyrie">Kyrie</h2>
      <div className="my-4 space-y-1">
        <p className="versicle"><strong>Ofic.</strong> Señor, ten piedad de nosotros.</p>
        <p className="versicle response"><strong>R.</strong> Cristo, ten piedad de nosotros.</p>
        <p className="versicle"><strong>Ofic.</strong> Señor, ten piedad de nosotros.</p>
      </div>

      {/* Padre Nuestro */}
      <h2 className="section-title" id="padrenuestro">El Padre Nuestro</h2>
      <p className="rubric">¶ El oficiante y el pueblo, de pie.</p>
      <div className="collect">
        <p>Padre nuestro que estás en el cielo, santificado sea tu Nombre; venga a nosotros tu reino; hágase tu voluntad en la tierra como en el cielo. Danos hoy nuestro pan de cada día; perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden; no nos dejes caer en tentación, y líbranos del mal. Amén.</p>
      </div>

      {/* Preces */}
      <h2 className="section-title" id="preces">Versículos</h2>
      <div className="my-4 space-y-1">
        <p className="versicle"><strong>Ofic.</strong> El Señor esté con vosotros.</p>
        <p className="versicle response"><strong>R.</strong> Y con tu espíritu.</p>
        <p className="versicle"><strong>Ofic.</strong> Oremos.</p>
      </div>

      {/* Colectas del Mediodía */}
      <h2 className="section-title" id="colectas">Colectas del Mediodía</h2>
      <div className="collect">
        <p>Oh Dios bendito, Señor de los cielos y de la tierra, que a esta hora sexta, mientras tu Hijo unigénito pendía de la Cruz, cubriste de tinieblas toda la tierra: Concédenos, Te rogamos, que, apartadas de nosotros las tinieblas del pecado, caminemos siempre en la luz de tu presencia; por Jesucristo nuestro Señor. Amén.</p>
      </div>
      <div className="collect">
        <p>Oh Señor Jesucristo, que a la hora sexta subiste a la Cruz por la redención del mundo, y derramaste tu preciosísima Sangre para la remisión de nuestros pecados: Te suplicamos humildemente que, después de la muerte, nos concedas entrar con gozo por las puertas del Paraíso; Tú que vives y reinas con el Padre y el Espíritu Santo, un solo Dios, por los siglos de los siglos. Amén.</p>
      </div>
      <div className="collect">
        <p>Dirige, oh Señor, nuestras acciones por tu santa inspiración, y llévalas a efecto con tu continua ayuda; para que toda obra nuestra tenga en Ti su principio, y por Ti sea felizmente acabada; por Jesucristo nuestro Señor. Amén.</p>
      </div>

      {/* Conclusión */}
      <h2 className="section-title" id="conclusion">Conclusión</h2>
      <div className="my-4 space-y-1">
        <p className="versicle"><strong>Ofic.</strong> Bendigamos al Señor.</p>
        <p className="versicle response"><strong>R.</strong> Demos gracias a Dios.</p>
      </div>
      <div className="text-center my-8 italic">
        <p>La gracia de nuestro Señor Jesucristo, el amor de Dios, y la comunión del Espíritu Santo, sea con todos nosotros para siempre. Amén.</p>
      </div>
    </article>
  );
}
