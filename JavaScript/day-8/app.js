// var btn = document.getElementById("btn-click");
// var mainDiv = document.querySelector("body");

// btn.onclick = function () {
//   alert("Button Clicked");
// };

// btn.addEventListener("click", function () {
//   mainDiv.style.backgroundColor = "lightcoral";
// });

// Add/Remove Classes using JavaScript
// var mainHeading = document.getElementById("main-heading");

// Add method
// mainHeading.classList.add("big");

// Remove method
// setTimeout(function () {
//   mainHeading.classList.remove("big");
// }, 1500);

// Getting styles

// var btnDecreaseFont = document.getElementById("btn-decrease");
// var btnIncreaseFont = document.getElementById("btn-increase");
// var mainHeading = document.getElementById("main-heading");

// console.log(btnDecreaseFont.style);
// console.log(window.getComputedStyle(btnDecreaseFont).marginRight);
// console.log(window.getComputedStyle(btnDecreaseFont).font);
// console.log(btnIncreaseFont.style.marginRight);

// increase a font size on button click
// var initialFontSize = window.getComputedStyle(mainHeading).fontSize;
// initialFontSize = parseInt(
//   initialFontSize.substr(0, initialFontSize.length - 2)
// );
// // console.log(initialFontSize);

// btnIncreaseFont.onclick = function () {
//   initialFontSize += 10;
//   mainHeading.style.fontSize = initialFontSize + "px";
// };

// btnDecreaseFont.addEventListener("click", function () {
//   initialFontSize -= 10;
//   mainHeading.style.fontSize = initialFontSize + "px";
// });
// mainHeading.style.fontSize = parseInt(initialFontSize) + 16 + "px";

// FORM EVENTS
var username = document.getElementById("username");
var registerForm = document.getElementById("register-form");
// console.log(username);

// CHANGE = The Change event is triggerd when the content of an input field is changed or when the user selects a value from the dropdown

// username.addEventListener("change", function () {
//   console.log("VAlue Changed");
// });
username.addEventListener("input", function (event) {
  var currentValue = event.target.value;
  currentValue = currentValue.toUpperCase();
  console.log(currentValue);
  // console.log(event.target.value);
  username.value = currentValue;
});

//FOCUS = The focus event triggered when the input field is focussed by the user

username.addEventListener("focus", function () {
  console.log("Element Focus");
});

//BLUR = The blur event is triggerd when the input field loses focus

username.addEventListener("blur", function () {
  console.log("Element Lost Focus");
});

//SUBMIT = The submit event trigged when the submit button is clicked by the user

registerForm.addEventListener("submit", function () {
  alert("Register button Cliked");
});

// If we dont want the default behaviour of submit button (Like we need to fill all required fields then only submit event will trigerd) to to prevent this we can use preventDefalut

registerForm.addEventListener("submit", function (e) {
  alert("Register button Cliked");
  e.preventDefault();
});
