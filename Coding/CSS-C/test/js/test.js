const runCode = document.querySelector(".runningTest");
const html = document.querySelector('#html-code-test');
const css = document.querySelector('#css-code-test');
function runningC() {
    let htmlCode = document.querySelector(".editor #html-code-test").value;
    let cssCode = "<style>" + document.querySelector(".editor #css-code-test").value+"</style>";
    let output = document.querySelector(".editor #output-test");
    output.contentDocument.body.innerHTML = htmlCode+cssCode;
}

if (runCode) {
console.log("running");
    runCode.addEventListener('click', function() {
        runningC();
    })
}