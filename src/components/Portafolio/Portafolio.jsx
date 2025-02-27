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
        <h3>Aplicacion de Notas</h3>
          <img 
          src="https://github.com/GastonRiecan/images-repository/raw/main/images/notas.jpg" alt="Apps Notes portada" />
          <a 
          target="_blank"
          href="https://notes-app-psi-ashen.vercel.app/">
            <i className="bi bi-link-45deg">&nbsp;Ingresar</i>
          </a>
          <span>
            <a href="https://notes-app-psi-ashen.vercel.app/">
              <i className="bi bi-github">&nbsp;Mira como esta hecho</i>
            </a>
          </span>
        </div>
        <div className="proyecto-desplegado3">
        <h3>Calculadora con Javascript</h3>
          <img src="https://github.com/GastonRiecan/images-repository/raw/main/images/calculadora-cientifica.jpg" alt="Calculadora Image" />
          <a href="">
            <i className="bi bi-link-45deg">&nbsp;Ingresar</i>
          </a>
          <span>
            <a href="">
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
