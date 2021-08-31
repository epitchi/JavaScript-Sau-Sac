// new => object
// without new => result of primitive
let x = 10;
const result = new Boolean(x);
console.log(result);

console.log(result.valueOf());

const uuid = Symbol('uuid');
console.log(uuid);

const amount = BigInt(1000000);
console.log(amount);

const value = new Object(100);
console.log(value);
console.log(value.valueOf());

value.meta = 'some meta data';

console.log(value);
