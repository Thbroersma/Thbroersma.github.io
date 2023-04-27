const runcode = document.querySelector('.runCode');
const Thebody = document.querySelector('.myBody');
const startFade = document.querySelector('.first');
const middleFade = document.querySelector('.last');
const firstview = document.querySelector('.first-view');
const secondview = document.querySelector('.second-view');
function run() {
    let htmlCode = document.querySelector(".editor #html-code").value;
    let cssCode = "<style>" + document.querySelector(".editor #css-code").value+"</style>";
    let jsCode = document.querySelector(".editor #js-code").value;
    let output = document.querySelector(".editor #output");

    output.contentDocument.body.innerHTML = htmlCode+cssCode;
    output.contentWindow.eval(jsCode);
}
function sleep () {
    setTimeout(addClass,4000);
}
function addClass() {
    startFade.style.display = "none";
    firstview.style.display = "none";
    secondview.style.display = "block";
    middleFade.style.display = "block";
}
sleep();
if (runcode) {
    runcode.addEventListener('click', function() {
        run();
    })
}

