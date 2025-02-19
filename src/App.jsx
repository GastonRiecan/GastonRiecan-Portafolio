import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import Gaston from "./components/Gaston/Gaston";
import SobreMi from "./components/SobreMi/SobreMi";
import Portafolio from "./components/Portafolio/Portafolio";
import Educacion from "./components/Educacion/Educacion";
import Skills from "./components/Skills/Skills";
import Contacto from "./components/Contacto/Contacto";
function App() {
  return (
    <>
      <div className="container">
        <div className="left">
          <SideBar />
        </div>
        <div className="right">
          <Gaston />
          <SobreMi />
          <Portafolio />
          <Educacion />
          <Skills />
          <Contacto />
        </div>
      </div>
    </>
  );
}

export default App;
