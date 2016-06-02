function updatePositions() {
    var heavyScroll = !!document.querySelector('#heavy-scroll').checked;
    var items = document.querySelectorAll('.mover');
    var cachedScrollTop = document.body.scrollTop;
    for (var i = 0; i < items.length; i++) {
        var phase;
        phase = Math.sin((cachedScrollTop / 1250) + (i % 5));
        var top = items[i].style.top;
        var amount = items[i].basicLeft + 100 * phase;

        var movement = '';
        if (!top){
            var rect = items[i].getBoundingClientRect();
            movement = 'transform: translate(' + amount + 'px,' + rect.top + 'px);';
            console.log('topSecond', movement);
        }
        else{
            movement = 'transform: translate(' + amount + 'px,' + top + ');';
            console.log('topFirst', movement);
        }

        items[i].setAttribute("style", movement);
    }
}

function updatePaintClasses() {
    var heavyPaint = !!document.querySelector('#heavy-paint').checked;
    var items = document.querySelectorAll('.mover');
    for (var i = 0; i < items.length; i++) {
        if (heavyPaint)
            items[i].classList.add('heavy-painting');
        else
            items[i].classList.remove('heavy-painting');
    }
}

document.querySelector('#heavy-paint').addEventListener('click', updatePaintClasses);
window.addEventListener('scroll', updatePositions);
document.addEventListener('DOMContentLoaded', function() {
    var cols = 8;
    var s = 256;
    for (var i = 0; i < 40; i++) {
        var el = document.createElement('img');
        el.className = 'mover';

        el.src = "images/chrome-logo-med.png";
        el.basicLeft = (i % cols) * s;
        el.style.top = (Math.floor(i / cols) * s) + 'px';

        document.body.appendChild(el);
    }

    updatePaintClasses;
    updatePositions;

});
