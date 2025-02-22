import "./styles.css";

const Educacion = () => {

  const verCertificado = (url) => {
    window.open(url, "_blank");
  };


  return (
    <div className="educacion">
      <h1 className="h1-educacion">EDUCACION</h1>
      <div className="edu-container">
        <div className="head-edu">
          <h2>DIPLOMATURA FULLSTACK JAVASCRIPT</h2>
          <span className="fecha">Abril 2024-Diciembre 2024</span>
        </div>
        <h3>
          Diplomatura con aprendizaje de React, Node.js, Express, MongoDB y
          Mysql.
        </h3>
        <h3>
          (Universiadad Tecnologica Nacional UTN, modalidad remoto, BSAS
          Argentina.)
        </h3>
        <button 
        onClick={()=>verCertificado("https://drive.google.com/file/d/1pSz6XeQU19Pt93L7puf08RuXkltikFV8/view?usp=drive_link")}
        className="ver-certificado">Ver certificado</button>
      </div>
      <div className="edu-container">
        <div className="head-edu">
          <h2>TECNICATURA SUPERIOR EN PROGRAMACION</h2>
          <span className="fecha">Abril 2022-Diciembre 2024</span>
        </div>
        <h3>
          Tecnicatura universitaria, fundamentos de programación y arquitectura
          de sistemas.
        </h3>
        <h3>
          (Universitas Estudios Superiores modalidad remoto, BSAS Argentina. )
        </h3>
        <button 
        onClick={verCertificado}
        className="ver-certificado">Ver certificado</button>
      </div>
      <div className="edu-container">
        <div className="head-edu">
          <h2>CURSO AWS CLOUD COMPUTING</h2>
          <span className="fecha">Diciembre 2024 (en curso)</span>
        </div>
        <h3>
          Curso de AWS Cloud Computing con aprendizaje de AWS y manejo de
          servicios en la nube.
        </h3>
        <h3>
          (Plataforma en línea, AWS Entrena Argentina 2024, modalidad remoto,
          BSAS Argentina. )
        </h3>
        <button className="ver-certificado">Ver certificado</button>
      </div>
      <div className="edu-container">
        <div className="head-edu">
          <h2>PROGRAMACION ORIENTADA A OBJETOS EN JAVA</h2>
          <span className="fecha">Abril 2023-Octubre 2023</span>
        </div>
        <h3>Programacion orientada a objetos en Java (Nivel principiante).</h3>
        <h3>(Argentina Programa 4.0, modalidad remoto, BSAS Argentina.)</h3>
        <button className="ver-certificado">Ver certificado</button>
      </div>
      <div className="edu-container">
        <div className="head-edu">
          <h2>INTRODUCCION A LA PROGRAMACION</h2>
          <span className="fecha">Octubre 2022-Diciembre 2022</span>
        </div>
        <h3>Fundamentos de programación (Herramienta utilizada: Pseint).</h3>
        <h3>(Argentina Programa 4.0, modalidad remoto, BSAS Argentina.)</h3>
        <button className="ver-certificado">Ver certificado</button>
      </div>
      <div className="edu-container">
        <div className="head-edu">
          <h2>CURSOS TERMINADOS EN SOLO-LEARN Y FREECODECAMP</h2>
          <span className="fecha">Abril 2022</span>
        </div>
        <h3>
          Conocimientos en JavaScript, HTML, CSS, C, Python, Pascal, Django y
          React.
        </h3>
        <h3>(Solo-learn, Freecodecamp, modalidad remoto, BSAS Argentina.)</h3>
        <button className="ver-certificado">Ver certificado</button>
      </div>
      <hr />
    </div>
  );
};

export default Educacion;
