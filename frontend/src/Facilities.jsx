import { useState } from "react";
import Laboratories from "./facilitiesComponents/Laboratories";
import Rooms from "./facilitiesComponents/Rooms";

export default function Facilities() {
  const [selectedSection, setSelectedSection] = useState("laboratories");

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className="pt-10 h-fit w-screen gap-1 flex justify-center">
      <div className="w-3/4">
        <h1 className="text-3xl font-bold">NUESTRAS INSTALACIONES</h1>
        <p className="text-xl font-medium break-words text-justify">
          El Tecnológico Nacional de México en Cuautla cuenta con múltiples
          espacios en el campus universitario para el desarrollo de actividades
          en diferentes áreas, desde laboratorios de cómputo, espacios de uso
          múltiples, salas ejecutivas, salas audiovisuales, entre muchas otras.
          Todos acondicionados para brindar una experiencia de aprendizaje de
          calidad.
        </p>
        <div className="flex justify-between mt-10 gap-6">
          <button
            onClick={() => handleSectionChange("laboratories")}
            className={`flex-grow rounded-lg bg-primary text-white font-bold text-xl hover:bg-blue-800 h-10 ${
              selectedSection === "laboratories" ? "bg-blue-800" : ""
            }`}
          >
            LABORATORIOS
          </button>
          <button
            onClick={() => handleSectionChange("rooms")}
            className={`flex-grow rounded-lg bg-primary text-white font-bold text-xl hover:bg-blue-800 h-10 ${
              selectedSection === "rooms" ? "bg-blue-800" : ""
            }`}
          >
            SALAS
          </button>
        </div>

        <div className="mt-10">
          {selectedSection === "laboratories" ? <Laboratories /> : <Rooms />}
        </div>
      </div>
    </div>
  );
}
