const { response , request} = require('express')
const hor = require('../data/data-horas')

const dataHor = new hor()

const horaGet = (req, res = response) => {

  let datos = dataHor.DataHora

  res.json({
    msg: 'datos :',
    datos
  })
}


module.exports =  { horaGet}
