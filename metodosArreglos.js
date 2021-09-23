const arr = [0, 1, 2, 3, 4, 5, 6];

//unicamente devuleve un arreglo menor o igual
//regresa los elemntos que evaluan a true
const r = arr.filter((el, i) => {
  //console.log(i);
  return el > 3;
});
//console.log(r);

//Regresa un array con los mismos elemnetos
//transformados por el arrow function
const mapped = arr.map((el) => el * 2);
// console.log(mapped);

//con el rduce podemos devolver lo que necesitemos
const reduced = arr.reduce((acc, el) => {
  return acc + el;
}, 0);

const reduced2 = arr.reduce((acc, el) => {
  return Math.max(acc, el);
}, 0);

console.log(reduced2);
