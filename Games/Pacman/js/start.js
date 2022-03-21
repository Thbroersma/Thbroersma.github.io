const singlePlayer = document.querySelector('.single');
const multiPlayer = document.querySelector('.multi');
const startPlay = document.querySelector('.start');

if (singlePlayer) {
    singlePlayer.addEventListener('click', function() {
        location.replace('players1.html');
    })
}
if (multiPlayer) {
    multiPlayer.addEventListener('click', function() {
        location.replace('players2.html');
    })
}
if (startPlay) {
    startPlay.addEventListener('click', function() {
        location.replace('Pacman/index.html');
    })
}