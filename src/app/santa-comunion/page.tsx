import { Metadata } from "next";
import { collects } from "@/data/collects";

export const metadata: Metadata = { title: "La Santa Comunión – LOC 1928" };

export default function SantaComunion() {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Sidebar */}
      <aside className="md:w-52 shrink-0 hidden md:block">
        <nav className="sticky top-24 space-y-2">
          <p className="font-semibold text-xs uppercase tracking-wider text-gray-400 mb-3" style={{ fontFamily: "var(--font-heading)" }}>
            Santa Comunión
          </p>
          {[
            { href: "#introduccion", label: "Introducción" },
            { href: "#colecta-dia", label: "Colecta del Día" },
            { href: "#epistola", label: "Epístola" },
            { href: "#evangelio", label: "Evangelio" },
            { href: "#credo-niceno", label: "Credo Niceno" },
            { href: "#ofertorio", label: "Ofertorio" },
            { href: "#exhortacion", label: "Exhortación" },
            { href: "#confesion", label: "Confesión" },
            { href: "#confortacion", label: "Confortación" },
            { href: "#consagracion", label: "Consagración" },
            { href: "#comunion", label: "Comunión" },
            { href: "#post-comunion", label: "Post-Comunión" },
            { href: "#propios", label: "Propios del Día" },
          ].map((s) => (
            <a key={s.href} href={s.href} className="block text-sm text-[var(--color-primary)] hover:text-[var(--color-gold)] transition-colors">
              {s.label}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <article className="flex-1 min-w-0 office-content">
        <h1 className="text-3xl text-[var(--color-primary-dark)] text-center mb-1 font-medium tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>
          El Orden para la Administración
        </h1>
        <h2 className="text-2xl text-[var(--color-primary-dark)] text-center mb-1 font-medium" style={{ fontFamily: "var(--font-heading)" }}>
          de la Cena del Señor, o
        </h2>
        <h2 className="text-2xl text-[var(--color-primary-dark)] text-center mb-8 font-medium" style={{ fontFamily: "var(--font-heading)" }}>
          Santa Comunión
        </h2>

        {/* Introduction */}
        <h2 className="section-title" id="introduccion">Introducción</h2>
        <p className="rubric">
          ¶ La Colecta, la Epístola y el Evangelio, designados para cada Domínica servirán toda la semana, cuando no esté ordenado en este Libro de otra manera.
        </p>
        <p className="rubric mt-4">
          ¶ El Sacerdote, de pie ante la Santa Mesa, dirá el Padre Nuestro con la Colecta siguiente, estando el pueblo de rodillas.
        </p>

        <div className="collect">
          <p>Padre nuestro que estás en el cielo, santificado sea tu Nombre; venga a nosotros tu reino; hágase tu voluntad en la tierra como en el cielo. Danos hoy nuestro pan de cada día; perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden; no nos dejes caer en tentación, y líbranos del mal. Amén.</p>
        </div>

        <h2 className="section-title">La Colecta de Pureza</h2>
        <div className="collect">
          <p>Omnipotente Dios, a quien toda intención se manifiesta, todo deseo se conoce, y ningún secreto se oculta: Purifica los pensamientos de nuestros corazones con la inspiración de tu Santo Espíritu, para que te amemos perfectamente y magnifiquemos dignamente tu santo Nombre; por Jesucristo nuestro Señor. Amén.</p>
        </div>

        <h2 className="section-title">Los Diez Mandamientos</h2>
        <p className="rubric">¶ Entonces el Sacerdote, vuelto hacia el pueblo, recitará visiblemente los Diez Mandamientos.</p>
        <div className="my-4 space-y-3">
          <div>
            <p className="font-medium">I. Yo soy el Señor tu Dios: No tendrás dioses ajenos delante de mí.</p>
            <p className="versicle response ml-4 italic">Señor, ten piedad de nosotros, e inclina nuestros corazones a guardar esta ley.</p>
          </div>
          <div>
            <p className="font-medium">II. No te harás imagen de escultura.</p>
            <p className="versicle response ml-4 italic">Señor, ten piedad de nosotros, e inclina nuestros corazones a guardar esta ley.</p>
          </div>
          <div>
            <p className="font-medium">III. No tomarás el nombre del Señor tu Dios en vano.</p>
            <p className="versicle response ml-4 italic">Señor, ten piedad de nosotros, e inclina nuestros corazones a guardar esta ley.</p>
          </div>
          <div>
            <p className="font-medium">IV. Acuérdate del día de reposo para santificarlo.</p>
            <p className="versicle response ml-4 italic">Señor, ten piedad de nosotros, e inclina nuestros corazones a guardar esta ley.</p>
          </div>
          <div>
            <p className="font-medium">V. Honra a tu padre y a tu madre.</p>
            <p className="versicle response ml-4 italic">Señor, ten piedad de nosotros, e inclina nuestros corazones a guardar esta ley.</p>
          </div>
          <div>
            <p className="font-medium">VI. No matarás.</p>
            <p className="versicle response ml-4 italic">Señor, ten piedad de nosotros, e inclina nuestros corazones a guardar esta ley.</p>
          </div>
          <div>
            <p className="font-medium">VII. No cometerás adulterio.</p>
            <p className="versicle response ml-4 italic">Señor, ten piedad de nosotros, e inclina nuestros corazones a guardar esta ley.</p>
          </div>
          <div>
            <p className="font-medium">VIII. No hurtarás.</p>
            <p className="versicle response ml-4 italic">Señor, ten piedad de nosotros, e inclina nuestros corazones a guardar esta ley.</p>
          </div>
          <div>
            <p className="font-medium">IX. No hablarás contra tu prójimo falso testimonio.</p>
            <p className="versicle response ml-4 italic">Señor, ten piedad de nosotros, e inclina nuestros corazones a guardar esta ley.</p>
          </div>
          <div>
            <p className="font-medium">X. No codiciarás.</p>
            <p className="versicle response ml-4 italic">Señor, ten piedad de nosotros, e inscribe todas estas tus leyes en nuestros corazones, te rogamos.</p>
          </div>
        </div>

        {/* Collect of the Day */}
        <h2 className="section-title" id="colecta-dia">La Colecta del Día</h2>
        <p className="rubric">¶ Aquí se dice la Colecta del Día.</p>

        {/* Epistle */}
        <h2 className="section-title" id="epistola">La Epístola</h2>
        <p className="rubric">¶ El Subdiácono leerá la Epístola.</p>

        {/* Gospel */}
        <h2 className="section-title" id="evangelio">El Evangelio</h2>
        <p className="rubric">¶ Entonces se leerá el Evangelio, estando todos de pie, diciendo el Diácono o Sacerdote:</p>
        <div className="my-3 space-y-1">
          <p className="versicle">El santo Evangelio está escrito en el capítulo … de … comenzando en el versículo …</p>
          <p className="versicle response"><strong>R.</strong> Gloria a ti, oh Señor.</p>
        </div>
        <p className="rubric">¶ Después del Evangelio:</p>
        <p className="versicle response text-center my-2"><strong>R.</strong> Alabanza a ti, oh Cristo.</p>

        {/* Nicene Creed */}
        <h2 className="section-title" id="credo-niceno">El Credo Niceno</h2>
        <div className="collect">
          <p className="mb-2">Creo en un solo Dios, Padre Todopoderoso, Creador del cielo y de la tierra, de todo lo visible y lo invisible.</p>
          <p className="mb-2">Creo en un solo Señor, Jesucristo, Hijo único de Dios, nacido del Padre antes de todos los siglos: Dios de Dios, Luz de Luz, Dios verdadero de Dios verdadero, engendrado, no creado, de la misma naturaleza del Padre, por quien todo fue hecho; que por nosotros los hombres, y por nuestra salvación bajó del cielo, y por obra del Espíritu Santo se encarnó de María, la Virgen, y se hizo hombre; y por nuestra causa fue crucificado en tiempo de Poncio Pilato; padeció y fue sepultado, y resucitó al tercer día, según las Escrituras, y subió al cielo, y está sentado a la diestra del Padre; y de nuevo vendrá con gloria para juzgar a vivos y muertos, y su reino no tendrá fin.</p>
          <p>Creo en el Espíritu Santo, Señor y dador de vida, que procede del Padre y del Hijo, que con el Padre y el Hijo recibe una misma adoración y gloria, y que habló por los profetas; y en una, santa, católica y apostólica Iglesia. Confieso un solo bautismo para el perdón de los pecados. Espero la resurrección de los muertos y la vida del mundo futuro. Amén.</p>
        </div>

        {/* Offertory */}
        <h2 className="section-title" id="ofertorio">Ofertorio</h2>
        <p className="rubric">¶ Se dirá una o más de estas sentencias durante el ofrecimiento de las limosnas.</p>
        <div className="my-4 space-y-2 text-sm">
          <p>Así alumbre vuestra luz delante de los hombres, para que vean vuestras buenas obras, y glorifiquen a vuestro Padre que está en los cielos. <em className="text-gray-500">San Mateo 5:16</em></p>
          <p>No os hagáis tesoros en la tierra, sino haceos tesoros en el cielo; porque donde esté vuestro tesoro, allí estará también vuestro corazón. <em className="text-gray-500">San Mateo 6:19-21</em></p>
          <p>Todo lo que queráis que los hombres hagan con vosotros, así también haced vosotros con ellos; porque esta es la ley y los profetas. <em className="text-gray-500">San Mateo 7:12</em></p>
          <p>Dad, y se os dará; porque con la misma medida con que midiereis, os volverán a medir. <em className="text-gray-500">San Lucas 6:38</em></p>
        </div>

        {/* Exhortation */}
        <h2 className="section-title" id="exhortacion">Exhortación</h2>
        <p className="rubric">¶ Cuando el Sacerdote advierta que las personas son negligentes en venir a la Santa Comunión, dirá esta exhortación:</p>
        <div className="collect text-sm">
          <p>Carísimos en el Señor: Yo os exhorto, en nombre de nuestro Señor Jesucristo, a que cuando os lleguéis a tomar el santísimo Cuerpo y Sangre de nuestro Salvador Cristo, consideréis la dignidad del sagrado misterio, y el gran peligro que corren los que le reciben indignamente. Examinad, pues, vuestras vidas y conducta conforme a la regla de los mandamientos de Dios, y arrepentíos de corazón de todo aquello en que hallares que habéis faltado de pensamiento, palabra u obra, y proponeos enmendar la vida.</p>
        </div>

        {/* Confession */}
        <h2 className="section-title" id="confesion">La Confesión</h2>
        <p className="rubric">¶ Entonces se hará esta Confesión General, en nombre de todos los que desean recibir la Santa Comunión, arrodillados el Sacerdote y los comulgantes.</p>
        <div className="collect">
          <p>Dios omnipotente, Padre de nuestro Señor Jesucristo, Creador de todas las cosas, Juez de todos los hombres: Reconocemos y lamentamos nuestros muchos pecados y maldades, que en diversos tiempos hemos cometido, de pensamiento, de palabra, y de obra, contra tu divina Majestad, provocando justísimamente tu ira e indignación contra nosotros. Nos arrepentimos sinceramente, y nos pesa de corazón de todas estas nuestras culpas; su recuerdo es intolerable para nosotros, su peso insoportable. Ten piedad de nosotros, ten piedad de nosotros, Padre misericordiosísimo; por tu Hijo nuestro Señor Jesucristo perdona todo lo pasado; y concédenos que de aquí en adelante le sirvamos y agrademos en novedad de vida, para honra y gloria de tu Nombre; por Jesucristo nuestro Señor. Amén.</p>
        </div>

        {/* Absolution */}
        <h2 className="section-title" id="confortacion">La Absolución</h2>
        <p className="rubric">¶ El Sacerdote (u Obispo, si estuviere presente) se pondrá de pie, y vuelto hacia el pueblo, pronunciará la Absolución.</p>
        <div className="collect">
          <p>Dios omnipotente, nuestro Padre celestial, que por su gran misericordia ha prometido el perdón de los pecados a todos aquellos que con verdadero arrepentimiento y fe sincera se vuelven a él: Ten piedad de vosotros; os perdone y libre de todos vuestros pecados; os confirme y fortalezca en toda bondad, y os conduzca a la vida eterna; por Jesucristo nuestro Señor. Amén.</p>
        </div>

        {/* Comfortable Words */}
        <h2 className="section-title">Las Palabras de Confortación</h2>
        <p className="rubric">¶ Entonces el Sacerdote dirá:</p>
        <div className="my-4 space-y-3">
          <p>Oíd las palabras consoladoras que nuestro Salvador Cristo dice a todos los que se vuelven verdaderamente a él:</p>
          <p className="pl-4">Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar. <em className="text-gray-500">San Mateo 11:28</em></p>
          <p className="pl-4">Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna. <em className="text-gray-500">San Juan 3:16</em></p>
          <p className="pl-4">Palabra fiel y digna de ser recibida por todos: que Cristo Jesús vino al mundo para salvar a los pecadores. <em className="text-gray-500">1 Timoteo 1:15</em></p>
          <p className="pl-4">Si alguno hubiere pecado, abogado tenemos para con el Padre, a Jesucristo el justo; y él es la propiciación por nuestros pecados. <em className="text-gray-500">1 San Juan 2:1-2</em></p>
        </div>

        {/* Sursum Corda & Consecration */}
        <h2 className="section-title" id="consagracion">La Consagración</h2>
        <div className="my-4 space-y-1">
          <p className="versicle"><strong>Sacerdote.</strong> El Señor esté con ustedes.</p>
          <p className="versicle response"><strong>R.</strong> Y con tu espíritu.</p>
          <p className="versicle"><strong>Sacerdote.</strong> Elevemos los corazones.</p>
          <p className="versicle response"><strong>R.</strong> Los tenemos elevados al Señor.</p>
          <p className="versicle"><strong>Sacerdote.</strong> Demos gracias al Señor nuestro Dios.</p>
          <p className="versicle response"><strong>R.</strong> Es justo y digno.</p>
        </div>

        <div className="collect">
          <p>Verdaderamente es justo, equitativo y saludable, darte gracias siempre y en todo lugar, Señor, Padre santo, Dios omnipotente y eterno.</p>
          <p className="mt-3 font-semibold text-center">Santo, santo, santo, Señor Dios de los ejércitos. Llenos están el cielo y la tierra de tu gloria. Gloria a ti, oh Señor Altísimo. Amén.</p>
        </div>

        <p className="rubric mt-4">¶ La Oración de la Consagración:</p>
        <div className="collect">
          <p>Omnipotente Dios, nuestro Padre celestial, que por tu tierna misericordia diste a tu Hijo único Jesucristo para que padeciera la muerte en la Cruz por nuestra redención; el cual hizo allí (por su oblación de sí mismo una vez ofrecida) un sacrificio, oblación y satisfacción plena, perfecta y suficiente por los pecados de todo el mundo; e instituyó, y en su santo Evangelio nos mandó continuar, una perpetua memoria de esta su preciosa muerte y sacrificio, hasta su venida otra vez:</p>
          <p className="mt-3">Óyenos, oh Padre misericordioso, te suplicamos; y concede que nosotros, al recibir estas tus criaturas de pan y vino, conforme a la santa institución de tu Hijo nuestro Salvador Jesucristo, en memoria de su muerte y pasión, seamos partícipes de su santísimo Cuerpo y Sangre.</p>
          <p className="mt-3">Que en la noche en que fue entregado, tomó Pan; y habiendo dado gracias, lo partió y dio a sus discípulos, diciendo: «Tomad, comed; ÉSTE ES MI CUERPO que por vosotros es dado. Haced esto en memoria de mí.»</p>
          <p className="mt-3">Asimismo, después de haber cenado, tomó el Cáliz; y habiendo dado gracias, se lo dio, diciendo: «Bebed todos de éste; porque ÉSTA ES MI SANGRE del Nuevo Testamento, que por vosotros y por muchos es derramada para remisión de los pecados. Haced esto, cada vez que la bebiereis, en memoria de mí.» Amén.</p>
        </div>

        {/* Communion */}
        <h2 className="section-title" id="comunion">La Comunión</h2>
        <p className="rubric">¶ Entonces el Sacerdote recibirá primero la Comunión en ambas especies, y después la administrará a los demás.</p>
        <div className="my-4 space-y-2 text-sm">
          <p className="italic">Al distribuir el Pan:</p>
          <p className="pl-4">El Cuerpo de nuestro Señor Jesucristo, que fue dado por ti, guarde tu cuerpo y tu alma para la vida eterna. Tómalo y cómelo en memoria de que Cristo murió por ti, y aliméntate de él en tu corazón, por la fe, con hacimiento de gracias.</p>
          <p className="italic mt-4">Al distribuir el Cáliz:</p>
          <p className="pl-4">La Sangre de nuestro Señor Jesucristo, que fue derramada por ti, guarde tu cuerpo y tu alma para la vida eterna. Bébela en memoria de que la Sangre de Cristo fue derramada por ti, y sé agradecido.</p>
        </div>

        {/* Post-Communion */}
        <h2 className="section-title" id="post-comunion">Post-Comunión</h2>
        <p className="rubric">¶ Terminada la Comunión, se dirá el Padre Nuestro.</p>
        <div className="collect">
          <p>Padre nuestro que estás en el cielo, santificado sea tu Nombre; venga a nosotros tu reino; hágase tu voluntad en la tierra como en el cielo. Danos hoy nuestro pan de cada día; perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden; no nos dejes caer en tentación, y líbranos del mal. Porque tuyo es el reino, el poder y la gloria, por los siglos de los siglos. Amén.</p>
        </div>

        <h2 className="section-title">Acción de Gracias</h2>
        <div className="collect">
          <p>Dios omnipotente y sempiterno: Te damos humildísimas gracias porque has tenido a bien alimentarnos, a los que hemos recibido debidamente estos santos misterios, con el alimento espiritual del santísimo Cuerpo y Sangre de tu Hijo, nuestro Salvador Jesucristo; y nos aseguras así de tu favor y bondad para con nosotros; y que somos verdaderos miembros del Cuerpo místico de tu Hijo, que es la santa compañía de todos los fieles; y también herederos, por la esperanza, de tu reino eterno, en virtud de los méritos de la preciosísima muerte y pasión de tu amado Hijo. Te suplicamos humildísimamente, oh Padre celestial, nos asistas con tu gracia, para que continuemos en esa santa comunión y hagamos todas las buenas obras que has preparado para que caminemos en ellas; por Jesucristo nuestro Señor, a quien contigo y con el Espíritu Santo, sea todo honor y gloria, por los siglos de los siglos. Amén.</p>
        </div>

        <h2 className="section-title">Gloria in Excelsis</h2>
        <div className="my-4 space-y-1">
          <p className="font-semibold text-center">Gloria a Dios en las alturas,</p>
          <p>y en la tierra paz a los hombres de buena voluntad. Te alabamos, te bendecimos, te adoramos, te glorificamos, te damos gracias por tu inmensa gloria, Señor Dios, Rey celestial, Dios Padre todopoderoso.</p>
          <p className="mt-3">Señor, Hijo único, Jesucristo. Señor Dios, Cordero de Dios, Hijo del Padre; tú que quitas el pecado del mundo, ten piedad de nosotros; tú que quitas el pecado del mundo, atiende nuestra súplica; tú que estás sentado a la derecha del Padre, ten piedad de nosotros.</p>
          <p className="mt-3">Porque sólo tú eres Santo, sólo tú Señor, sólo tú Altísimo, Jesucristo, con el Espíritu Santo en la gloria de Dios Padre. Amén.</p>
        </div>

        {/* Blessing */}
        <h2 className="section-title">La Bendición</h2>
        <div className="collect">
          <p>La paz de Dios, que sobrepuja todo entendimiento, guarde vuestros corazones y vuestros pensamientos en el conocimiento y amor de Dios, y de su Hijo Jesucristo nuestro Señor; y la bendición de Dios omnipotente, el Padre, el Hijo y el Espíritu Santo, sea con vosotros y permanezca con vosotros siempre. Amén.</p>
        </div>

        {/* Propers */}
        <hr className="my-12 border-[var(--color-gold)]" />
        <h2 className="section-title" id="propios">Colectas, Epístolas y Evangelios</h2>
        <p className="text-center text-sm text-gray-500 italic mb-8">
          Para cada Domínica y Día de Fiesta del Año Cristiano
        </p>

        <div className="space-y-10">
          {collects.map((entry, i) => (
            <section key={i} className="border-b border-[var(--color-border)] pb-8">
              <h3 className="text-lg text-[var(--color-primary-dark)] font-medium mb-4 text-center" style={{ fontFamily: "var(--font-heading)" }}>
                {entry.title}
              </h3>

              <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-2 text-center">La Colecta</h4>
              <div className="collect mb-4">
                <p>{entry.collect}</p>
              </div>

              {entry.epistleRef && (
                <>
                  <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-2 text-center">
                    Epístola. {entry.epistleRef}
                  </h4>
                  <div className="my-3 pl-4 border-l-2 border-[var(--color-border)] text-sm leading-relaxed">
                    <p>{entry.epistleText}</p>
                  </div>
                </>
              )}

              {entry.gospelRef && (
                <>
                  <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-2 mt-4 text-center">
                    Evangelio. {entry.gospelRef}
                  </h4>
                  <div className="my-3 pl-4 border-l-2 border-[var(--color-border)] text-sm leading-relaxed">
                    <p>{entry.gospelText}</p>
                  </div>
                </>
              )}
            </section>
          ))}
        </div>
      </article>
    </div>
  );
}
