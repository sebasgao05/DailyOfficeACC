import { Metadata } from "next";
import { DailyReadings } from "@/components/DailyReadings";
import { CanticleSelector } from "@/components/CanticleSelector";
import { OccasionalPrayers } from "@/components/OccasionalPrayers";

export const metadata: Metadata = {
  title: "Oración Vespertina – LOC 1928",
};

export default function OracionVespertina() {
  return (
    <article className="office-content">
      <h1
        className="text-3xl text-[var(--color-primary-dark)] text-center mb-2 font-medium"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Oración Vespertina
      </h1>
      <p className="text-center text-gray-500 italic mb-8">
        El Orden para la Oración Vespertina Diaria
      </p>

      <p className="rubric">
        ¶ El oficiante comenzará la Oración Vespertina leyendo una o más de las siguientes
        sentencias de la Escritura, y lo que sigue a ellas; pero puede, a su criterio, pasar de
        las sentencias al Padre Nuestro.
      </p>

      <h2 className="section-title" id="sentencias">Sentencias de la Escritura</h2>

      <div className="my-4 space-y-3">
        <p>El Señor está en su santo templo, ¡silencio ante él toda la tierra! <em className="text-gray-500">Hab. 2:20</em></p>
        <p>Señor, yo amo la belleza de tu casa, el lugar donde reside tu gloria. <em className="text-gray-500">Sal. 26:8</em></p>
        <p>Suba mi oración como incienso en tu presencia, el alzar de mis manos como ofrenda de la tarde. <em className="text-gray-500">Sal. 141:2</em></p>
        <p>Postraos ante el Señor en el atrio sagrado, tiemble en su presencia la tierra toda. <em className="text-gray-500">Sal. 96:9</em></p>
        <p>Que te agraden las palabras de mi boca, y llegue a tu presencia el meditar de mi corazón, Señor, Roca mía, Redentor mío. <em className="text-gray-500">Sal. 19:14</em></p>
      </div>

      <p className="rubric">¶ En Adviento:</p>
      <div className="my-3 space-y-2 pl-4">
        <p>Velad entonces, pues no sabéis cuándo vendrá el Señor de la casa, si al atardecer, o a medianoche, o al canto del gallo, o al amanecer: no sea que venga inesperadamente y os encuentre dormidos. <em className="text-gray-500">San Marcos 13:35-36</em></p>
        <p>En el desierto preparadle un camino al Señor; allanad en la estepa una calzada para nuestro Dios. <em className="text-gray-500">Isaías 40:3</em></p>
      </div>

      <p className="rubric">¶ En Navidad:</p>
      <div className="my-3 pl-4">
        <p>He aquí la morada de Dios entre los hombres, y morará entre ellos, y ellos serán su pueblo, y el «Dios con ellos» será su Dios. <em className="text-gray-500">Rev. 21:3</em></p>
      </div>

      <p className="rubric">¶ En Epifanía:</p>
      <div className="my-3 pl-4">
        <p>Caminarán los pueblos a tu luz, los reyes al resplandor de tu aurora. <em className="text-gray-500">Isaías 60:3</em></p>
      </div>

      <p className="rubric">¶ En Cuaresma:</p>
      <div className="my-3 space-y-2 pl-4">
        <p>Pues yo reconozco mi culpa, tengo siempre presente mi pecado. <em className="text-gray-500">Sal. 51:3</em></p>
        <p>Mi Señor, nuestro Dios, es compasivo y perdona, aunque nos hemos rebelado contra él. <em className="text-gray-500">Dan. 9:9</em></p>
        <p>Si decimos que no hemos pecado, nos engañamos y la verdad no está en nosotros. Pero, si confesamos nuestros pecados, él, que es fiel y justo, nos perdonará los pecados y nos limpiará de toda injusticia. <em className="text-gray-500">1 S. Juan 1:8-9</em></p>
      </div>

      <p className="rubric">¶ En Viernes Santo:</p>
      <div className="my-3 pl-4">
        <p>Todos errábamos como ovejas, cada uno siguiendo su camino; y el Señor cargó sobre él todos nuestros crímenes. <em className="text-gray-500">Isa. 53:12</em></p>
      </div>

      <p className="rubric">¶ En Pascua:</p>
      <div className="my-3 space-y-2 pl-4">
        <p>¡Gracias a Dios, que nos da la victoria por medio de nuestro Señor Jesucristo! <em className="text-gray-500">1 Cor. 15:57</em></p>
        <p>Por tanto, si habéis resucitado con Cristo, buscad los bienes de allá arriba, donde Cristo está sentado a la derecha de Dios. <em className="text-gray-500">Col. 3:1</em></p>
      </div>

      <p className="rubric">¶ En la Ascensión:</p>
      <div className="my-3 pl-4">
        <p>Cristo entró no en un santuario construido por hombres, imagen del auténtico, sino en el mismo cielo, para ponerse ante Dios, intercediendo por nosotros. <em className="text-gray-500">Heb. 9:24</em></p>
      </div>

      <p className="rubric">¶ En Pentecostés:</p>
      <div className="my-3 space-y-2 pl-4">
        <p>Un río y sus canales alegran la ciudad de Dios, el Altísimo consagra su morada. <em className="text-gray-500">Sal. 46:4</em></p>
        <p>El Espíritu y la esposa dicen: «¡Ven!». Y quien lo oiga, diga: «¡Ven!». Y quien tenga sed, que venga. Y quien quiera, que tome el agua de la vida gratuitamente. <em className="text-gray-500">Rev. 22:17</em></p>
      </div>

      <p className="rubric">¶ En la Dominica de la Trinidad:</p>
      <div className="my-3 pl-4">
        <p>Santo, santo, santo es el Señor del universo, ¡llena está la tierra de su gloria! <em className="text-gray-500">Isaías 6:3</em></p>
      </div>

      {/* Confesión */}
      <h2 className="section-title" id="confesion">Confesión General</h2>
      <p className="rubric">¶ La dirá toda la congregación, de rodillas, repitiéndola después del oficiante.</p>
      <div className="collect">
        <p>Padre todopoderoso y misericordiosísimo: hemos errado y nos hemos apartado de tus caminos como ovejas perdidas. Hemos seguido demasiado los deseos e intenciones de nuestro propio corazón. Hemos quebrantado tus santas leyes. Hemos dejado de hacer lo que debíamos hacer, y hemos hecho lo que no debíamos; y no hay salud en nosotros. Pero tú, Señor, ten compasión de nosotros, pobres pecadores. Perdona, oh Dios, a los que confiesan sus culpas; restaura a los que se arrepienten, conforme a tus promesas anunciadas al género humano en Cristo Jesús, nuestro Señor. Y concédenos, oh Padre misericordiosísimo, por amor de él, vivir de aquí en adelante una vida justa, santa y sobria, para gloria de tu santo Nombre. Amén.</p>
      </div>

      {/* Absolución */}
      <h2 className="section-title">Declaración de la Absolución</h2>
      <p className="rubric">¶ La hará solo el presbítero, de pie, mientras la congregación permanece de rodillas.</p>
      <div className="collect">
        <p>Dios todopoderoso, Padre de nuestro Señor Jesucristo, que no quiere la muerte del pecador, sino que se convierta de su maldad y viva, ha dado a sus ministros poder y mandato de declarar y anunciar a su pueblo arrepentido la absolución y el perdón de sus pecados. Él perdona y absuelve a todos los que de veras se arrepienten y creen con sinceridad en su santo Evangelio. Por tanto, Te pedimos que nos conceda verdadero arrepentimiento y su Espíritu Santo, para que lo que ahora hacemos le sea agradable, y para que el resto de nuestra vida sea puro y santo, de modo que al fin lleguemos a su gozo eterno; por Cristo Jesús, nuestro Señor. Amén.</p>
      </div>

      {/* Padre Nuestro */}
      <h2 className="section-title">El Padre Nuestro</h2>
      <div className="collect">
        <p>Padre nuestro que estás en el cielo, santificado sea tu Nombre; venga a nosotros tu reino; hágase tu voluntad en la tierra como en el cielo. Danos hoy nuestro pan de cada día; perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden; no nos dejes caer en tentación, y líbranos del mal. Porque tuyo es el reino, el poder y la gloria, por los siglos de los siglos. Amén.</p>
      </div>

      {/* Versículos */}
      <h2 className="section-title" id="invitatorio">Versículos</h2>
      <div className="my-4 space-y-1">
        <p className="versicle"><strong>Ofic.</strong> Señor, abre nuestros labios.</p>
        <p className="versicle response"><strong>R.</strong> Y nuestra boca proclamará tu alabanza.</p>
      </div>
      <p className="rubric">¶ Todos de pie.</p>
      <div className="my-4 space-y-1">
        <p className="versicle">Gloria al Padre, y al Hijo, y al Espíritu Santo.</p>
        <p className="versicle response"><strong>R.</strong> Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén.</p>
        <p className="versicle"><strong>Ofic.</strong> Alaben al Señor.</p>
        <p className="versicle response"><strong>R.</strong> El Nombre del Señor sea alabado.</p>
      </div>

      {/* Salmos */}
      <h2 className="section-title" id="salmos">Los Salmos</h2>
      <p className="rubric">¶ Después seguirá una porción de los Salmos según el uso de la Iglesia.</p>
      <DailyReadings period="evening" />

      <h2 className="section-title" id="lecturas">La Primera Lectura</h2>
      <p className="rubric">¶ Entonces se leerá la primera lección, conforme a la tabla o calendario establecido.</p>

      {/* Magnificat */}
      <CanticleSelector period="evening" position="first" />
      <h2 className="section-title">Magnificat</h2>
      <p className="text-center text-sm text-gray-500 italic mb-4">El Cántico de la Bienaventurada Virgen María — Lucas 1:46-55</p>
      <div className="my-4 space-y-3">
        <p className="psalm-verse">Proclama mi alma la grandeza del Señor, *<br/>se alegra mi espíritu en Dios mi Salvador.</p>
        <p className="psalm-verse">Porque ha mirado *<br/>la humillación de su esclava.</p>
        <p className="psalm-verse">Desde ahora me felicitarán *<br/>todas las generaciones.</p>
        <p className="psalm-verse">Porque el Poderoso ha hecho obras grandes por mí. *<br/>Su nombre es Santo.</p>
        <p className="psalm-verse">Y su misericordia llega a sus fieles, *<br/>de generación en generación.</p>
        <p className="psalm-verse">Él hace proezas con su brazo; *<br/>dispersa a los soberbios de corazón.</p>
        <p className="psalm-verse">Derriba del trono a los poderosos, *<br/>y enaltece a los humildes.</p>
        <p className="psalm-verse">A los hambrientos los colma de bienes, *<br/>y a los ricos despide vacíos.</p>
        <p className="psalm-verse">Auxilia a Israel su siervo, acordándose de su Misericordia, *<br/>como lo había prometido a nuestros padres en favor de Abrahán y su descendencia por siempre.</p>
      </div>
      <p className="gloria">Gloria al Padre, y al Hijo, y al Espíritu Santo.<br/>Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén.</p>

      {/* Segunda Lectura */}
      <h2 className="section-title">La Segunda Lectura</h2>
      <p className="rubric">¶ Después se leerá la segunda lección, tomada del Nuevo Testamento.</p>

      {/* Nunc Dimittis */}
      <CanticleSelector period="evening" position="second" />
      <h2 className="section-title">Nunc Dimittis</h2>
      <p className="text-center text-sm text-gray-500 italic mb-4">El Cántico de Simeón — Lucas 2:29-32</p>
      <div className="my-4 space-y-3">
        <p className="psalm-verse">Ahora, Señor, según tu promesa, *<br/>puedes dejar a tu siervo irse en paz.</p>
        <p className="psalm-verse">Porque mis ojos han visto *<br/>tu Salvador,</p>
        <p className="psalm-verse">A quien has presentado *<br/>ante todos los pueblos:</p>
        <p className="psalm-verse">Luz para alumbrar a las naciones *<br/>y gloria de tu pueblo Israel.</p>
      </div>
      <p className="gloria">Gloria al Padre, y al Hijo, y al Espíritu Santo.<br/>Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén.</p>

      {/* Credo */}
      <h2 className="section-title" id="credo">El Credo de los Apóstoles</h2>
      <p className="rubric">¶ Entonces el oficiante y el pueblo, de pie, dirán el Credo de los Apóstoles.</p>
      <div className="collect">
        <p className="mb-2">Creo en Dios Padre, Todopoderoso, Creador del cielo y de la tierra.</p>
        <p className="mb-2">Creo en Jesucristo, su único Hijo, Nuestro Señor, que fue concebido por obra y gracia del Espíritu Santo, nació de Santa María siempre Virgen, padeció bajo el poder de Poncio Pilato, fue crucificado, muerto y sepultado, descendió a los infiernos, al tercer día resucitó de entre los muertos, subió a los cielos y está sentado a la derecha de Dios Padre Todopoderoso. Desde allí vendrá a juzgar a vivos y muertos.</p>
        <p>Creo en el Espíritu Santo, la Santa Iglesia Católica, la comunión de los santos, el perdón de los pecados, la resurrección de la carne y la vida eterna. Amén.</p>
      </div>

      {/* Preces */}
      <h2 className="section-title" id="preces">Las Preces</h2>
      <div className="my-4 space-y-1">
        <p className="versicle"><strong>Ofic.</strong> El Señor esté con ustedes.</p>
        <p className="versicle response"><strong>R.</strong> Y con tu espíritu.</p>
        <p className="versicle"><strong>Ofic.</strong> Oremos.</p>
      </div>
      <div className="my-4 space-y-1">
        <p className="versicle"><strong>Ofic.</strong> Señor, muéstranos tu misericordia.</p>
        <p className="versicle response"><strong>R.</strong> Y concédenos tu salvación.</p>
        <p className="versicle"><strong>Ofic.</strong> Oh Señor, salva al Estado.</p>
        <p className="versicle response"><strong>R.</strong> Y óyenos misericordiosamente cuando te invocamos.</p>
        <p className="versicle"><strong>Ofic.</strong> Adorna a tus ministros de rectitud.</p>
        <p className="versicle response"><strong>R.</strong> Y alegra a tu pueblo escogido.</p>
        <p className="versicle"><strong>Ofic.</strong> Oh Señor, salva a tu pueblo.</p>
        <p className="versicle response"><strong>R.</strong> Y bendice a tu heredad.</p>
        <p className="versicle"><strong>Ofic.</strong> Danos paz en nuestros días, oh Señor.</p>
        <p className="versicle response"><strong>R.</strong> Porque sólo en Ti, Señor, estamos seguros.</p>
        <p className="versicle"><strong>Ofic.</strong> Oh Dios, purifica nuestros corazones.</p>
        <p className="versicle response"><strong>R.</strong> Y no quites de nosotros tu Santo Espíritu.</p>
      </div>

      {/* Colecta del Día */}
      <h2 className="section-title">La Colecta del Día</h2>
      <p className="rubric">¶ Enseguida se dice la Colecta del Día.</p>

      {/* Colecta por la Paz */}
      <h2 className="section-title" id="colectas">Colecta por la Paz</h2>
      <div className="collect">
        <p>Oh Dios, de quien proceden todos los santos deseos, todos los rectos consejos y las obras justas; Concede a tus siervos aquella paz que el mundo no puede dar, para que nuestros corazones se inclinen a cumplir tus mandamientos, y, amparados por ti, contra el temor de nuestros enemigos, podamos vivir en tranquila paz; por los méritos de Jesucristo nuestro Señor. Amén.</p>
      </div>

      {/* Colecta contra los Peligros */}
      <h2 className="section-title">Colecta por la Ayuda contra los Peligros</h2>
      <div className="collect">
        <p>Te Suplicamos, oh Señor, disipes nuestras tinieblas; y por tu gran misericordia guárdanos de todos los peligros y riesgos de esta noche; por amor de tu Hijo único nuestro Salvador Jesucristo. Amén.</p>
      </div>

      {/* Oraciones adicionales */}
      <h2 className="section-title">Oración por las Autoridades Civiles</h2>
      <div className="collect">
        <p>Oh Dios Omnipotente, cuyo reino es sempiterno, y cuyo poder es infinito; Ten piedad de esta tierra; y gobierna de tal manera los corazones de tus siervos, el Presidente, y todas las demás autoridades civiles, para que reconociendo de quien son ministros, busquen sobre todas las cosas tu honra y gloria; y para que nosotros y todo el pueblo, considerando debidamente de quien son autoridad, los honremos con fidelidad y obediencia, conforme a tu bendita Palabra y ordenanza; por medio de Jesucristo nuestro Señor, quien contigo y el Espíritu Santo es un solo Dios, y vive y reina por los siglos de los siglos. Amén.</p>
      </div>

      <h2 className="section-title">Oración por el Clero y el Pueblo</h2>
      <div className="collect">
        <p>Omnipotente y Eterno Dios, de quien procede toda buena dádiva y todo don perfecto; Envía el saludable Espíritu de tu gracia sobre nuestros Obispos y demás Clero, y sobre las Congregaciones encomendadas a su cargo. Y para que verdaderamente te agraden, derrama sobre ellos el continuo rocío de tu bendición. Concede esto, oh Señor, por el honor de nuestro Mediador y Abogado, Jesucristo. Amén.</p>
      </div>

      <h2 className="section-title" id="accion-gracias">Oración por Todas las Personas</h2>
      <div className="collect">
        <p>Oh Dios, Creador y Conservador del género humano, te rogamos humildemente por los hombres de todas clases y condiciones; suplicándote que te dignes hacerles conocer tus caminos, y tu salud eterna a todas las naciones. Y más especialmente te rogamos por tu Santa Iglesia universal; para que sea dirigida y gobernada por tu Santo Espíritu, a fin de que todos los que profesan y se llaman cristianos sean conducidos por el camino de la verdad, y guarden la fe en unidad de espíritu, en vínculo de paz, y en rectitud de vida. Y, finalmente, encomendamos a tu bondad paternal a todos los que de cualquiera manera están afligidos, o angustiados, en mente, cuerpo o corazón; suplicándote que los consueles y alivies según sus diversas necesidades, dándoles paciencia en sus sufrimientos y una feliz liberación de todas sus aflicciones. Todo esto te lo pedimos por amor de Jesucristo nuestro Señor. Amén.</p>
      </div>

      {/* Gracia final */}
      <div className="text-center my-8 italic">
        <p className="text-sm text-gray-500 mb-2">2 Corintios 13:14</p>
        <p>La gracia de nuestro Señor Jesucristo, el amor de Dios, y la comunión del Espíritu Santo, sea con todos nosotros para siempre. Amén.</p>
      </div>
    </article>
  );
}


