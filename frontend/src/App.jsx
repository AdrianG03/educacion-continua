import Header from "./components/Header";
import Carousel from "./components/Carosuel";

export default function App() {
  return (
    <div className="h-screen max-h-[100vh] overflow-hidden w-screen flex flex-col">
      <Header />
      <main className="max-h-[calc(100vh-5rem)] h-[calc(100vh-5rem)] flex flex-col bg-white text-black">
        <Carousel />
        <div className="pt-10 h-fit w-screen b flex justify-center">
          <div className="b w-3/4">
            <h1 className="text-4xl font-bold">NUESTROS SERVICIOS</h1>
          </div>
        </div>
      </main>
    </div>
  );
}
