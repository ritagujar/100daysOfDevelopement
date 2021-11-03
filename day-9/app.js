// keydown = It is triggerd when any key is predded on the keyboard

document.body.addEventListener("keydown", function (e) {
  var keyCode = e.keyCode;
  console.log(keyCode + " A key was cliked ");
});

// keyup = It is triggerd when key is released after keypresses or keydown event

document.body.addEventListener("keyup", function () {
  console.log("KeyUp Event Triggred ");
});

// keypress = It is triggerd when any key except Shift, Function and CapsLock is in pressed position

document.body.addEventListener("keypress", function () {
  console.log("KeyPress Event Triggred ");
});
