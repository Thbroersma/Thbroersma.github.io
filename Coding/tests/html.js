const runningcode = document.querySelector('.runningCode');
function run() {
    let htmlCode = document.querySelector(".editor #html-code").value;
    let output = document.querySelector(".editor #output-html");
    let style = "<style> img { width:60vw; } </style>"
    output.contentDocument.body.innerHTML = htmlCode + style;
}
if (runningcode) {
    runningcode.addEventListener('click', function() {
        run();
    })
}