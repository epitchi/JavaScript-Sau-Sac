// Undefined
var courseName;  //= undefined;
console.log(typeof courseName);

function doSomething(name) {
  console.log(name);
}

const result = doSomething();
console.log(result);

let user = {
  name: 'Thien',
};
console.log(typeof user === 'object' && user !== null);

// console.log(user.somethingelse.abc); // => exception

// Null
user = null;
console.log(typeof user === 'object' && user !== null);
// const name = user.name; // => exception

function a(checkNumber) {
  let undefined = 10;
  if (checkNumber === void(0)){
    console.error('missing arg');
  } else{
    console.log('caculate value');
  }
}

a(10);
