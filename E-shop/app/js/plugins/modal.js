(function($){
    
function initModals() {
  $('.modal-container form')
    .prepend('<span class="close">&times;</span>');

  $('.modal-login-open').click(function () {
    modalOpen('#modal-form-login');
  });

}

function modalOpen(target) {
  var offset = $(document).scrollTop();
  if (target !== undefined) {
    var t = $(target);
    t.addClass('modal active');
    t.find('.close').click(function(){
      modalClose(target, offset);
    });
  }
}

function modalClose(target, offset = false) {
  if (target !== undefined) {
    var t = $(target);
    t.removeClass('active');
    setTimeout(
      function(){
        t.removeClass('modal');
      }, 400
    );
    if (offset !== false && offset !== $(document).scrollTop()) {
      $(document).scrollTop(offset);
    }
  }
}

$(function() {
    initModals();
})


})(jQuery);