$( document ).ready(function() {

  // Handle nav anchor links and such
  ($('.nav--index-header-anchors')).click(function(){
    $('.nav--index-header-anchors').removeClass('active');
    $(this).addClass('active');

    $('.nav--index-header-anchors').each(function(){
        var href = $(this).prop('hash');
        $(href).hide();
    });

    var id = $(this).prop('hash');
    $(id).show();
  });

  ($('.ui-panel-inner a')).click(function(){
    var href = $(this).prop('hash');
    if (typeof attr !== 'undefined' && attr !== false) {
        // Just load page normally
    } 
    else {
      $( '#slidemenupanel' ).panel( 'close' );
      $('.nav--index-header-anchors').each(function(){
        var navHref = $(this).prop('hash');
        $(navHref).hide();
      });
      $(href).show();
      $('.nav--index-header a').each( function() {
        var anchors = $(this).attr('href');
        if (anchors.indexOf(href) >= 0) {
          $('.nav--index-header a').removeClass('active');
          $(this).addClass('active');
        }
      });
    }
  });

  // Handle mobile/tablet to desktop swap
  if ( $(document).width() > 760) {
    $('#dir').show();
    $('#contact').show();
  }
});