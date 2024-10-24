const Footer = () => {
  return (
    <footer className="bg-primary text-white py-4 w-screen">
      <div className="w-screen text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos
          reservados.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:underline">
            Política de privacidad
          </a>
          <a href="#" className="hover:underline">
            Términos de servicio
          </a>
          <a href="#" className="hover:underline">
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
