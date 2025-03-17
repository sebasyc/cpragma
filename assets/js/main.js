$(document).ready( function() {

    $('.btn-colapse-xs').click(function() {
        $(this).toggleClass('open')
        $('.nav-menu').slideToggle()
        $('.main-content').toggleClass('blur')
    })

    $('.nav-menu li a').click(function() {
        if($(window).width() < 991) {
            $('.btn-colapse-xs').toggleClass('open')
            $('.nav-menu').slideUp()
            $('.main-content').toggleClass('blur')
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