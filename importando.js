//const imp = require("./importExport");
//console.log(imp.exportObject);
//console.log(imp.exportObject2);

//para usar import sin transpilador
//alterar el package.json y poner el type en module
//o cambiar la extension .mjs tanto en el archivo que importa como
//el que exporta
import { exportObject, exportObject2 } from "./importExport";

console.log(exportObject);
console.log(exportObject2);
