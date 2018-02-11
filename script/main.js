$(document).ready(function() {

  (function() {
      $(document).ready(function() {
          $(function() {
              $(window).scroll(function() {
                  if ($(this).scrollTop() > 200) {
                    $(".arrow").css('transform','rotate(180deg)');
                    $('#ar_a').attr('href', '#');
                  } else {
                    $(".arrow").css('transform','rotate(0deg)');
                    $('#ar_a').attr('href', '#footer');
                  }
              });
          });

      });
  }());

    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
                window.scrollTo(0, $(hash).offset().top);
            });
        }
    });
    $('#carouselExampleIndicators').carousel({
        keyboard: true,
        pause: false,
        ride: true
    })

    $('.news').carousel({
        interval: false
    })
});

$('body').click(function() {
    $('.collapse').collapse('hide');
})
