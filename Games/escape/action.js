let numberOfPuzzle = 1;
const language = document.querySelector('.language');
const nolanguage = document.querySelector('.no-language');
const puzzle = document.querySelector('.puzzle');
const nopuzzle = document.querySelector('.no-puzzle');
const box = document.querySelector('.answer-box');
const submit = document.querySelector('.submit-button');
const question = document.querySelector('.question');
const body = document.querySelector('.dead-body');
const ha = document.querySelector(".hulpafbeelding");
const help = document.querySelector('.wrong');
const puzzleOne = document.querySelector('.puzzel1');
const boneOne = document.querySelector('.leg');
const boneTwo = document.querySelector('.head');
const skeleton = document.querySelector('.skelet');
const exit = document.querySelector('.exit');
const codeCase = document.querySelector('.case');
const lock = document.querySelector('.lock');
const safe = document.querySelector('.safe');
const textbox = document.querySelector('.textbox-area');
const endPuzzleOne = document.querySelector('.eindePuzzelEen');
const inputButtonOne = document.querySelector('.inputButtonOne');
const inputCodeOne = document.querySelector('.inputCodeOne');
const strangeCode = document.querySelector('.strangeCode');
const submitTranslation = document.querySelector('.submit-translation');
const inputCodeThree = document.querySelector('.inputCodeThree');
const inputButtonThree = document.querySelector('.inputButtonThree');
const showScroll = document.querySelector('.showScroll');
const lastAnswer = document.querySelector('.lastGame');
const lastQues = document.querySelector('.lastButton');
const winning = document.querySelector('.youWon');
const minutesTime = 15;
let time = minutesTime * 60;
const countdownEl = document.querySelector('.countdown');
let boneOneCollect = false;
let boneTwoCollect = false;
let bonesCollected = 0;
let keyReceived = false;
let doorOpen = false;
const gameover = document.querySelector('.gameover');
const introGame = document.querySelector('.startintro');
const show = document.querySelector('.showScroll');

function play(){
    
  const audio = document.querySelector(".startGame");
  const music = document.querySelector('.music');
  audio.play();
  music.play();
  show.innerHTML = "<img class='showingtextimage'src='img/textfoto/intro.png'></img>";
  show.addEventListener('click', function(){
      show.innerHTML = " ";
      })
  }

setInterval(updateCountdown, 1000);
function updateCountdown() {
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;   
    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;
    setTimeout(function () {
      gameover.classList.remove('hide');
      countdownEl.classList.add('hide');
      skeleton.disabled = true;
      boneOne.disabled = true;
      boneTwo.disabled = true;
      codeCase.disabled = true;
      safe.disabled = true;
      exit.disabled = true;
      lock.disabled = true;
      introGame.disabled = true;
    },900000);
}
gameOne();
function gameOne () {
  if (numberOfPuzzle == 1){
    /*showScroll.innerHTML = "<img class='showingtextimage'src='img/textfoto/intro.png'></img>";
    showScroll.addEventListener('click', function(){
      showScroll.innerHTML = " ";
    })*/
    language.addEventListener('click', function(){
      textbox.innerHTML = " ";
        })
    exit.addEventListener('click', function(){
      textbox.innerHTML = "<img class='showingtextimage'src='img/textfoto/puzzel-1-deur.png'></img>";
      textbox.addEventListener('click', function(){
        textbox.innerHTML = " ";
      })
    })
    codeCase.addEventListener('click', function(){
      textbox.innerHTML = "<img class='showingtextimage'src='img/textfoto/puzzel 1 codeslot.png'></img>";
      textbox.addEventListener('click', function(){
        textbox.innerHTML = " ";
      })
    })
    lock.addEventListener('click', function(){
      textbox.innerHTML = "<img class='showingtextimage'src='img/textfoto/puzzel1-code-deur.png'></img>";
      textbox.addEventListener('click', function(){
        textbox.innerHTML = " ";
      })
    })
    safe.addEventListener('click', function(){
      textbox.innerHTML = "<img class='showingtextimage'src='img/textfoto/puzzel 1 kluis.png'></img>";
      textbox.addEventListener('click', function(){
        textbox.innerHTML = " ";
      })
    })
    boneOne.addEventListener('click', function(){
      if (bonesCollected == 1 && boneOneCollect == false){
        textbox.innerHTML = "<img class='showingtextimage'src='img/textfoto/puzzel1-bot2.png'></img>";
        bonesCollected++;
  
      } else if(boneOneCollect == false){
        textbox.innerHTML = "<img class='showingtextimage'src='img/textfoto/puzzel1-bot1.png'></img>";
        bonesCollected++;
      }
      
      boneOneCollect = true;
      textbox.addEventListener('click', function(){
        textbox.innerHTML = " ";
      })
    })
    boneTwo.addEventListener('click', function(){
      if (bonesCollected == 1 && boneTwoCollect == false){
        textbox.innerHTML = "<img class='showingtextimage'src='img/textfoto/puzzel1-bot2.png'></img>";
        bonesCollected++;
      } else if(boneTwoCollect == false){
        textbox.innerHTML = "<img class='showingtextimage'src='img/textfoto/puzzel1-bot1.png'></img>";
        bonesCollected++;
      }
      boneTwoCollect = true;
      textbox.addEventListener('click', function(){
        textbox.innerHTML = " ";
      })
    })
    skeleton.addEventListener('click', function(){
      if (bonesCollected <2){
        play();

        textbox.innerHTML = "<img class='showingtextimage'src='img/textfoto/puzzel1-skelet-geenbot.png'></img>";
        textbox.addEventListener('click', function(){
          textbox.innerHTML = " ";
        })
      } else {
        shuffle();
        
        puzzleOne.classList.toggle('hide');
      }
    })
    endPuzzleOne.addEventListener('click', function(){
      textbox.innerHTML = "<img class='showingtextimage'src='img/textfoto/puzzel1-skelet-gemaakt.png'></img>";
      numberOfPuzzle = 2;
      gameTwo();
      boneOne.disabled = true;
      boneTwo.disabled = true;
      skeleton.disabled = true;
      puzzleOne.classList.toggle('hide');
    })
  }
}
function gameTwo () {
  if(numberOfPuzzle == 2){
    boneOne.addEventListener('click', function(){
      textbox.innerHTML = "<img class='showingtextimage'src='img/textfoto/puzzel2-skelet.png'></img>";
      textbox.addEventListener('click', function(){
        textbox.innerHTML = " ";
      })
    })
    boneTwo.addEventListener('click', function(){
      textbox.innerHTML = "<img class='showingtextimage'src='img/textfoto/puzzel2-skelet.png'></img>";
      textbox.addEventListener('click', function(){
        textbox.innerHTML = " ";
      })
    })
    skeleton.addEventListener('click', function(){
      textbox.innerHTML = "<img class='showingtextimage'src='img/textfoto/puzzel2-skelet.png'></img>";
      textbox.addEventListener('click', function(){
        textbox.innerHTML = " ";
      })
    })
    codeCase.addEventListener('click', function(){
        if (keyReceived == true){
          textbox.innerHTML = "<img class='showingtextimage'src='img/textfoto/puzzel2-legedoos\.png'></img>";
        } else {
          textbox.innerHTML = "<img class='showingtextimage'src='img/textfoto/puzzel2-codeslot.png'></img>";
          textbox.addEventListener('click', function(){
            textbox.innerHTML = " ";
            inputButtonOne.classList.remove('hide');
            inputCodeOne.classList.remove('hide');
            inputButtonOne.addEventListener('click', function(){
              const codeAnswer = inputCodeOne.value;
              if (codeAnswer == 2137){
                textbox.innerHTML = "<img class='showingtextimage'src='img/textfoto/puzzel2-opendoos\.png'></img>";
                inputCodeOne.classList.add('hide');
                inputButtonOne.classList.add('hide');
                textbox.addEventListener('click', function(){
                  textbox.innerHTML = " ";
                  inputButtonOne.classList.add('hide');
                  inputCodeOne.classList.add('hide');
                  keyReceived = true;
                  
                })
              } else {
                alert("Code is onjuist!");
              }
            })
          })
        }
        
    })
    safe.addEventListener('click', function(){
      if (keyReceived == true){
        textbox.innerHTML = "<img class='showingtextimage'src='img/textfoto/puzzel2-openkluis\.png'></img>";
        textbox.addEventListener('click', function(){
          textbox.innerHTML =  "<img class='showingtextimage'src='img/textfoto/puzzel2-decoding.png'></img>";
          textbox.addEventListener('click', function(){
            textbox.innerHTML = " ";
            strangeCode.innerHTML = "<img class='puzzle-code' src='img/puzzle.png'>";
          strangeCode.innerHTML += "<img class='puzzel-code' src='img/language.png' style='position:absolute; left:70%; width:15%; top:20%;'>";
          box.classList.toggle('hide');
          submitTranslation.classList.toggle('hide');
          submitTranslation.addEventListener('click', function(){
            const actualTranslation = "halloween feest uitnodiging";
            const personTranslation = box.value;
            if (personTranslation.toLowerCase() == actualTranslation){
              box.classList.add('hide');   
              strangeCode.classList.add('hide');      
              textbox.innerHTML = "<img class='showingtextimage'src='img/textfoto/puzzel2-nadecoding.png'></img>";
              submitTranslation.classList.add('hide');
              codeCase.disabled = true;
              safe.disabled = true;
              numberOfPuzzle = 3;     
              gameThree();   
            } else {
              alert("De tekst is onjuist!");
            }
          })
          strangeCode.addEventListener('click', function(){
            strangeCode.innerHTML = " ";
          })
          })
        })
      } else {
        textbox.innerHTML = "<img class='showingtextimage'src='img/textfoto/puzzel2-geensleutel-kluis\.png'></img>";
        textbox.addEventListener('click', function(){
          textbox.innerHTML = " ";
  
        })
      }
    })
  }
} 
function gameThree () {
  if (numberOfPuzzle == 3){
    lock.addEventListener('click', function(){
      textbox.innerHTML =  "<img class='codeslot' src='img/codeslot-plus-raadsel.png'></img>";
        
        const lastCodeAnswer = 74658;
        lastAnswer.classList.remove('hide');
        lastQues.classList.remove('hide');
        lastQues.addEventListener('click', function() {
          const lastCodeGuess = lastAnswer.value;
          if (lastCodeGuess == lastCodeAnswer) {
            lastAnswer.classList.add('hide');
            lastQues.classList.add('hide');
            
            strangeCode.innerHTML = " ";
            doorOpen = true;
            if (doorOpen == false){
              exit.addEventListener('click', function() {
                textbox.innerHTML = "<img class='showingtextimage'src='img/textfoto/puzzel-1-deur.png'></img>";
                textbox.addEventListener('click', function() {
                  textbox.innerHTML = " ";
                })
              })
            } else {
              textbox.innerHTML = "<img class='showingtextimage'src='img/textfoto/puzzel3-geslaagd.png'></img>";
            strangeCode.classList.add('hide');
  
            exit.addEventListener('click', function() {
              body.classList.add('body-end');
              textbox.innerHTML="";
              winning.classList.remove('hide');     

              showScroll.innerHTML = "<img class='showScroll'src='img/textfoto/outro.png'></img>";
              submitTranslation.classList.add('hide');
              box.classList.add('hide');
              showScroll.addEventListener('click', function() {
                showScroll.innerHTML = " ";
              })
            })
            }
          } else {
            alert('Code is onjuist!');
          }
        })
      
    })
  }
} 


function swapTiles(cell1,cell2) {
    var temp = document.getElementById(cell1).className;
    document.getElementById(cell1).className = document.getElementById(cell2).className;
    document.getElementById(cell2).className = temp;
  }
  
  function shuffle() {
  //Use nested loops to access each cell of the 3x3 grid
  for (var row=1;row<=3;row++) { //For each row of the 3x3 grid
     for (var column=1;column<=3;column++) { //For each column in this row
    
      var row2=Math.floor(Math.random()*3 + 1); //Pick a random row from 1 to 3
      var column2=Math.floor(Math.random()*3 + 1); //Pick a random column from 1 to 3
       
      swapTiles("cell"+row+column,"cell"+row2+column2); //Swap the look & feel of both cells
    } 
  } 
  }
  
  function clickTile(row,column) {
    var cell = document.getElementById("cell"+row+column);
    var tile = cell.className;
    if (tile!="tile9") { 
         //Checking if white tile on the right
         if (column<3) {
           if ( document.getElementById("cell"+row+(column+1)).className=="tile9") {
             swapTiles("cell"+row+column,"cell"+row+(column+1));
             return;
           }
         }
         //Checking if white tile on the left
         if (column>1) {
           if ( document.getElementById("cell"+row+(column-1)).className=="tile9") {
             swapTiles("cell"+row+column,"cell"+row+(column-1));
             return;
           }
         }
           //Checking if white tile is above
         if (row>1) {
           if ( document.getElementById("cell"+(row-1)+column).className=="tile9") {
             swapTiles("cell"+row+column,"cell"+(row-1)+column);
             return;
           }
         }
         //Checking if white tile is below
         if (row<3) {
           if ( document.getElementById("cell"+(row+1)+column).className=="tile9") {
             swapTiles("cell"+row+column,"cell"+(row+1)+column);
             return;
           }
         } 
    }
    
  }
  
