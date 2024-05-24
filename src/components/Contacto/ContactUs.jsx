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
      const response = await axios.post('http://localhost:3000/api/send-gmail', {
        Nombre,
        Apellido,
        Mensaje
      });
      console.log(response.data);
      setNombre('');
      setApellido('');
      setMensaje('');
      setEnviado(true);
    } catch (error) {
      console.error('Error al enviar la reseña:', error);
      setEnviado(false);
    }
  };

  return (
    <div className="contact-us" id="contacto">
      <div className="get-in-touch-parent">
        <h1 className="get-in-touch2">Contactanos</h1>
        <div className="frame-div">
          <div className="frame-parent1">
            <div className="frame-parent2">
              <div className="first-name-parent">
                <div className="first-name">Nombre</div>
                <div className="form-parent">
                  <input
                    className="form2"
                    placeholder="Ej: Juan Perez"
                    type="text"
                    value={Nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </div>
              </div>
              <div className="instagram1">
                <div className="last-name">Correo</div>
                <input
                  className="form3"
                  placeholder="Ej: 8sS3H@example.com"
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
              placeholder="Ej: Hola, me interesa tu servicio"
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
          <div dangerouslySetInnerHTML={{
            __html: `
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1779.9735648368335!2d-65.21081760710732!3d-26.841633861728564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c0bc99b10e5%3A0xb7b42a4ec6fe4d5!2sJos%C3%A9%20Rondeau%20660%2C%20T4000AHN%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1716560152513!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      `}} />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
