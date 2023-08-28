const http = require('http');
const mysql = require('mysql2');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/data' && req.method === 'GET') {
    // Handle the client-side request for data
    const connection = mysql.createConnection({
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: 'DKfh%*hc3j5LVyu#',
      database: 'anime_series'
    });

    connection.connect((err) => {
      if (err) {
        console.error('Error connecting to database:', err);
        res.statusCode = 500;
        res.end('Internal Server Error');
        return;
      }

      connection.query('SELECT * FROM anime_series.series_data', (err, results) => {
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
  } else {
    // Serve the HTML file
    fs.readFile('index.html', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Internal Server Error');
        return;
      }
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      res.end(data);
    });
  }
});

server.listen(5500, () => {
  console.log('Server is running on port 5500');
});