const http = require('http');
const app = require('./app');

const port = 3000; // generally should be imported from .env

const server = http.createServer(app);

server.listen(port);