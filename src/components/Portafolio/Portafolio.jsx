import "./styles.css";

const Portafolio = () => {
  return (
    <div className="portafolio">
      <h1 className="h1-portafolio">PORTAFOLIO</h1>
      <div className="proyectos">

        {/* Proyecto 1 */}
        <div className="proyecto-desplegado1 proyecto">
          <h3>FA Electricista Matriculado</h3>
          <img
            src="https://github.com/GastonRiecan/images-repository/raw/main/images/LogotipoOK.jpg"
            alt="FA Electricista Matriculado"
            loading="lazy"
          />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://f-aelectricista-matriculado.vercel.app/"
          >
            <i className="bi bi-link-45deg">&nbsp;Ingresar</i>
          </a>
        </div>

        {/* Proyecto 2 */}
        <div className="proyecto-desplegado2 proyecto">
          <h3>GR Soldadura</h3>
          <img
            src="https://github.com/GastonRiecan/images-repository/raw/main/images/ChatGPT%20Image%2021%20ago%202025%2C%2009_35_52%20p.m..png"
            alt="Web Personal Gastón Riecan"
            loading="lazy"
          />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://v0-personal-web-page-lake.vercel.app/"
          >
            <i className="bi bi-link-45deg">&nbsp;Ingresar</i>
          </a>
        </div>

        {/* Proyecto 3 */}
        <div className="proyecto-desplegado3 proyecto">
          <h3>CF Servicios de Gas</h3>
          <img
            src="https://github.com/GastonRiecan/images-repository/raw/main/images/cf-vector.jpeg"
            alt="CF Servicios de Gas"
            loading="lazy"
          />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://cf-servicios-de-gas.vercel.app/"
          >
            <i className="bi bi-link-45deg">&nbsp;Ingresar</i>
          </a>
        </div>

      </div>
      <hr />
    </div>
  );
};

export default Portafolio;
