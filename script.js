const canvas = document.querySelector('.canvas');
const sizeDisplay = document.querySelector('[for="canvas-size"]');
const size = document.getElementById('canvas-size');
const clearButton = document.querySelector('.clear');
const eraser = document.querySelector('.eraser');
const squares = document.querySelectorAll('.square');
const colorChoice = document.getElementById('color');
const colorMode = document.querySelector('.colorMode');

size.addEventListener('change', getSize);