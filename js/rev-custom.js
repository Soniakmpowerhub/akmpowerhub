!(function (o) {
  "use strict";
  function i() {
    o(".main-slider .tp-banner").length &&
      jQuery(".main-slider .tp-banner")
        // .show()
        .revolution({
          delay: 1e4,
          startwidth: 1200,
          startheight: 900,
          hideThumbs: 600,
          thumbWidth: 80,
          thumbHeight: 50,
          thumbAmount: 5,
          navigationType: "bullet",
          navigationArrows: "0",
          navigationStyle: "preview4",
          touchenabled: "on",
          onHoverStop: "off",
          swipe_velocity: 0.7,
          swipe_min_touches: 1,
          swipe_max_touches: 1,
          drag_block_vertical: !1,
          parallax: "mouse",
          parallaxBgFreeze: "on",
          parallaxLevels: [7, 4, 3, 2, 5, 4, 3, 2, 1, 0],
          keyboardNavigation: "off",
          navigationHAlign: "center",
          navigationVAlign: "bottom",
          navigationHOffset: 0,
          navigationVOffset: 20,
          soloArrowLeftHalign: "left",
          soloArrowLeftValign: "center",
          soloArrowLeftHOffset: 20,
          soloArrowLeftVOffset: 0,
          soloArrowRightHalign: "right",
          soloArrowRightValign: "center",
          soloArrowRightHOffset: 20,
          soloArrowRightVOffset: 0,
          shadow: 0,
          fullWidth: "on",
          fullScreen: "off",
          spinner: "spinner4",
          stopLoop: "off",
          stopAfterLoops: -1,
          stopAtSlide: -1,
          shuffle: "off",
          autoHeight: "off",
          forceFullWidth: "off",
          hideThumbsOnMobile: "on",
          hideNavDelayOnMobile: 1500,
          hideBulletsOnMobile: "on",
          hideArrowsOnMobile: "on",
          hideThumbsUnderResolution: 0,
          hideSliderAtLimit: 0,
          hideCaptionAtLimit: 0,
          hideAllCaptionAtLilmit: 0,
          startWithSlide: 0,
          videoJsPath: "",
          fullScreenOffsetContainer: ".home-slider",
          responsiveLevels:[1200,992,768,576],
        });
  }
  o(".main-slider").resizable({
    start: function (i, e) {
      console.log(o(".main-slider").width());
    },
    stop: function (i, e) {
      console.log(o(".main-slider").width());
    },
  }),
    o(window).on("load", function () {
      i();
    }),
    o(window).on("resize", function () {
      i();
    });
})(window.jQuery);
