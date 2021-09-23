const fn = (a, b, c) => console.log(a + b + c);
const arr = [1, 2, 3];

//fn(arr[0], arr[1], arr[2]);

//El spread operator hace una copia
fn(...arr);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = {
  ...obj1,
};

console.log(obj3);

const obj4 = {
  ...obj1,
  ...obj2,
  a: 90,
};

console.log(obj4);
