const gameButton = document.querySelector('.gameButton');
let gameQuest = document.querySelector('.gamePlay');
const checkButton = document.querySelector('.gameCheck');
const inputAnswer = document.querySelector('.answers');
const switchButton = document.querySelector('.switchButton');
const motivationButton = document.querySelector('.motivation-button');
const nextButton = document.querySelector('.nextButton');
let motivationQuotes = [ 
    'You can do it, believe in yourself!', 
    'Education is the most powerful weapon which you can use to change the world',
    'Take the attitude of a student, never be too big to <br> ask questions, never know too much to learn something new',
    'All we have to decide is what to do with the time that is given to us',
    'It is not our abilities that show what we truly are… it is our choices',
    'It’s what you do right now that makes a difference',
    'It’s only a passing thing, this shadow. Even darkness must pass. A new day will come. And when the sun shines it will shine out the clearer.',
    'You know how everyone’s always saying, ‘Seize the moment’? I don’t know, I’m kinda thinkin’ it’s the other way. Like the moment seizes us',
    'You control your destiny – you don’t need magic to do it. And there are no magical shortcuts to solving your problems',
    'Today is a good day to try something new'
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
    'What do you must come in Javascript to make a button do something?', 
    'What is the longest distance that the web-developer had?',
    'What can you use to select all elements or classes?',
];

if (motivationButton) {
    motivationButton.addEventListener('click', function () {
        let text = document.querySelector('.motivation-text');
        let random = motivationQuotes[Math.floor(Math.random() * motivationQuotes.length)];
        text.innerHTML = random, motivationQuotes[random]
    })
}
if (switchButton) {
    switchButton.addEventListener('click', function() {
        const navbar = document.querySelector('nav');


        navbar.classList.toggle('nav-switch');
    })
}
if (nextButton) {
    nextButton.addEventListener('click', function() {
        let randomNumber = Math.floor(Math.random() * gameQuestions.length);
        gameQuest.innerHTML = gameQuestions[randomNumber];
    })
}
if (gameButton) {
    gameButton.addEventListener('click', function () {
        let timer = setTimeout(function(){ alert("You ran out of time, try again"); }, 10000);
        
        gameQuest.innerHTML = gameQuestions[0];
        //gameQuest.innerHTML = gameQuestions[Math.floor(Math.gameQuest() * gameQuestions.length)];
        checkButton.classList.toggle('gameButton');
        nextButton.classList.toggle('gameButton');
        checkButton.innerHTML = 'Check your answer';
        nextButton.innerHTML = 'Next question';
        if (checkButton) {
            checkButton.addEventListener('click', function() {
                clearTimeout(timer);
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
    })

}


    

// rekenmachine functie
calcButtons.forEach(function(element) {
    element.addEventListener('click', function() {            
        let elNumber = null;

        if (element.hasAttribute("data-action")) {
            console.log('Hallo');
            checkOperator = element.dataset.action;
            console.log(checkOperator);
            if (checkOperator === "solution") {
                if (operator && chosenNumberTwo && chosenNumberOne) {
                    let solution = '';
                    switch(operator) {
                        // The functies in de rekenmachine waarbij de beide variabelen worden gebruikt
                        case 'count':
                            solution = (parseFloat(chosenNumberOne) + parseFloat(chosenNumberTwo));
                            console.log('Er is op de + button geclickt in de rekenmachine');
                            break;
                        case 'minus':
                            solution = (parseFloat(chosenNumberOne) - parseFloat(chosenNumberTwo));
                            console.log('Er is op de - button geclickt in de rekenmachine');
                            break;
                        case 'divide':
                            solution = (parseFloat(chosenNumberOne) / parseFloat(chosenNumberTwo));
                            console.log('Er is op de / button geclickt in de rekenmachine');
                            break;
                        case 'multiply':
                            solution = (parseFloat(chosenNumberOne) * parseFloat(chosenNumberTwo));
                            console.log('Er is op de x button geclickt in de rekenmachine');
                            break; 
                        case 'BMI':
                            solution = (parseFloat(chosenNumberOne) / parseFloat(chosenNumberTwo*chosenNumberTwo));
                            console.log('Er is op de BMI button geclickt in de rekenmachine');
                            break; 
                        case 'BTW':
                            solution = parseFloat(chosenNumberOne) / parseFloat(100) * (parseFloat(parseFloat(100) + parseFloat(chosenNumberTwo)));
                            console.log('Er is op de BTW-berekening button geclickt in de rekenmachine');
                            break;  
                        case 'N-BTW':
                            solution = parseFloat(chosenNumberOne) / (parseFloat(parseFloat(100) + parseFloat(chosenNumberTwo))) * parseFloat(100);
                            console.log('Er is op de exclusief BTW-berekening button geclickt in de rekenmachine');
                            break;          
                    } 
                    addToDisplay('=' + solution);
                }
                // De functies in de rekenmachine waarbij 1 variabele nodig is
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
/* MIA :: voeg iets toe aan het display */
function addToDisplay(addWhat) {
    let oldDisplay = display.innerHTML;
    if (parseFloat(oldDisplay) === 0)
        oldDisplay = '';
    showInDisplay(oldDisplay + addWhat);
}

/** MIA :: Toon iets op het display en scroll display */
function showInDisplay(showWhat) {
    /** MIA :: display variabele doet een innerHTML, 
     * maar het is nu een input element. 
     * Je kan dit doen, maar dan gebruik je niet .innerHTML maar .value
     * 
     * Of je lost het op zoals (in mijn code) er een DIV element van te maken
     * div's hebben HTML in de DIV zitten.
     **/
    display.innerHTML = showWhat;
    display.scrollLeft = 1000000;
}