export default function Header() {
  return (
    <header className="bg-primary text-white p-4 flex">
      <h1 className="text-2xl font-bold p-4 pr-7">EDUCACION CONTÍNUA</h1>
      <ul className="sm:flex space-x-6 hidden items-center font-bold">
        <li>HOME</li>
        <li>CATÁLOGO</li>
        <li>CONTACTO</li>
      </ul>
    </header>
  );
}
