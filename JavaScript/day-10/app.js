var list = document.getElementById("todo-list");
var inputBox = document.getElementById("todo-input");
var btnAdd = document.getElementById("add-item");
var btnUpdate = document.getElementById("update-item");
var btnRemove = document.getElementById("remove-item");

// Add Items to the list
var currentInputValue = "";
inputBox.addEventListener("input", function (event) {
  currentInputValue = event.target.value;
});

inputBox.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    addListItems();
  }
});

function createNewNode() {
  var newListElement = document.createElement("li");
  var textNode = document.createTextNode(currentInputValue);

  newListElement.appendChild(textNode);
  newListElement.id = "item" + (list.childElementCount + 1);

  return newListElement;
}

function addListItems() {
  if (
    currentInputValue !== undefined &&
    currentInputValue !== null &&
    currentInputValue !== ""
  ) {
    var newListElement = createNewNode();

    list.appendChild(newListElement);
    console.log(list.childElementCount);

    inputBox.value = "";
    currentInputValue = "";
  } else {
    alert("Please enter a valid TODO item ");
  }
}

btnAdd.addEventListener("click", addListItems);

// Update items from the list
btnUpdate.addEventListener("click", function () {
  var firstElement = list.firstElementChild;
  var newListElement = createNewNode();

  list.replaceChild(newListElement, firstElement);
  inputBox.value = "";
  currentInputValue = "";
});

btnRemove.addEventListener("click", function () {
  var firstElement = list.firstElementChild;
  list.removeChild(firstElement);
});
