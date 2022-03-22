const door = document.querySelector('.exit');
const doorAudio = new Audio ('audio/closeddoor.mp3');
const introGame = document.querySelector('startintro');
const intro = new Audio ('audio/intro.mp3');
const show = document.querySelector('.showScroll');


function play(){
    
    const audio = document.querySelector(".startGame");
    const music = document.querySelector('.music');
    audio.play();
    music.play();
    show.innerHTML = "<img class='showingtextimage'src='img/textfoto/intro.png'></img>";
    show.addEventListener('click', function(){
        show.innerHTML = " ";
        })
    }
if (introGame) {
    introGame.addEventListener('onclick', function() {
        intro.play();
    })
}

