// ARRAYS

var myFriends = ["Shaw", "Kiara", "Dina", "Kun", "Clara", "Jacob"];
console.log(myFriends);
console.log(typeof myFriends); // object
console.log(myFriends[2]); // Dina
console.log(myFriends[0]); // Shaw
// console.log(myFriends[-1]); // undefined

// Update a value
myFriends[0] = "Shawn";
console.log(myFriends);

// Add More Items
myFriends[6] = "Alan";
console.log(myFriends);

// push() - It will push/add the value at last postion of Array
myFriends.push("Jack");
console.log(myFriends);

// pop() - It will delete a value in the last postion of the array
myFriends.pop();
console.log(myFriends);

// Adding an item into the array
// splice()
myFriends.splice(3, 0, "Dona", "Rachel");

// 1st tells where to start
// 2nd tells how many items to be deleted
// 3rd and 4th and so on tells how many items to be added
console.log(myFriends);

myFriends.splice(0, 0, "Harvey");
console.log(myFriends);

// Delete Item at specific position
myFriends.splice(2, 1); // Will remove the item of 1st postion
console.log(myFriends);

myFriends.splice(4, 2); // Will remove Two items of 4th and 5th position
console.log(myFriends);

// CONCATINATION
var myOfficeFrds = ["Nina", "Aron", "Katie", "John", "Paule"];
var myAllFrnds = myFriends.concat(myOfficeFrds);
console.log(myAllFrnds);

// SORTING - Ascending and Descending
// Ascending
myAllFrnds.sort();
console.log(myAllFrnds);

// Descending
myAllFrnds.reverse();
console.log(myAllFrnds);

// LOOPS

// while loop
var myValue = 0;
while (myValue < 50) {
  myValue++;
}

console.log(myValue);

// For loop
var myList = [1, 2, 3, 4, 5];
for (var pos = 0; pos < myList.length; pos++) {
  console.log(pos);
}

// break
console.log("Break.....");
var myList = [1, 2, 3, 4, 5];
for (var pos = 0; pos < myList.length; pos++) {
  if (pos >= 3) break;
  console.log(pos);
}

// continue
console.log("Continue....");
var myList = [1, 2, 3, 4, 5];
for (var pos = 0; pos < myList.length; pos++) {
  if (pos % 2 !== 0) continue;
  console.log(pos);
}

// FUNCTIONS

console.log("FUNCTION....");
// Function Defination
function mySum() {
  // Function Body
  var num1 = 10;
  var num2 = 20;

  var sum = num1 + num2;
  //   console.log(sum);
  return sum;
}
console.log(mySum()); // function call

// FUNCTION ARGUMENTS
function greetings(personName) {
  console.log("Welcome " + personName);
}
greetings("John");

// Scope and Variables
var num1 = 10;
console.log(num2); //Error - num2 is not defined
console.log(num1);
function sum(num2) {
  console.log(num1);
  console.log(num1 + num2);
}

console.log(num1);
sum(20);
