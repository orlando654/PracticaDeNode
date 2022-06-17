const express = require('express');

class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.alumnoPath = '/api/alumno';
    this.middlewares();
    this.routes();
  }

  middlewares() {  
    this.app.use(express.json());
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.alumnoPath, require('../routes/alumnoRoutes'));
  }
  
  listen() {
    this.app.listen(this.port, () => {
      console.log('Servidor corriendo en el puerto: ', this.port);
    })
  }
}


module.exports = Server;