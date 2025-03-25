$(document).ready( function() {

    $('.btn-colapse-xs').click(function() {
        $(this).toggleClass('open')
        $('.nav-menu').slideToggle('fast')
        $('.main-content').toggleClass('blur')
        $('body').toggleClass('open-menu')
    })

    $('.nav-menu li a').click(function() {
        if($(window).width() < 991) {
            $('.btn-colapse-xs').toggleClass('open')
            $('.nav-menu').slideUp('fast')
            $('.main-content').toggleClass('blur')
            $('body').toggleClass('open-menu')
        }
    })

    function scrollToSection(event) {
        event.preventDefault();
        var $section = $($(this).attr('href')); 
        $('html, body').animate({
            scrollTop: $section.offset().top
        }, 500);
    }
    $('[data-scroll]').on('click', scrollToSection);

})

gsap.registerPlugin(ScrollTrigger);

gsap.to(".hero-bg", {
    backgroundPositionY: "90%",
    ease: "none",
    scrollTrigger: {
        trigger: ".hero-bg",
        start: "top top",
        end: "bottom top",
        scrub: 1
    }
});

gsap.from(".item-globe1", {
    y: 200,
    duration: 1,
    scrollTrigger: '.item-globe1',
    stagger: 0.05
});

gsap.from(".item-globe2", {
    y: 200,
    duration: 1,
    scrollTrigger: '.item-globe2',
    stagger: 0.05
});

gsap.from(".logo", {
    opacity: 0,
    duration: 1
});

gsap.from(".menu-item", {
    opacity: 0,
    duration: 1
});

gsap.from(".title-hero", {
    x: -100,
    ease: "power3.out",
    duration: 2,
    opacity: 0
});