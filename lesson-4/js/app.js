// Reference
let user = {
  username: 'Thien Buhr',
  courses: ['JS Sau Sac', 'Dm Flutter, ae tao JS']
};
// console.log(user);
// user = new Object(5); //han che su dung /// => Number {5}
console.log(user);
user.username = 'Thien ne';
console.log(user);

// const courses = new Array(2);
// courses[0] = 'JS Sau Sac';
// courses[1] = 'Thien Burh';
const courses = new Array('JS Sau Sac', 'Thien Buhr');
console.log(JSON.stringify(courses));
courses.push('Hello');
console.log(JSON.stringify(courses));

const newUser = user;
newUser.username = 'Someone else';
console.log(user, newUser);

function calculateSum(arr) {
    arr.push(0);
    console.log(JSON.stringify(arr));
}
calculateSum(courses);
console.log(JSON.stringify(courses));

const newCourses = ['JS Sau Sac', 'Thien Buhr', 0];
console.log(newCourses === courses);

const obj = {};

function checkEmpty(o){
  return o === {};
}
const result = checkEmpty(obj);
console.log(result); // false cause diffrerent address
