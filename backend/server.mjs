// server.js
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
import db from './db.cjs';

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.use(bodyParser.json());

// Rutas
app.post('/enviar-reseña', (req, res) => {
  const { nombre, apellido, mensaje } = req.body;

  // Insertar datos en la base de datos
  const sql = 'INSERT INTO Mensajes (Nombre, Apellido, Mensaje) VALUES (?, ?, ?)';
  db.query(sql, [nombre, apellido, mensaje], (err, result) => {
    if (err) {
      console.error('Error al insertar en la base de datos:', err);
      res.status(500).send('Error al guardar la reseña');
    } else {
      console.log('Reseña guardada en la base de datos');
      res.status(200).send('Reseña guardada con éxito');
    }
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor backend en ejecución en http://localhost:${PORT}`);
});
