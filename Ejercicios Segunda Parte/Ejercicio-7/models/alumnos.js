
class Alumnos {
  constructor() {
    this._listado = [];
  }
 
  crearAlumno(alumno = {}) {
    this._listado[alumno.id] = alumno;
  }

  get listArray() {
    const listado = [];
    Object.keys(this._listado).forEach(key => {
      const alumno = this._listado[key]; 
      listado.push(alumno);
    })
    
    return listado;
  }
  cargarAlumnosFromArray(alumnos = []) {    
    alumnos.forEach(alumno => {
      this._listado[alumno.id] = alumno;
    })
  }
  eliminarAlumno(id = '') {
    if (this._listado[id]) {
      delete this._listado[id];
    }
  }
}

module.exports = Alumnos