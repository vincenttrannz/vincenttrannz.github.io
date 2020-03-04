document.addEventListener('DOMContentLoaded', startGame)

let board = {}

function startGame () {
  createBoard()
  document.addEventListener('click', checkForWin)
  document.addEventListener('contextmenu', checkForWin)
  
  for(var i=0;i<board.cells.length; i++){
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
  }
  // BOARD SIZE
  let boardSizeRadios = document.getElementsByName('boardSize')
  for(let i=0;i<boardSizeRadios.length;i++){
    boardSizeRadios[i].addEventListener('click', resetButton)
  }

  //DIFFICULTY
  let difficultyChoice = document.getElementsByName('difficulty')
  for(let i=0;i<difficultyChoice.length;i++){
    difficultyChoice[i].addEventListener('click', resetButton)
  }
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

function createBoard(){
  board.cells = []
  difficult = setDifficulty();
  boardSize = Number(document.querySelector('input[name="boardSize"]:checked').value)

  for(let i = 0;i < boardSize; i++){
    for(let j = 0;j < boardSize; j++){
      board.cells.push(    
    {
      row: i,
      col: j,
      isMine: Math.round(Math.random()) < difficult,
      isMarked: false,
      hidden: true
    })
    }
  }
}

//Choosing game difficulties
function setDifficulty() {
  //check the button selected
  easySelect = document.getElementById('easyMode')
  mediumSelect = document.getElementById('mediumMode')
  hardSelect = document.getElementById('hardMode')

  if(easySelect.innerHTML == "Easy"){
    return 0.25;
  } else if(mediumSelect.innerHTML == "Medium"){
    return 0.50;
  } else if(hardSelect.innerHTML == "Hard"){
    return 0.75;
  } else{
    //default state is medium
    return 0.5
  }
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin() {
  debugger
  playExpose()
  let winCount = 0;
  for(let i=0;i<board.cells.length;i++){
    if(board.cells[i].isMine && board.cells[i].isMarked) {
      winCount++;
    } else if(!board.cells[i].isMine  && !board.cells[i].hidden){
      winCount++;
    }
  }
  if(winCount == board.cells.length){
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
    lib.displayMessage('You caught them all ^_^!')
    playWinner()
  }
};

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
// var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines(cell){
  var count = 0;
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  for(var i=0;i<surrounding.length;i++){
    if(surrounding[i].isMine){
      count++;
    }
  }
  return count;
}

// Reset button for the game
function resetButton(){
  board = {cells: []}
  createBoard()
  document.getElementsByClassName('board')[0].innerHTML = '';
  startGame()
}

// Sound effect
function playBoom() {
  let audioBoom = new Audio("./sound/fail.wav")
  audioBoom.play();
}

function playExpose(){
  let audioExpose = new Audio("./sound/bubble.wav")
  audioExpose.play()
}

function playWinner(){
  let audioWinner = new Audio("./sound/winner.wav")
  audioWinner.play()
}
