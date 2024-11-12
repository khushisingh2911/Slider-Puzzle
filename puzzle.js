var rows = 3;
var columns = 3;

var currTile;
var otherTile; 

var turns = 0;


var imgOrder = ["00", "01", "02", "10", "11", "12", "20", "21", "22"];

window.onload = function () {
    let board = document.getElementById("board");

    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
           
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString(); 

      
            let imageFile = imgOrder.shift();
            tile.src = "images/" + imageFile + ".jpg"; 
            console.log("Image source:", tile.src); 

      
            tile.addEventListener("dragstart", dragStart);
            tile.addEventListener("dragover", dragOver);
            tile.addEventListener("dragenter", dragEnter);
            tile.addEventListener("dragleave", dragLeave);
            tile.addEventListener("drop", dragDrop);
            tile.addEventListener("dragend", dragEnd);

         
            board.append(tile);
        }
    }
};

function dragStart() {
    currTile = this;
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {}

function dragDrop() {
    otherTile = this;
}

function dragEnd() {
    let currImg = currTile.src;
    let otherImg = otherTile.src;

    currTile.src = otherImg;
    otherTile.src = currImg;

    turns += 1;
    document.getElementById("turns").innerText = turns;
}
