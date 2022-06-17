const express = require('express');

class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8080;
    this.horaPath = "/api/hora"

    this.middlewares()
    this.routes();
  }

  middlewares() {
    this.app.use(express.json())
  }

  routes() {
    this.app.use(this.horaPath, require('../routes/horas'))

  }

  listen() {
    //Con process.env.PORT obtenemos el valor de la variable PORT que esta en el archivo .env
    this.app.listen(this.port, () => {
      console.log('Servidor corriendo en puerto ', this.port);
    });
  }
  
}

module.exports = Server