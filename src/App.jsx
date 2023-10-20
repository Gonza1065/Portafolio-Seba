import "../src/App.css";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { Servicios } from "./components/Servicios";
function App() {
  return (
    <>
      <div className="fondo min-[320px]:flex min-[320px]:w-full flex-col max-[600px]:flex min-[320px]:p-12 ">
        <NavBar />
        <Servicios />
        <Footer />
      </div>
    </>
  );
}

export default App;
