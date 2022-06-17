//Estoy importando el paquete file system (fs)
const fs = require('fs');

const crearArchivo = (base = 5) => {
    try {
    
  let multiplicar = '';
  let sumar="";
  let restar="";
  let dividir="";
  

  console.log('=====================');
  console.log(`    Tabla del ${base}      `);
  console.log('=====================');

  for(let i = 1; i <= 100; i++){
    multiplicar += `${base} x ${i} = ${base * i}\n`;
    sumar += `${base} + ${i} = ${base + i}\n`;
    restar += `${base} - ${i} = ${base - i}\n`;
    dividir += `${base} / ${i} = ${base / i}\n`;
    
  }

//   console.log(multiplicar);
let operaciones = multiplicar + "\n" + sumar + " \n" + restar+ " \n" + dividir

    fs.writeFileSync(`tabla-${base}.txt`, operaciones );
    console.log(`tabla-${base}.txt creado`);
  }
  catch (error) {
    throw error;
  }
};
//Exportamos el archivo
module.exports = {
  generarArchivo: crearArchivo
};


// ! es una alerta
// TODO: otro tipo de comentario
// * important informacion
