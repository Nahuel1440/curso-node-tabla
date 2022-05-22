const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
/* console.log("\033c\033[3J"); */
/* console.log(argv); */

//No es recomendada esta forma, ya que es muy susceptible a errores
// const [, , arg3 = "base=5"] = process.argv;
// const [, base = 5] = arg3.split("=");

// const base = 5;
crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo, "creado"))
  .catch((err) => console.log(err));
