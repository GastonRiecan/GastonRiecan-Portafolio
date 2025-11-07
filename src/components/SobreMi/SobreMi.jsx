import "./styles.css";


const SobreMi = () => {
  return (
    <div className="sobre-mi" id="sobre-mi-section">
      <div className="sobre-mi">
        <h1 className="h1-sobre-mi">SOBRE MI</h1>
        <p className="sobre-mi-texto">
          Soy Gaston Riecan, un desarrollador full-stack apasionado por la
          creación de aplicaciones web eficientes y escalables. Con una sólida
          formación en Next.js, React.js y Node.js, disfruto resolviendo
          problemas y optimizando procesos para mejorar la experiencia del
          usuario.
        </p>
        <p className="p-actualmente">
          ACTUALMENTE ESTUDIO Y ME ENCUENTRO EN BUSQUEDA LABORAL ACTIVA COMO
          DESARROLLADOR WEB.
        </p>
        <p className="sobre-mi-p-contacto">
          Si queres ponerte en contacto conmigo escribime a{" "}
          <a href="mailto:g.e.riecan@gmail.com">
            &nbsp;&nbsp;&nbsp;g.e.riecan@gmail.com
          </a>
        </p>
        <p>
          Mira mi experiencia laboral en detalle en&nbsp;&nbsp;
          <a
            href="https://www.linkedin.com/in/gastonriecan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </p>
      </div>
      <hr />
    </div>
  );
};

export default SobreMi;
