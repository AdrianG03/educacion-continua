import work from "./assets/teck.jpg";
import { Link } from "react-router-dom";

export default function Courses() {
  return (
    <div className="pt-10 h-fit w-screen gap-1 flex justify-center">
      <div className="w-3/4">
        <h1 className="text-3xl font-bold">NUESTROS SERVICIOS</h1>
        <p className="text-xl font-medium break-words text-justify">
          El Tecnológico Nacional de México en Cuautla a través de la
          Coordinación de Servicio Externo promueve actividades de capacitación,
          asesoría y consultoría, desarrollo personal y enriquecimiento cultural
          por medio de sus conferencias, cursos, talleres, seminarios y
          diplomados; adaptándose a las necesidades del entorno para proponer
          soluciones que permitan fortalecer la competitividad y productividad
          tanto del capital humano del sector empresarial y de servicios, como
          de la sociedad en general; fomentando en ellos principios y valores
          con una perspectiva de equidad y sustentabilidad.
        </p>
        <img
          src={work}
          alt="Icono de trabajadores"
          className="mx-auto p-10 w-[1000px]"
        />

        <div className="bg-cyan-700 w-auto rounded-lg text-center text-white p-7 mb-10">
          <h1 className="text-2xl">
            ¿No encuentras lo que buscabas? Tal vez quieras revisar
          </h1>
          <Link to="/catalogo" className="hover:underline hover:text-blue-400">
            <h1 className="text-2xl font-bold">CATÁLOGO</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}
