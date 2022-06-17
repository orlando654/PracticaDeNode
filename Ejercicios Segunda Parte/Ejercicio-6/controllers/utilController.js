const { guardarDB, leerDB } = require('../helpers/guardar');
const Util = require('../models/util');
const Utiles = require('../models/utiles');

const { response } = 'express';

const utiles = new Utiles();

const utilGet = (req = request, res = response) => {
  
  const utilDB = leerDB();

  if (utilDB) {
    utiles.cargarUtilFromArray(utilDB);
  }

  res.json({
    msg: 'get API - Controlador',
    utilDB
  })

};


const utilPut = (req, res = response) => {

  const { id } = req.params

  if (id) {
    utiles.eliminarUtil(id)
  
    const { material, precio_unitario, precio_total } = req.body;

    const util = new Util(material, precio_unitario, precio_total);
  
    util.setID(id)
  
    utiles.crearUtil(util);
    guardarDB(utiles.listArr);
  }

  res.json({
    msg: 'put API - Controlador'
  })
}

const utilPost = (req, res = response) => {
  const { material, precio_unitario, precio_total } = req.body;

  const util = new Util(material, precio_unitario, precio_total);

  let utilDB = leerDB()
  
  if (utilDB) {
    utiles.cargarUtilFromArray(utilDB);
  }

  utiles.crearUtil(util);
  guardarDB(utiles.listArr);
  utilDB = leerDB()

  const listado = leerDB();

  if (listado) {
    utiles.cargarUtilFromArray(listado);
  }

  res.json({
    msg: 'post API - Controlador',
    listado
  })

}

const utilDelete = (req, res = response) => {

  const { id } = req.params
  
  if (id) {
    utiles.eliminarUtil(id);
    console.log("Este es delete:",utiles.listArr);
    guardarDB(utiles.listArr)
  }

  res.json({
    msg: 'delete API - Controlador',
  })
};


module.exports = {
  utilGet,
  utilPut,
  utilPost,
  utilDelete
}