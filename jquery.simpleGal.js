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