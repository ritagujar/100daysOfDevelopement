// Variables
// DataTypes
// Operators
// Expressions

var num1 = 10;
var num2 = 20;

var sum = num1 + num2;
var firstName = "Rita";

// console.log(firstName);
// console.log(sum);

// JavaScript Numbers
// JavaScript always stores number as 62 bit foating point where the number is stored in first 52 bit (0-51) part and exponenet is stored in next 11 bit (52-62)/

var num1 = 10.9; // Number
var num2 = 10; // Decimal Number

// console.log(typeof num1);
// console.log(typeof num2);

var a = 10;
var b = 20;
// Addition
console.log(a + b);

// Subtraction
console.log(b - a);

// Multiplication
console.log(a * b);

// Division
console.log(b / a);

// division by Zero gives the Infinity
var divByZero = a / 0;
// console.log(divByZero);
// console.log(typeof divByZero);

// Multiply a Number by string
var multiplyByString = a * "A";
// console.log(multiplyByString);
// console.log(typeof multiplyByString);

// In-Built Number Functions

// toString() number as input and returns a string
// console.log(num1.toString());
// console.log(num2.toString());

// parseInt() string numarals as input and return a number
var strNum1 = "10";
var strNum2 = "11.9";
var strNum3 = "ABC";

// console.log(parseInt(strNum1));
// console.log(parseInt(strNum2)); //  output = 11 as parseInt return int only

// parseFloat() string numarals as input and return a floating number
// console.log(parseFloat(strNum2));
// console.log(parseFloat(strNum3));

// toFixed() takes floating number and rounds it off to given position
var strFloat = 87.98765;
// console.log(strFloat.toFixed());
// console.log(strFloat.toFixed(2));
// console.log(strFloat.toFixed(10));

// JavaScript Strigns
var myFirstString = "I love JavaScript";

// console.log(typeof myFirstString);

var mySecString = "I am learning JavaScript";
// console.log(typeof mySecString);

// What is my String contain double quote
var doubleQuoteString = 'This is a "JavaScript" String';
// console.log(doubleQuoteString);

// What is my String contain single quote
var singleQuoteString = "This is a 'JavaScript' String";
// console.log(singleQuoteString);

// JS In-Buit String Functions
var str = "This is a string for JavaScript String Functions JavaScript";

// 1. length - Returns the length of a string
// console.log(str.length);

// 2. indexOf() - Find index of string inside another string (Case sensative)
// console.log(str.indexOf("JavaScript"));

// 3. lastIndexOF() - Find LAST index of a string inside another string
// console.log(str.lastIndexOf("Functions"));

// 4. slice(start, end) - Get a part of our string
// console.log(str.slice(0, 9));
// console.log(str.slice(-10)); // From Backword o/p - JavaScript
// console.log(str.slice()); // Will print whole string
// console.log(str.slice(5)); // Will print the string excluding first 5 index

// 5. substr(startPos, length) - To Get Substring function
// console.log(str.substr(0, 4));
// console.log(str.substr(21, 10));
// console.log(str.substr(21));

// 6. toUpperCase() - It converts string to -. UPPERCASE
// console.log(str.toUpperCase());

// 7. toLowerCase() - It converts string to - lowercase
// console.log(str.toLowerCase());

// 8. concat() - It merges two or more string
var str1 = "JavaScript";
var str2 = "React";

// console.log(str1.concat(" " + str2));
// console.log(myFirstString.concat("," + str1, " " + str2));
// We ca also use + operator two or more strings
// console.log(str1 + str2);

// 9. trim() - It removes extra spaces
// var extraSpaceString = "        JavaScript    ";
// console.log(extraSpaceString.trim());

// var extraSpaceString2 = "        Java Script    ";
// console.log(extraSpaceString2.trim());

// 10. charAt() - This take a position as an arg and return the char at that position
// console.log(str.charAt(5));
// console.log(str.charAt(21));

// 11. split - It splits our  string on the basis of argument passes
// console.log(str.split(" "));

// Null and Undefined Values
var myVar; // Here myVar holds no value - Undefined
// console.log(myVar);

myVar = null; // Here myVar holds Null value - null
// console.log(myVar);

// CONDITIONAL STATEMENTS

var x = 10;
var y = 20;

// 1. if-else
// if (x > y) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 2. if-else if
// if (x > y) {
//   console.log("x > y");
// } else if (x < y) {
//   console.log("x < y");
// } else {
//   console.log("Nothing");
// }

// 3. switch
var currentDay = "Fri";
// if (currentDay === "Mon") {
//   console.log("Timing 10:00-06:00");
// } else if (currentDay === "Tue") {
//   console.log("Timing 09:00-05:00");
// } else if (currentDay === "wed") {
//   console.log("Timing 09:30-05:30");
// } else if (currentDay === "Thu") {
//   console.log("Timing 10:15-09:15");
// } else if (currentDay === "Fri") {
//   console.log("Timing 01:00-04:00");
// } else if (currentDay === "Sat") {
//   console.log("Timing 01:30-04:30");
// } else if (currentDay === "Sun") {
//   console.log("Timing 05:00-08:00");
// }

// switch (currentDay) {
//   case "Mon":
//     console.log("Timing 10:00-06:00");
//     break;
//   case "Tue":
//     console.log("Timing 09:00-05:00");
//     break;
//   case "Wed":
//     console.log("Timing 09:30-05:30");
//     break;
//   case "Thu":
//     console.log("Timing 10:15-09:15");
//     break;
//   case "Fri":
//     console.log("Timing 01:00-04:00");
//     break;
//   case "Sat":
//     console.log("Timing 01:30-04:30");
//     break;
//   case "Sun":
//     console.log("Timing 05:00-08:00");
//     break;
//   default:
//     console.log("Timing 05:00-08:00");
// }

// ARITHMATIC OPERATORS
var number1 = 10;
var number2 = 20;
var number3 = 30;

// Addition
console.log("Addition = " + number1 + number2 + number3);

// Subtraction
console.log("Subtraction = " + (number2 - number1));

// Multiplication
console.log("Multiplication = " + number1 * number2 * number3);

// Division
console.log("Division = " + number1 / number2);

// Modulus
console.log("Modulus = " + (number2 % number3));

// INCREMENT - post and pre
console.log(number1++); // Will print the current value of number1 and then increment = 10
console.log(++number1); // Will increment the current value of number1 by 1 and then print = 12 (as value  became 11)

// DECREMENT = post and pre
console.log(number1--); // Will print the current value and then decrement = 12
console.log(--number1); // Will decrement the current value and then print = 10 (as value became 11)

// ASSIGNMENT OPERATORS

// 1. =
number1 = 20;

// 2. +=
number1 += 5;
console.log(number1);

// 3. -=
number1 -= 15;
console.log(number1);

// 4. *=
number1 *= 2;
console.log(number1);

// 5. /=
number1 /= 4;
console.log(number1);

// %=
number1 %= 10;
console.log(number1);

// Comparison Operator

// loose comparison operator
// if (5 == 5) {
//   console.log(true);
// }
// if (5 == "5") {
//   console.log(true); // It will return true
// } else {
//   console.log(false);
// }

// if (5 === 5) {
//   console.log(true);
// }
// if (5 === "5") {
//   //It will return false
//   console.log(true);
// } else {
//   console.log(false);
// }

// if (5 != "5") {
//   console.log(true);
// } else {
//   console.log(false);
// }

// if (5 !== "5") {
//   console.log(true);
// } else {
//   console.log(false);
// }

// if (5 < 10) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// if (5 <= 10) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// if (5 > 10) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// if (5 >= 10) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// // LOGICAL OPERATORS
// // 1. AND - &&

// if (5 < 10 && 10 < 15) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// // 2. OR - ||
// if (5 < 10 || 10 < 15) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// // 3. NOT - !
// if (!(5 < 10)) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// // TERNARY OPERATOR - (expression) ? a : b
// 2 < 3 ? console.log(true) : console.log(false);

// COERCION - Implicit

var mStr = "Hello";
var mNum = 5;
var mSum = mStr + mNum;

console.log(mSum); //Hello5
console.log(typeof mSum); //String

console.log("Hello" + true); //Hellotrue
console.log(typeof (null + "hello")); //string

console.log(50 + "Hello"); // 50Hello
console.log(typeof (50 + "Hello")); // String

console.log(+"2"); // 2
console.log(typeof +"2"); // number

// Conversion to boolean type
if (0) {
  console.log(true);
} else {
  console.log(false);
}

// COERCION - Explicit
// To String
console.log(String(mNum)); // 5
console.log(typeof String(mNum)); //string
console.log(typeof String(-98.88)); //String
console.log(typeof String(null)); //String
console.log(typeof String(undefined)); //String

// To Number
console.log(typeof Number("5"));
console.log(typeof Number(-98.77));

// To Boolean
console.log(typeof Boolean(1));

// OBJECTS
var myCars = {
  p1: "350 kmph",
  gallardo: "320 kmph",
  veyron: "499 kmph",
  agera: "429 kmph",
};

console.log(myCars);
console.log(typeof myCars); // object

var myAgera = {
  name: "Agera",
  manuFacture: {
    name: "Koenigsegg",
    location: "Sweden",
  },
  topSpeed: 429,
  color: "Black",
  spoillers: false,
  applyBrakes: function () {
    setTimeout(function () {
      console.log("Car Stopped");
    }, 5000);
  },
};

console.log(myAgera.name);
console.log(myAgera.topSpeed);
console.log(myAgera.manuFacture);
console.log(myAgera.manuFacture.name);
console.log(myAgera.applyBrakes());
