const startButton = document.querySelector('.start');

if(startButton) {
    startButton.addEventListener('click', function() {
        location.replace('index.html');
    })
}