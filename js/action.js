const gameButton = document.querySelector('.gameButton');
let gameQuest = document.querySelector('.gamePlay');
const checkButton = document.querySelector('.gameCheck');
const inputAnswer = document.querySelector('.answers');
const switchButton = document.querySelector('.switchButton');
const motivationButton = document.querySelector('.motivation-button');

let motivationQuotes = [ 
    'You can do it, believe in yourself!', 
    'Education is the most powerful weapon which you can use to change the world',
    'Take the attitude of a student, never be too big to <br> ask questions, never know too much to learn something new'
];

if (motivationButton) {
    motivationButton.addEventListener('click', function () {
        let text = document.querySelector('.motivation-text');
        let random = motivationQuotes[Math.floor(Math.random() * motivationQuotes.length)];
        text.innerHTML = random, motivationQuotes[random]
    })
}

let gameQuestions = [ 
    'What do you must come in Javascript to make a button do something?', 
    //'What is the longest distance that the web-developer had'
];
if (switchButton) {
    switchButton.addEventListener('click', function() {
        const navbar = document.querySelector('nav');


        navbar.classList.toggle('nav-switch');
    })
}
if (gameButton) {
    gameButton.addEventListener('click', function () {
        gameQuest.innerHTML = gameQuestions;
        //gameQuest.innerHTML = gameQuestions[Math.floor(Math.gameQuest() * gameQuestions.length)];
        checkButton.classList.toggle('gameButton');
        checkButton.innerHTML = 'Check your answer'
    })

}
if (checkButton) {
    checkButton.addEventListener('click', function() {
        if (gameQuest.innerHTML.includes('button')) {
            if (inputAnswer.value.includes('addEventListener')) {
                alert('You got it right!');
            }
            else {
                alert("No you didn't got it right, sorry try again");
            }
            console.log(inputAnswer.innerHTML);
        }
        
    })
}