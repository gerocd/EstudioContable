import "./Main.css";

const Main = () => {
  return (
    <div className="text" id="home">
      <div className="rectangle">
        <div className="main">
          <div className="title-parent">
            <h1 className="title">
              <span className="span-class-text">
                <span>{`Estudio Contable de `}</span>
                <span className="social-media1">excelente calidad</span>
                <span> para usted</span>
              </span>
            </h1>
            <div className="we-have-made">
            En Mundo Finanzas, transformamos el mundo financiero y
             contable con soluciones especializadas. Nuestro equipo de expertos altamente calificados se dedica a brindar servicios de calidad excepcional. <h3>Transformación Financiera</h3>
              <h3>Soluciones Contables</h3>
              <h3>Expertos Calificados</h3>
            </div>
          </div>
          <div className="phone">
          </div>
        </div>
        <div className="text-block-grid">
          <div className="group-frame">
            <img className="gelembung-icon" alt="" src="/gelembung.svg" />
            <img
              className="mobile-iphone-x"
              loading="eager"
              alt=""
              src="/Finance leaders-rafiki.svg"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
