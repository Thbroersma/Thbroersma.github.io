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
const IOne = document.querySelector('.IOne');
const ITwo = document.querySelector('.ITwo');
const IThree = document.querySelector('.IThree');
const ITree = document.querySelector('.ITree');
const IThee = document.querySelector('.IThee');
const Icheck= document.querySelector('.Icheck');
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
        if((pThree.value === "<h1></h1>" || pThree.value === "<H1></H1>") && (pTree.value === "<p></p>" || pTree.value === "<P></P>")) {
            alert("Je hebt vraag 3 goed!")
        }
        else if (pTree.value === "<p></p>" || pTree.value === "<P></P>"){
            alert("Je hebt vraag 3, regel 5 goed! Regel 4 moet je nog verbeteren")
        }
        else if (pThree.value === "<h1></h1>" || pThree.value === "<H1></H1>") {
            alert("Je hebt vraag 3, regel 4 goed. Verbeter regel 5")
        }
        else {
            alert("Je hebt vraag 3 nog niet goed, probeer het opnieuw")
        }

    })
}
if (Icheck) {
    Icheck.addEventListener('click', function () {
        if(IOne.checked) {
            alert("Je hebt vraag 1 goed!")
        }
        else {
            alert("Je hebt vraag 1 nog niet goed, probeer het opnieuw")
        }
        if(ITwo.value === "src='hond.png'" || ITwo.value === 'src="hond.png"') {
            alert("Je hebt vraag 2 goed!")
        }
        else {
            alert("Je hebt vraag 2 nog niet goed, probeer het opnieuw")
        }
        if((IThree.value === "<h1></h1>" || IThree.value === "<H1></H1>") && (ITree.value === "<p></p>" || ITree.value === "<P></P>") && (IThee.value === "<img>" || IThee.value === "<IMG>" || IThee.value === "<img src='harry.jpg'>")) {
            alert("Je hebt vraag 3 goed!")
        } 
        else if((IThree.value === "<h1></h1>" || IThree.value === "<H1></H1>") || (ITree.value === "<p></p>" || ITree.value === "<P></P>") || (IThee.value === "<img>" || IThee.value === "<IMG>" || IThee.value === "<img src='harry.jpg'>")) {
            alert("Er zitten nog een of meerdere fouten in je code. Maar je bent op de goede weg!")
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