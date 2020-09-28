const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');

const app = express();

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

const server = http.createServer(app);

module.exports.io = socketIO(server);

require('./sockets/socket');

server.listen(port, (error) => {

    if (error) throw new Error(err);

    console.log(`Server running en puerto ${ port }`);
});