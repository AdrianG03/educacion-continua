import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import teck1 from "./assets/teck.jpg";
import teck2 from "./assets/teck3.jpg";
import teck3 from "./assets/teck4.jpg";

export default function Courses() {
  const images = [teck1, teck2, teck3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const { pathname } = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [images.length]);

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

        <div className="relative overflow-hidden w-full h-[500px] mt-10">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* Renderizar la banda solo si la ruta es "/cursos" */}
        {pathname === "/cursos" && (
          <div className="bg-cyan-700 w-auto rounded-lg text-center text-white p-7 mb-10 mt-10">
            <h1 className="text-2xl">
              ¿No encuentras lo que buscabas? Tal vez quieras revisar
            </h1>
            <Link
              to="/catalogo"
              className="hover:underline hover:text-blue-400"
            >
              <h1 className="text-2xl font-bold">CATÁLOGO</h1>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
