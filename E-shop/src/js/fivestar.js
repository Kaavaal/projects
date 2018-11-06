(function ($) {

    function initFivestar() {
        $('.rate i').on('click', function () {
            let star = $(this);
            let parent = star.parent();
            let index = parent.children().index(star) + 1;
            parent
                .removeClass('rate-1 rate-2 rate-3 rate-4 rate-5')
                .addClass('rate-' + index);
        });
    }

    $(function () {
        initFivestar();
    });

})(jQuery);
