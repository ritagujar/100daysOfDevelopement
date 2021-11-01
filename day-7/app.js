document.getElementsByTagName("li")[2].style.color = "red";

const change = document.getElementById("change");
change.innerHTML = "Rita";

document.getElementsByClassName("btn")[0].style.color = "blue";

document.querySelector("#title").innerHTML = "Goode By";
document.querySelector("li a").innerHTML = "GOOGLE";
document.querySelector("li a").style.backgroundColor = "pink";
document.querySelector("li.item").style.color = "yellow";

const btn = document.querySelector(".btn");
btn.style.backgroundColor = "yellow";

// Add
document.querySelector("h1").classList.add("huge");

// CountDown
var countDownElement = document.getElementById("countdown");
var initailCountVal = countDownElement.innerHTML;

setInterval(function () {
  initailCountVal = initailCountVal > 0 ? (initailCountVal -= 1) : 0;
  countDownElement.innerHTML = initailCountVal;
  countDownElement.style.fontSize = "100px";
  countDownElement.style.color = "red";
}, 1000);
