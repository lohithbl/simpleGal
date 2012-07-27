(function($){
  $.fn.extend({ 
    simpleGal: function () {
      return this.each(function () {
        $(this).on('click', function () {
          var galleryImage = $(this).attr('href');
          $('#main-image img').attr('src', galleryImage);
          return false;
        })
      });
    }
  });
})(jQuery);