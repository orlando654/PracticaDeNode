// Obtenemos el paquete dotenv
require('dotenv').config();
// requerimos el archivo server
const Server = require('./models/server');

const server = new Server();

server.listen();