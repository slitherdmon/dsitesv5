document.getElementById('otherSites').addEventListener('click', function() {
    const div = document.querySelector('.othersites');
    if (div.style.display === 'none') {
        div.style.display = 'block';
    } else {
        div.style.display = 'none';
    }
})
document.getElementById('gameButtons').addEventListener('click', function(){
    const div = document.querySelector('.gameButtons');
    if (div.style.display === 'none') {
        div.style.display = 'block';
    } else {
        div.style.display = 'none';
    }
})
document.getElementById('appButtons').addEventListener('click', function() {
    const div = document.querySelector('.appButtons');
    if (div.style.display === 'none') {
        div.style.display = 'block';
    } else {
        div.style.display = 'none';
    }
})
document.getElementById('movieButtons').addEventListener('click', function() {
    const div = document.querySelector('.movieButtons');
    if (div.style.display === 'none') {
        div.style.display = 'block';
    } else {
        div.style.display = 'none';
    }
})
document.getElementById('jmRanked').addEventListener('click', function() {
    const div = document.querySelector('.jmRanked');
    if (div.style.display === 'none') {
        div.style.display = 'block';
    } else {
        div.style.display = 'none';
    }
})
document.getElementById('toggleBtn').addEventListener('click', function() {
    const div = document.getElementById('otherBtns');
    if (div.style.display === 'none') {
        div.style.display = 'block';
    } else {
        div.style.display = 'none';
    }
})
function fullScreen() {
    const embedgame = document.getElementById('embedgame');

    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullScreenElement) {
        if (embedgame.requestFullscreen) {
            embedgame.requestFullscreen();
        } else if (embedgame.mozRequestFullScreen) {
            mozRequestFullScreen();
        } else if (embedgame.webkitRequestFullscreen)
            webkitRequestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullscreen) {
            document.mozCancelFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }
}
