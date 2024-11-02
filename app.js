//const http = require('http');
const express = require('express');
const bodyParser =  require('body-parser');
const route = require('./route');

const app = express();

app.use(bodyParser.urlencoded({extended : false}));


// const server = http.createServer(route.GreetingRoute);

// server.listen(4000);

app.use(route.GreetingRoute);

app.listen(4000);
