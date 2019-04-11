// BLIND MAZE LEVEL 2

// Add A Bunch Of Divs to Main (40 / row)
for (let row = 0; row < 35; row++) {
    for (let col = 0; col < 40; col++) {
        document.getElementById("main").innerHTML += "<div class=''id='cell" + row + "-" + col + "'></div>"
    }
}

// Global variables for a grid walker
let deaths = 0;
let walkerRow = 0;
let walkerCol = 0;

// Highlight current walker cell
let walkerId = "cell" + walkerRow + "-" + walkerCol;
document.getElementById(walkerId).classList.add("active");

// Change the grid walker's location on keydown
document.addEventListener("keydown", checkKeyPress);

function checkKeyPress(event) {
    console.log(event.keyCode);
    // Remove active class from current location
    let walkerId = "cell" + walkerRow + "-" + walkerCol;
    document.getElementById(walkerId).classList.remove("active");

    if (event.keyCode == 37) {// Left Arrow
        walkerCol--;
    } else if (event.keyCode == 39) {// Right Arrow
        walkerCol++;
    } else if (event.keyCode == 38) {// Up Arrow
        walkerRow--;
    } else if (event.keyCode == 40) {// Down Arrow
        walkerRow++;
    } else if (event.keyCode == 65) {// A
        walkerCol--;
    } else if (event.keyCode == 68) {// D
        walkerCol++;
    } else if (event.keyCode == 87) {// W
        walkerRow--;
    } else if (event.keyCode == 83) {// S
        walkerRow++;
    }
    if (walkerRow == -1 || walkerRow == 35 || walkerCol == -1 || walkerCol == 40) {
        walkerCol = 0
        walkerRow = 0
        document.getElementById("output").innerHTML = ""
        document.getElementById("output2").innerHTML = "Matthew was here"
        deaths++
        document.getElementById("deaths").innerHTML = deaths
    } else if (walkerCol == 0 || walkerRow == 34 || walkerCol == 39 || walkerRow == 0 && walkerCol >= 2) {

    } else if (walkerRow == 16 && walkerCol == 31) {
        document.getElementById("output").innerHTML = "You Win"
    } else if (walkerCol == 0 || walkerRow == 34 || walkerCol == 39 || walkerCol >= 2 && walkerRow == 0 || walkerRow == 1 && walkerCol == 2 || walkerRow == 2 && walkerCol >= 2 && walkerCol <= 4 || walkerCol == 4 && walkerRow == 3 || walkerRow == 4 && walkerCol >= 4 && walkerCol <= 6 || walkerRow == 5 && walkerCol == 6 || walkerRow == 5 && walkerCol >= 2 && walkercol <= 3 || walkerRow == 6 && walkerCol >= 2 && walkerCol <= 6 || walkerCol == 2 && walkerRow >= 6 && walkerRow <= 15 || walkerRow == 15 && walkerCol >= 2 && walkerCol <= 10 || walkerCol == 10 && walkerRow >= 15 && walkerRow <= 18 || walkerCol == 11 && walkerRow >= 18 && walkerRow <= 20 || walkerCol == 12 && walkerRow >= 20 && walkerRow <= 22 || walkerCol == 13 && walkerRow >= 22 && walkerRow <= 23 || walkerCol == 14 && walkerRow == 23 || walkerRow == 24 && walkerCol >= 14 && walkerCol <= 16 || walkerRow == 25 && walkerCol >= 16 && walkerCol <= 19 || walkerRow == 24 && walkerCol >= 19 && walkerCol <= 21 || walkerRow == 23 && walkerCol >= 21 && walkerCol <= 22 || walkerCol == 22 && walkerRow == 22 || walkerCol == 23 && walkerRow <= 22 && walkerRow >= 20 || walkerCol == 24 && walkerRow <= 20 && walkerRow >= 18 || walkerCol == 25 && walkerRow <= 18 && walkerRow >= 11 || walkerCol == 24 && walkerRow <= 11 && walkerRow >= 8 || walkerCol == 23 && walkerRow <= 8 && walkerRow >= 6 || walkerCol == 22 && walkerRow <= 6 && walkerRow >= 5 || walkerCol == 21 && walkerRow == 5 || walkerRow == 4 && walkerCol <= 21 && walkerCol >= 14 || walkerRow == 5 && walkerCol <= 14 && walkerCol >= 13 || walkerCol == 13 && walkerRow == 6 || walkerCol == 12 && walkerRow >= 6 && walkerRow <= 8 || walkerCol == 11 && walkerRow >= 8 && walkerRow <= 11 || walkerRow == 11 && walkerCol >= 11 && walkerCol <= 13 || walkerRow == 10 && walkerCol >= 13 && walkerCol <= 15 || walkerRow == 9 && walkerCol >= 15 && walkerCol <= 17 || walkerCol == 17 && walkerRow >= 9 && walkerRow <= 12 || walkerCol == 16 && walkerRow >= 12 & walkerRow <= 14 || walkerCol == 15 && walkerRow >= 14 && walkerRow <= 16 || walkerRow == 16 && walkerCol >= 15 && walkerCol <= 20 || walkerCol == 20 && walkerRow <= 16 && walkerRow >= 13 || walkerCol == 19 && walkerRow <= 13 && walkerRow >= 9 || walkerRow == 9 && walkerCol >= 19 && walkerCol <= 21 || walkerRow == 10 && walkerCol == 21 || walkerCol == 22 && walkerRow >= 10 && walkerRow <= 18 || walkerCol == 21 && walkerRow >= 18 && walkerRow <= 19 || walkerCol == 20 && walkerRow >= 19 && walkerRow <= 20 || walkerCol == 19 && walkerRow >= 20 && walkerRow <= 21 || walkerCol == 18 && walkerRow == 21 || walkerCol == 17 && walkerRow >= 20 && walkerRow <= 21 || walkerCol == 16 && walkerRow >= 19 && walkerRow <= 20 || walkerCol == 15 && walkerRow >= 18 && walkerRow <= 19 || walkerCol == 14 && walkerRow == 18 || walkerCol == 13 && walkerRow <= 18 && walkerRow >= 13 || walkerRow == 13 && walkerCol <= 13 && walkerCol >= 8 || walkerRow == 12 && walkerCol <= 8 && walkerCol >= 7 || walkerRow == 11 && walkerCol <= 7 && walkerCol >= 6 || walkerRow == 10 && walkerCol <= 6 && walkerCol >= 5 || walkerRow == 9 && walkerCol == 5 || walkerRow == 8 && walkerCol >= 5 && walkerCol <= 8 || walkerRow == 7 && walkerCol >= 8 && walkerCol <= 9 || walkerRow == 6 && walkerCol >= 9 && walkerCol <= 10 || walkerRow == 5 && walkerCol == 10 || walkerRow == 4 && walkerCol <= 10 && walkerCol >= 8 || walkerRow == 3 && walkerCol == 8 || walkerRow == 2 && walkerCol >= 8 && walkerCol <= 26 || walkerCol == 26 && walkerRow >= 2 && walkerRow <= 8 || walkerRow == 8 && walkerCol >= 26 && walkerCol <= 28 || walkerRow == 7 && walkerCol >= 28 && walkerCol <= 29 || walkerRow == 6 && walkerCol >= 29 && walkerCol <= 30 || walkerRow == 5 && walkerCol >= 30 && walkerCol <= 31 || walkerRow == 4 && walkerCol >= 31 && walkerCol <= 32 || walkerRow == 3 && walkerCol >= 32 && walkerCol <= 33 || walkerRow == 2 && walkerCol >= 33 && walkerCol <= 35 || walkerRow == 3 && walkerCol == 35 || walkerRow == 4 && walkerCol <= 35 && walkerCol >= 34 || walkerRow == 5 && walkerCol <= 34 && walkerCol >= 33 || walkerRow == 6 && walkerCol <= 33 && walkerCol >= 32 || walkerRow == 7 && walkerCol <= 32 && walkerCol >= 31 || walkerRow == 8 && walkerCol <= 31 && walkerCol >= 30 || walkerRow == 9 && walkerCol <= 30 && walkerCol >= 29 || walkerRow == 10 && walkerCol <= 29 && walkerCol >= 28 || walkerRow == 11 && walkerCol <= 28 && walkerCol >= 27 || walkerCol == 27 && walkerRow >= 11 && walkerRow <= 20 || walkerCol == 26 && walkerRow >= 20 && walkerRow <= 22 || walkerCol == 25 && walkerRow >= 22 && walkerRow <= 24 || walkerCol == 24 && walkerRow >= 24 && walkerRow <= 25 || walkerCol == 23 && walkerRow >= 25 && walkerRow <= 26 || walkerCol == 22 && walkerRow >= 26 && walkerRow <= 27 || walkerRow == 27 && walkerCol <= 22 && walkerCol >= 14 || walkerRow == 26 && walkerCol <= 14 && walkerCol >= 12 || walkerRow == 25 && walkerCol <= 12 && walkerCol >= 11 || walkerRow == 24 && walkerCol <= 11 && walkerCol >= 10 || walkerRow == 23 && walkerCol == 10 || walkerRow == 22 && walkerCol <= 10 && walkerCol >= 9 || walkerRow == 21 && walkerCol <= 9 && walkerCol >= 7 || walkerRow == 20 && walkerCol <= 9 && walkerCol >= 8 || walkerRow == 22 && walkerCol <= 7 && walkerCol >= 6 || walkerRow == 23 && walkerCol <= 6 && walkerCol >= 5 || walkerRow == 24 && walkerCol == 5 || walkerRow == 25 && walkerCol >= 5 && walkerCol <= 6 || walkerRow == 26 && walkerCol >= 6 && walkerCol <= 7 || walkerRow == 27 && walkerCol >= 7 && walkerCol <= 8 || walkerRow == 28 && walkerCol >= 8 && walkerCol <= 9 || walkerRow == 29 && walkerCol == 9 || walkerRow == 30 && walkerCol <= 9 && walkerCol >= 7 || walkerRow == 29 && walkerCol <= 7 && walkerCol >= 6 || walkerRow == 28 && walkerCol <= 6 && walkerCol >= 5 || walkerRow == 27 && walkerCol <= 5 && walkerCol >= 4 || walkerRow == 26 && walkerCol <= 4 && walkerCol >= 2 || walkerCol == 2 && walkerRow >= 26 && walkerRow <= 32 || walkerRow == 32 && walkerCol >= 2 && walkerCol <= 12 || walkerCol == 12 && walkerRow <= 32 && walkerRow >= 29 || walkerRow == 29 && walkerCol == 13 || walkerCol == 14 && walkerRow >= 29 && walkerRow <= 31 || walkerRow == 31 && walkerCol == 15 || walkerRow == 32 && walkerCol >= 15 && walkerCol <= 18 || walkerCol == 18 && walkerRow <= 32 && walkerRow >= 29 || walkerRow == 29 && walkerCol >= 18 && walkerCol <= 23 || walkerRow == 30 && walkerCol >= 23 && walkerCol <= 24 || walkerRow == 31 && walkerCol >= 24 && walkerCol <= 25 || walkerRow == 32 && walkerCol >= 25 && walkerCol <= 37 || walkerCol == 37 && walkerRow <= 32 && walkerRow >= 29 || walkerRow == 29 && walkerCol <= 37 && walkerCol >= 26 || walkerCol == 26 && walkerRow <= 29 && walkerRow >= 26 || walkerRow == 26 && walkerCol >= 26 && walkerCol <= 28 || walkerRow == 27 && walkerCol >= 28 && walkerCol <= 32 || walkerRow == 26 && walkerCol >= 32 && walkerCol <= 36 || walkerRow == 25 && walkerCol >= 36 && walkerCol <= 37 || walkerRow == 24 && walkerCol == 37 || walkerRow == 23 && walkerCol <= 37 && walkerCol >= 36 || walkerRow == 22 && walkerCol <= 36 && walkerCol >= 34 || walkerRow == 23 && walkerCol <= 34 && walkerCol >= 33 || walkerRow == 24 && walkerCol <= 33 && walkerCol >= 30 || walkerRow == 23 && walkerCol <= 30 && walkerCol >= 29 || walkerCol == 29 && walkerRow <= 23 && walkerRow >= 21 || walkerRow == 21 && walkerCol >= 29 && walkerCol <= 30 || walkerRow == 20 && walkerCol >= 30 && walkerCol <= 36 || walkerCol == 36 && walkerRow <= 20 && walkerRow >= 8 || walkerRow == 8 && walkerCol <= 36 && walkerCol >= 34 || walkerRow == 9 && walkerCol <= 34 && walkerCol >= 33 || walkerRow == 10 && walkerCol <= 33 && walkerCol >= 32 || walkerRow == 11 && walkerCol <= 32 && walkerCol >= 31 || walkerRow == 12 && walkerCol <= 31 && walkerCol >= 30 || walkerRow == 13 && walkerCol <= 30 && walkerCol >= 29 || walkerCol == 29 && walkerRow >= 13 && walkerRow <= 18 || walkerRow == 18 && walkerCol >= 29 && walkerCol <= 34 || walkerCol == 34 && walkerRow <= 18 && walkerRow >= 13 || walkerRow == 13 && walkerCol <= 34 && walkerCol >= 32 || walkerCol == 32 && walkerRow >= 13 && walkerRow <= 15 || walkerCol == 31 && walkerRow == 15
    ) {
    } else {
        walkerCol = 0
        walkerRow = 0
        document.getElementById("output").innerHTML = ""
        document.getElementById("output2").innerHTML = "Matthew was here"
        deaths++
        document.getElementById("deaths").innerHTML = deaths
    }
    walkerId = "cell" + walkerRow + "-" + walkerCol;
    document.getElementById(walkerId).classList.add("active");
}