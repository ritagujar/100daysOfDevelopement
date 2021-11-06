// REST OPERATOR
// Rest operator should always be at the end (num1, num2, num3, ...args) otherwise it will thorw an error

const mSum = (num1, num2) => console.log(num1 + num2);

const mSum1 = (num1, num2, ...args) => {
  console.log(num1);
  console.log(num2);
  console.log(args);
  let sum = num1 + num2;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }

  console.log(sum);
};
mSum(1, 2, 3, 4, 5);
mSum1(1, 2, 3, 4, 5);

// Define a destructuring object with two regular variables and one rest variable:
const { firstName, lastName, ...otherInfo } = {
  firstName: "Oluwatobi",
  lastName: "Sofela",
  companyName: "CodeSweetly",
  profession: "Web Developer",
  gender: "Male",
};

// Invoke the otherInfo variable:
console.log(otherInfo);

// The invocation above will return:
// {companyName: "CodeSweetly", profession: "Web Developer", gender: "Male"}

// SPREAD OPERATOR
// Spread syntax allows arrays and objects to be expanded into:
// Elements in case of array
// key-value pairs in case of object

const mName = ["Sofela", "is", "my"];
const aboutMe = ["John", ...mName, "name."];
console.log(aboutMe);

// Spread operator to convert a string into individual Array Items

const usage = "Oluwatobi Sofela";
console.log([...usage]);

// Spread operator works in a Function Call

const number = [1, 2, 3, 5, 7];

function addNumber(a, b, c, d, f) {
  return a + b + c + d + f;
}

console.log(addNumber(...number));

let mArr1 = [1, 2, 3, 4, 5];
let mArr2 = mArr1; // This will affect both the array (mArra1 and mArr2)after pushing 6 into the array

// This wont affect mArr3 as we pushed 6 into mArr1 only
let mArr3 = [...mArr1];
mArr1.push(6);

console.log(mArr1);
console.log(mArr2);
console.log(mArr3);

// Concatination using spread operator

let mArr4 = [1, 2, 3, 4, 5];
let mArr5 = [6, 7, 8];

// let mArr6 = mArr4.concat(mArr5);

// Using Spread operator

let mArr6 = [...mArr4, ...mArr5];

// To append elements in the array
let mArr7 = [0, ...mArr4, 10, ...mArr5, 9];
console.log(mArr6);
console.log(mArr7);

// Spread operator on Object

let myObj1 = {
  name: "John",
  lastName: "Lark",
};

let myObj2 = {
  age: 28,
};

let myObj3 = { ...myObj1, ...myObj2 };
console.log({ ...myObj1 });
console.log({ ...myObj2 });
console.log(myObj3);
