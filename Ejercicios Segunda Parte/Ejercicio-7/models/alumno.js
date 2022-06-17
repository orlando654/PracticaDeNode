const { v4: uuidv4 } = require('uuid');

class Alumno {
  id = '';
  nombres = ''; 
  apellidos = '';
  cursos = [];

  constructor(nombres, apellidos, cursos) {
    this.id = uuidv4();
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.cursos = cursos;
  }

  getId(idx) {
    this.id = idx
  }
}


module.exports = Alumno;