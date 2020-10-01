$(document).ready(function() {
    $('.count').counterUp({
        delay: 10,
        time: 1000
    });

    $("#quote-slider").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: false,
        autoplay: false,
        autoplaySpeed: 1000,
        smartSpeed: 1500,
        autoplayHoverPause: true
    });

    $("#testimonial-quote-slider").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: false,
        autoplay: false,
        autoplaySpeed: 1000,
        smartSpeed: 1500,
        autoplayHoverPause: true
    });


    //work gallery
    $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
          // use outer width of grid-sizer for columnWidth
          columnWidth: '.grid-item'
        }
    });

    //navbar section search
        const trigger_search = document.querySelector('.trigger-search');
        const input = document.querySelector('.input');

        trigger_search.addEventListener('click', () => {
            if(!input.classList.contains('input-open')){
                input.classList.add('input-open');
                trigger_search.innerHTML = '<i class="fa fa-times-circle" aria-hidden="true"></i>';
            }
            else{
                input.classList.remove('input-open');
                trigger_search.innerHTML='<i class="fa fa-search" aria-hidden="true"></i>';
            }
    });

    // collapse nav after clicking nav link
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
});