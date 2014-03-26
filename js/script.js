$(document).ready(function(){
    $window = $(window);
  $('section[data-type="background"]').each(function(){
    var $bgobj = $(this); // assigning the object
                     
  $(window).scroll(function() {
    var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
                                                        
    // Put together our final background position
    var coords = '50% '+ yPos + 'px';
                                                                                 
    // Move the background
    $bgobj.css({ backgroundPosition: coords });                                                                  }); 
});    
});

/* 
* Create HTML5 elements for IE's sake
*/
  document.createElement("article");
  document.createElement("section");

/* 
* Fade in when ready
*/
function viewNext(){
      $('body').html('<img src="images/loading.gif" />').load("index.html");
}

(function($) {

    $(window).load(function() {
          $('.pages').fadeIn(2000);
            });

})(jQuery);
