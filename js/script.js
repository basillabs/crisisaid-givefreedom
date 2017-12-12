$(function() {
  // Interaction: Transition background on scroll
  var documentHeight = $(document).height();
  var colorTransitionBegin = Math.ceil(documentHeight / 4);
  var maxDifference = Math.ceil(documentHeight / 3);
  if ($('#bg').css('backgroundImage') !== "none") {
    $(window).scroll(function(){
      var scrollTop = $(window).scrollTop();
      var opacity = 1 - (scrollTop - colorTransitionBegin) / maxDifference;
      opacity = Math.max(opacity, 0);
      opacity = Math.min(opacity, 1);
      $('#bg').css('opacity', opacity);
    });
  }

  // Interaction: Open donation panel
  var donationLink = $('#donate-button').attr('href');
  $('#donate-button').on('click touchstart', function(e) {
    e.preventDefault();
    if (!$('#donation-iframe').attr('src')) {
      $('#donation-iframe').attr('src', donationLink);
    }
    $('#donation').addClass('donation--visible')
    $('body').addClass('overflow-hidden');


    // Analytics: Log donation panel open
    gtag('event', 'open_donation_panel');
  });

  // Interaction: Close donation panel
  $('#scrim, #close').click(function() {
    $('#donation').removeClass('donation--visible');
    $('body').removeClass('overflow-hidden');

    // Analytics: Log donation panel open
    gtag('event', 'close_donation_panel');
  });
});
