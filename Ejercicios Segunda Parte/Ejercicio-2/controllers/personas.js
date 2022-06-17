const { response , request } = require('express')
const DataPersona = require('../data/data-person')
const Persona = require('../models/Persona')

const dataPerson = new DataPersona()

const person = (req = request , res = response) => {

  const { nombres, apellidos} = req.query;
  if (nombres || apellidos) {
     let datosfilter = dataPerson.filtrarPersonas(nombres, apellidos);
     res.json({
       datosfilter
     })
    } else {
    let datos = dataPerson.getPersonas()
    res.json({
      datos
    })
  }
}

const person2 = (req = request , res = response) => {

  const {parametro} = req.params

  if (parametro === "Masculino" || parametro === "Femenino") {
    const dato = dataPerson.data.filter(elemento => elemento.sexo === parametro)
    res.json({
      dato
    })
  } else {
    const dato2 = dataPerson.data.filter(elemento => elemento.ci === parametro)
    
    if (dato2.length !== 0) {
      res.json({
        dato2
      })
    } else {
      res.json({
        msg: "Introduce el ci o el sexo"
      })
    }
  }
}

const person3 = (req = request , res = response) => {

  const {inicial, sexo} = req.params
  const dato = dataPerson.data.filter(elemento => elemento.sexo === sexo && elemento.nombres.charAt(0) === inicial)

  if (dato.length !== 0) {
    res.json({
      dato
    })
  } else {
    res.json({
      msg: "Datos no Encontrados"
    })
  }
}



const personaPut = (req = request, res = response) => {
  const { id } = req.params
  const { nombres, apellidos, ci, direccion, sexo } = req.body;

  const index = dataPerson.data.findIndex(object => object.id === id)

  if (index !== -1) {
    dataPerson.editarPersona({ nombres, apellidos, ci, direccion, sexo }, index)
    res.json({
      nombres,
      apellidos,
      ci,
      direccion,
      sexo,
      msg: 'Persona Modificada '
    })
  } else {
    res.json({
      msg: 'No se ha encontrado'
    })
  }
}

const personaPost = (req = request, res = response) => {
  const { nombres, apellidos, ci, direccion, sexo } = req.body;

  let personaNueva = new Persona(nombres, apellidos, ci, direccion, sexo)

  dataPerson.addPersona(personaNueva)

  res.json({
    personaNueva,
    msg: 'Persona añadida '
  })
}



const personaDelete = (req = request, res = response) => {
  const {id} = req.params
  const index = dataPerson.data.findIndex(object => object.id === id)
  if (index !== -1) {
    dataPerson.eliminarPersona(index)
    res.json({
      msg: 'Persona eliminada con exito'
    })
  } else {
    res.json({
      msg: 'Persona no encontrada'
    })
  }
}

module.exports = {
  person,
  person2,
  person3,
  personaPut,
  personaPost,
  personaDelete
}