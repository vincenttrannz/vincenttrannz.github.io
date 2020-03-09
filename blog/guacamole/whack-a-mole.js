  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Whack-a-Mole!")

// Date-Month-Year and Time
// let day = new Date();
// document.getElementById('date').innerHTML = day.getDate() + ' / ' + day.getMonth() + ' / ' + day.getFullYear();

// Global variables



// Set a random Avocado in the cell

let tableCell = document.querySelectorAll('table tr td');
let accessTheTable = document.querySelector('table').rows
let img = document.createElement('img');
img.src = "./images/avo.png"


function randomPop(){
  // debugger
  let random = accessTheTable[Math.floor(Math.random() * 5)].cells[Math.floor(Math.random() * 5)];
  if(random.innerHTML == '<img src=" ">'){
    random.append(img)
  } else if(random.firstChild){
    random.img = " ";
  } else{
    random.append(img);
    let avoPop = new Audio("./audio/avoPop.mp3")
    avoPop.play();
  }
};

// Count 30sec for the game

let timeDisplay = document.getElementById('time');
let countSec = 30;

function startTimer() {
  let countdownTimer = setInterval(function() {
    timeDisplay.innerHTML = "Your time is: " + countSec +'s';
    countSec--;
      if (countSec <= -1 || timeDisplay.innerHTML == "Your time is: 0s") {
        for(i=0;i<tableCell.length;i++){
          tableCell[i].innerHTML = "Time-up"
        }
        let audioFinish = new Audio("./audio/finish.wav")
        audioFinish.play();
        timeDisplay.innerHTML = 'Game Over'
        clearInterval(countdownTimer);
      }
  }, 1000);
};

// Set different timer for the game

let chooseModeDisplay = document.getElementById('chooseModeNow');

let select30 = document.getElementById('45s').addEventListener('click', ()=>{
  chooseModeDisplay.innerText = "Choose your mode now"
  countSec = 45;
});
let select60 = document.getElementById('60s').addEventListener('click', ()=>{
  chooseModeDisplay.innerText = "Choose your mode now"
  countSec = 60;
});
let select90 = document.getElementById('90s').addEventListener('click', ()=>{
  chooseModeDisplay.innerText = "Choose your mode now"
  countSec = 90;
});



// Function for whacking the avocado

let score = document.getElementById('score');
let count = 0;

function whack(event){
  // debugger
  if(event.target.tagName == "IMG"){
  event.target.parentNode.firstChild.remove()
  count++;
  score.innerHTML = "You mashed: " + count;
  }
  let audioWhack = new Audio("./audio/pop.wav")
  audioWhack.play();
}
  

// Difficult level

let easy = document.getElementById('easyMode').addEventListener('click', easyMode);
let normal = document.getElementById('mediumMode').addEventListener('click', normalMode);
let hard = document.getElementById('hardMode').addEventListener('click', hardMode);
let insane = document.getElementById('insaneMode').addEventListener('click', insaneMode);

function easyMode(){
  startTimer(); 
  setInterval(()=> randomPop(), 1500);
}

function normalMode(){
  startTimer(); 
  setInterval(()=> randomPop(), 1000);
}

function hardMode(){
  startTimer(); 
  setInterval(()=> randomPop(), 500);
}

function insaneMode(){
  startTimer(); 
  setInterval(()=> randomPop(), 250);
}

// Reset button

function resetButton(){
  // debugger
//   if(timeDisplay.innerHTML == "Choose your game mode" || timeDisplay.innerHTML == " ") return;
//   for(let i=0;i<tableCell.length;i++){
//     if(tableCell[i].img){
//       tableCell[i].innerHTML = '<img src=" ">';
//     }
//   }
//   count = 0;
//   score.innerHTML = "Your score: " + count;
//   timeDisplay.innerHTML = "Choose your game mode"
  location.reload()
}



