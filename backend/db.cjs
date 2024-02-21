import mysql from 'mysql';

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mardar346',
  database: 'prog3',
});

db.connect((err) => {
  if (err) {
    console.error('Error de conexión a MySQL: ' + err.stack);
    return;
  }
  console.log('Conectado a MySQL como ID ' + db.threadId);
});

export default db;
