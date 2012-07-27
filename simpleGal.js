(function($){
  $.fn.extend({ 
    simpleGal: function () {
      return this.each(function () {
        var $thumbnail = $(this).find('a');
        $thumbnail.on('click', function () {
          var galleryImage = $(this).attr('href');
          $('.main-image img').attr('src', galleryImage);
          return false;
        })
      });
    }
  });
})(jQuery);