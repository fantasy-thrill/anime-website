const mysql = require('mysql2');
const express = require('express');
const app = express();
require('dotenv').config();

app.get('/data', (req, res) => {
  const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
  });

  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to database:', err);
      res.statusCode = 500;
      res.end('Internal Server Error');
      return;
    }

    connection.query('SELECT * FROM anime.series_data', (err, results) => {
      if (err) {
        console.error('Error querying database:', err);
        res.statusCode = 500;
        res.end('Internal Server Error');
        return;
      }

      res.writeHead(200, {
        'Content-Type': 'application/json'
      });
      res.end(JSON.stringify(results));
    });
  });
});

app.use(express.static('public'));

app.listen(5500, () => {
  console.log('app listening on port 5500');
});