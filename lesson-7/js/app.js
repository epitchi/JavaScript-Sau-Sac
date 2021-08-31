let x = '10';

let y = Number(x) * 10;
console.log(y);

let isAllow = y > 10 ? 'allow': 'not-allow';

let name = 'course';

let items = {
  valueOf(){
    return 10;
  }
}

let output = items + y;
console.log(output); // auto convert to string
