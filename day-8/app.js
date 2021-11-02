var btn = document.getElementById("btn-click");
var mainDiv = document.querySelector("body");

// btn.onclick = function () {
//   alert("Button Clicked");
// };

btn.addEventListener("click", function () {
  mainDiv.style.backgroundColor = "lightcoral";
});

// Add/Remove Classes using JavaScript
var mainHeading = document.getElementById("main-heading");

// Add method
mainHeading.classList.add("big");

// Remove method
setTimeout(function () {
  mainHeading.classList.remove("big");
}, 1500);
