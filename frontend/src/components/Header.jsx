import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-primary text-white">
      <div className="h-16 flex items-center px-24 justify-between">
        <h1 className="text-2xl font-bold">EDUCACION CONTÍNUA</h1>
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
