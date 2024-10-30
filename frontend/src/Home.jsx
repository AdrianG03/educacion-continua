import Carousel from "./components/Carosuel";
import Contact from "./components/Contact";
import work from "./assets/teck.jpg";
import cecyte from "./assets/cecyte.png";

export default function Home() {
  return (
    <>
      <Carousel />
      <div className="pt-10 h-fit w-screen gap-1 flex justify-center">
        <div className="w-3/4">
          <h1 className="text-3xl font-bold">NUESTROS SERVICIOS</h1>
          <p className="text-xl font-medium break-words text-justify">
            El Tecnológico Nacional de México en Cuautla a través de la
            Coordinación de Servicio Externo promueve actividades de
            capacitación, asesoría y consultoría, desarrollo personal y
            enriquecimiento cultural por medio de sus conferencias, cursos,
            talleres, seminarios y diplomados; adaptándose a las necesidades del
            entorno para proponer soluciones que permitan fortalecer la
            competitividad y productividad tanto del capital humano del sector
            empresarial y de servicios, como de la sociedad en general;
            fomentando en ellos principios y valores con una perspectiva de
            equidad y sustentabilidad.
          </p>
          <img
            src={work}
            alt="Icono de trabajadores"
            className="mx-auto p-10 w-[1000px]"
          />
          <h1 className="text-3xl font-bold">NUESTROS CLIENTES</h1>
          <p className="text-xl font-medium break-words text-justify">
            Las empresas del Centro y sus alrededores han depositado su
            confianza en la Coordinación de Servicio Externo del Tecnológico
            Nacional de México en Cuautla porque desde 1988 hemos colaborado en
            la formación de su personal altamente calificado, satisfaciendo las
            necesidades puntuales de cada una, optimizando sus recursos y
            creando vínculos a largo plazo.
          </p>
          <img
            src={cecyte}
            alt="Logo de Cecyte"
            className="mx-auto p-10 size-[250px]"
          />
          <h1 className="text-3xl font-bold">CONTÁCTANOS</h1>
          <p className="text-xl font-medium break-words text-justify">
            Agradecemos tu interés en contactarnos; queremos que compartas con
            nosotros tus inquietudes, opiniones, comentarios o solicitar
            información de algunos de los servicios que te ofrecemos.
          </p>
          <Contact />
        </div>
      </div>
    </>
  );
}
