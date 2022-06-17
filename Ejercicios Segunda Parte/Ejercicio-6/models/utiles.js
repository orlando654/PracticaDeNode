const Util = require("./util");

class Utiles {
  constructor() {
    this._listado = [];
  }

  crearUtil(util = {}) {

    this._listado[util.id] = util;
  }

  get listArr() {
    const listado = [];
    Object.keys(this._listado).forEach(key => {
      const util = this._listado[key];
      listado.push(util);
    })

    return listado;
  }

  cargarUtilFromArray(utiles = []) {
    utiles.forEach(util => {
      this._listado[util.id] = util;
    })
  }

  eliminarUtil(id = '') {
    if (this._listado[id]) {
      delete this._listado[id];
    }
  }
}

module.exports = Utiles;