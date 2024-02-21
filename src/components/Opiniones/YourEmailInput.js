import React, { useState } from "react";
import "./YourEmailInput.css";

const YourEmailInput = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const opinions = [
    {
      text: "¡Increíble experiencia con el equipo de este estudio contable! Su profesionalismo y conocimiento en materia fiscal me han ayudado a gestionar mis impuestos de manera eficiente y sin complicaciones. Siempre están dispuestos a responder mis preguntas y a brindarme el asesoramiento necesario. ¡Altamente recomendado para cualquier persona que busque servicios contables de calidad!",
      author: "Gerónimo",
      role: "Cliente",
      image: "/FotoGero.JPG"
    },
    {
      text: "No puedo estar más satisfecho con los servicios brindados por este estudio contable. Desde el primer momento en que me puse en contacto con ellos, recibí un trato personalizado y atención dedicada a mis necesidades financieras. Han demostrado ser expertos en su campo, ofreciendo soluciones inteligentes y eficaces para mis problemas contables. ",
      author: "Mariano",
      role: "Cliente",
      image: "/FotoMariano.PNG"
    },
    // demás opiniones....
  ];

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % opinions.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + opinions.length) % opinions.length);
  };

  return (
    <div className="your-email-input" id="opiniones">
      <div className="customer-says">
        <h1 className="what-our-customer">Opiniones acerca de nosotros</h1>
        <div className="get-in-touch1">
          <button className="next-button" onClick={nextSlide}>
          <img src={"/right-arrow.png"} style={{ width: '100%', height: '100%' }}/>
          </button>
          <div className="logo-minima">
            <div className="card" />
            <div className="reachcircle-is-the">{opinions[currentSlide].text}</div>
            <div className="footer-nav-group">
              <div className="text-input">
                <b className="shalima-hayden">{opinions[currentSlide].author}</b>
                <div className="product-designer">{opinions[currentSlide].role}</div>
              </div>
            </div>
            <img
              className="image-placeholder-icon2"
              alt=""
              src={opinions[currentSlide].image}
            />
          </div>
          <button className="previous-button-icon" img src="/right-arrow.png" onClick={prevSlide}> 
          <img src={"/left-arrow.png"} style={{ width: '100%', height: '100%', right: '70px' }}/> 
          </button> 
        </div>
      </div>
    </div>
  );
};

export default YourEmailInput;
