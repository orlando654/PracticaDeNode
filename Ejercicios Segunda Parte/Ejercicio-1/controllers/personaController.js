const Persona = require("../models/persona");
const Personas = require("../models/personas");

const { response } = 'express';


const personaGet = (req, res = response) => {



  res.json({
    msg: 'get API - Controlador',
    listado
  });
};

const personaPut = (req, res = response) => {



  res.json({
    msg: 'put API - Controlador'
  });
};

const personaPost = (req, res = response) => {

  const { nombres, apellidos, ci, direccion, sexo } = req.body;

  const persona = new Persona(nombres, apellidos, ci, direccion, sexo);
  const personas = new Personas();

  const listado = personas.crearPersona(persona);


  res.json({
    msg: 'post API - Controlador',
    listado
  });
};

const personaDelete = (req, res = response) => {
  


  res.json({
    msg: 'delete API - Controlador'
  });
};

module.exports = {
  personaGet,
  personaPut,
  personaPost,
  personaDelete
}