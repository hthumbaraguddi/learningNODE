const http = require('http');

const route = require('./route')

const server = http.createServer(route.GreetingRoute);

server.listen(4000);
