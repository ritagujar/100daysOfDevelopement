var list = document.getElementById("todo-list");
var inputBox = document.getElementById("todo-input");
var btnAdd = document.getElementById("add-item");

var currentInputValue = "";
inputBox.addEventListener("input", function (event) {
  currentInputValue = event.target.value;
});

inputBox.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    addListItems();
  }
});

function addListItems() {
  if (
    currentInputValue !== undefined &&
    currentInputValue !== null &&
    currentInputValue !== ""
  ) {
    var newListElement = document.createElement("li");
    var textNode = document.createTextNode(currentInputValue);

    newListElement.appendChild(textNode);
    newListElement.id = "item" + (list.childElementCount + 1);
    list.appendChild(newListElement);
    console.log(list.childElementCount);

    inputBox.value = "";
    currentInputValue = "";
  } else {
    alert("Please enter a valid TODO item ");
  }
}

btnAdd.addEventListener("click", addListItems);
