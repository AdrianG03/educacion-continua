import Carousel from "./components/Carosuel";
import Contact from "./components/Contact";
import cecyte from "./assets/cecyte.png";
import Courses from "./Courses";

export default function Home() {
  return (
    <>
      <Carousel />
      <Courses />
      <div className="pt-10 h-fit w-screen gap-1 flex justify-center">
        <div className="w-3/4">
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
