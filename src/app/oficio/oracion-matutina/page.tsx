import { Metadata } from "next";
import { DailyReadings } from "@/components/DailyReadings";
import { CanticleSelector } from "@/components/CanticleSelector";
import { OccasionalPrayers } from "@/components/OccasionalPrayers";

export const metadata: Metadata = {
  title: "Oración Matutina – LOC 1928",
};

export default function OracionMatutina() {
  return (
    <article className="office-content">
      <h1
        className="text-3xl text-[var(--color-primary-dark)] text-center mb-2 font-medium"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Oración Matutina
      </h1>
      <p className="text-center text-gray-500 italic mb-8">
        El Orden para la Oración Matutina, diariamente a través del año
      </p>

      <p className="rubric">
        ¶ El oficiante dará comienzo a la Oración Matutina leyendo una o más de las siguientes
        sentencias de la Escritura; luego seguirá la exhortación. A su criterio puede pasar de
        las sentencias directamente al Padre Nuestro.
      </p>

      <h2 className="section-title" id="sentencias">Sentencias de la Escritura</h2>

      <div className="my-4 space-y-3">
        <p>El Señor está en su santo templo, ¡silencio ante él toda la tierra! <em className="text-gray-500">Hab. 2:20</em></p>
        <p>¡Qué alegría cuando me dijeron: «Vamos a la casa del Señor»! <em className="text-gray-500">Sal. 122:1</em></p>
        <p>Preserva a tu siervo de la arrogancia, para que no me domine: así quedaré limpio e inocente del gran pecado. <em className="text-gray-500">Sal. 19:14</em></p>
        <p>Envía tu luz y tu verdad: que ellas me guíen y me conduzcan hasta tu monte santo, hasta tu morada. <em className="text-gray-500">Sal. 43:3</em></p>
        <p>Porque esto dice el Alto y Excelso, que vive para siempre y cuyo nombre es «Santo»: Habito en un lugar alto y sagrado, pero estoy con los de ánimo humilde y quebrantado, para reanimar a los humildes, para reanimar el corazón quebrantado. <em className="text-gray-500">Isaías 57:15</em></p>
        <p>Pero se acerca la hora, ya está aquí, en que los verdaderos adoradores adorarán al Padre en espíritu y verdad, porque el Padre desea que lo adoren así. <em className="text-gray-500">S. Juan 4:23</em></p>
        <p>Gracia y paz a vosotros de parte de Dios, nuestro Padre, y del Señor Jesucristo. <em className="text-gray-500">Fil. 1:2</em></p>
      </div>

      <p className="rubric">¶ En Adviento:</p>
      <div className="my-3 space-y-2 pl-4">
        <p>Convertíos, porque está cerca el reino de los cielos. <em className="text-gray-500">San Mateo 3:2</em></p>
        <p>En el desierto preparadle un camino al Señor; allanad en la estepa una calzada para nuestro Dios. <em className="text-gray-500">Isaías 40:3</em></p>
      </div>

      <p className="rubric">¶ En Navidad:</p>
      <div className="my-3 pl-4">
        <p>No temáis, os anuncio una buena noticia que será de gran alegría para todo el pueblo: hoy, en la ciudad de David, os ha nacido un Salvador, el Mesías, el Señor. <em className="text-gray-500">S. Lucas 2:10-11</em></p>
      </div>

      <p className="rubric">¶ En Cuaresma:</p>
      <div className="my-3 space-y-2 pl-4">
        <p>Rasgad vuestros corazones, no vuestros vestidos, y convertíos al Señor vuestro Dios, un Dios compasivo y misericordioso, lento a la cólera y rico en amor, que se arrepiente del castigo. <em className="text-gray-500">Joel 2:13</em></p>
        <p>Los sacrificios no te satisfacen: si te ofreciera un holocausto, no lo querrías. El sacrificio agradable a Dios es un espíritu quebrantado; un corazón quebrantado y humillado, tú, oh Dios, tú no lo desprecias. <em className="text-gray-500">Sal. 51:17</em></p>
        <p>Me levantaré, me pondré en camino adonde está mi padre, y le diré: Padre, he pecado contra el cielo y contra ti; ya no merezco llamarme hijo tuyo. <em className="text-gray-500">S. Lucas 15:18-19</em></p>
      </div>

      <p className="rubric">¶ En Pascua:</p>
      <div className="my-3 space-y-2 pl-4">
        <p>Era verdad, ha resucitado el Señor y se ha aparecido. <em className="text-gray-500">S. Lucas 24:34</em></p>
        <p>Este es el día que hizo el Señor: sea nuestra alegría y nuestro gozo. <em className="text-gray-500">Salmo 118:24</em></p>
      </div>

      <p className="rubric">¶ En Pentecostés:</p>
      <div className="my-3 pl-4">
        <p>Recibiréis la fuerza del Espíritu Santo que va a venir sobre vosotros y seréis mis testigos en Jerusalén, en toda Judea y Samaría y hasta el confín de la tierra. <em className="text-gray-500">Hechos 1:8</em></p>
      </div>

      {/* Exhortación */}
      <h2 className="section-title">Exhortación</h2>
      <p className="rubric">¶ Enseguida el oficiante dirá:</p>
      <div className="my-4">
        <p>Carísimos hermanos: la Escritura nos exhorta en muchos lugares a reconocer y confesar nuestros pecados y maldades, y a no ocultarlos ni disimularlos delante de Dios, nuestro Padre celestial, sino a confesarlos con corazón humilde, arrepentido y obediente, para alcanzar el perdón por su infinita bondad y misericordia. Y aunque en todo tiempo debemos reconocer humildemente nuestros pecados delante de Dios, hemos de hacerlo sobre todo cuando nos reunimos para darle gracias por los grandes beneficios que hemos recibido de su mano, para proclamar sus alabanzas, escuchar su santa Palabra y pedirle lo necesario para el cuerpo y para el alma. Por eso les pido y ruego a todos los que están presentes que, con corazón puro y voz humilde, me acompañen ante el trono de la gracia celestial, diciendo:</p>
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
        <p>Dios todopoderoso, Padre de nuestro Señor Jesucristo, que no quiere la muerte del pecador, sino que se convierta de su maldad y viva, ha dado a sus ministros poder y mandato de declarar y anunciar a su pueblo arrepentido la absolución y el perdón de sus pecados. Él perdona y absuelve a todos los que de veras se arrepienten y creen con sinceridad en su santo Evangelio. Pidámosle. Por tanto, que nos conceda verdadero arrepentimiento y su Espíritu Santo, para que lo que ahora hacemos le sea agradable, y para que el resto de nuestra vida sea puro y santo, de modo que al fin lleguemos a su gozo eterno; por Cristo Jesús, nuestro Señor. Amén.</p>
      </div>

      {/* Padre Nuestro */}
      <h2 className="section-title">El Padre Nuestro</h2>
      <p className="rubric">¶ El oficiante se arrodillará y dirá el Padre Nuestro, y el pueblo, también de rodillas, lo repetirá con él.</p>
      <div className="collect">
        <p>Padre nuestro que estás en el cielo, santificado sea tu Nombre; venga a nosotros tu reino; hágase tu voluntad en la tierra como en el cielo. Danos hoy nuestro pan de cada día; perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden; no nos dejes caer en tentación, y líbranos del mal. Amén.</p>
      </div>

      {/* Versículos */}
      <h2 className="section-title">Versículos</h2>
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

      {/* Invitatorio */}
      <p className="rubric">¶ En los días siguientes, antes del Venite se puede cantar o decir:</p>
      <div className="my-4 text-sm space-y-1 pl-4 border-l-2 border-[var(--color-border)]">
        <p><strong>Adviento.</strong> Nuestro Rey y Salvador se acerca: * vengan, adorémoslo.</p>
        <p><strong>Navidad hasta la Epifanía.</strong> ¡Aleluya! Un Niño nos ha nacido: * vengan, adorémoslo.</p>
        <p><strong>Epifanía.</strong> El Señor ha manifestado su gloria: * vengan, adorémoslo.</p>
        <p><strong>Pascua.</strong> ¡Aleluya! El Señor verdaderamente ha resucitado: * vengan, adorémoslo. ¡Aleluya!</p>
        <p><strong>Ascensión.</strong> ¡Aleluya! Cristo el Señor subió a los cielos: * vengan, adorémoslo. ¡Aleluya!</p>
        <p><strong>Pentecostés.</strong> ¡Aleluya! El Espíritu del Señor llena el mundo: * vengan, adorémoslo. ¡Aleluya!</p>
        <p><strong>Dominica de Trinidad.</strong> Padre, Hijo y Espíritu Santo, un solo Dios: * vengan, adorémoslo.</p>
      </div>

      {/* Venite */}
      <h2 className="section-title" id="invitatorio">Venite, exultemus Domino</h2>
      <div className="my-4 space-y-3">
        <p className="psalm-verse">Venid, aclamemos al Señor; *<br/>demos vítores a la Roca que nos salva.</p>
        <p className="psalm-verse">Entremos a su presencia dándole gracias; *<br/>aclamándolo con cantos.</p>
        <p className="psalm-verse">Porque el Señor es un Dios grande; *<br/>soberano de todos los dioses.</p>
        <p className="psalm-verse">Tiene en su mano las simas de la tierra; *<br/>son suyas las cumbres de los montes.</p>
        <p className="psalm-verse">Suyo es el mar, porque él lo hizo; *<br/>la tierra firme que modelaron sus manos.</p>
        <p className="psalm-verse">Entrad, postrémonos por tierra; *<br/>bendiciendo al Señor, creador nuestro.</p>
        <p className="psalm-verse">Porque él es nuestro Dios; *<br/>y nosotros su pueblo, el rebaño que él guía.</p>
        <p className="psalm-verse">Postraos ante el Señor en el atrio sagrado; *<br/>tiemble en su presencia la tierra toda.</p>
        <p className="psalm-verse">Delante del Señor, que ya llega, ya llega a regir la tierra. *<br/>Regirá el orbe con justicia y los pueblos con fidelidad.</p>
      </div>

      <p className="gloria">Gloria al Padre, y al Hijo, y al Espíritu Santo.<br/>Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén.</p>

      {/* Salmos y Primera Lectura */}
      <h2 className="section-title" id="salmos">Los Salmos</h2>
      <p className="rubric">¶ Entonces seguirá una porción de los Salmos, según el Uso de la Iglesia.</p>
      <DailyReadings period="morning" />

      <h2 className="section-title" id="lecturas">La Primera Lectura</h2>
      <p className="rubric">¶ Enseguida se leerá la Primera Lección, según la Tabla de Lecciones o el Calendario.</p>

      {/* Te Deum */}
      <CanticleSelector period="morning" position="first" />
      <h2 className="section-title">Te Deum laudamus</h2>
      <div className="my-4 space-y-1">
        <p>A ti, oh Dios, te alabamos, a ti, Señor, te reconocemos.</p>
        <p>A ti, eterno Padre, te venera toda la creación.</p>
        <p>Los ángeles todos, los cielos y todas las potestades te honran.</p>
        <p>Los querubines y serafines te cantan sin cesar:</p>
        <p className="font-semibold">Santo, Santo, Santo es el Señor, Dios del universo.</p>
        <p>Los cielos y la tierra están llenos de la majestad de tu gloria.</p>
        <p>A ti te ensalza el glorioso coro de los Apóstoles,</p>
        <p>La multitud admirable de los Profetas,</p>
        <p>El blanco ejército de los mártires.</p>
        <p>A ti la Iglesia santa, extendida por toda la tierra, te proclama:</p>
        <p>Padre, de inmensa majestad,</p>
        <p>Hijo único y verdadero, digno de adoración,</p>
        <p>Espíritu Santo, Defensor.</p>
        <p className="mt-4">Tú eres el Rey de la gloria, Cristo.</p>
        <p>Tú eres el Hijo único del Padre.</p>
        <p>Tú, para liberar al hombre, aceptaste la condición humana sin desdeñar el seno de la Virgen.</p>
        <p>Tú, rotas las cadenas de la muerte, abriste a los creyentes el reino de los cielos.</p>
        <p>Tú te sientas a la derecha de Dios, en la gloria del Padre.</p>
        <p>Creemos que un día has de venir como juez.</p>
        <p>Te rogamos, pues, que vengas en ayuda de tus siervos, a quienes redimiste con tu preciosa sangre.</p>
        <p>Haz que en la gloria eterna nos asociemos a tus santos.</p>
        <p className="mt-4">Salva a tu pueblo, Señor, y bendice tu heredad.</p>
        <p>Sé su pastor y ensálzalo eternamente.</p>
        <p>Día tras día te bendecimos</p>
        <p>Y alabamos tu nombre para siempre, por eternidad de eternidades.</p>
        <p>Dígnate, Señor, en este día guardarnos del pecado.</p>
        <p>Ten piedad de nosotros, Señor, ten piedad de nosotros.</p>
        <p>Que tu misericordia, Señor, venga sobre nosotros como lo esperamos de ti.</p>
        <p>En ti, Señor, confié: no me veré defraudado para siempre.</p>
      </div>

      {/* Segunda Lectura */}
      <h2 className="section-title">La Segunda Lectura</h2>
      <p className="rubric">¶ Enseguida se leerá la Segunda Lección del Nuevo Testamento.</p>

      {/* Canticle Selector: Benedictus / Jubilate */}
      <CanticleSelector period="morning" position="second" />

      {/* Benedictus */}
      <h2 className="section-title">Benedictus</h2>
      <p className="rubric italic text-sm text-center text-gray-500 mb-4">El Cántico de Zacarías — Lucas 1:68-79</p>
      <div className="my-4 space-y-3">
        <p className="psalm-verse">Bendito sea el Señor, Dios de Israel, *<br/>porque ha visitado y redimido a su pueblo</p>
        <p className="psalm-verse">Suscitándonos una fuerza de salvación *<br/>en la casa de David, su siervo,</p>
        <p className="psalm-verse">Según lo había predicho desde antiguo *<br/>por boca de sus santos profetas.</p>
        <p className="psalm-verse">Es la salvación que nos libra de nuestros enemigos *<br/>y de la mano de todos los que nos odian</p>
        <p className="psalm-verse">Realizando la misericordia que tuvo con nuestros padres, *<br/>recordando su santa alianza</p>
        <p className="psalm-verse">Y el juramento que juró a nuestro padre Abrahán *<br/>para concedernos</p>
        <p className="psalm-verse">Que, libres de temor, arrancados de la mano de los enemigos, *<br/>le sirvamos.</p>
        <p className="psalm-verse">Con santidad y justicia, en su presencia, *<br/>todos nuestros días.</p>
        <p className="psalm-verse">Y a ti, niño, te llamarán profeta del Altísimo, *<br/>porque irás delante del Señor a preparar sus caminos,</p>
        <p className="psalm-verse">Anunciando a su pueblo la salvación *<br/>por el perdón de sus pecados.</p>
        <p className="psalm-verse">Por la entrañable misericordia de nuestro Dios, *<br/>nos visitará el sol que nace de lo alto</p>
        <p className="psalm-verse">Para iluminar a los que viven en tinieblas y en sombra de muerte, *<br/>para guiar nuestros pasos por el camino de la paz.</p>
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
        <p className="versicle"><strong>Ofic.</strong> Oh Dios, crea en nosotros un corazón limpio.</p>
        <p className="versicle response"><strong>R.</strong> Y no apartes de nosotros tu santo Espíritu.</p>
      </div>

      {/* Colecta por la Paz */}
      <h2 className="section-title" id="colectas">Colecta por la Paz</h2>
      <div className="collect">
        <p>Oh Dios, que eres Autor de la paz y amante de la concordia; Conocerte es Vida Eterna, y servirte, plena libertad. Defiende a estos tus humildes siervos de todos los asaltos de nuestros enemigos; para que, confiando seguramente en tu protección, no temamos la astucia de ningún adversario; mediante el poder de Jesucristo nuestro Señor. Amén.</p>
      </div>

      {/* Colecta por la Gracia */}
      <h2 className="section-title">Colecta por la Gracia</h2>
      <div className="collect">
        <p>Oh Señor, nuestro Padre Celestial, Poderoso y Eterno Dios, que nos has conducido con seguridad al principio de este día; Defiéndenos con tu gran poder; y concede que no caigamos hoy en ningún pecado, ni incurramos en ningún peligro; sino que todas nuestras acciones, siendo dirigidas y gobernadas por ti, sean justas a tus ojos; mediante Jesucristo nuestro Señor. Amén.</p>
      </div>

      {/* Oración por las Autoridades */}
      <h2 className="section-title">Oración por las Autoridades Civiles</h2>
      <div className="collect">
        <p>Oh Señor, nuestro Padre Celestial, excelso y poderoso Gobernador del Universo, que desde tu trono contemplas a todos los que moran en la tierra; De todo corazón te suplicamos que mires con favor y bendigas a tu siervo el Presidente de esta Nación, y a todos los otros en autoridad; y que de tal manera los llenes de la gracia de tu Espíritu Santo, que se inclinen siempre a tu voluntad, y anden en tus caminos. Otórgale copiosamente de los dones celestiales; y concédeles salud, prosperidad y larga vida; para que finalmente, después de esta vida, obtengan felicidad y gozo eternos; por Jesucristo nuestro Señor. Amén.</p>
      </div>

      {/* Oración por Todas las Personas */}
      <h2 className="section-title">Oración por Todas las Personas</h2>
      <div className="collect">
        <p>Oh Dios, Creador y Conservador del género humano, te rogamos humildemente por los hombres de todas clases y condiciones; suplicándote que te dignes hacerles conocer tus caminos, y tu salud eterna a todas las naciones. Y más especialmente te rogamos por tu Santa Iglesia universal; para que sea dirigida y gobernada por tu Santo Espíritu, a fin de que todos los que profesan y se llaman cristianos sean conducidos por el camino de la verdad, y guarden la fe en unidad de espíritu, en vínculo de paz, y en rectitud de vida. Y, finalmente, encomendamos a tu paternal bondad a todos los que de cualquier manera están afligidos o angustiados en cuerpo, mente o estado; para que te dignes consolarlos y aliviarlos, conforme a sus diversas necesidades, concediéndoles paciencia en sus sufrimientos, y un dichoso desenlace de todas sus aflicciones. Y esto te pedimos por amor de Jesucristo nuestro Señor. Amén.</p>
      </div>

      {/* Acción de Gracias */}
      <h2 className="section-title" id="accion-gracias">Acción de Gracias General</h2>
      <div className="collect">
        <p>Dios Todopoderoso, Padre de todas las misericordias, nosotros tus indignos siervos te damos humildísimas y sinceras gracias por toda tu bondad y benevolencia para con nosotros y para con todos los hombres. Te bendecimos por nuestra creación, conservación, y por todas las bendiciones de esta vida; pero sobre todo, por tu inestimable amor en la redención del mundo por nuestro Señor Jesucristo; por los medios de gracia, y por la esperanza de gloria. Y te suplicamos, danos una justa apreciación de todas tus misericordias, para que nuestros corazones te estén sinceramente agradecidos, y que manifestemos tu alabanza, no solo con nuestros labios, sino en nuestras vidas, entregándonos a tu servicio, y caminando delante de ti en santidad y justicia todos nuestros días; por Jesucristo nuestro Señor, a quien contigo y con el Espíritu Santo, sea todo honor y gloria, por los siglos de los siglos. Amén.</p>
      </div>

      {/* San Crisóstomo */}
      <h2 className="section-title">Oración de San Crisóstomo</h2>
      <div className="collect">
        <p>Dios Todopoderoso, que nos has concedido la gracia de elevar ante ti nuestras súplicas comunes de común acuerdo; y nos prometes que cuando dos o tres se reúnan en tu Nombre, les concederás sus peticiones: Cumple ahora, oh Señor, los deseos y peticiones de tus siervos, según les sea más conveniente; concediéndonos en este mundo el conocimiento de tu verdad, y en el venidero la vida eterna. Amén.</p>
      </div>

      {/* Gracia */}
      <div className="text-center my-8 italic">
        <p className="text-sm text-gray-500 mb-2">2 Corintios 13:14</p>
        <p>La gracia de nuestro Señor Jesucristo, el amor de Dios, y la comunión del Espíritu Santo, sea con todos nosotros para siempre. Amén.</p>
      </div>
    </article>
  );
}



