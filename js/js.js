$('a[href*="#"]').click(function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});

$('#main').on('mousemove', (e) => {
    const x = e.pageX / $(window).width();
    const y = e.pageY / $(window).height();
    
    $('#main .parallax-bg').css({
        '-webkit-transform' : 'translate(-' + x*30 + 'px, -' + y*30 + 'px)',
        '-moz-transform'    : 'translate(-' + x*30 + 'px, -' + y*30 + 'px)',
        '-ms-transform'     : 'translate(-' + x*30 + 'px, -' + y*30 + 'px)',
        '-o-transform'      : 'translate(-' + x*30 + 'px, -' + y*30 + 'px)',
        'transform'         : 'translate(-' + x*30 + 'px, -' + y*30 + 'px)'
    });
});

$('#about').on('mousemove', (e) => {
    const x = e.pageX / $(window).width();
    const y = e.pageY / $(window).height();
    
    $('#about .parallax-bg').css({
        '-webkit-transform' : 'translate(-' + x*30 + 'px, -' + y*30 + 'px)',
        '-moz-transform'    : 'translate(-' + x*30 + 'px, -' + y*30 + 'px)',
        '-ms-transform'     : 'translate(-' + x*30 + 'px, -' + y*30 + 'px)',
        '-o-transform'      : 'translate(-' + x*30 + 'px, -' + y*30 + 'px)',
        'transform'         : 'translate(-' + x*30 + 'px, -' + y*30 + 'px)'
    });
});