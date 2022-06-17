const { v4: uuidv4 } = require('uuid');

class Util {
  id = '';
  material = {
    c_1 : '',
    c_2 : ''
  };
  precio_unitario = {
    c_1 : 0,
    c_2 : 0
  };
  precio_total = 0;

  constructor(material, precio_unitario, precio_total) {
    this.id = uuidv4();
    this.material = material;
    this.precio_unitario = precio_unitario;
    this.precio_total = precio_total;
  }

  setID(idx) {
    this.id = idx
  }
}

module.exports = Util;