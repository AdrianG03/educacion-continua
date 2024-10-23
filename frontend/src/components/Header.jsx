export default function Header() {
  return (
    <header className="bg-primary text-white">
      <div className="h-16 flex items-center px-24 justify-between">
        <h1 className="text-2xl font-bold">EDUCACION CONTÍNUA</h1>
        <ul className="sm:flex space-x-6 hidden items-center font-bold">
          <li>INICIO</li>
          <li>CURSOS</li>
          <li>CATÁLOGO</li>
          <li>CONTÁCTANOS</li>
        </ul>
        <div>
          <h1 className="font-bold items-center">INICIAR SESIÓN</h1>
        </div>
      </div>
    </header>
  );
}
