import Header from "./components/Header";
import Home from "./Home";
import Footer from "./components/Footer";
import Courses from "./Courses";
import Catalog from "./Catalog";
import CallUs from "./CallUs";
import Login from "./Login";
import ContentCatalog from "./menuCatalog/ContentCatalog";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="h-screen max-h-[100vh] overflow-hidden w-screen flex flex-col">
      <Header />
      <main className="max-h-[calc(100vh-5rem)] h-[calc(100vh-5rem)] flex flex-col bg-white text-black overflow-y-auto overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cursos" element={<Courses />} />
          <Route path="/catalogo" element={<Catalog />} />
          <Route path="/contacto" element={<CallUs />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/catalogo/1"
            element={
              <ContentCatalog
                title="Purebas"
                time="prueba"
                type="prueba"
                modal="prueba"
                description="prueba"
                program="prueba"
                img="prueba"
              />
            }
          />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}
