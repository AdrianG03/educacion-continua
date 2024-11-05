import { Link } from "react-router-dom";
import logoImage from "../assets/itc.png";

export default function Header() {
  return (
    <header className="bg-primary text-white">
      <div className="h-16 flex items-center px-24 justify-between">
        <div className="flex items-center">
          <img src={logoImage} alt="Logo" className="w-12 h-9 mr-2" />{" "}
          <h1 className="text-2xl font-bold">EDUCACIÓN CONTÍNUA</h1>
        </div>
        <ul className="sm:flex space-x-6 hidden items-center font-bold">
          <li>
            <Link to="/" className="hover:underline">
              INICIO
            </Link>
          </li>
          <li>
            <Link to="/cursos" className="hover:underline">
              CURSOS
            </Link>
          </li>
          <li>
            <Link to="/catalogo" className="hover:underline">
              CATÁLOGO
            </Link>
          </li>
          <li>
            <Link to="/contacto" className="hover:underline">
              CONTÁCTANOS
            </Link>
          </li>
        </ul>
        <div>
          <Link to="/login" className="hover:underline">
            <h1 className="font-bold items-center">INICIAR SESIÓN</h1>
          </Link>
        </div>
      </div>
    </header>
  );
}
