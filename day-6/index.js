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
console.log(num1.toString());
console.log(num2.toString());

// parseInt() string numarals as input and return a number
var strNum1 = "10";
var strNum2 = "11.9";
var strNum3 = "ABC";

console.log(parseInt(strNum1));
console.log(parseInt(strNum2)); //  output = 11 as parseInt return int only

// parseFloat() string numarals as input and return a floating number
console.log(parseFloat(strNum2));
console.log(parseFloat(strNum3));

// toFixed() takes floating number and rounds it off to given position
var strFloat = 87.98765;
console.log(strFloat.toFixed());
console.log(strFloat.toFixed(2));
console.log(strFloat.toFixed(10));

// JavaScript Strigns
var myFirstString = "I love JavaScript";

console.log(typeof myFirstString);

var mySecString = "I am learning JavaScript";
console.log(typeof mySecString);

// What is my String contain double quote
var doubleQuoteString = 'This is a "JavaScript" String';
console.log(doubleQuoteString);

// What is my String contain single quote
var singleQuoteString = "This is a 'JavaScript' String";
console.log(singleQuoteString);

// JS In-Buit String Functions
var str = "This is a string for JavaScript String Functions JavaScript";

// 1. length - Returns the length of a string
console.log(str.length);

// 2. indexOf() - Find index of string inside another string (Case sensative)
console.log(str.indexOf("JavaScript"));

// 3. lastIndexOF() - Find LAST index of a string inside another string
console.log(str.lastIndexOf("Functions"));

// 4. slice(start, end) - Get a part of our string
console.log(str.slice(0, 9));
console.log(str.slice(-10)); // From Backword o/p - JavaScript
console.log(str.slice()); // Will print whole string
console.log(str.slice(5)); // Will print the string excluding first 5 index

// 5. substr(startPos, length) - To Get Substring function
console.log(str.substr(0, 4));
console.log(str.substr(21, 10));
console.log(str.substr(21));

// 6. toUpperCase() - It converts string to -. UPPERCASE
console.log(str.toUpperCase());

// 7. toLowerCase() - It converts string to - lowercase
console.log(str.toLowerCase());

// 8. concat() - It merges two or more string
var str1 = "JavaScript";
var str2 = "React";

console.log(str1.concat(" " + str2));
console.log(myFirstString.concat("," + str1, " " + str2));
// We ca also use + operator two or more strings
console.log(str1 + str2);

// 9. trim() - It removes extra spaces
var extraSpaceString = "        JavaScript    ";
console.log(extraSpaceString.trim());

var extraSpaceString2 = "        Java Script    ";
console.log(extraSpaceString2.trim());

// 10. charAt() - This take a position as an arg and return the char at that position
console.log(str.charAt(5));
console.log(str.charAt(21));

// 11. split - It splits our  string on the basis of argument passes
console.log(str.split(" "));

// Null and Undefined Values
var myVar; // Here myVar holds no value - Undefined
console.log(myVar);

myVar = null; // Here myVar holds Null value - null
console.log(myVar);
