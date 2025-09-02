import "./styles.css";

const Portafolio = () => {
  return (
    <div className="portafolio">
      <h1 className="h1-portafolio">PORTAFOLIO</h1>
      <div className="proyectos">
        <div className="proyecto-desplegado1">
          <h3>Proyecto de Chat personalizado</h3>
          <img src="https://github.com/GastonRiecan/images-repository/raw/main/images/live-chat.jpg" alt="Chat portada" />
          <a 
          target="_blank"
          href="https://slack-utn.vercel.app/">
            <i className="bi bi-link-45deg">&nbsp;Ingresar</i>
          </a>
          <span>
            <a 
            target="_blank"
            href="https://github.com/GastonRiecan/Slack_UTN">
              <i className="bi bi-github">&nbsp;Mira como esta hecho</i>
            </a>
          </span>
        </div>
        <div className="proyecto-desplegado2">
        <h3>Componenete de Frontend Mentor</h3>
          <img 
          src="https://github.com/GastonRiecan/images-repository/raw/main/qrFrontendMentor.jpg" alt="QR component image" />
          <a 
          target="_blank"
          href="https://frontend-mentor-qr-component-three.vercel.app/">
            <i className="bi bi-link-45deg">&nbsp;Ingresar</i>
          </a>
          <span>
            <a href="https://github.com/GastonRiecan/FrontendMentor-QR-Component">
              <i className="bi bi-github">&nbsp;Mira como esta hecho</i>
            </a>
          </span>
        </div>
        <div className="proyecto-desplegado3">
        <h3>Web Emprendimiento de Soldadura</h3>
          <img src="https://github.com/GastonRiecan/images-repository/raw/main/images/ChatGPT%20Image%2021%20ago%202025%2C%2009_35_52%20p.m..png" alt="WeldingPage logo Image" />
          <a href="https://v0-personal-web-page-lake.vercel.app/">
            <i className="bi bi-link-45deg">&nbsp;Ingresar</i>
          </a>
          <span>
            <a
            target="_blank"
            href="https://github.com/GastonRiecan/Gaston-Riecan-WeldingWebPage">
            <i className="bi bi-github">&nbsp;Mira como esta hecho</i>
            </a>
          </span>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Portafolio;
