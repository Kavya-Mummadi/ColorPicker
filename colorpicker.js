let backgroundElement = document.getElementById("colorPickerContainer");
let spanElement = document.getElementById("selectedColorHexCode");

function firstButton() {
  backgroundElement.style.backgroundColor = "#e0e0e0";
  spanElement.textContent = "#e0e0e0";
}

function secondButton() {
  backgroundElement.style.backgroundColor = "#6fcf97";
  spanElement.textContent = "#6fcf97";
}

function thirdButton() {
  backgroundElement.style.backgroundColor = "#56ccf2";
  spanElement.textContent = "#56ccf2";
}

function fourthButton() {
  backgroundElement.style.backgroundColor = "#bb6bd9";
  spanElement.textContent = "#bb6bd9";
}
