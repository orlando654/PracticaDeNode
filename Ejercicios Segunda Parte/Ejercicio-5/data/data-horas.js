const fs = require ('fs')

//datos 
let fecha =  new Date();

//dia de la semana
let diaSemana = ['Domingo', 'Lunes','Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
let diaSemana1 = diaSemana[fecha.getDay()]

//HOra
let hora = new Date()
horas = hora.toLocaleTimeString()
let horas1 = hora.getHours();

//controla  el formato de AM o PM
let ampm = horas1 >= 12 ? 'PM' : 'AM';

//mes
let mesAnyo = ['Enero', 'Febrero', 'Marzo' , 'Abril' , 'Mayo ', 'Junio', 'Julio', 'Agosto','Septiembre','Octubre','Noviembre','Diciembre']
let mesAnyo1 = mesAnyo[fecha.getMonth()]

//date_2
date_2 = ` ${fecha.getDate()} / ${fecha.getMonth()+1} / ${fecha.getFullYear()}`

class hor {
  constructor (){
const DataHora = 
  {
    Day: diaSemana1,
    Date_1: `${fecha.getDate()} de ${mesAnyo1} `,
    Year:fecha.getFullYear(),
    Date_2:date_2,
    hour:horas,
    Prefix:ampm
  }

    this.DataHora = DataHora
    
  }
}



  module.exports = hor