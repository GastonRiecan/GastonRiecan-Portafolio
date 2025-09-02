import TypingEffect from "../TypingEffect/TypingEffect";
import "./styles.css";

const Gaston = () => {
  return (
    <div className="gaston" id="gaston-section">
      <h1 className="gaston-title">GASTON RIECAN</h1>
      <hr />
      <div className="texto-movimiento">
        <TypingEffect />
      </div>
      <hr />
      <h2 className="gaston-h2">
        BIENVENIDO/A A MI PORTAFOLIO COMO DESARROLLADOR WEB.
      </h2>
      <h3 className="gaston-contact">
        Si quieres ponerte en contacto conmigo escribeme a:
        <a href="mailto:g.e.riecan@gmail.com">
          &nbsp;&nbsp;&nbsp;g.e.riecan@gmail.com
        </a>
      </h3>
      <a
        href="https://github.com/GastonRiecan/images-repository/raw/main/images/GastonRiecanCV2025--.pdf"
        download="CV_GastonRiecan.pdf"
      >
        <button className="descarga-cv">Descargar mi CV</button>
      </a>
      <div className="social-icons">
        <div className="linkedin">
          <a
            href="https://www.linkedin.com/in/gastonriecan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
        <div className="github">
          <a
            href="https://github.com/GastonRiecan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>
        </div>
        <div className="whatsaap">
          <a
            href="https://wa.me/+541162575808"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-whatsapp"></i>
          </a>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Gaston;
