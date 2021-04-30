const gameButton = document.querySelector('.gameButton');
let gameQuest = document.querySelector('.gamePlay');
const checkButton = document.querySelector('.gameCheck');
const inputAnswer = document.querySelector('.answers');
const switchButton = document.querySelector('.switchButton');

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