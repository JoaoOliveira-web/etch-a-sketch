
const rainbow = ["red","orange","yellow","green","blue","indigo","violet"];
const container = document.querySelector(".container");
var size = 16;
var mouse = "default";

const rbg_brush = document.getElementById("rgb_brush")

rbg_brush.addEventListener("click",function(){
    mouse = "rbg";
})

const default_brush = document.getElementById("default_brush")

default_brush.addEventListener("click",function(){
    mouse = "default";
})


function makeGrid(size) {
    container.innerHTML = "";

    for (let i = 0; i < size * size; i++) {
            const cell = document.createElement("div");
            cell.className+="cell";
            container.appendChild(cell);
        }

    var cells = document.getElementsByClassName("cell");

    for(let i = 0 ; i < cells.length; i++){
        cells[i].onmouseenter = function () { 
            changeColor(this);
            this.onmouseenter = null;
         }
    }
}

makeGrid(size);

let colorIndex = 0;

function changeColor(cell){
    if (mouse === "default")
        cell.style.backgroundColor = "black";
    else
        cell.style.backgroundColor = rainbow[colorIndex];
        colorIndex = (colorIndex + 1) % 7;
}

const grid_btn = document.getElementById("grid_btn");

grid_btn.addEventListener("click",function(){
    do{
          size = prompt("Enter a grid size from 1-100").trim();
    } while(isNaN(size) || size < 1 || size > 100);
    document.documentElement.style.setProperty("--size", size);
    makeGrid(size);
});

