function Fn() {
  //Las funciones normales en js
  //tienen un contexto this
  //Lo primero que hace la funcion al ser instanciada
  //es crear un objeto literal {} con las propiedades
  //ignora por completo el return y regresa this y sus propiedades
  this.prop = "propiedad";
  //return "hola normal function";
}

Fn.prototype.lala = function FuncionDePrototipo() {
  console.log("LALA");
};

//const r = Fn();
const r = new Fn();
console.log(r);
console.log(r.__proto__);
console.log(r.lala());

//las arrow function no pueden ser instanciadas con new
//Y no tienen un contexto de this
const fatFn = () => {
  return "Arrow function";
};

console.log(fatFn());
