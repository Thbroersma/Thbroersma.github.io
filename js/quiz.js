const gameButton = document.querySelector('.gameButton');
let gameQuest = document.querySelector('.gamePlay');
const checkButton = document.querySelector('.gameCheck');
const inputAnswer = document.querySelector('.answers');
const nextButton = document.querySelector('.nextButton');
const scoreButton = document.querySelector('.score-button');
const answerfield = document.querySelector('.answers');
const codeButton = document.querySelector('.code');
const codeText = document.querySelector('.codes');
const coding = document.querySelector('.codeAlinea');
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
// Running the code
if (codeButton) {
    codeButton.addEventListener('click', function() {
        coding.innerHTML = codeText.value;
        coding
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
        timer = setTimeout(function(){ alert("You ran out of time, try again"); }, 30000);
    })
}

if (gameButton) {
    gameButton.addEventListener('click', function () {

        timer = setTimeout(function(){ alert("You ran out of time, try again"); }, 30000);
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

        if (gameQuest.innerHTML = 'What do you must have in Javascript to make a button do something?') {
            if (inputAnswer.value.includes('addEventListener')) {
                clearTimeout(timer);
                scoreButtonSwitch();
                highscore();
            }

            else {
                clearTimeout(timer);
                answerfield.innerHTML = "You got it wrong, the answer is: addEventListener";
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
                answerfield.innerHTML = "You got it wrong, the answer is: 150 km";

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
                answerfield.innerHTML = "You got it wrong, the answer is: querySelectorAll";

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