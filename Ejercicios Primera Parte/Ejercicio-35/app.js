const fs = require('fs');

try {
const base = 5;
let salida = '';

console.log('=====================');
console.log(`    Tabla del ${base}      `);
console.log('=====================');

for(let i = 1; i <= 100; i++){
  salida += `${base} x ${i} = ${base * i}\n`;
}

console.log(salida);

  fs.writeFileSync(`tabla-${base}.txt`, salida);
  console.log(`tabla-${base}.txt creado`);
}
catch (error) {
  throw error;
}

const { generarArchivo } = require('./helpers/multiplicar');
// const { generarArchivo } = require('./helpers/sumar');

const base = 5;
generarArchivo(base);

