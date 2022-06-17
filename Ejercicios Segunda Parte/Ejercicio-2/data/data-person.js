const fs = require('fs')
const DBRoute = './data/DB.json'

class DataPersona {
  constructor() {
    this.leer = fs.readFileSync
    this.cargardatos()
    this.escribir = fs.writeFileSync
    this.data = []
  }


  cargardatos = () => {
    if (!fs.existsSync(DBRoute) || this.data.length !== 0) {
      return null
    } else {
      let rawdata = this.leer(DBRoute)
      this.data = JSON.parse(rawdata)
    }
  }


  guardar = () => {
    let data = JSON.stringify(this.data, null, 2);
    this.escribir(DBRoute, data)
  }


  getPersonas = () => {
    return this.data
  }


  addPersona = (persona) => {
    this.data.push(persona)
    this.guardar()
  }


  editarPersona = (persona, index) => {
    this.data[index].nombres = persona.nombres
    this.data[index].apellidos = persona.apellidos
    this.data[index].ci = persona.ci
    this.data[index].direccion = persona.direccion
    this.data[index].sexo = persona.sexo
    this.guardar()
  }


  eliminarPersona = (id) => {
    this.data.splice(id, 1)
    this.guardar()
  }

  filtrarPersonas = (nombres, apellidos) => {
    
    const datosfiltrados = this.data.filter((atributo) => {
      if (nombres && apellidos) {
          return atributo.nombres === nombres && atributo.apellidos === apellidos;
      } else if (nombres){
          return atributo.nombres === nombres;
      } else {
          return atributo.apellidos === apellidos;
      }
    })
    return datosfiltrados;
  }

  filtrarCi = (ci) => {
    const datosCi = this.data.filter((atributo) => {
          return atributo.ci === ci;
    })
    return datosCi;
  }
}

module.exports = DataPersona
