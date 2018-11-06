(function($){

    $(document).ready(function(){
        $('.aside-visibility, .overlay').on('click', function(){
            $('body').toggleClass('aside-visible');
        })
    });

})(jQuery);
