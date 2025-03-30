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

    var $slider = $('.logo-animation-list').slick({
        infinite: true,
        fade: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 1000,
        cssEase: 'linear',
        arrows: false,
        dots: false,
        adaptiveHeight: false,
        pauseOnHover: false,
        pauseOnFocus: false
    });

    // Función para ajustar el ancho del wrapper
    function adjustWrapperWidth() {
        var $activeSlide = $('.slick-active');
        var imgWidth = $activeSlide.find('img').width();
        $('.logo-animation-list').css('width', imgWidth + 'px');
    }
    
    // Ajuste inicial después de que Slick se haya inicializado
    setTimeout(adjustWrapperWidth, 100);
    
    // Ajustar el ancho en cada cambio de slide
    $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
        var $nextSlide = $(slick.$slides[nextSlide]);
        var nextWidth = $nextSlide.find('img').width();
        $('.logo-animation-list').css('width', nextWidth + 'px');
    });
    
    // Ajuste adicional por si acaso
    $slider.on('afterChange', adjustWrapperWidth);
    
    // Ajustar también cuando se redimensiona la ventana
    $(window).on('resize', adjustWrapperWidth);

    // $('.logo-animation-list').on('afterChange', function(event, slick, currentSlide){
    //     const activeSlide = $(slick.$slides.get(currentSlide));
    //     const imgWidth = activeSlide.find('img').width();
    //     $(this).width(imgWidth);
    // });
    
    // // Ajustar inicialmente el ancho
    // const initialWidth = $('.slick-slide').first().find('img').width();
    // $('.logo-animation-list').width(initialWidth);

})

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
    stagger: 0.05,
});

gsap.from(".item-globe2", {
    y: 200,
    duration: 1,
    scrollTrigger: '.item-globe2',
    stagger: 0.05
});

gsap.from(".item-findings-info", {
    x: 200,
    duration: 1,
    scrollTrigger: '.item-findings-info',
    stagger: 0.05
});

gsap.from(".col-btns-contact", {
    y: 200,
    duration: 1,
    scrollTrigger: '.col-btns-contact',
    stagger: 0.05
});

gsap.from(".txt-ts1", {
    x: -200,
    duration: 1,
    opacity: 0,
    scrollTrigger: '.txt-ts1'
});

gsap.from(".txt-ts2", {
    x: -200,
    duration: 1,
    opacity: 0,
    scrollTrigger: '.txt-ts2'
});

gsap.from(".txt-ts3", {
    x: -200,
    duration: 1,
    opacity: 0,
    scrollTrigger: '.txt-ts3'
});

gsap.from(".txt-ts4", {
    x: -200,
    duration: 1,
    opacity: 0,
    scrollTrigger: '.txt-ts4'
});

gsap.from(".txt-ts5", {
    x: -200,
    duration: 1,
    opacity: 0,
    scrollTrigger: '.txt-ts5'
});

gsap.from(".top-tit1", {
    x: -200,
    delay: 0.5,
    duration: 1,
    opacity: 0,
    scrollTrigger: '.txt-ts1'
});

gsap.from(".top-tit2", {
    x: -200,
    delay: 0.5,
    duration: 1,
    opacity: 0,
    scrollTrigger: '.txt-ts2'
});

gsap.from(".top-tit3", {
    x: -200,
    delay: 0.5,
    duration: 1,
    opacity: 0,
    scrollTrigger: '.txt-ts3'
});

gsap.from(".top-tit4", {
    x: -200,
    delay: 0.5,
    duration: 1,
    opacity: 0,
    scrollTrigger: '.txt-ts4'
});

gsap.from(".top-tit5", {
    x: -200,
    delay: 0.5,
    duration: 1,
    opacity: 0,
    scrollTrigger: '.txt-ts5'
});

gsap.from(".subhead1", {
    duration: 1,
    opacity: 0,
    scrollTrigger: '.subhead1'
});

gsap.from(".subhead2", {
    duration: 1,
    opacity: 0,
    scrollTrigger: '.subhead2'
});

gsap.from(".subhead3", {
    duration: 1,
    opacity: 0,
    scrollTrigger: '.subhead3'
});

gsap.from(".subhead4", {
    duration: 1,
    opacity: 0,
    scrollTrigger: '.subhead4'
});

gsap.from(".bg-circle", {
    y: 300,
    duration: 0.3,
    scrollTrigger: '.bg-circle'
});

gsap.from(".circle-stop", {
    opacity: 0,
    delay: 1.5,
    duration: 1,
    scale: 1.5,
    ease: "power3.in",
    scrollTrigger: '.circle-stop'
});

gsap.from(".circle-info", {
    opacity: 0,
    duration: 0.5,
    scale: 1.3,
    y: 50,
    x: 50,
    ease: "power3.in",
    scrollTrigger: '.circle-info',
    stagger: 0.3
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