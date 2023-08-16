const runcode = document.querySelector('.runCode');
const checkCode = document.querySelector('.checkFont');
let cssCode = document.querySelector('#css-code');
const fontOne = document.querySelector('.fontOne');
const fontTwo = document.querySelector('.fontTwo');
const runningcode = document.querySelector('.runningCode');
const htmlFour = document.querySelector('#html-code-4');
const cssFour = document.querySelector('#css-code-4');

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
if(checkCode) {
    checkCode.addEventListener('click', function() {
        if (fontOne.value === "font-family") {
            alert("Je hebt vraag 1 goed!")
        } else {
            alert("Je hebt vraag 1 nog niet goed, probeer het nog een keer")
        }
        if (fontTwo.value === "font-family: cursive;") {
            alert("Je hebt vraag 2 goed")
        } else {
            alert("Je hebt vraag 2 nog niet goed, probeer het nog een keer")
        }
        if (cssCode.value.includes("fantasy") && cssCode.value.includes("font-family")) {
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
