import "./SectionAbout.css";

const SectionAbout = () => {
  return (
    <section className="section-about" id="about">
      <div className="m2">
        <div className="mail-phone-frame">
          <div className="yourmailhellocom" />
          <img
            className="mail-phone-frame-child"
            loading="eager"
            alt=""
            src="/group-3@2x.png"
          />
        </div>
      </div>
      <div className="instagramtwitterfacebook4">
        <div className="about">
          <div className="your-email1">
            <div className="form">
              <h1 className="about-us1">Sobre nosotros</h1>
              <div className="button1" />
            </div>
          </div>
          <div className="description-wrapper">
            <div className="description1">
              <span>
                <p className="minima-is-a-minima-is-a-templa">
                  <b className="minima">Mundo Finanzas</b>
                  <span className="span">{` `}</span>
                  <span className="is-a-minima">{`es un estudio contable donde ofrecemos a nuestros clientes la mejor relación precio-calidad del mercado`}</span>
                </p>
                <p className="blank-line">&nbsp;</p>
                <p className="with-our-co-founder">{`Junto a nuestros contadores día a día mejoramos para continuar con nuestras excelentes prestaciones laborales, y mantener la satisfacción de nuestros clientes.`}</p>
                <p className="blank-line1">&nbsp;</p>
                <p className="our-target-group">
                  Nuestro estudio se basa en un equipo diseñado para realizar
                  trabajos de alta calidad en el menor tiempo posible.
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
