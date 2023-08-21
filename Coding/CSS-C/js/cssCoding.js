const runcode = document.querySelector('.runCode');
const runningHW = document.querySelector(".runningHW");
const checkCode = document.querySelector('.checkFont');
let cssCode = document.querySelector('#css-code');
const fontOne = document.querySelector('.fontOne');
const fontTwo = document.querySelector('.fontTwo');
const heightOne = document.querySelector('.hwOne');
const heightTwo = document.querySelector('.hwTwo');
const heightThree = document.querySelector('.hwThree');
const heightTree = document.querySelector('.hwTree');
const runningcode = document.querySelector('.runningCode');
const htmlFour = document.querySelector('#html-code-4');
const cssFour = document.querySelector('#css-code-4');
const checkHW = document.querySelector('.checkHW');
const htmlHW = document.querySelector('#html-code-hw');
const cssHW = document.querySelector('#css-code-hw');

// blokken HTML en CSS een resultaat van hun code laten zien
function run() {
    let htmlCode = document.querySelector(".editor #html-code").value;
    let cssCode = "<style>" + document.querySelector(".editor #css-code").value+"</style>";
    let output = document.querySelector(".editor #output");

    //console.log(htmlCode, cssCode, jsCode, output);


    output.contentDocument.body.innerHTML = htmlCode+cssCode;
}

if (runcode) {
    runcode.addEventListener('click', function() {
        run();
    })
}
function running() {
    let htmlCode = document.querySelector(".editor #html-code-4").value;
    let cssCode = "<style>" + document.querySelector(".editor #css-code-4").value+"</style>";
    let output = document.querySelector(".editor #output-4");

    //console.log(htmlCode, cssCode, jsCode, output);


    output.contentDocument.body.innerHTML = htmlCode+cssCode;
}

if (runningcode) {
    runningcode.addEventListener('click', function() {
        running();
    })
}
if (runcode) {
    runcode.addEventListener('click', function() {
        run();
    })
}
function runningHw() {
    let htmlCode = document.querySelector(".editor #html-code-hw").value;
    let cssCode = "<style>" + document.querySelector(".editor #css-code-hw").value+"</style>";
    let output = document.querySelector(".editor #output-hw");

    //console.log(htmlCode, cssCode, jsCode, output);


    output.contentDocument.body.innerHTML = htmlCode+cssCode;
}

if (runningHW) {
    runningHW.addEventListener('click', function() {
        runningHw();
    })
}
if(checkCode) {
    checkCode.addEventListener('click', function() {
        if (fontOne.checked) {
            alert("Je hebt vraag 1 goed!")
        } else {
            alert("Je hebt vraag 1 nog niet goed, probeer het nog een keer")
        }
        if (fontTwo.value === "font-family: cursive;") {
            alert("Je hebt vraag 2 goed")
        } else {
            alert("Je hebt vraag 2 nog niet goed, probeer het nog een keer")
        }
        if (cssCode.value.includes("font-family") && cssCode.value.includes("font-fantasy")) {
            alert("vraag 3 is goed");
        } else {
            alert("Je hebt vraag 3 nog niet goed, kijk nog een keer naar je code")
        }
        if ((cssFour.value.includes("Papyrus") && cssFour.value.includes("Courier New")) && (htmlFour.value.includes("<h1>") && htmlFour.value.includes("<p>"))) {
            alert("Je hebt vraag 4 goed");
        } else {
            alert("Kijk nog naar je code van vraag 4");
        }
    })
}
