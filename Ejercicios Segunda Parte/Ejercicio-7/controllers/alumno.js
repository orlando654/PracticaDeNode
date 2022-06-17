const { leerDB, guardarDB } = require('../helpers/guardarArchivo');
const Alumno = require('../models/alumno');
const Alumnos= require('../models/alumnos');
const { response } = 'express';

// Instanciamos Alumnos, y lo declaramos globalmente para que se registre muchos alumnos
const alumnos = new Alumnos();

// Llamamos a leerDB, para ver si el archivo json existe
let alumno = leerDB();
if (alumno) {
  alumnos.cargarAlumnosFromArray(alumno);
}

const alumnoPost = (req, res = response) => {

  const { nombres, apellidos, cursos } = req.body;
  const alumno = new Alumno(nombres, apellidos, cursos);

  alumnos.crearAlumno(alumno);
  guardarDB(alumnos.listArray);

  const listado = leerDB();
  alumnos.cargarAlumnosFromArray();

  res.json({
    message: 'post ',
    listado
  })
}

const alumnoGet = (req, res = response) => {

  res.json({
    message: 'get ',
    alumno
  })
}

const alumnoPut = (req, res = response) => {
  const { id } = req.params;

  if (id) {
    alumnos.eliminarAlumno(id);
    const { nombres, apellidos, cursos } = req.body;
    const alumno = new Alumno(nombres, apellidos, cursos);

    alumno.getId(id);
    alumnos.crearAlumno(alumno);
    guardarDB(alumnos.listArray);

    alumno = leerDB();
  }

  res.json({
    message: 'put ',
    alumno
  })
}

const alumnoDelete = (req, res = response) => {

  const { id } = req.params

  if (id) {
    alumnos.eliminarAlumno(id);
    guardarDB(alumnos.listArray)
  }

  res.json({
    message: 'Se ha elimino la compra',
  })
}


module.exports = {
  alumnoGet,
  alumnoPut,
  alumnoPost,
  alumnoDelete
}