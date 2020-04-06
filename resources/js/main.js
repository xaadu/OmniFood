$(document).ready(function() {

    /* Sticky Navigation */ 
    $('.js--section-features').waypoint(function (direction) { 
        if (direction == 'down') $('.nav').addClass('sticky');
        else $('.nav').removeClass('sticky');
    }, {
         offset: '15%'
    });

     /* Scoll On Buttons */
    $('.js--scroll-to-plans').click(function (e) {
         $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
    $('.js--scroll-to-start').click(function (e) {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 600);
    });

    /* Animations */
    $('.js--wp-1').waypoint(function (direction) { 
        $('.js--wp-1').addClass('animated fadeIn');
    }, { offset: '60%' });

    $('.js--wp-2').waypoint(function (direction) { 
        $('.js--wp-2').addClass('animated fadeInUp');
    }, { offset: '60%' });
    
    $('.js--wp-3').waypoint(function (direction) { 
        $('.js--wp-3').addClass('animated fadeIn');
    }, { offset: '60%' });
    
    $('.js--wp-4').waypoint(function (direction) { 
        $('.js--wp-4').addClass('animated pulse');
    }, { offset: '60%' });
    

     /* Mobile Navigation */
    $('.js--nav-icon').click(function (e) { 
        e.preventDefault();
        var nav = $('.js--nav-main');
        var icon = $('.js--nav-icon i');
        var iconmenu='ion-navicon-round', iconcross='ion-close-round';

        nav.slideToggle(200);

        if (icon.hasClass(iconmenu)) {
            icon.removeClass(iconmenu);
            icon.addClass(iconcross);
        } else {
            icon.removeClass(iconcross);
            icon.addClass(iconmenu);
        }
    });
});