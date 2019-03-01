var linkNav = document.querySelectorAll('[href^="#"]'),
    V = .25;
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) {
        e.preventDefault();
        var w = window.pageYOffset,
            hash = this.href.replace(/[^#]*(.*)/, '$1');
        t = document.querySelector(hash).getBoundingClientRect().top,
            start = null;
        requestAnimationFrame(step);
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash
            }
        }
    }, false);
}

$('.parallax').on('mousemove', (e) => {
    const x = e.pageX / $(window).width();
    const y = e.pageY / $(window).height();

    $('.parallax-bg').css({
        '-webkit-transform' : 'translate(-' + x*30 + 'px, -' + y*30 + 'px)',
        '-moz-transform'    : 'translate(-' + x*30 + 'px, -' + y*30 + 'px)',
        '-ms-transform'     : 'translate(-' + x*30 + 'px, -' + y*30 + 'px)',
        '-o-transform'      : 'translate(-' + x*30 + 'px, -' + y*30 + 'px)',
        'transform'         : 'translate(-' + x*30 + 'px, -' + y*30 + 'px)'
      });
});
