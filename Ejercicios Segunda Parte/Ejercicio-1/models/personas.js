class Personas {

  constructor() {
    this._listado = [];
  }

  crearPersona(persona = {}) {
    this._listado.push(persona);

    return this._listado;
  }
}

module.exports = Personas;