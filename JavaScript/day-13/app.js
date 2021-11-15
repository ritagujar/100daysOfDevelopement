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

// Adding and Removing Elements

// Create a New button before h1
$("h1").before("<button>Before</button>");
$("h1").after("<button>After</button>");
$("h1").prepend("<button>Prepend</button>");
$("h1").append("<button>Append</button>");

// Animation

// $("button").on("click", function () {
//   $("h1").hide();
//   //   $("h1").show();  // IF we want to show
// });

// Toggle Hide and Show
// $("button").on("click", function () {
//   $("h1").toggle();
// });

// $("button").on("click", function () {
//   $("h1").fadeOut();
//   $("h1").fadeIn(); // To apear the text
// });

// $("button").on("click", function () {
//   $("h1").fadeToggle();
// });

// slideUp, slideDown, slideToggle
// $("button").on("click", function () {
//   $("h1").slideToggle();
// });

// To add Custome CSS

$("button").on("click", function () {
  $("h1").animate({ opacity: 0.5 });
});
