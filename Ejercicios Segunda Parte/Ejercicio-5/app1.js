//importamos la configuracion 'dotenv'
require ('dotenv').config()
const Server = require('./models/server')

const server = new Server()

//con listen estamos escuchando
server.listen()