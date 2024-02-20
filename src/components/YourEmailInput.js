import "./YourEmailInput.css";

const YourEmailInput = () => {
  return (
    <div className="your-email-input">
      <div className="customer-says">
        <h1 className="what-our-customer">Opiniones acerca de nosotros</h1>
        <div className="get-in-touch1">
          <input className="next-button" type="checkbox" />
          <div className="logo-minima">
            <div className="card" />
            <div className="reachcircle-is-the">
            "Mundo Finanzas ha demostrado ser la firma contable más amigable y eficiente que he tenido el placer de utilizar.
            Desde la introducción inicial de sus servicios hasta la culminación del proceso, se toman el tiempo necesario para presentar
            las soluciones más óptimas que se ajustan verdaderamente a tus necesidades. Su apoyo integral desde el inicio hasta el final
            garantiza la creación de una identidad financiera sólida y exitosa para tu empresa.
            Confiar en Mundo Finanzas ha sido una decisión acertada para optimizar mis recursos y lograr el éxito financiero."
            </div>
            <div className="footer-nav-group">
              <div className="text-input">
                <b className="shalima-hayden">Shalima Hayden</b>
                <div className="product-designer">Cliente</div>
              </div>
            </div>
            <img
              className="image-placeholder-icon2"
              alt=""
              src="/image-placeholder-1@2x.png"
            />
          </div>
          <img
            className="previous-button-icon"
            loading="eager"
            alt=""
            src="/previous-button.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default YourEmailInput;
