$(document).ready(function () {
    // Activate the carousel
    $("#featuredCarousel").carousel();
    
    // Enable carousel swipe on touch devices
    $("#featuredCarousel").on("touchstart", function (event) {
      const xClick = event.originalEvent.touches[0].pageX;
      $(this).one("touchmove", function (event) {
        const xMove = event.originalEvent.touches[0].pageX;
        if (Math.floor(xClick - xMove) > 5) {
          $(this).carousel("next");
        } else if (Math.floor(xClick - xMove) < -5) {
          $(this).carousel("prev");
        }
      });
      $(this).on("touchend", function () {
        $(this).off("touchmove");
      });
    });
});