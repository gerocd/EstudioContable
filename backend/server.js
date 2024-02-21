// server.js
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mardar346',
  database: 'EstudioM'
});

// Conectar a la base de datos
db.connect(err => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});

app.use(bodyParser.urlencoded({ extended: true }));
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
