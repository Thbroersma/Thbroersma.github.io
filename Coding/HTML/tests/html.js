const check = document.querySelector(".check");
let htmlCode = document.querySelector("#html-code");
const nextCSS = document.querySelector(".nextCSS")
const runningcode = document.querySelector('.runningCode');
function run() {
    let htmlCode = document.querySelector(".editor #html-code").value;
    let output = document.querySelector(".editor #output-html");
    let style = "<style> img { width:60vw; } </style>"
    output.contentDocument.body.innerHTML = htmlCode + style;
}
if(htmlCode) {
    htmlCode.addEventListener("click", function() {
        if (htmlCode.value.includes("<h1></h1>")) {
            nextCSS.href = "../../CSS-C/cssIntro.html";
            check.classList.remove("next");
        } else {
            check.classList.add("next");
        }                           
    })
}

/*
if (check) {
    check.addEventListener("click", function() {
       
    })
}*/


if (runningcode) {
    runningcode.addEventListener('click', function() {
        run();
    })
}