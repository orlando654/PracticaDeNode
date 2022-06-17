const express = require('express');

class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8080;
    this.personPath = "/api/persona"

    this.middlewares()
    this.routes();
  }

  middlewares() {
    this.app.use(express.json())
    this.app.use( express.static('public') );
  }

  routes() {
    this.app.use(this.personPath, require('../routes/personas'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Servidor corriendo en puerto:', this.port);
    });
  }
}

module.exports = Server