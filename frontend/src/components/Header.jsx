import { Link } from "react-router-dom";
import { useState } from "react";
import logoImage from "../assets/itc.png";
import logoBlanco from "../assets/logoblanco.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-white">
      <div className="h-16 flex items-center px-6 md:px-24 justify-between">
        {/* Logo */}
        <Link to="/educacion-continua">
          <div className="flex items-center md:w-96">
            <img src={logoBlanco} alt="Logo" className="w-8 h-10 mr-2" />
            <img src={logoImage} alt="Logo" className="w-12 h-9 mr-2" />
            <h1 className="text-2xl font-bold">EDUCACIÓN CONTÍNUA</h1>
          </div>
        </Link>

        {/* Botón Menú Hamburguesa (Solo en móviles) */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Menú de Navegación */}
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-16 md:top-0 left-0 w-full bg-primary md:bg-transparent md:relative md:flex md:justify-end md:space-x-6 md:items-center md:font-bold z-50`}
        >
          <li>
            <Link
              to="/educacion-continua"
              className="hover:underline block py-2 md:py-0 px-6 md:px-0"
            >
              INICIO
            </Link>
          </li>
          <li>
            <Link
              to="/informacion"
              className="hover:underline block py-2 md:py-0 px-6 md:px-0"
            >
              INFORMACIÓN
            </Link>
          </li>
          <li>
            <Link
              to="/instalaciones"
              className="hover:underline block py-2 md:py-0 px-6 md:px-0"
            >
              INSTALACIONES
            </Link>
          </li>
          <li>
            <Link
              to="/contacto"
              className="hover:underline block py-2 md:py-0 px-6 md:px-0"
            >
              CONTÁCTANOS
            </Link>
          </li>
          <li>
            <Link
              to="/encuesta"
              className="hover:underline block py-2 md:py-0 px-6 md:px-0"
            >
              ENCUESTA
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
