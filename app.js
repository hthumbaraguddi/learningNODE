const http = require('http');
const express = require('express');

const app = express();

const route = require('./route')

// const server = http.createServer(route.GreetingRoute);

// server.listen(4000);

app.use(route.GreetingRoute);

app.listen(4000);
