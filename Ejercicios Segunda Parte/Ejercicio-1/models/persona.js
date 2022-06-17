const { v4: uuidv4 } = require('uuid');

class Persona {
  
  id = '';
  nombres = '';
  apellidos = '';
  ci = 0;
  direccion = '';
  sexo = '';

  constructor(nombres, apellidos, ci, direccion, sexo) {
    this.id = uuidv4();
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.ci = ci;
    this.direccion = direccion;
    this.sexo = sexo;
  }
}

module.exports = Persona;