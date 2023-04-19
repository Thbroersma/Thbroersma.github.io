const runcode = document.querySelector('.runCode');


function run() {
    let htmlCode = document.querySelector(".editor #html-code").value;
    let cssCode = "<style>" + document.querySelector(".editor #css-code").value+"</style>";
    let jsCode = document.querySelector(".editor #js-code").value;
    let output = document.querySelector(".editor #output");



    output.contentDocument.body.innerHTML = htmlCode+cssCode;
    output.contentWindow.eval(jsCode);
}

if (runcode) {
    runcode.addEventListener('click', function() {
        run();
    })
}