const black = document.getElementById('black');
const orange = document.getElementById('orange');
const yellow = document.getElementById('yellow');
const red = document.getElementById('red');
const defaultColor = document.querySelector('.selected');

function changeColorSelected(event) {
  const selectedColor = event.target;
  if (selectedColor !== defaultColor) {
    defaultColor.classList.remove('selected');
    selectedColor.classList.add('selected');
  }
}

black.addEventListener('click', changeColorSelected);
orange.addEventListener('click', changeColorSelected);
yellow.addEventListener('click', changeColorSelected);
red.addEventListener('click', changeColorSelected);
