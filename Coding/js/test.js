const opdrachtEen = document.querySelector('.answerOne');
const opdrachtTwo = document.querySelector('.opTwo');
const opdrachtThree = document.querySelector('.answerThree');
const actionButton = document.querySelector('.activeCode')
const opdrachtVier = document.querySelector('.opFour');
const checkEen= document.querySelector('.checkTwo');
const pOne = document.querySelector('.pOne');
const pTwo = document.querySelector('.pTwo');
const pThree = document.querySelector('.pThree');
const pTree = document.querySelector('.pTree');
const checkTwo= document.querySelector('.checkP');

if (checkEen) {
    checkEen.addEventListener('click', function () {
        if(opdrachtEen.checked) {
            alert("Je hebt vraag 1 goed!")
        }
        else {
            alert("Je hebt vraag 1 nog niet goed, probeer het opnieuw")
        }
        if(opdrachtTwo.value === "h2" || opdrachtTwo.value === "H2") {
            alert("Je hebt vraag 2 goed!")
        }
        else {
            alert("Je hebt vraag 2 nog niet goed, probeer het opnieuw")
        }
        if(opdrachtThree.checked) {
            alert("Je hebt vraag 3 goed!")
        }
        else {
            alert("Je hebt vraag 3 nog niet goed, probeer het opnieuw")
        }
        if(opdrachtVier.value === "<h1>Laika</h1>" || opdrachtVier.value === "<H1>Laika</H1>") {
            alert("Je hebt de goeie tag in vraag 4!")
        }
        else {
            alert("Je hebt vraag 4 nog niet goed, probeer het opnieuw")
        }
    })
}
if (checkTwo) {
    checkTwo.addEventListener('click', function () {
        if(pOne.checked) {
            alert("Je hebt vraag 1 goed!")
        }
        else {
            alert("Je hebt vraag 1 nog niet goed, probeer het opnieuw")
        }
        if(pTwo.value === "</p>" || pTwo.value === "</P>") {
            alert("Je hebt vraag 2 goed!")
        }
        else {
            alert("Je hebt vraag 2 nog niet goed, probeer het opnieuw")
        }
        if((pThree === "<h1></h1>" || pThree === "<H1></H1>")) {
            alert("Je hebt vraag 3 goed!")
        }
        if (pThree === "<h1></h1>" || pThree === "<H1></H1>"){
            alert("Je hebt vraag 3, regel 5 goed! Regel 4 moet je nog verbeteren")
        }
        else if (pTree === "<p></p>" || pTree === "<P></P>"){
            alert("Je hebt vraag 3, regel 4 goed! Regel 5 moet je nog verbeteren")
        }
        else {
            alert("Je hebt vraag 3 nog niet goed, probeer het opnieuw")
        }

    })
}
function run() {
    let htmlCode = document.querySelector(".lastBlock #html-code").value;
  
    let output = document.querySelector(".block #output");

    //console.log(htmlCode, cssCode, jsCode, output);


    output.contentDocument.body.innerHTML = htmlCode;
}

if (actionButton) {
    actionButton.addEventListener('click', function() {
        run();
    })
}
/*
if(checkEen) {
    alert("button")
}*/