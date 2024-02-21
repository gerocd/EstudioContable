import "./ContactUs.css";
import React, { useState } from 'react';
import axios from 'axios';

const ContactUs = () => {
  const [Nombre, setNombre] = useState('');
  const [Apellido, setApellido] = useState('');
  const [Mensaje, setMensaje] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleEnviar = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/enviarmensaje', {
        Nombre,
        Apellido,
        Mensaje
      });
  
      console.log(response.data);

      // Limpiar los campos después de enviar
      setNombre('');
      setApellido('');
      setMensaje('');
      setEnviado(true); // Establecer enviado a true para mostrar el mensaje de confirmación
    } catch (error) {
      console.error('Error al enviar la reseña:', error);
      setEnviado(false); // Si hay un error, establecer enviado a false
      // Resto del código de manejo de errores...
    }
  };

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
                    value={Nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </div>
              </div>
              <div className="instagram1">
                <div className="last-name">Apellido</div>
                <input
                  className="form3"
                  placeholder="Ingrese su apellido"
                  type="text"
                  value={Apellido}
                  onChange={(e) => setApellido(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="message-parent">
            <div className="message">Mensaje</div>
            <textarea
              className="form5"
              placeholder="Ingrese su mensaje"
              rows={6}
              cols={23}
              value={Mensaje}
              onChange={(e) => setMensaje(e.target.value)}
            />
          </div>
        </div>
        <button className="largenormaljustifyactive" onClick={handleEnviar}>
          <div className="send">ENVIAR</div>
        </button>
        {enviado && <div className="confirmacion">Mensaje enviado correctamente</div>}
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
            <p className="ohio-st-south">24 de Septiembre 910, San Miguel de Tucumán</p>
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
}

export default ContactUs;
