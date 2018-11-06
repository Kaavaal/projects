(function($) {

    $(function() {

        initOwlCarousel();
    })

function initOwlCarousel(){
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            responsiveClass: true,
            responsive:{
                0:{
                    items: 1,
                    nav: false,
                    dots: false
                },
                576:{
                    items: 2,
                    nav: false,
                    dots: true
                },
                768:{
                    items: 2,
                    nav: false,
                    dots: true,
                    margin: 15
                },
                992:{
                    items: 3,
                    nav: false,
                    dots: true,
                    margin: 15
                },
                1200:{
                    items: 4,
                    nav: false,
                    dots: true,
                    margin: 30
                }
            }
        });
}
}(jQuery));