const runcode = document.querySelector('.runCode');
const checkCode = document.querySelector('.checkFont');
let cssCode = document.querySelector('#css-code');
const fontOne = document.querySelector('.fontOne');
const fontTwo = document.querySelector('.fontTwo');
const runningcode = document.querySelector('.runningCode');
const htmlFour = document.querySelector('#html-code-4');
const cssFour = document.querySelector('#css-code-4');
// hoogte en breedte onderdelen
const heightOne = document.querySelector('.hwOne');
const heightTwo = document.querySelector('.hwTwo');
const heightThree = document.querySelector('.hwThree');
const heightTree = document.querySelector('.hwTree');
const checkHW = document.querySelector('.checkHW');
const runningHW = document.querySelector(".runningHW");
const htmlHW = document.querySelector('#html-code-hw');
const cssHW = document.querySelector('#css-code-hw');
// kleuren onderdelen
const colorOne = document.querySelector('.cOne');
const colorTwo = document.querySelector('.cTwo');
const colorThree = document.querySelector('.cThree');
const colorTree = document.querySelector('.cTree');
const colorThee = document.querySelector('.cThee');
const checkColor = document.querySelector('.checkColor');
const runningColor = document.querySelector(".runningC");
const htmlColor = document.querySelector('#html-code-c');
const cssColor = document.querySelector('#css-code-c');
// Uitlijning onderdelen
const aOne = document.querySelector('.aOne');
const aTwo = document.querySelector('.aTwo');
const aThree = document.querySelector('.aThree');
const aTree = document.querySelector('.aTree');
const aThee = document.querySelector('.aThee');
const aThea = document.querySelector('.aThea');
const checkA = document.querySelector('.checkAlign');
const runningAlign = document.querySelector(".runningA");
const htmlA = document.querySelector('#html-code-a');
const cssA = document.querySelector('#css-code-a');

// blokken HTML en CSS een resultaat van hun code laten zien
// de blokken voor het resultaat bij lettertype pagina opdracht 3
function run() {
    let htmlCode = document.querySelector(".editor #html-code").value;
    let cssCode = "<style>" + document.querySelector(".editor #css-code").value+"</style>";
    let output = document.querySelector(".editor #output");
    output.contentDocument.body.innerHTML = htmlCode+cssCode;
}
// de blokken voor het resultaat bij lettertype pagina opdracht 4
function running() {
    let htmlCode = document.querySelector(".editor #html-code-4").value;
    let cssCode = "<style>" + document.querySelector(".editor #css-code-4").value+"</style>";
    let output = document.querySelector(".editor #output-4");
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
// de blokken voor het resultaat bij hoogte en breedte

function runningHw() {
    let htmlCode = document.querySelector(".editor #html-code-hw").value;
    let cssCode = "<style>" + document.querySelector(".editor #css-code-hw").value+"</style>";
    let output = document.querySelector(".editor #output-hw");
    output.contentDocument.body.innerHTML = htmlCode+cssCode;
}

if (runningHW) {
    runningHW.addEventListener('click', function() {
        runningHw();
    })
}
// de blokken voor het resultaat bij kleur

function runningC() {
    let htmlCode = document.querySelector(".editor #html-code-c").value;
    let cssCode = "<style>" + document.querySelector(".editor #css-code-c").value+"</style>";
    let output = document.querySelector(".editor #output-c");
    output.contentDocument.body.innerHTML = htmlCode+cssCode;
}

if (runningColor) {
    console.log("running");

    runningColor.addEventListener('click', function() {
        runningC();
    })
}
// de blokken voor het resultaat bij uitlijnen

function runningAg() {
    let htmlCode = document.querySelector(".editor #html-code-a").value;
    let cssCode = "<style>" + document.querySelector(".editor #css-code-a").value+"</style>";
    let output = document.querySelector(".editor #output-a");
    output.contentDocument.body.innerHTML = htmlCode+cssCode;
}

if (runningAlign) {
    console.log("running");

    runningAlign.addEventListener('click', function() {
        runningAg();
    })
}


// Controle op de lettertype vragen
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
// Controle op de hoogte en breedte vragen
if(checkHW) {
    checkHW.addEventListener('click', function() {
        if (heightOne.checked) {
            alert("Je hebt vraag 1 goed!")
        } else {
            alert("Je hebt vraag 1 nog niet goed, probeer het nog een keer")
        }
        if (heightTwo.value === "width: 300px;") {
            alert("Je hebt vraag 2 goed")
        } else {
            alert("Je hebt vraag 2 nog niet goed, probeer het nog een keer")
        }
        if (heightThree.value === "height: 400px;" && heightTree.value ==="width: 200px;") {
            alert("vraag 3 is goed");
        } else {
            alert("Je hebt vraag 3 nog niet goed, kijk nog een keer naar je code")
        }
        if ((cssHW.value.includes("fantasy") && cssHW.value.includes("height: 400px;"))) {
            alert("Je hebt vraag 4 goed");
        } else {
            alert("Kijk nog naar je code van vraag 4");
        }
    })
}
// Controle op de kleur vragen
if(checkColor) {
    checkColor.addEventListener('click', function() {
        if (colorOne.checked) {
            alert("Je hebt vraag 1 goed!")
        } else {
            alert("Je hebt vraag 1 nog niet goed, probeer het nog een keer")
        }
        if (colorTwo.value.includes("h1 { color: blue; }")) {
            alert("Je hebt vraag 2 goed")
        } else if (colorTwo.value.includes("color: blue;")) {
            alert("Je hebt vraag 2 goed qua de styling, je bent alleen vergeten te noemen welk onderdeel je styling geeft");
        }
        else {
            alert("Je hebt vraag 2 nog niet goed, probeer het nog een keer")
        }
        if (colorThree.value === "p { font-family: Garamond; }" && colorTree.value ==="img { width: 500px; }" && colorThee.value ==="h1 { color: green; }") {
            alert("vraag 3 is goed");
        } else if (colorThree.value === "font-family: Garamond;" && colorTree.value ==="width: 500px;" && colorThee.value ==="color: green;") {
            alert("Je hebt vraag 3 goed op het punt styling, alleen je bent de onderdelen vergeten te noemen die je stylt");
        } else {
            alert("Je hebt vraag 3 nog niet goed, kijk nog een keer naar je code")
        }
        if ((cssColor.value.includes("font-family: Copperplate") && cssColor.value.includes("height: 500px;")) && cssColor.value.includes("color: yellow;")) {
            alert("Je hebt vraag 4 goed");
        } else {
            alert("Kijk nog naar je code van vraag 4");
        }
    })
}
// Controle op de uitlijn vragen
if(checkA) {
    checkA.addEventListener('click', function() {
        if (aOne.checked) {
            alert("Je hebt vraag 1 goed!")
        } else {
            alert("Je hebt vraag 1 nog niet goed, probeer het nog een keer")
        }
        if (aTwo.value.includes("p { align: right; }")) {
            alert("Je hebt vraag 2 goed")
        } else if (aTwo.value.includes("align: right;")) {
            alert("Je hebt vraag 2 goed qua de styling, je bent alleen vergeten te noemen welk onderdeel je styling geeft");
        }
        else {
            alert("Je hebt vraag 2 nog niet goed, probeer het nog een keer")
        }
        if (aThree.value === "p { font-family: Lucida Handwriting; }" && aTree.value ==="img { height: 350px; }" && aThee.value ==="h3 { color: orange; }" && aThea.value ==="p { align: left; }") {
            alert("vraag 3 is goed");
        } else if (aThree.value === "font-family: Lucida Handwriting;" && aTree.value ==="height: 350px;" && aThee.value ==="color: orange;" && aThea.value ==="align: left;") {
            alert("Je hebt vraag 3 goed op het punt styling, alleen je bent de onderdelen vergeten te noemen die je stylt");
        } else {
            alert("Je hebt vraag 3 nog niet goed, kijk nog een keer naar je code")
        }
        if ((cssA.value.includes("font-family: Georigia") && cssA.value.includes("height: 450;")) && cssA.value.includes("width: 550;") && 
        (cssA.value.includes("color: orange;") || cssA.value.includes("color: red;") || cssA.value.includes("color: purple;") || cssA.value.includes("color: green;"))
         && cssA.value.includes("img { align: bottom;") && cssA.value.includes("p { align: right;")) {
            alert("Je hebt vraag 4 goed");
        } else {
            alert("Kijk nog naar je code van vraag 4");
        }
    })
}