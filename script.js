const canvas = document.querySelector('.canvas');
const sizeDisplay = document.querySelector('[for="canvas-size"]');
const size = document.getElementById('canvas-size');
const clearButton = document.querySelector('.clear');
const eraser = document.querySelector('.eraser');
const squares = document.querySelectorAll('.square');
const colorChoice = document.getElementById('color');
const colorMode = document.querySelector('.colorMode');

let isDrawing = false;
let inColorMode = true;
let inEraserMode = false;
let theChosenOne = colorChoice.value;

function getSize() {
    let dimensions = parseInt(this.value);
    console.log(dimensions)
    sizeDisplay.textContent = `${dimensions} X ${dimensions}`
    makeGrid(dimensions)
}

function makeGrid(number) {
    let dims = Array.from({length: number*number}, () => 0);
    document.documentElement.style.setProperty('--dimensions',`${number}`)
    canvas.innerHTML = dims.map(() => {
        return `<div class="square"></div>`;
    }).join('');
}

function testClick(e) {
    e.stopPropagation();
    if (e.target.matches('.square')) {
        isDrawing = true;
        if (inColorMode) {
          e.target.setAttribute('style', `background-color:${theChosenOne}`);
        } else {
          e.target.style.removeProperty('background-color');
        }
    }
}

function handleColor(e) {
    if (e.target.matches('.square')) {
        if (!isDrawing) return;
        if (inColorMode) {
          e.target.setAttribute('style', `background-color:${theChosenOne}`);
        } else {
          e.target.style.removeProperty('background-color');
        }
    }
}

size.addEventListener('change', getSize);
window.addEventListener('mousedown', testClick);
window.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseenter', handleColor, true);
makeGrid(size.value);