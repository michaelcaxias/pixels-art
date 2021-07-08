const black = document.getElementById('black');
const orange = document.getElementById('orange');
const yellow = document.getElementById('yellow');
const red = document.getElementById('red');
let defaultColor = document.querySelector('.selected');
let pixel = document.querySelector('.pixel');
let pixelBoard = document.querySelector('#pixel-board');

function changeColorSelected(event) {
  const selectedColor = event.target;
  if (selectedColor !== defaultColor) {
    defaultColor.classList.remove('selected');
    selectedColor.classList.add('selected');
  }
  defaultColor = selectedColor;
}

black.addEventListener('click', changeColorSelected);
orange.addEventListener('click', changeColorSelected);
yellow.addEventListener('click', changeColorSelected);
red.addEventListener('click', changeColorSelected);

function paintPixels(event) {
  let click = event.target;
  click.style.backgroundColor = defaultColor.id;
}
pixelBoard.addEventListener('click', paintPixels);
