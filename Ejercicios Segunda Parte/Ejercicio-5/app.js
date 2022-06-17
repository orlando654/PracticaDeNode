const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`servidor corriendo en el puerto ${port}`);
});


//datos 
let fecha =  new Date();

//dia de la semana
let diaSemana = ['Domingo', 'Lunes','Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
let diaSemana1 = diaSemana[fecha.getDay()]

//HOra
let hora = new Date()
horas = hora.toLocaleTimeString()

//mes
let mesAnyo = ['Enero', 'Febrero', 'Marzo' , 'Abril' , 'Mayo ', 'Junio', 'Julio', 'Agosto','Septiembre','Octubre','Noviembre','Diciembre']
let mesAnyo1 = mesAnyo[fecha.getMonth()]

//date_2
date_2 = ` ${fecha.getDate()} / ${fecha.getMonth()+1} / ${fecha.getFullYear()}`

//controla  el formato de AM o PM
var ampm
if(horas >= 12){
  horas = horas - 12;
  ampm = 'PM'
}else{
  ampm =  'AM'
}
if (horas == 0) {
  horas == 12
}

const Datos = 
  {
    Day: diaSemana1,
    Date_1: `${fecha.getDate()} de ${mesAnyo1} `,
    Year:fecha.getFullYear(),
    Date_2:date_2,
    hour:horas,
    Prefix:ampm
  }
console.log(Datos); 