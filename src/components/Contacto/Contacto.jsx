import "./styles.css";

const Contacto = () => {
  return (
    <div className="contacto">
      <h1 className="h1-contacto">CONTACTAME!</h1>
      <div className="contacto">
        <span>
          <i className="bi bi-envelope-at-fill"></i>
          &nbsp;Email:
          <a href="mailto:g.e.riecan@gmail.com">
          &nbsp;&nbsp;g.e.riecan@gmail.com
        </a>
        </span>
        <span>
          <i className="bi bi-whatsapp"></i>
          &nbsp;&nbsp;Whatsapp:
          <a
            href="https://wa.me/+541162575808"
            target="_blank"
            rel="noopener noreferrer">&nbsp;+54 1162575808</a>
        </span>
        <span>
          <i className="bi bi-linkedin"></i>
          &nbsp;&nbsp;Linkedin:
          <a 
          target="_blank"
          href="https://www.linkedin.com/in/gastonriecan/">&nbsp;https://www.linkedin.com/in/gastonriecan/</a>
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
