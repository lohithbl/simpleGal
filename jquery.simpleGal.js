/* ----------------------------------------------
  
  simpleGal
  
  Author: Steve Rydz
  URL: steverydz.com
  Twitter: @steverydz

  Plug-in URL: https://github.com/steverydz/simpleGal

  License: http://creativecommons.org/licenses/by-nc-sa/3.0/

  Last updated: 31/07/2012

---------------------------------------------- */

(function($){
  
  $.fn.extend({
    
    simpleGal: function(options) {
      
      var defaults = {
        mainImage: '.placeholder'
      }
      
      var options = $.extend(defaults, options);
      
      return this.each(function() {
        
        var $thumbnail = $(this).find('a');
        var $mainImage = $(this).siblings().find(options.mainImage);
        
        $thumbnail.on('click', function () {
          var galleryImage = $(this).attr('href');
          $mainImage.attr('src', galleryImage);
          return false;
        });
      
      });
    
    }
  
  });

})(jQuery);