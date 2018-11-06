(function($) {

    $(function() {
<<<<<<< HEAD
    //$(document).ready(function(){
    
        // == Styler component select
        //$('select').styler();
        
        // == Input file get file name
        //$('#upload-screenshot').on('change', function(){
        //    $(this)
        //        .siblings('span')
        //        .text(
        //              $(this).val().replace(/.*(\/|\\)/, '')
        //        );    
        //});

        initTabs();
        initDropdowns();
        //initOwlCarousel();
        initDisplaySwitcher();

=======
        initTabs();
>>>>>>> fceca3420452fa1b02b0a44aa13bf9fd45d387d9
    });

function initTabs() {
    let init = $('.nav-tabs, .tab-content');
    if (init.length == 2) {
        let navLinks = $('.nav-link');
        let tabPanes = $('.tab-pane');
        
        navLinks.on('click', function(e){
            e.preventDefault();
            let current = $(this);
            if (!current.hasClass('active')) {
                navLinks.removeClass('active');

                current.addClass('active');

                let activeTab = current.attr('href');
                let activePane = $(activeTab);
 
                //if (tabPanes.hasClass('fade')) {
                //    tabPanes.removeClass('show');
                //    activePane.addClass('show');
                //}
                tabPanes.removeClass('active');
                activePane.addClass('active');
                
console.log(activeTab);

            }
        });
    }
}
<<<<<<< HEAD
function initDropdowns() {
    let all = $('.dropdown');
    let dropdown = $('.dropdown-body');

    dropdown.on('click', function(){
        if ($(this).parent().hasClass('active')) {
            $(this).parent().removeClass('active');
        }
        else {
            all.removeClass('active');
            $(this).parent().addClass('active');
        }
    });
}

//function initOwlCarousel() {
//    $('.owl-carousel').owlCarousel({
//        loop: true,
//        margin: 10,
//        responsiveClass: true,
//        responsive:{
//            0:{
//                items: 1,
//                nav: true,
//                dots: false
//            },
//            576:{
//                items: 2,
//                nav: false,
//                dots: true
//            },
//            768:{
//                items: 2,
//                nav: false,
//                dots: true,
//                margin: 15
//            },
//            992:{
//                items: 3,
//                nav: false,
//                dots: true,
//                margin: 15
//            },
//            1200:{
//                items: 4,
//                nav: false,
//                dots: true,
//                margin: 30
//            }
//        }
//    });
//}

function initDisplaySwitcher() {
    // Найти переключатели
    // Установить значения по-умолчанию
    // Сделать активным переключателем текущий
    // Поменять классы тега <body>

    let displaySwitch = $('.display-switch i');
    if (!displaySwitch.hasClass('active')) {
        displaySwitch.eq(0).addClass('active');
        $('body').addClass('display-grid');
    }
    displaySwitch.on('click', function(){
        let current = $(this);
        if (!current.hasClass('active')) {
            displaySwitch.removeClass('active');
            current.addClass('active');
            if (current.hasClass('fa-th-large')) {
                $('body')
                    .removeClass('display-line')
                    .addClass('display-grid');
            }
            else {
                $('body')
                    .removeClass('display-grid')
                    .addClass('display-line');
            }
        }
    });
}

})(jQuery);
=======



})(jQuery);


>>>>>>> fceca3420452fa1b02b0a44aa13bf9fd45d387d9
