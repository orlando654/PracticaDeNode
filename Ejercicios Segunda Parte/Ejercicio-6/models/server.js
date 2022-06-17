const express = require('express');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.utilPath = '/api/util';
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.utilPath, require('../routes/utilRoutes'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Servidor corriendo en el puerto ', this.port);
    });
  }

}


module.exports = Server;