// document.querySelector("h1"); // IN JS
// $("h1"); // In jQuery

// document.querySelectorAll('button')
// $('button')

// $("h1").css("color", "green");

console.log($("h1").css("font-size")); // Will print the font-size of h1 i=on console

$("h1").addClass("big-title");
$("h1").removeClass("big-title");

// Adding Multiple classes
$("h1").addClass("big-title margin-50");

// hasClass will return true or false depending on that class is there or not
console.log($("h1").hasClass("margin-50")); // will return true

// Manupulating text
$("h1").text("Manupulating Text");
$("button").text("Dont click me");

// We can add HTML into jQuery
$("button").html("<em>Hey</em>");

// Manupulating Attribute
console.log($("img").attr("src")); // Will print src on console
$("a").attr("href", "https://www.yahoo.com");

// Adding Event Listener

$("h1").click(function () {
  $("h1").css("color", "purple");
});

// Adding Event Listener to buttons

// Using plane JS

for (var i = 0; i < 5; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    document.querySelector("h1").style.color = "Red";
  });
}

// Using jQuery - Click

$("button").click(function () {
  $("h1").css("color", "Purple");
});

// keyPress Event

$("input").keypress(function (event) {
  console.log(event.key);
});

$(document).keypress(function (event) {
  $("h1").text(event.key);
});

// mouseover
$("h1").on("mouseover", function () {
  $("h1").css("color", "blue");
});
