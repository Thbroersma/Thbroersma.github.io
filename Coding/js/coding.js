const runcode = document.querySelector('.runCode');
const Thebody = document.querySelector('.myBody');
const startFade = document.querySelector('.first');
const middleFade = document.querySelector('.last');
const firstview = document.querySelector('.first-view');
const learningview = document.querySelector('.learning-view');
const secondview = document.querySelector('.second-view');
// pacman view
const grid = document.querySelector('.grid');
const layout = [
    0, 1, 0, 0, 0, 1,
    0, 0, 0, 1, 0, 0,
    1, 1, 1, 0, 2, 0,
    0, 0, 1, 0, 0, 0,
    1, 0, 0, 0, 1, 0,
    0, 0, 0, 0, 0, 0,
  ];
const squares = [];
function createBoard() {
  
    for (let i = 0; i < layout.length; i++) {
      const square = document.createElement('div');
      // Here is the grid filed with div how get after there own styling
      grid.appendChild(square);
      squares.push(square);
      if (layout[i] === 0) {
        squares[i].classList.add('field'/*, 'pac-dot'*/);
      } else if (layout[i] === 1) {
        squares[i].classList.add('field-box');
      } else if (layout[i] === 2) {
        squares[i].classList.add('pac-man');
      }
    }
  }
  createBoard();
// block to make the users code on the website work
function run() {
    let htmlCode = document.querySelector(".editor #html-code").value;
    let cssCode = "<style>" + document.querySelector(".editor #css-code").value+"</style>";
    let jsCode = document.querySelector(".editor #js-code").value;
    let output = document.querySelector(".editor #output");

    output.contentDocument.body.innerHTML = htmlCode+cssCode;
    output.contentWindow.eval(jsCode);
}
//
function sleep () {
    setTimeout(addClass,4000);
}
// Change the images for the changed website
function addClass() {
    startFade.style.display = "none";
    firstview.style.display = "none";
    secondview.style.display = "block";
    middleFade.style.display = "block";
    learningview.style.display = "block";
}
sleep();
if (runcode) {
    runcode.addEventListener('click', function() {
        run();
    })
}