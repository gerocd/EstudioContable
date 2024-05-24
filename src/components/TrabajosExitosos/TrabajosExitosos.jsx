import "./TrabajosExitosos.css";

const TrabajosExitosos = () => {
  return (
    <section className="frame-children" id="trabajo-exitoso">
      <div className="section-our-success">
        <div className="button-label">
          <div className="dot-ornament2">
            <div className="frame-group" />
            <div className="rectangle-3-copy2" />
            <div className="text-block1" />
          </div>
          <img
            className="windows-krwy72tkb0y-unsplash-1-icon"
            loading="eager"
            alt=""
            src="/trabajos-exitosso.jpeg"
          />
        </div>
        <div className="section-our-success-inner">
          <div className="group-parent">
            <div className="group">
              <h1 className="our-success-story">Trabajos Exitosos</h1>
              <div className="frame1" />
              <div className="develop-a-website">{`Este es el historial con el que contamos en nuestra empresa, dónde nuestros clientes forman parte, y nos ayudan a crecer día a día.`}</div>
            </div>
            <div className="location-map-marker">
              <div className="footer3">
                <b className="b">+10000</b>
                <b className="project-complete">Trabajos completados</b>
              </div>
              <div className="footer4">
                <b className="b1">15</b>
                <b className="our-team1">Empleados</b>
              </div>
              <div className="footer5">
                <b className="b2">1100</b>
                <b className="our-client">Clientes satisfechos</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrabajosExitosos;
