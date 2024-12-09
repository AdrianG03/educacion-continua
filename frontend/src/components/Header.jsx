import { Link } from "react-router-dom";
import logoImage from "../assets/itc.png";
import logoBlanco from "../assets/logoblanco.png";

export default function Header() {
  return (
    <header className="bg-primary text-white">
      <div className="h-16 flex items-center px-24 justify-between">
        <Link to="/">
          <div className="flex items-center">
            <img src={logoBlanco} alt="Logo" className="w-8 h-10 mr-2" />{" "}
            <img src={logoImage} alt="Logo" className="w-12 h-9 mr-2" />{" "}
            <h1 className="text-2xl font-bold">EDUCACIÓN CONTÍNUA</h1>
          </div>
        </Link>
        <ul className="sm:flex space-x-6 hidden items-center font-bold">
          <li>
            <Link to="/" className="hover:underline">
              INICIO
            </Link>
          </li>
          <li>
            <Link to="/informacion" className="hover:underline">
              INFORMACIÓN
            </Link>
          </li>
          <li>
            <Link to="/instalaciones" className="hover:underline">
              INSTALACIONES
            </Link>
          </li>
          <li>
            <Link to="/contacto" className="hover:underline">
              CONTÁCTANOS
            </Link>
          </li>
        </ul>
        <div>
          <Link to="/encuesta" className="hover:underline">
            <h1 className="font-bold items-center">ENCUESTA</h1>
          </Link>
        </div>
      </div>
    </header>
  );
}
