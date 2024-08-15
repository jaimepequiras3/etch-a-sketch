
const container = document.querySelector(".container");

const inputButton = document.createElement("button");
inputButton.textContent = "Set Grid";

const tableGrid = document.createElement("div");
tableGrid.setAttribute("id", "table-grid")

container.appendChild(inputButton);

inputButton.addEventListener("click", createNewGrid);
        


function createGrid (gridSize) {
    // row
    for (let i = 0; i < gridSize; i++ ){
        const cellRow = document.createElement("div");
        
        // column
        for (let j = 0; j < gridSize; j++){
            const cellColumn = document.createElement("div");
            cellColumn.setAttribute("id", "cell");

            cellRow.appendChild(cellColumn);

            // change color on hover
            cellColumn.addEventListener("mouseover", hoverIn);
            cellColumn.addEventListener("mouseout", hoverOut);
        }

        tableGrid.appendChild(cellRow);
    }
}


function hoverIn () {
    this.style.backgroundColor = "red";
}


function hoverOut () {
    this.style.backgroundColor = "green";
}


function setGrid (){

    let gridSize = prompt("Enter grid size (max 100): ");

    if (gridSize > 100 ){
        alert("Exceeded max number");
    }
    else if (gridSize < 1){
        alert("Negative and zero are not allowed.");
    }
    else {  
        return gridSize;
    }
}


function createNewGrid (){
    let gridSize = setGrid();

    deleteGrid ();

    createGrid(gridSize);

    container.appendChild(tableGrid);

}   


function deleteGrid(){
    const deleteCell = tableGrid.querySelectorAll("#cell");

    deleteCell.forEach((cell) => {
        cell.remove();
    });

}