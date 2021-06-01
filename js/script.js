var carouse_height = $('.navigation').height();
$(window).scroll(function (){
    if ($(this).scrollTop() > carouse_height) {
        $('.navigation').addClass('change_nav');
    }else {
        $('.navigation').removeClass('change_nav');
    }
});
// jQuery Smooth Scrolling
$('.navbar-nav a').on('click', function (e) {
    if (this.hash !== '') {
        e.preventDefault();
        const hash = this.hash;

        $('html, body').animate({
           scrollTop: $(hash).offset().top - 70
        }, 800);
    }
});
$('.navbar-nav').onePageNav({
    currentClass: 'current',
    changeHash: false,
    scrollSpeed: 1200,
    offsetMenu: 50,
    scrollThreshold: 0.2,
    filter: '',
    easing: 'swing',
});