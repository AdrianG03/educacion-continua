import { useRef } from "react";
import Header from "./components/Header";
import Home from "./Home";
import Footer from "./components/Footer";
import CallUs from "./CallUs";
import Survey from "./Survey";
import Facilities from "./Facilities";
import ContentCatalog from "./menuCatalog/ContentCatalog";
import ScrollToTop from "./components/ScrollToTop";
import { Routes, Route } from "react-router-dom";
import Info from "./Info";

export default function App() {
  const mainRef = useRef(null);

  return (
    <div className="h-screen max-h-[100vh] overflow-hidden w-screen flex flex-col">
      <Header />
      <main
        id="main-container"
        ref={mainRef}
        className="max-h-[calc(100vh-5rem)] h-[calc(100vh-5rem)] flex flex-col bg-white text-black overflow-y-auto overflow-x-hidden"
      >
        <ScrollToTop mainRef={mainRef} />{" "}
        <Routes>
          <Route path="/educacion-continua" element={<Home />} />
          <Route path="/contacto" element={<CallUs />} />
          <Route path="/informacion" element={<Info />} />
          <Route path="/encuesta" element={<Survey />} />
          <Route path="/instalaciones" element={<Facilities />} />
          <Route path="/catalogo/:id" element={<ContentCatalog />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}
