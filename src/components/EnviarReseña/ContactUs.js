import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="get-in-touch-parent">
        <h1 className="get-in-touch2">Reseña</h1>
        <div className="frame-div">
          <div className="frame-parent1">
            <div className="frame-parent2">
              <div className="first-name-parent">
                <div className="first-name">Nombre</div>
                <div className="form-parent">
                  <input
                    className="form2"
                    placeholder="Ingrese su nombre"
                    type="text"
                  />
                  <div className="your-email3">Email</div>
                </div>
              </div>
              <div className="instagram1">
                <div className="last-name">Apellido</div>
                <input
                  className="form3"
                  placeholder="Ingrese su apellido"
                  type="text"
                />
              </div>
            </div>
            <input
              className="form4"
              placeholder="Ingrese su email"
              type="text"
            />
          </div>
          <div className="message-parent">
            <div className="message">Mensaje</div>
            <textarea
              className="form5"
              placeholder="Ingrese su mensaje"
              rows={6}
              cols={23}
            />
          </div>
        </div>
        <button className="largenormaljustifyactive">
          <div className="send">ENVIAR</div>
        </button>
      </div>
      <div className="text-heading">
        <div className="dot-ornament3">
          <div className="rectangle-group1">
            <div className="dot-ornament4">
              <div className="rectangles" />
              <div className="rectangle-3-copy3" />
            </div>
            <img
              className="rectangle-group-child"
              alt=""
              src="/group-11@2x.png"
            />
          </div>
          <div className="ohio-st-south-container">
            <p className="ohio-st-south">San Martin 4430, San Miguel de Tucumán</p>
            <p className="ca-90280">{`CP 4000`}</p>
          </div>
          <img
            className="location-map-marker-4"
            loading="eager"
            alt=""
            src="/location-map-marker-4.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
