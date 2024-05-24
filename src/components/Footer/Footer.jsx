import "./Footer.css";
import React from "react";

const Footer = () => {
  const redirectToInstagram = () => {
    window.location.href = "https://www.instagram.com";
  };

  const redirectToTwitter = () => {
    window.location.href = "https://www.twitter.com/";
  };

  const redirectToFacebook = () => {
    window.location.href = "https://www.facebook.com/";
  };

  return (
    <section className="main-content" >
      <div className="footer6">
        <div className="l-o-g-o">
          <div className="text-description">
            <button className="logo1">
              <b className="m3">M</b>
            </button>
            <div className="minima-is-a">Mundo Finanzas</div>
          </div>
        </div>
        <div className="get-in-touch-frame">
          <b className="get-in-touch3">Contacto</b>
          <div className="mail-frame1">
            <img className="mail-icon" loading="eager" alt="" src="/mail.svg" />
            <div className="yourmailhellocom1">marianodaruich0@gmail.com</div>
          </div>
          <div className="mail-frame2">
            <img className="phone-icon1" loading="eager" alt="" src="/phone.svg" />
            <div className="div">+54 9 381 440-6726</div>
          </div>
        </div>
        <div className="social-media-frame">
          <b className="social-media3">Redes Sociales</b>
          <div className="social-media-links">
            <img
              className="instagram-icon"
              loading="eager"
              alt=""
              src="/instagram.svg"
              onClick={redirectToInstagram}
            />
            <img
              className="twitter-icon"
              loading="eager"
              alt=""
              src="/twitter.svg"
              onClick={redirectToTwitter}
            />
            <img
              className="facebook-icon"
              loading="eager"
              alt=""
              src="/facebook.svg"
              onClick={redirectToFacebook}
            />
          </div>
        </div>
        <div className="info-frame">
          <b className="b-info">Info</b>
          <div className="info-frame-two">
            <div className="info-frame-three">
              <div className="your-info-four">
                Este estudio contable se encuentra en Argentina en la localidad de San Miguel de Tucuman, Tucuman. 4000
              </div>          
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
