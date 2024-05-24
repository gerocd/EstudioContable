import "./Main.css";

const Main = () => {
  return (
    <div className="text" id="home">
      <div className="rectangle">
        <div className="main">
          <div className="title-parent">
            <h1 className="title">
              <span>
                <span>{`Estudio Contable de `}</span>
                <span className="social-media1">excelente calidad</span>
                <span> para usted</span>
              </span>
            </h1>
            <div className="we-have-made">
              En Mundo Finanzas, nos enorgullece ofrecer soluciones
              especializadas en el ámbito financiero y contable. Con una vasta
              experiencia y un equipo de profesionales altamente calificados,
              nos destacamos como una firma dedicada a brindar servicios de
              calidad a nuestros clientes
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
