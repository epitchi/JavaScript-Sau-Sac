var x = undefined;

console.log(typeof x);

x = 5;

console.log(typeof x);

let isShowModal = true;

console.log(typeof isShowModal);

// In Javascript '' "" same mean
let courseName = `
hello
javascript
`;
console.log(courseName);

console.log(typeof courseName);

courseName = 'JS Sau Sac';
console.log(courseName);

console.log(typeof courseName);

let max = 2 ** 53 - 1;
console.log(max);
max++;
console.log(max);

max++;
console.log(max); // this value not change cause out of limit

// the end of BigInt value is 'n' word 
let max2 = BigInt(2n ** 53n);
console.log(max2);
max2 *= 10n;
console.log(max2);

const uuid = Symbol('uuid');
const uuid2 = Symbol('uuid');


console.log(uuid == uuid2);
