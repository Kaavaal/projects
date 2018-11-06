(function($) {

    $(function() {

        initTabs();
            //---------------
        initDropDowns();
        // initOwlCarousel();
        initDisplaySwitcher();
        
    });




function initDisplaySwitcher(){
    let displaySwitch = $('.display-switch i');
    let productCards = $('.product-card');
        if (!displaySwitch.hasClass('active')){
            displaySwitch.eq(0).addClass('active');
            $('body').addClass('display-grid');

        }
        //Привязка события
        displaySwitch.on('click', function(){
            let current = $(this); //this - эл-т,по которому сработало событие
            if (!current.hasClass('active')) {
                console.log(current);
                if(current.hasClass('fa-th-large')){
                    displaySwitch.removeClass('active');
                    current.addClass('active');
                    $('body').removeClass('display-line')
                    .addClass('display-grid');
                    //Перестраиваем разметку с col-9 на col-3
                    for (var i = 0; i < productCards.length; i++){
                        productCards.eq(i).addClass('col-3');
                        productCards.eq(i).removeClass('col-9');
                    }
                }
                else{
                    displaySwitch.removeClass('active');
                    current.addClass('active');
                    $('body').removeClass('display-grid')
                    .addClass('display-line');
                    //Перестраиваем разметку с col-3 на col-9
                    for (var i = 0; i < productCards.length; i++){
                        productCards.eq(i).addClass('col-9');
                        productCards.eq(i).removeClass('col-3');
                    }

                }

            }
        })

}

function initDropDowns(){
    let dropDown = $('.dropdown-body');
    let all = $('.dropdown');

    
    dropDown.on('.click', function(){
        all.removeClass('active');
        let current = $(this);
        current.parent().addClass('active');
    })
}

initDropdowns();

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
                
//console.log(activeTab);

            }
        });
    }
}
})(jQuery);