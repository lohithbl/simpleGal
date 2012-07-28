/* ----------------------------------------------
  
  simpleGal - a simple image gallery
  
  Author: Steve Rydz
  URL: steverydz.com
  Email: steve@steverydz.com
  Twitter: @steverydz

  Plug-in URL: https://github.com/steverydz/simpleGal

  License: http://creativecommons.org/licenses/by-nc-sa/3.0/

  Last updated: 28/07/2012

---------------------------------------------- */

(function($){
  
  $.fn.extend({
    
    simpleGal: function(options) {
      
      // Sets default class for the main image
      var defaults = {
        mainImage: '.placeholder'
      }
      
      // Allows the default main image class to be overridden
      var options = $.extend(defaults, options);
      
      return this.each(function() {
        
        // Sets variables for the function
        var $thumbnail = $(this).find('a');
        var $mainImage = $(this).siblings().find(options.mainImage);
        
        // Adds an onclick event handler to the thumbnail link
        $thumbnail.on('click', function () {
          // Sets a variable of the thumbnail links destination
          var galleryImage = $(this).attr('href');
          // Updates the 'src' of the main image with that of the thumbnail that has been clicked
          $mainImage.attr('src', galleryImage);
          // Prevents default behaviour on the thumbnail link
          return false;
        });
      
      });
    
    }
  
  });

})(jQuery);