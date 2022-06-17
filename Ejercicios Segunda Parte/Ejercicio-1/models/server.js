const express = require('express');

class Server {

  constructor(){
    this.app = express();
    this.port = process.env.PORT;

    this.personaPath = '/api/persona';

    this.middlewares();

    this.routes();
  }

  middlewares() {
    //Lectura y parseo del body
    //Cualquier informacion que venga se serializara en formato JSON
    this.app.use(express.json());

    //Se publica la carpeta public
    this.app.use(express.static('public'));
  }

   routes() {
     this.app.use(this.personaPath, require('../routes/personaRoutes'));
  }

   listen() {
    //Con process.env.PORT obtenemos el valor de la variable PORT que esta en el archivo .env
    this.app.listen(this.port, () => {
    console.log('Servidor corriendo en puerto ', this.port);
    });
  }

}

module.exports = Server;