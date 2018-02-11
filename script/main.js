$(document).ready(function() {
  
    $('.carousel').carousel({
        keyboard: true,
        pause: false,
        ride: true
    })
});

$('body').click(function() {
    $('.collapse').collapse('hide');
})
