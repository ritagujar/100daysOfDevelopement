// Variable 'let' and 'const'

let num1 = 10;
console.log(num1);

let name = "John Lark";
let isOldEnough = false;
let mark = [9, 10, 9.5];
let blogObj = {
  title: "Blog Title 1",
  decription: "Lorem ipsum dolor",
};

// If we create varible using const that variable cant be modified/updated anytime later
const num2 = 20;
console.log(num2);

// TEMPLET STRINGS - It is just a string that allow embedding expressions inside it.

const myName = "John";
const mGreeting = `Hello ${myName}`;
console.log(mGreeting);

const firstName = "John";
const lastName = "Lark";

function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

const greet = `Hello ${getFullName(firstName, lastName)}`;
console.log(greet);

//rgba(red, green, blue, alpha)

let red = 200;
let green = 155;
let blue = 100;
let alpha = 0.8;

const rgbaExp = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
console.log(rgbaExp);

// ARROW FUNCTIONS

function greetings(name) {
  return `Hello ${name}`;
}

// Arrow Function
const mGreet = (name, age) => {
  return `Hello ${name} ${age}`;
};

// const mGreet = (name) => `Welcome ${name}`;

console.log(greetings("John"));
console.log(mGreet("Mark", 20));
