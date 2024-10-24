import Header from "./components/Header";
import Home from "./Home";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="h-screen max-h-[100vh] overflow-hidden w-screen flex flex-col">
      <Header />
      <main className="max-h-[calc(100vh-5rem)] h-[calc(100vh-5rem)] flex flex-col bg-white text-black overflow-y-auto overflow-x-hidden pl-2">
        <Home />
        <Footer />
      </main>
    </div>
  );
}
