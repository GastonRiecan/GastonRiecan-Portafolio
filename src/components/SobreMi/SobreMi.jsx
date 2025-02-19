import "./styles.css";


const SobreMi = () => {
  return (
    <div className="sobre-mi" id="sobre-mi-section">
      <div className="sobre-mi">
        <h1 className="h1-sobre-mi">SOBRE MI</h1>
        <p className="sobre-mi-texto">
          Soy Gaston Riecan, un desarrollador full-stack apasionado por la
          creación de aplicaciones web eficientes y escalables. Con una sólida
          formación en JavaScript, React y Node.js, disfruto resolviendo
          problemas y optimizando procesos para mejorar la experiencia del
          usuario. Mi trayectoria en Toyota Argentina S.A., donde trabajé como
          Team Leader durante casi una década, me brindó habilidades en gestión
          de equipos, mejora continua y resolución de problemas. Esta
          experiencia, combinada con mi formación en desarrollo, me permite
          abordar proyectos con una mentalidad analítica y enfocada en la
          eficiencia.
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
