// index.js
const http = require('http');

const hostname = '0.0.0.0';
const port = 3000; // Используем порт 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Условие для маршрута '/'
  if (req.url === '/') {
    res.end('Hello, world!\n'); // <-- Требуемый вывод
  } else {
    res.end('Not Found\n');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
