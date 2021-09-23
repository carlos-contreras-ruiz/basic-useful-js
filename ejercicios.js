//multiplicacion sin signo de multiplicar
const multyply = (a, b) => {
  let res = 0;
  if (a == 0 || b == 0) return 0;
  const positivo = Math.abs(b) === b;
  for (let i = 0; i < Math.abs(b); i++) {
    res = positivo ? res + a : res - a;
  }
  return res;
};

const a = multyply(50);
console.log(a);

//abtener el mayor
//si no se manda el estado incial del accumulador
//el acc sera el valor del primer elemento
//y el elemento tendra el segundo valor
const getBiggest = (arr) => arr.reduce((acc, el) => (acc > el ? acc : el));
const b = getBiggest([50, 10, 67, -10]);
console.log(b);

//limpiar el arreglo
const clean = (arr) => {
  return arr.reduce((acc, ele) => {
    if (ele) {
      acc.push(ele);
    }
    return acc;
  }, []);
};

const c = clean([1, undefined, null, 3, 4, 0]);
console.log(c);

//flatten the array
const arr = [[1, 2], 3, [[3, 4]], [7, 7]];

const flatten = (arr) => arr.reduce((acc, el) => acc.concat(el), []);

const arrFlaten = flatten(arr);
console.log(arrFlaten);

//cuantas veces se repite una palabra

const repetead = (str) => {
  const lowered = str.toLowerCase();
  const splitted = lowered.split(" ");
  const reduced = splitted.reduce((acc, el) => {
    if (acc[el]) {
      acc[el]++;
    } else {
      acc[el] = 1;
    }
    return acc;
  }, {});
  return Object.entries(reduced).reduce((acc, el) => {
    return acc[1] > el[1] ? acc : el;
  });
};

const d = repetead("this is a fake sentence is for x purposes");
console.log(d);

//palindrome

const isPalindrome = (str) => {
  const splitted = str.replace(/\s/g, "").toLowerCase();
  const reversed = splitted.split("").reverse().join("");
  return splitted == reversed;
};

const f = isPalindrome("esto no es palindromo");
//const f = isPalindrome("oso");

console.log(f);
