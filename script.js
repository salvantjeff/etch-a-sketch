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

size.addEventListener('change', getSize);

makeGrid(size.value);