function openSecret() {
    var win = window.open()
    win.document.body.style.margin='0';
    var url = 'https://g.mathhelpflashcards.shop'
    var iframe = win.document.createElement('iframe')
    iframe.style.height='100%';
    iframe.style.width='100%';
    iframe.style.border='none';
    iframe.src = url
    win.document.body.appendChild(iframe)
}
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
