const container = document.querySelector(".container");
const grid_btn = document.querySelector("#grid_btn");


function makeNewGrid(){
    let size = prompt("Enter a grid size from 1-100");
    makeGrid(size);
}

function makeGrid(size) {
    for (i = 0; i < size * size; i++) {
            const cell = document.createElement("div");
            cell.className+="cell";
            container.appendChild(cell);
        }
}

function changeColor(cell){
    cell.style.backgroundColor = "black";
}


var cells = document.getElementsByClassName("cell");

for( i = 0 ; i < cells.length; i++){
    cells[i].onmouseenter = function () { changeColor(this) }
}

//grid_btn.addEventListener("click",makeNewGrid());