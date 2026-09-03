import { Metadata } from "next";
import { DailyReadings } from "@/components/DailyReadings";

export const metadata: Metadata = {
  title: "Nona – LOC 1928",
};

export default function Nona() {
  return (
    <article className="office-content">
      <h1
        className="text-3xl text-[var(--color-primary-dark)] text-center mb-2 font-medium"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Nona
      </h1>
      <p className="text-center text-gray-500 italic mb-8">
        La Hora Nona — Oración de la Media Tarde
      </p>

      <p className="rubric">
        ¶ La Nona se dice a media tarde, en memoria de la hora en que Nuestro Señor, inclinando
        la cabeza, entregó su espíritu, y en que el soldado abrió su costado. El oficiante, de pie,
        comienza con los versos de apertura, a los cuales responde la congregación.
      </p>

      {/* Versos de apertura */}
      <h2 className="section-title" id="apertura">Apertura</h2>
      <div className="my-4 space-y-1">
        <p className="versicle"><strong>Ofic.</strong> Oh Dios, ven en mi auxilio.</p>
        <p className="versicle response"><strong>R.</strong> Señor, date prisa en socorrerme.</p>
      </div>
      <p className="rubric">¶ Todos de pie.</p>
      <div className="my-4 space-y-1">
        <p className="versicle">Gloria al Padre, y al Hijo, y al Espíritu Santo.</p>
        <p className="versicle response"><strong>R.</strong> Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén.</p>
        <p className="versicle"><strong>Ofic.</strong> Aleluya.</p>
      </div>
      <p className="rubric">¶ En lugar de <em>Aleluya</em>, desde la Septuagésima hasta la Pascua se dice: <em>Alabanza a Ti, oh Señor, Rey de eterna gloria.</em></p>

      {/* Himno */}
      <h2 className="section-title" id="himno">Himno</h2>
      <p className="text-center text-sm text-gray-500 italic mb-4">Rerum Deus tenax vigor</p>
      <div className="my-4 space-y-3">
        <p className="psalm-verse">Oh Dios, fuerza constante del universo, *<br/>que permaneces inmóvil en Ti mismo,</p>
        <p className="psalm-verse">Y a las horas del día señalas su curso *<br/>con la sucesión ordenada de la luz.</p>
        <p className="psalm-verse">Concédenos una tarde luminosa, *<br/>que la vida no decline jamás,</p>
        <p className="psalm-verse">Sino que una santa muerte *<br/>nos gane la gloria perdurable.</p>
        <p className="psalm-verse">Concédelo, Padre misericordiosísimo, *<br/>y Tú, Hijo Unigénito igual al Padre,</p>
        <p className="psalm-verse">Que con el Espíritu Consolador *<br/>reinas por los siglos de los siglos. Amén.</p>
      </div>

      {/* Salmodia */}
      <h2 className="section-title" id="salmos">Salmodia</h2>
      <p className="rubric">
        ¶ Se dice la antífona, y luego la porción de los Salmos señalada para la hora conforme
        al uso de la Iglesia. Al final de cada salmo se dice el <em>Gloria Patri</em>, y se repite
        la antífona.
      </p>
      <div className="my-4 space-y-1">
        <p className="versicle"><strong>Ant.</strong> A la hora nona, clamando Jesús con gran voz, entregó su espíritu.</p>
      </div>
      <DailyReadings period="evening" />
      <div className="my-4 space-y-1">
        <p className="versicle"><strong>Ant.</strong> A la hora nona, clamando Jesús con gran voz, entregó su espíritu.</p>
      </div>

      {/* Lectura breve */}
      <h2 className="section-title" id="lectura">Lectura Breve</h2>
      <p className="text-center text-sm text-gray-500 italic mb-2">1 San Pedro 1:17-19</p>
      <div className="my-4">
        <p>Portaos con temor durante el tiempo de vuestro destierro; pues sabéis que fuisteis rescatados de vuestra vana conducta, no con cosas corruptibles, como el oro o la plata, sino con la sangre preciosa de Cristo, como de un cordero sin mancha y sin defecto.</p>
      </div>
      <div className="my-4 space-y-1">
        <p className="versicle"><strong>R.</strong> Demos gracias a Dios.</p>
      </div>

      {/* Responsorio */}
      <h2 className="section-title" id="responsorio">Responsorio Breve</h2>
      <div className="my-4 space-y-1">
        <p className="versicle"><strong>Ofic.</strong> Redímeme, Señor, y ten piedad de mí.</p>
        <p className="versicle response"><strong>R.</strong> Redímeme, Señor, y ten piedad de mí.</p>
        <p className="versicle"><strong>Ofic.</strong> Pues mi pie se mantiene en el camino recto.</p>
        <p className="versicle response"><strong>R.</strong> Y ten piedad de mí.</p>
        <p className="versicle"><strong>Ofic.</strong> Gloria al Padre, y al Hijo, y al Espíritu Santo.</p>
        <p className="versicle response"><strong>R.</strong> Redímeme, Señor, y ten piedad de mí.</p>
      </div>

      {/* Versos */}
      <h2 className="section-title" id="versiculos">Versículos</h2>
      <div className="my-4 space-y-1">
        <p className="versicle"><strong>Ofic.</strong> Cerca está el Señor de los que le invocan.</p>
        <p className="versicle response"><strong>R.</strong> De cuantos le invocan de verdad.</p>
      </div>

      {/* Padre Nuestro */}
      <h2 className="section-title" id="padrenuestro">El Padre Nuestro</h2>
      <p className="rubric">¶ Dicho por todos.</p>
      <div className="collect">
        <p>Padre nuestro que estás en el cielo, santificado sea tu Nombre; venga a nosotros tu reino; hágase tu voluntad en la tierra como en el cielo. Danos hoy nuestro pan de cada día; perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden; no nos dejes caer en tentación, y líbranos del mal. Amén.</p>
      </div>

      {/* Preces */}
      <div className="my-4 space-y-1">
        <p className="versicle"><strong>Ofic.</strong> El Señor esté con vosotros.</p>
        <p className="versicle response"><strong>R.</strong> Y con tu espíritu.</p>
        <p className="versicle"><strong>Ofic.</strong> Oremos.</p>
      </div>

      {/* Colecta de Nona */}
      <h2 className="section-title" id="colecta">La Colecta</h2>
      <div className="collect">
        <p>Oh Dios, que a la hora nona quisiste que tu Hijo unigénito, muriendo en la Cruz, descendiese a las regiones de los muertos para librar al género humano: concédenos, te suplicamos, que, muertos al pecado por su preciosa muerte, seamos siempre partícipes de su resurrección gloriosa; por el mismo Jesucristo, tu Hijo, nuestro Señor, que Contigo vive y reina en unidad del Espíritu Santo, un solo Dios, por los siglos de los siglos. Amén.</p>
      </div>

      {/* Conclusión */}
      <h2 className="section-title" id="conclusion">Conclusión</h2>
      <div className="my-4 space-y-1">
        <p className="versicle"><strong>Ofic.</strong> El Señor esté con vosotros.</p>
        <p className="versicle response"><strong>R.</strong> Y con tu espíritu.</p>
        <p className="versicle"><strong>Ofic.</strong> Bendigamos al Señor.</p>
        <p className="versicle response"><strong>R.</strong> Demos gracias a Dios.</p>
      </div>
      <div className="text-center my-8 italic">
        <p>Las almas de los fieles, por la misericordia de Dios, descansen en paz. Amén.</p>
      </div>
    </article>
  );
}
