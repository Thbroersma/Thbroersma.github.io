// The buttons 
const gameButton = document.querySelector('.gameButton');
let gameQuest = document.querySelector('.gamePlay');
const checkButton = document.querySelector('.gameCheck');
const inputAnswer = document.querySelector('.answers');
const switchButton = document.querySelector('.switchButton');
const motivationButton = document.querySelector('.motivation-button');
const nextButton = document.querySelector('.nextButton');
const scoreButton = document.querySelector('.score-button');

let motivationQuotes = [ 
    'You can do it, you just have to believe in yourself!', 
    'Education is the most powerful weapon which you can use to change the world',
    'Take the attitude of a student, never be too big to <br> ask questions, never know too much to learn something new',
    'All we have to decide is what to do with the time that is given to us',
    'It is not our abilities that show what we truly are… it is our choices',
    'It’s what you do right now that makes a difference',
    'It’s only a passing thing, this shadow. Even darkness must pass. A new day will come. And when the sun shines it will shine out the clearer.',
    'You know how everyone’s always saying, ‘Seize the moment’? I don’t know, I’m kinda thinkin’ it’s the other way. Like the moment seizes us',
    'You control your destiny – you don’t need magic to do it. And there are no magical shortcuts to solving your problems',
    'Today is a good day to try something new',
    ''
];

const display = document.querySelector('.displayValue');
let chosenNumberOne = null;
let chosenNumberTwo = null;
let operator = null;
// De functies voor de rekenmachine
const calcButtons = document.querySelectorAll('.calculator_item');
const operators = { 'count' : '+', 'minus' : '-', 'multiply': 'x', 'divide': ':', 'BMI' : '-', 
'BTW' : ' BTW percentage ', 'N-BTW' : ' BTW percentage '};

let gameQuestions = [ 
    'What do you must have in Javascript to make a button do something?', 
    'What is the longest distance that the web-developer had cycled?',
    'What can you use to select all elements or classes?',
    'What is the line of code to change style class?',
    'Which 3 functions can you use with an array?', 
    'Write 2 of the 3 ways to know what is inside an element?',
    'What is the maximum time adviced to change between the kind of project you work at a company?',
    'What four kind of animals can you find on my website?',
    'How can you make something disappear on a website?',
    'What is something you should never you on an element?'
];
let timer;
let scorePoints = 0;

// Motivation quote button and switchbutton
if (motivationButton) {
    motivationButton.addEventListener('click', function () {

        let text = document.querySelector('.motivation-text');
        const random = motivationQuotes[Math.floor(Math.random() * motivationQuotes.length)];

        text.innerHTML = random, motivationQuotes[random]
    })
}

if (switchButton) {
    switchButton.addEventListener('click', function() {
    
        const navbar = document.querySelector('.navbar-style');
        const body = document.querySelector('.myBody');
        const pacman = document.querySelector('.pacman');
        navbar.classList.toggle('nav-switch');
        body.classList.toggle('myBody-switch');
        pacman.classList.toggle('hide');
        pacmanRight = 1;
        let l = 0;
        let r = 0;
        let d = 0;
        let u = 0;
        window.addEventListener('keydown', (e)=> {
            console.log(e);
            /* moving left */
            switch(e.keyCode) {
                case 37:
                    let movingLeft = pacmanRight + (l * 8);
                    let newElement = document.createElement('div');
                    newElement.classList.add('newBlock');
                    newElement.style.backgroundColor = "black";
                    if (newElement.right <= 0 + 'vw') {
                        newElement.style.right = 0 + "vw";
                    } else {
                        newElement.style.right = movingLeft - 8 + "vw";
                    }
                    /*let newPacman = document.createElement('div');
                    newPacman.classList.add('pacman-new');*/
                    pacman.style.transform = "scaleX(-1)";
                    pacman.style.right = movingLeft + 'vw';
                    body.appendChild(newElement);
                    //body.appendChild(newPacman);
                    l++;
                    break;
                case 38:
                    
                     break;
                case 39:
                    let movingRight = pacmanRight + (l * 8);
                    let newRight = document.createElement('div');
                    newRight.classList.add('newBlock');
                    newRight.style.backgroundColor = "black";
                    newRight.style.right = movingRight - 8 + "vw";
                    pacman.style.transform = "scaleX(1)";
                    pacman.style.right = movingRight + 'vw';
                    body.appendChild(newRight);
                    l--;
                    break;
                case 40:
                    pacman.classList.add('newBlock-down');
                    break;
            }
        })
    // Pacman movement code 
    /*
    switch (e.keyCode) {
        case 37:
          // The move for a div backwards
          if (pacmanCurrentIndex % width !== 0 && !squares[pacmanCurrentIndex - 1].classList.contains('field-box')
            && !squares[pacmanCurrentIndex - 1].classList.contains('ghost-lair') && !squares[pacmanCurrentIndex - 1].classList.contains('border-right')
            && !squares[pacmanCurrentIndex].classList.contains('border-left') && !squares[pacmanCurrentIndex - 1].classList.contains('field-box-left')
            && !squares[pacmanCurrentIndex - 1].classList.contains('field-box-top') && !squares[pacmanCurrentIndex - 1].classList.contains('field-box-bottom')
            && !squares[pacmanCurrentIndex - 1].classList.contains('clear'))
            pacmanCurrentIndex -= 1;
    
          if ((pacmanCurrentIndex) === 111) {
            pacmanCurrentIndex = 130;
          }
    
          break;
        case 38:
          // The move for a div upwards   
          if (pacmanCurrentIndex - width >= 0 && !squares[pacmanCurrentIndex - 22].classList.contains('field-box')
            && !squares[pacmanCurrentIndex - 22].classList.contains('ghost-lair') && !squares[pacmanCurrentIndex].classList.contains('border-top')
            && !squares[pacmanCurrentIndex - 22].classList.contains('field-box-left') && !squares[pacmanCurrentIndex - 22].classList.contains('field-box-top')
            && !squares[pacmanCurrentIndex - 22].classList.contains('clear') && !squares[pacmanCurrentIndex - 22].classList.contains('field-box-right'))
            pacmanCurrentIndex -= 22;
    
          break;
        case 39:
          // The move for a div forward 
          if (pacmanCurrentIndex % width < width - 1 && !squares[pacmanCurrentIndex + 1].classList.contains('field-box')
            && !squares[pacmanCurrentIndex + 1].classList.contains('ghost-lair') && !squares[pacmanCurrentIndex + 1].classList.contains('border-left')
            && !squares[pacmanCurrentIndex].classList.contains('border-right') && !squares[pacmanCurrentIndex + 1].classList.contains('field-box-top')
            && !squares[pacmanCurrentIndex + 1].classList.contains('field-box-bottom') && !squares[pacmanCurrentIndex + 1].classList.contains('field-box-left')
            && !squares[pacmanCurrentIndex + 1].classList.contains('clear') && !squares[pacmanCurrentIndex + 1].classList.contains('field-box-right'))
            pacmanCurrentIndex += 1;
    
          if ((pacmanCurrentIndex) === 130) {
            pacmanCurrentIndex = 111;
          }
    
          break;
        case 40:
          // The move for a div down 
          if (pacmanCurrentIndex + width < width * width && !squares[pacmanCurrentIndex + 22].classList.contains('field-box')
            && !squares[pacmanCurrentIndex + 22].classList.contains('ghost-lair') && !squares[pacmanCurrentIndex].classList.contains('border-bottom')
            && !squares[pacmanCurrentIndex + 22].classList.contains('border-top') && !squares[pacmanCurrentIndex + 22].classList.contains('field-box-left')
            && !squares[pacmanCurrentIndex + 22].classList.contains('field-box-bottom') && !squares[pacmanCurrentIndex + 22].classList.contains('clear')
            && !squares[pacmanCurrentIndex + 22].classList.contains('field-box-right'))
            pacmanCurrentIndex += 22;
    
          break;
      }*/


    })
}

// Function for the quiz
function scoreButtonSwitch() {

    scoreButton.classList.add('score-button-theme');
    scorePoints = scorePoints + 10;
    scoreButton.innerHTML = 'You got ' + scorePoints + ' points!';
}

function youLostTheGame() {

    scoreButton.classList.add('lost-button-theme');
    scoreButton.innerHTML = 'You lost the game, try again';
}

function highscore() {

    if (scorePoints == 100) {
        scoreButton.classList.add('highScore-button');
        scoreButton.innerHTML = 'You have the highscore, you won!';
    }

}

if (nextButton) {
    nextButton.addEventListener('click', function() {

        const randomNumber = Math.floor(Math.random() * gameQuestions.length);
        gameQuest.innerHTML = gameQuestions[randomNumber];
        timer = setTimeout(function(){ alert("You ran out of time, try again"); }, 15000);
    })
}

if (gameButton) {
    gameButton.addEventListener('click', function () {

        timer = setTimeout(function(){ alert("You ran out of time, try again"); }, 15000);
        gameQuest.innerHTML = gameQuestions[0];
        checkButton.classList.add('gameButton');
        nextButton.classList.add('gameButton');
        checkButton.innerHTML = 'Check your answer';
        nextButton.innerHTML = 'Next question';
    })
}

// Function for checking the answer correctly
if (checkButton) {
    checkButton.addEventListener('click', function() {

        if (gameQuest.innerHTML.includes('button')) {
            if (inputAnswer.value.includes('addEventListener')) {
                clearTimeout(timer);
                scoreButtonSwitch();
                highscore();
            }

            else {
                clearTimeout(timer);
                youLostTheGame();
            }

        }

        else if (gameQuest.innerHTML.includes('distance')) {
            if (inputAnswer.value.includes('150 km')) {
                clearTimeout(timer);
                scoreButtonSwitch();
                highscore();
            }

            else {
                clearTimeout(timer);
                youLostTheGame();
            }

        }

        else if (gameQuest.innerHTML.includes('classes')) {
            if (inputAnswer.value.includes('querySelectorAll')) {
                clearTimeout(timer);
                scoreButtonSwitch();
                highscore();
            }

            else {
                clearTimeout(timer);
                youLostTheGame();
            }

        }

        else if (gameQuest.innerHTML.includes('style')) {
            if (inputAnswer.value.includes('classList.toggle')) {
                scoreButtonSwitch();
                clearTimeout(timer);
                highscore();
            }

            else {
                clearTimeout(timer);
                youLostTheGame();
            }

        }

        else if (gameQuest.innerHTML.includes('array')) {
            if (inputAnswer.value.includes('push') && inputAnswer.value.includes('pop') && inputAnswer.value.includes('includes')) {
                scoreButtonSwitch();
                clearTimeout(timer);
                highscore();
            }

            else {
                clearTimeout(timer);
                youLostTheGame();
            }

        }

        else if (gameQuest.innerHTML.includes('inside')) {
            if ((inputAnswer.value.includes('value') && inputAnswer.value.includes('innerHTML')) || 
            (inputAnswer.value.includes('textContent') && inputAnswer.value.includes('innerHTML')) || 
            (inputAnswer.value.includes('value') && inputAnswer.value.includes('textContent'))) {
                scoreButtonSwitch();
                clearTimeout(timer);
                highscore();
            }

            else {
                clearTimeout(timer);
                youLostTheGame();
            }

        }

        else if (gameQuest.innerHTML.includes('maximum')) {
            if ((inputAnswer.value.includes('2 years')))
            {
                scoreButtonSwitch();
                clearTimeout(timer);
                highscore();
            }

            else {
                clearTimeout(timer);
                youLostTheGame();
            }

        }

        else if (gameQuest.innerHTML.includes('animals')) {

            if ((inputAnswer.value.includes('cat') ||  (inputAnswer.value.includes('kitty'))) && 
            inputAnswer.value.includes('dog') && inputAnswer.value.includes('cow') && inputAnswer.value.includes('rat'))
            {
                scoreButtonSwitch();
                clearTimeout(timer);
                highscore();
            }

            else {
                clearTimeout(timer);
                youLostTheGame();
            }

        }

        else if (gameQuest.innerHTML.includes('disappear')) {
            if (inputAnswer.value.includes('display') &&  (inputAnswer.value.includes('none')))
            {
                scoreButtonSwitch();
                clearTimeout(timer);
                highscore();
            }

            else {
                clearTimeout(timer);
                youLostTheGame();
            }

        } else if (gameQuest.innerHTML.includes('never')) {
            if (inputAnswer.value.includes('id'))
            {
                scoreButtonSwitch();
                clearTimeout(timer);
                highscore();
            }

            else {
                clearTimeout(timer);
                youLostTheGame();
            }

        }
    })

}

// calculator function
calcButtons.forEach(function(element) {
    element.addEventListener('click', function() {            
        let elNumber = null;
        if (element.hasAttribute("data-action")) {
            checkOperator = element.dataset.action;
            console.log(checkOperator);
            if (checkOperator === "solution") {
                if (operator && chosenNumberTwo && chosenNumberOne) {
                    let solution = '';
                    switch(operator) {
                        // The functions where 2 values are used 
                        case 'count':
                            solution = (parseFloat(chosenNumberOne) + parseFloat(chosenNumberTwo));
                            break;
                        case 'minus':
                            solution = (parseFloat(chosenNumberOne) - parseFloat(chosenNumberTwo));
                            break;
                        case 'divide':
                            solution = (parseFloat(chosenNumberOne) / parseFloat(chosenNumberTwo));
                            break;
                        case 'multiply':
                            solution = (parseFloat(chosenNumberOne) * parseFloat(chosenNumberTwo));
                            break; 
                        case 'BMI':
                            solution = (parseFloat(chosenNumberOne) / parseFloat(chosenNumberTwo*chosenNumberTwo));
                            break; 
                        case 'BTW':
                            solution = parseFloat(chosenNumberOne) / parseFloat(100) * (parseFloat(parseFloat(100) + parseFloat(chosenNumberTwo)));
                            break;  
                        case 'N-BTW':
                            solution = parseFloat(chosenNumberOne) / (parseFloat(parseFloat(100) + parseFloat(chosenNumberTwo))) * parseFloat(100);
                            break;          
                    } 
                    addToDisplay('=' + solution);
                }
                // The function where you only need 1 value
            } else if (checkOperator === "reset") {
                chosenNumberOne = null;
                chosenNumberTwo = null;
                operator = null;
                showInDisplay(0);
            } else if (checkOperator === "power" && chosenNumberOne && !chosenNumberTwo) {
                solution = parseFloat(chosenNumberOne) * parseFloat(chosenNumberOne);
                addToDisplay('&sup2;= ' + solution);
            } else if (checkOperator === "root" && chosenNumberOne && !chosenNumberTwo) {
                solution = Math.sqrt(parseFloat(chosenNumberOne));
                showInDisplay('&#8730;' + chosenNumberOne + '= ' + solution);
            } else if (checkOperator === "tax" && chosenNumberOne && !chosenNumberTwo) {
                let taxPercentage = parseFloat(0.1945);
                solution = parseFloat(chosenNumberOne) * (parseFloat(1) - taxPercentage);
                if (parseFloat(chosenNumberOne) < parseFloat(68507) && parseFloat(chosenNumberOne) > parseFloat(35375)){
                    taxPercentage = 0.3735;
                    solution = parseFloat(chosenNumberOne) * (parseFloat(1) - taxPercentage);
                } else if (parseFloat(chosenNumberOne) > parseFloat(68507)) {
                    taxPercentage = 0.4950;
                    solution = parseFloat(chosenNumberOne) * (parseFloat(1) - taxPercentage);
                } 
                showInDisplay(chosenNumberOne + ' Loan without tax from scale ' + '= ' + solution);
            } else if (checkOperator === 'plusmin' && chosenNumberOne && !chosenNumberTwo) {
                if (parseInt(chosenNumberOne) > 0) {
                    chosenNumberOne = '-' + chosenNumberOne;
                } else {
                    chosenNumberOne = chosenNumberOne.substring(1);
                }
                showInDisplay(chosenNumberOne);
            } else if (checkOperator === 'bruto' && chosenNumberOne && !chosenNumberTwo) {
                solution = parseFloat(chosenNumberOne) - (parseFloat(chosenNumberOne*1.08) * 0.1307);
                addToDisplay(' Taxable income = ' + solution);
            }  else if (chosenNumberOne && !chosenNumberTwo) {
                operator = checkOperator;
                addToDisplay(operators[operator]);
            }
        } else {
            elNumber = element.dataset.number;
            addToDisplay(elNumber);
            if (chosenNumberTwo) {
                chosenNumberTwo = chosenNumberTwo + elNumber;
            } else if (operator) {
                chosenNumberTwo = elNumber;
            } else if (chosenNumberOne) {
                chosenNumberOne = chosenNumberOne + elNumber;
            } else {
                chosenNumberOne = elNumber;
            }
        }
    })
});
/* MIA :: add something to the display */
function addToDisplay(addWhat) {
    let oldDisplay = display.innerHTML;
    if (parseFloat(oldDisplay) === 0)
        oldDisplay = '';
    showInDisplay(oldDisplay + addWhat);
}
/** MIA :: add and scrolls something to the display */
function showInDisplay(showWhat) {

    display.innerHTML = showWhat;
    display.scrollLeft = 1000000;
}