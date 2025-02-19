import "./styles.css";

const Contacto = () => {
  return (
    <div className="contacto">
      <h1 className="h1-contacto">CONTACTAME!</h1>
      <div className="contacto">
        <span>
          <i className="bi bi-envelope-at-fill"></i>
          &nbsp;&nbsp;Email: g.e.riecan@gmail.com
        </span>
        <span>
          <i className="bi bi-whatsapp"></i>
          &nbsp;&nbsp;Whatsapp: +54 11 62575808
        </span>
        <span>
          <i className="bi bi-linkedin"></i>
          &nbsp;&nbsp;Linkedin: https://www.linkedin.com/in/gastonriecan/
        </span>
        <h3>ESTE SITIO ESTA DESARROLLADO CON:</h3>
        <div className="icons-dev">
          <img
            className="icon-html"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg"
          />
          <img
            className="icon-css"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"
          />
          <img
            className="icon-react"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
          />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Contacto;
