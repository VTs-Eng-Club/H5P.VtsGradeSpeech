var H5P = H5P || {};

H5P.VtsGradeSpeech = (function ($) {
  function VtsGradeSpeech(options, id) {
    this.options = $.extend(true, {}, {

    }, options);
    this.id = id;
  };

  VtsGradeSpeech.prototype.attach = function ($container) {
    var that = this;
    $container.addClass('h5p-vts-grade-speech');
    $container.append('<p>VtsGradeSpeech</p>');
  };

  return VtsGradeSpeech;
})(H5P.jQuery);