const http = require("http");

function handleRequest(request, response) {
  response.statusCode = 200;
  response.end(
    "<p></p><hr><h1>Since we are creating this server in NodeJS, we don't need live server extension in code.</h1><hr>"
  );
}

const server = http.createServer(handleRequest);

server.listen(3000);
