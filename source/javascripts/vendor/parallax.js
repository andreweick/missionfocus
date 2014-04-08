/**
 * Parallax Scrolling Tutorial
 * For Smashing Magazine
 * July 2011
 *   
 * Author: Richard Shepherd
 * 		   www.richardshepherd.com
 * 		   @richardshepherd   
 */

// On your marks, get set...
$(document).ready(function(){
	$window = $(window);

    $('[data-type="background"]').each(function(){
        var $parallax = $(this);     
        $window.scroll(function() {
            var yPos = -($window.scrollTop() / $parallax.data('speed'));
            var coords = '50% '+ yPos + 'px';
            $parallax.css({ backgroundPosition: coords });
        }); 
    });

});
