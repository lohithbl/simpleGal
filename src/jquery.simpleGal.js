(function($){

  $.fn.extend({

    simpleGal: function (options) {

      var defaults = {
        mainImage: ".placeholder"
      };

      options = $.extend(defaults, options);

      return this.each(function () {

        var thumbnail = $(this).find("a"),
            mainImage = $(this).siblings().find(options.mainImage);

        thumbnail.on("hover", function (e) {
          e.preventDefault();
          var galleryImage = $(this).attr("href");
          mainImage.attr("src", galleryImage);
        });

      });

    }

  });

})(jQuery);
