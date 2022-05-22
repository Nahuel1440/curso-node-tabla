const fs = require("fs");
const colors = require("colors");

/* const crearArchivo = (base = 5) => {
    let salida = "";
    return new Promise((resolve, reject) => {
        console.log("=====================");
        console.log("   Tabla del:", base);
        console.log("=====================");
        for (let i = 1; i <= 10; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }
        fs.writeFileSync(`tabla-${base}.txt`, salida);
        resolve(`tabla-${base}.txt`);
    });
}; */

const crearArchivo = async (base = 5, toList, hasta) => {
  let salida = "";
  let consola = "";
  try {
    for (let i = 1; i <= hasta; i++) {
      consola += `${base} ${"x".blue} ${i} ${"=".blue} ${base * i}\n`;
      salida += `${base} x ${i} = ${base * i}\n`;
    }
    if (toList) {
      console.log("=====================".blue);
      console.log("   Tabla del:", colors.red(base));
      console.log("=====================".blue);
      console.log(salida);
    }
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};
//     /* console.log(`archivo tabla-${base}.txt creado`); */
// };
module.exports = {
  crearArchivo,
};
