import "./Text1.css";

const Text1 = () => {
  return (
    <div className="text">
      <div className="rectangle">
        <div className="footer">
          <div className="title-parent">
            <h1 className="title">
              <span>
                <span>{`Estudio Contable de `}</span>
                <span className="social-media1">excelente calidad</span>
                <span> para usted</span>
              </span>
            </h1>
            <div className="we-have-made">
            En Mundo Finanzas, nos enorgullece ofrecer soluciones especializadas en el ámbito financiero y contable. Con una vasta experiencia y un equipo de profesionales altamente calificados, nos destacamos como una firma dedicada a brindar servicios de calidad a nuestros clientes
            </div>
          </div>
          <div className="phone">
            <div className="get-in-touch">
              <div className="also-featured-in">También trabajamos con</div>
              <img
                className="arrownarrowrightoutline-icon"
                loading="eager"
                alt=""
                src="/arrownarrowrightoutline.svg"
              />
            </div>
            <div className="text1">
              <div className="wrapper-google-logo">
                <img
                  className="google-logo-icon"
                  loading="eager"
                  alt=""
                  src="/google-logo.svg"
                />
              </div>
              <div className="wrapper-microsoft-logo">
                <img
                  className="microsoft-logo-icon"
                  loading="eager"
                  alt=""
                  src="/microsoft-logo.svg"
                />
              </div>
              <button className="oyo-logo">
                <div className="bg1" />
                <img className="oyo-logo-icon" alt="" src="/oyo-logo.svg" />
              </button>
            </div>
          </div>
        </div>
        <div className="text-block-grid">
          <div className="group-frame">
            <img className="gelembung-icon" alt="" src="/gelembung.svg" />
            <img
              className="mobile-iphone-x"
              loading="eager"
              alt=""
              src="/mobile--iphone-x@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Text1;
