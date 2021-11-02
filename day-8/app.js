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

var btnDecreaseFont = document.getElementById("btn-decrease");
var btnIncreaseFont = document.getElementById("btn-increase");
var mainHeading = document.getElementById("main-heading");

console.log(btnDecreaseFont.style);
console.log(window.getComputedStyle(btnDecreaseFont).marginRight);
console.log(window.getComputedStyle(btnDecreaseFont).font);
console.log(btnIncreaseFont.style.marginRight);

// increase a font size on button click
var initialFontSize = window.getComputedStyle(mainHeading).fontSize;
initialFontSize = parseInt(
  initialFontSize.substr(0, initialFontSize.length - 2)
);
// console.log(initialFontSize);

btnIncreaseFont.onclick = function () {
  initialFontSize += 10;
  mainHeading.style.fontSize = initialFontSize + "px";
};

btnDecreaseFont.addEventListener("click", function () {
  initialFontSize -= 10;
  mainHeading.style.fontSize = initialFontSize + "px";
});
// mainHeading.style.fontSize = parseInt(initialFontSize) + 16 + "px";
