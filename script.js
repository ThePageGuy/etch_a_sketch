document.addEventListener('DOMContentLoaded', createGrid);

function createGrid() {
    const container = document.getElementById('container');
    const gridSize = 10;

    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        container.appendChild(square);
    }

    container.addEventListener('mousedown', startPainting);
    container.addEventListener('mouseup', stopPainting);
    container.addEventListener('mouseover', paintSquare);
}

let painting = false;

function startPainting() {
    painting = true;
}

function stopPainting() {
    painting = false;
}

function paintSquare(e) {
    if (painting && e.target.classList.contains('square')) {
        e.target.style.backgroundColor = 'black';
    }
}

function resetGrid() {
    const squares = document.querySelectorAll('.square');

    squares.forEach(square => {
        square.style.backgroundColor = ''; // Clear the color
    });
}
