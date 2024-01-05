// The buttons 
const switchButton = document.querySelector('.switchButton');
const motivationButton = document.querySelector('.motivation-button');
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
let check = true;
const display = document.querySelector('.displayValue');
let chosenNumberOne = null;
let chosenNumberTwo = null;
let operator = null;
// De functies voor de rekenmachine
const calcButtons = document.querySelectorAll('.calculator_item');
const operators = { 'count' : '+', 'minus' : '-', 'multiply': 'x', 'divide': ':', 'BMI' : '-', 
'BTW' : ' BTW percentage ', 'N-BTW' : ' BTW percentage '};
let birthyear = 1996;
let year = new Date();
console.log(year.getFullYear() - birthyear);
let timer;
let scorePoints = 0;
// Variabelen voor de slide-show
function addOne() {
    position++;
    if (position>=5) {
        position = 0;
    }
}
setInterval(addOne, 5000)
let titles = [
    "Interaction design", "Bootstrap project/Snackbar site", "Zuzu", "Healthone", "Hotel Stardust"
];
let images = [
    "img/site.png", "img/snack.png", "img/zuzu.png", "img/healthone.png", "img/stardust.png"
];
let descriptions = [
    "This is was a design project, where we had to look at problems that students encountered during the COVID-19 pandemic. We thought of the motivation of the students, so we created a version of Instagram. Where you can swipe through and click on pictures. Also, a page with a several forms of motivation so you can get out of your situation for a bit and get motivated to do stuff again.",
    "Sometimes it is good to test your speed in your work. This was a test that we had to take, to see how good you are making a website in only 2 hours with only a little but of information.",
    "This a php project. It somewhat resembles the snack bar website. We needed to make a order form for a website with the right styling, but also the function of the forms. The customer information will follow on the next pages and you will get the total of your order.",
    "As a project in our second year, we made a website for a gym called Healthone. We needed a to make it as whole as possible, with a registration and login system. Further this project is done with PHP so it is not hard code, but loaded in from a database. This project I did together with <a href='https://jamiedemooij.github.io/'>Jamie de Mooij</a>.",
    "As a exam training project, we made a hotel website with Symfony. We made a website for a hotel called Stardust. We needed a to make it with a login and reservation system. It's made with 3 different ways you can go when you login, like a customer, administrator and receptionist. It depends what you can do on the level that you login. This project I did together with <a href='https://jamiedemooij.github.io/'>Jamie de Mooij</a>."
];
let links = [
    "https://github.com/ROCMondriaanTIN/sd20-kd5029-interactiondesign-w-o-r-c'>Github</a>",
    "https://github.com/ROCMondriaanTIN/sd20-bootstrap-toets-snackbarlekker-Thbroersma",
    "https://github.com/Thbroersma/zuzu",
    "https://github.com/jamiedemooij1/HealthOne-Team-FLEX",
    "https://github.com/ROCMondriaanTIN/sd20-pofo-p8-hotel-w-m-i-w"

]
const slide_head = document.querySelector(".slide-head");
const slide_img = document.querySelector(".slide-img");
const slide_text = document.querySelector(".slide-text");
const slide_link = document.querySelector(".slide-link");
let position = 0;
for (let i = 0; i <= titles.length; i++) {
    setInterval (function() {
        slide_head.innerHTML = titles[position];
        slide_img.src = images[position];
        slide_text.innerHTML = descriptions[position];
        slide_link.href = links[position];
    }, 15000);
}
//slide_head.innerHTML = titles[1];


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
        const info = document.querySelector('.info');
        const message = document.querySelector('.message');

        navbar.classList.toggle('nav-switch');
        body.classList.toggle('myBody-switch');
        pacman.classList.toggle('hide');

        let randomnumers = [0, 3, 0, 1, 0, 3, 0, 1, 0, 3, 0, 1, 0, 3, 0, 1, 0, 3, 0, 1, 0, 3, 0, 1, 0, 3, 0, 0, 4 ];
        let pacmanUp = 9.8;
        pacmanRight = 1;
        let l = 0;
        let h = 0;
        let i = 0;
        let j = 0;
        let movingWidth = 0;
        let movingUp = 0;
        let k = 0;
        
        if (check) {
            
        function goPacman () {
            switch(randomnumers[k]) {
                case 0:
                    
                    movingWidth = pacmanRight + ((l + 1) * 6);
                    let newElement = document.createElement('div');
                    let leftPacman = document.createElement('div');
                    if (i >= l) {
                        newElement.classList.add('new', 'newBlock', i);
                        leftPacman.classList.add('pacman-new');
                        if (l > 14) {
                            newElement.style.right = 91 + "vw";
                            newElement.style.top = pacmanUp + (h * 6) + "vw";
                            pacman.style.right = 91 + 'vw';
                            l = 14;

                        } 
                        else {
                            newElement.style.right = movingWidth - 6 + "vw";
                            newElement.style.top = pacmanUp + (h * 6) + "vw";
                            newElement.style.backgroundColor = "black";
                            leftPacman.innerHTML = '<img src="Games/Pacman/img/pacman.gif" class="pacman-new"  alt="">';
                            leftPacman.style.top = pacmanUp + (h * 6) + "vw";
    
                            leftPacman.style.transform = "scaleX(-1)";
                            leftPacman.style.right = movingWidth + 'vw';
                            if(k == 0) {
                                alert("You pressed the action button of my page, now act right on what it asks");
                            }
                            i++;
                            k++;
                            pacman.classList.add('hide');
                            console.log(k);
                            if (k == 28) {
                                check = false;
                                message.classList.toggle('hide');

                            }                         
                        }
                        l++;
                    } 
                    body.appendChild(newElement);
                    body.appendChild(leftPacman);                 
                    break;
                case 1:
                    movingUp = pacmanRight + h * 6 + 6;
                    let newUp = document.createElement('div');
                    let UpPacman = document.createElement('div');
                    if (j >= h) {
                        newUp.classList.add('new', 'newBlock', i);
                        UpPacman.classList.add('pacman-new');
                        UpPacman.innerHTML = '<img src="Games/Pacman/img/pacman.gif" class="pacman-new"  alt="">';
    
                        if (h <= 0) {
                            newUp.style.top = 9.6 + "vw";
                            UpPacman.style.top = 3.8 + 'vw';
                            newUp.style.right = ((l) * 6) + 1 + "vw";
                            UpPacman.style.right = ((l) * 6) + 1 + "vw";
                            UpPacman.style.transform = "rotate(270deg)";
                            k++;
                            console.log(k);
                            h = 0;
                        } else {
                            newUp.style.top = movingUp + 2.6 + 'vw';
                            newUp.style.backgroundColor = "black";
                            newUp.style.right = ((l) * 6) + 1 + "vw";
                            UpPacman.style.right = ((l) * 6) + 1 + "vw";
    
                            UpPacman.style.transform = "rotate(270deg)";
                            UpPacman.style.top = (movingUp - 3) + 'vw';
                            k++;
                            console.log(k);
                            j--
                        }
                        h--;
                    }
                    body.appendChild(newUp);
                    body.appendChild(UpPacman);
          
                    break;
                case 2:
                    movingWidth = pacmanRight + ((l + 1) * 6);
    
                    let newRight = document.createElement('div');
                    let newPacman = document.createElement('div');
                    
                    if (i >= l) {
                        newRight.classList.add('new', 'newBlock', i);
                        newPacman.classList.add('pacman-new');
                        if (l < 1) {
                            newRight.style.right = 1 + "vw";
                            pacman.style.right = 1 + 'vw';
                            l = 1;
                        } else {
                            newRight.style.right = movingWidth - 6 + "vw";
                            newRight.style.backgroundColor = "black";
                            newRight.style.top = pacmanUp + (h * 6) + "vw";
                            newPacman.innerHTML = '<img src="Games/Pacman/img/pacman.gif" class="pacman-new"  alt="">';
                            newPacman.style.right = movingWidth - 12 + 'vw';
                            newPacman.style.top = pacmanUp + (h * 6) + "vw";
                           
                            k++;
                            console.log(k);
                            i--;
                        }
                        l--;
                    }
                    body.appendChild(newPacman);
                    body.appendChild(newRight);
                    console.log(newPacman);
     
                    break;
                case 3:
                    
                    movingUp = pacmanUp + h * 6;
                    let newDown = document.createElement('div');
                    let downPacman = document.createElement('div');
                    if (j >= h) {
                        newDown.classList.add('new', 'newBlock', i);
                        downPacman.classList.add('pacman-new');
                        if (h > 15) {
                            newDown.style.top = 98 + "vw";
                            newDown.style.right = 91 + "vw";
                            pacman.style.top = 98 + "vw";
                            downPacman.style.transform = "rotate(90deg)";
    
                            h = 15;
                        } else {
                            newDown.style.backgroundColor = "black";
                            newDown.style.top = movingUp + "vw";
                            newDown.style.right = ((l) * 6) + 1 + "vw";
                            downPacman.innerHTML = '<img src="Games/Pacman/img/pacman.gif" class="pacman-new"  alt="">';
                            downPacman.style.right = ((l) * 6) + 1 + "vw";
    
                            downPacman.style.transform = "rotate(90deg)";
                            downPacman.style.top = (movingUp) + 6 + 'vw';
                            j++;
                            k++;
                            console.log(k);
                        }   
                        h++;
                    }
                    body.appendChild(newDown);
                    body.appendChild(downPacman);
                    break;
                case 4:
                    info.classList.toggle('hide');
                    info.classList.add('extra-info');
                    k++;
                    break;
            }
        }
    }
       function alertMe() {
        prompt("You pressed the destroy button of my page, now I will do my work");
       }
        const timerId = setInterval(goPacman, 300);
        
        window.addEventListener('keydown', (e)=> {
            switch(e.keyCode) {
                case 37:
                    movingWidth = pacmanRight + ((l + 1) * 6);
                    let newElement = document.createElement('div');
                    let leftPacman = document.createElement('div');
                    if (i >= l) {
                        newElement.classList.add('new', 'newBlock', i);
                        leftPacman.classList.add('pacman-new');
                        if (l > 14) {
                            newElement.style.right = 85 + "vw";
                            newElement.style.top = pacmanUp + (h * 6) + "vw";
                            pacman.style.right = 91 + 'vw';
                            l = 14;
                        } 
                        else {
                            newElement.style.right = movingWidth - 6 + "vw";
                            newElement.style.top = pacmanUp + (h * 6) + "vw";
                            newElement.style.backgroundColor = "black";
                            newElement.style.color = "black";
                            leftPacman.innerHTML = '<img src="Games/Pacman/img/pacman.gif" class="pacman-new"  alt="">';
                            leftPacman.style.top = pacmanUp + (h * 6) + "vw";

                            leftPacman.style.transform = "scaleX(-1)";
                            leftPacman.style.right = movingWidth + 'vw';
                            i++;
                            
                        }
                        l++;
                    } 
                    body.appendChild(newElement);
                    body.appendChild(leftPacman);
                    break;
                case 38:
                    movingUp = pacmanRight + h * 6 + 6;
                    let newUp = document.createElement('div');
                    let UpPacman = document.createElement('div');
                    if (j >= h) {
                        newUp.classList.add('new', 'newBlock', i);
                        UpPacman.classList.add('pacman-new');
                        UpPacman.innerHTML = '<img src="Games/Pacman/img/pacman.gif" class="pacman-new"  alt="">';

                        if (h <= 0) {
                            newUp.style.top = 9.6 + "vw";
                            UpPacman.style.top = 3.5 + 'vw';
                            newUp.style.right = ((l) * 6) + 1 + "vw";
                            UpPacman.style.right = ((l) * 6) + 1 + "vw";
                            UpPacman.style.transform = "rotate(270deg)";

                            h = 0;
                        } else {
                            newUp.style.top = movingUp + 2.6  + "vw";
                            newUp.style.backgroundColor = "black";
                            newUp.style.color = "black";
                            newUp.style.right = ((l) * 6) + 1 + "vw";
                            UpPacman.style.right = ((l) * 6) + 1 + "vw";

                            UpPacman.style.transform = "rotate(270deg)";
                            UpPacman.style.top = (movingUp - 3.4) + 'vw';
                            j--
                        }
                        h--;
                    }
                    body.appendChild(newUp);
                    body.appendChild(UpPacman);
                    break;
                case 39:
                    movingWidth = pacmanRight + ((l + 1) * 6);

                    let newRight = document.createElement('div');
                    let newPacman = document.createElement('div');
                    
                    if (i >= l) {
                        newRight.classList.add('new', 'newBlock', i);
                        newPacman.classList.add('pacman-new');
                        if (l < 1) {
                            newRight.style.right = 1 + "vw";
                            pacman.style.right = 1 + 'vw';
                            l = 1;
                        } else {
                            newRight.style.right = movingWidth - 6 + "vw";
                            newRight.style.backgroundColor = "black";
                            newRight.style.color = "black";
                            newRight.style.top = pacmanUp + (h * 6) + "vw";
                            newPacman.innerHTML = '<img src="Games/Pacman/img/pacman.gif" class="pacman-new"  alt="">';
                            newPacman.style.right = movingWidth - 12 + 'vw';
                            newPacman.style.top = pacmanUp + (h * 6) + "vw";
                            newPacman.style.transform = "rotate(0deg)";
                            /*
                            pacman.style.right = movingWidth - 12 + 'vw';
                            pacman.style.transform = "scaleX(1)";*/

                            i--;
                        }
                        l--;
                    }
                    body.appendChild(newPacman);
                    body.appendChild(newRight);
                    console.log(newPacman);
     
                    break;
                case 40:
                    
                    movingUp = pacmanUp + h * 6;
                    let newDown = document.createElement('div');
                    let downPacman = document.createElement('div');
                    if (j >= h) {
                        newDown.classList.add('new', 'newBlock', i);
                        downPacman.classList.add('pacman-new');
                        if (h > 15) {
                            newDown.style.top = 98 + "vw";
                            newDown.style.right = 91 + "vw";
                            pacman.style.top = 98 + "vw";
                            downPacman.style.transform = "rotate(90deg)";

                            h = 15;
                        } else {
                            newDown.style.backgroundColor = "black";
                            newDown.style.color = "black";
                            newDown.style.top = movingUp + "vw";
                            newDown.style.right = ((l) * 6) + 1 + "vw";
                            downPacman.innerHTML = '<img src="Games/Pacman/img/pacman.gif" class="pacman-new"  alt="">';
                            downPacman.style.right = ((l) * 6) + 1 + "vw";

                            downPacman.style.transform = "rotate(90deg)";
                            downPacman.style.top = movingUp + 6 + "vw";

                            j++;
                        }   
                        h++;
                    }
                    body.appendChild(newDown);
                    body.appendChild(downPacman);
                    break;
            }      
        })
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