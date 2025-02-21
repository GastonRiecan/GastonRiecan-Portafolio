import "./styles.css";

const Educacion = () => {

  const verCertificado = (url) => {
    window.open(url, "_blank");
  };


  return (
    <div className="educacion">
      <h1 className="h1-educacion">EDUCACION</h1>
      <div className="educacion-utn">
        <h2 className="h2-educacion">
          <span>DIPLOMATURA FULLSTACK JAVASCRIPT</span>
          <span className="fecha">Abril 2024-Diciembre 2024</span>
        </h2>
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
      <div className="educacion-universitas">
        <h2 className="h2-educacion">
          <span>TECNICATURA SUPERIOR EN PROGRAMACION</span>
          <span className="fecha">Abril 2022-Diciembre 2024</span>
        </h2>
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
      <div className="educacion-aws">
        <h2 className="h2-educacion">
          <span>CURSO AWS CLOUD COMPUTING</span>
          <span className="fecha">Diciembre 2024 (en curso)</span>
        </h2>
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
      <div className="educacion-java">
        <h2 className="h2-educacion">
          <span>PROGRAMACION ORIENTADA A OBJETOS EN JAVA</span>
          <span className="fecha">Abril 2023-Octubre 2023</span>
        </h2>
        <h3>Programacion orientada a objetos en Java (Nivel principiante).</h3>
        <h3>(Argentina Programa 4.0, modalidad remoto, BSAS Argentina.)</h3>
        <button className="ver-certificado">Ver certificado</button>
      </div>
      <div className="educacion-arg-prog">
        <h2 className="h2-educacion">
          <span>INTRODUCCION A LA PROGRAMACION</span>
          <span className="fecha">Octubre 2022-Diciembre 2022</span>
        </h2>
        <h3>Fundamentos de programación (Herramienta utilizada: Pseint).</h3>
        <h3>(Argentina Programa 4.0, modalidad remoto, BSAS Argentina.)</h3>
        <button className="ver-certificado">Ver certificado</button>
      </div>
      <div className="educacion-solo-learn">
        <h2 className="h2-educacion">
          <span>CURSOS TERMINADOS EN SOLO-LEARN Y FREECODECAMP</span>
          <span className="fecha">Abril 2022</span>
        </h2>
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
