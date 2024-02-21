import "./Navbar.css";
import React from "react";
const Navbar = () => {
  const irASeccion = (idSeccion) => {
    document.getElementById(idSeccion).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header className="navbar">
      <div className="getintouch">
        <div className="logo-parent">
          <button className="logo">
            <div className="bg" />
            <b className="m">M</b>
          </button>
          <div className="m1">
            <b className="description">Finanzas</b>
          </div>
        </div>
      </div>
      <img
        className="reachcircle-logo-website-heade-icon"
        alt=""
        src="/reachcirclelogowebsiteheader-1@2x.png"
      /> 
      <div className="state-active-parent">
        <div className="state-active">
          <div className="frame" />
          <div className="state-active-child" />
          <div className="home">
          <button className="home" onClick={() => irASeccion("home")}>Home</button>
        </div>
          <div className="social-media">
            <div className="instagram" />
          </div>
        </div>
        <div className="about-us">
          <button className="about-us" onClick={() => irASeccion("about")}>Acerca de M</button>
        </div>
      </div>
      <div className="instagramtwitterfacebook">
        <div className="services">
          <button className="services" onClick={() => irASeccion("servicio")}>Servicios</button>
        </div>
      </div>
      <div className="instagramtwitterfacebook1">
        <div className="success-story">
          {" "}
          <button className="services" onClick={() => irASeccion("trabajo-exitoso")}>
            Trabajos Exitosos
          </button>
        </div>
      </div>
      <div className="instagramtwitterfacebook2">
        <div className="testimonial">
          {" "}
          <button className="services" onClick={() => irASeccion("opiniones")}>Opiniones</button>
        </div>
      </div>
      <div className="instagramtwitterfacebook3">
        <div className="our-team">
          {" "}
          <button className="services" onClick={() => irASeccion("nuestro-equipo")}>
            Nuestro equipo
          </button>
        </div>
      </div>
      <div className="text-block">       
          <div className="contact">
            {" "}
            <button className="smallnormaljustifyactive" style={{ color: "white" }} onClick={() => irASeccion("contacto")}>Contacto</button>
          </div>       
      </div>
    </header>
  );
};

export default Navbar;
