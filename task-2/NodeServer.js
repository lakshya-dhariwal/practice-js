const http = require("http");
const hostname = "127.0.0.1";
const port = 5000;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/plain");
  response.end("Hello World");
  console.log(request.headers);
});

server.listen(port, hostname, () => {
  console.log(`Hello from ${hostname}:${port}/`);
});
