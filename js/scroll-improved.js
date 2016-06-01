function updatePositions() {
    var heavyScroll = !!document.querySelector('#heavy-scroll').checked;
    var items = document.querySelectorAll('.mover');
    var cachedScrollTop = document.body.scrollTop;
    for (var i = 0; i < items.length; i++) {
        var phase;
        if (heavyScroll)
            phase = Math.sin((document.body.scrollTop / 1250) + (i % 5));
        else
            phase = Math.sin((cachedScrollTop / 1250) + (i % 5));
        items[i].style.left = items[i].basicLeft + 100 * phase + 'px';

    }
}

function updatePositionsNew() {
    var heavyScroll = !!document.querySelector('#heavy-scroll').checked;
    var items = document.querySelectorAll('.mover');
    var cachedScrollTop = document.body.scrollTop;
    for (var i = 0; i < items.length; i++) {
        var phase;
        phase = Math.sin((cachedScrollTop / 1250) + (i % 5));
        var amount = items[i].basicLeft + 100 * phase;

        var movement = 'transform: translateX(' + amount + 'px);';
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
window.addEventListener('scroll', updatePositionsNew);
document.addEventListener('DOMContentLoaded', function() {
    var cols = 8;
    var s = 256;
    for (var i = 0; i < 5; i++) {
        var el = document.createElement('img');
        el.className = 'mover';

        el.src = "images/chrome-logo-med.png";
        el.basicLeft = (i % cols) * s;
        el.style.top = (Math.floor(i / cols) * s) + 'px';
        document.body.appendChild(el);
    }

    requestAnimationFrame(updatePaintClasses);
    requestAnimationFrame(updatePositions);

});
