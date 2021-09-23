//Expresion de clase
/*const Rectangulo = class{

}*/

//declaracion de clase
//Las clases declaradas con class no tienen hoisting
class Rectangulo {
  propiedad = "mi propiedad";
  #propiedadPrivada; //Propiedad privada
  static estatico = 42;

  constructor() {
    this.#propiedadPrivada = "Adios";
    console.log(this.propiedad, this.#propiedadPrivada);
  }

  //metodo estatico
  //Los metodos estaicos no pueden acceder a las propiedades this
  //a menos que sean static las variables
  static metodoEstatico() {
    console.log("Estoy comiendo");
  }
}
//Hoisting
//Es cuando tomamos variables declaradas con var
//y funciones declaradas con function seran llevadas
//al inicio del archivo al momento de ejecutar
function Cuadrado() {}

const instancia = new Rectangulo();
Rectangulo.metodoEstatico();
