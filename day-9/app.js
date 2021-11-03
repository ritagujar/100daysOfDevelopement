// // keydown = It is triggerd when any key is predded on the keyboard

// document.body.addEventListener("keydown", function (e) {
//   var keyCode = e.keyCode;
//   console.log(keyCode + " A key was cliked ");
// });

// // keyup = It is triggerd when key is released after keypresses or keydown event

// document.body.addEventListener("keyup", function () {
//   console.log("KeyUp Event Triggred ");
// });

// // keypress = It is triggerd when any key except Shift, Function and CapsLock is in pressed position

// document.body.addEventListener("keypress", function () {
//   console.log("KeyPress Event Triggred ");
// });

// DRUM KIT

// Dettecting Button Press
var numberOfDrumBtn = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumBtn; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var btnInnerHTML = this.innerHTML;
    makeSound(btnInnerHTML);

    btnAnimation(btnInnerHTML);
  });
}

// Detecting Key Press

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  btnAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom = new Audio("sounds/tom.wav");
      tom.play();
      break;
    case "a":
      var boom = new Audio("sounds/boom.wav");
      boom.play();
      break;
    case "s":
      var clap = new Audio("sounds/clap.wav");
      clap.play();
      break;
    case "d":
      var kick = new Audio("sounds/kick.wav");
      kick.play();
      break;
    case "j":
      var ride = new Audio("sounds/ride.wav");
      ride.play();
      break;
    case "k":
      var tink = new Audio("sounds/tink.wav");
      tink.play();
      break;
    case "l":
      var hihat = new Audio("sounds/hihat.wav");
      hihat.play();
      break;

    default:
      console.log(btnInnerHTML);
  }
}

// Animation

function btnAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("presses");
  }, 100);
}
