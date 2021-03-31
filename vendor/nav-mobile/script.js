$('.tab').click(function (e) {
  console.log($(this).index());
  if ($(this).index() == 0) {
    $('.icon-nav1').removeClass('portfolio-icon').addClass('portfolio-icon-active');
    $('.icon-nav2').removeClass('about-icon-active').addClass('about-icon');
    $('.icon-nav3').removeClass('contact-icon-active').addClass('contact-icon');
  }
  if ($(this).index() == 1) {
    $('.icon-nav2').removeClass('about-icon').addClass('about-icon-active');
    $('.icon-nav1').removeClass('portfolio-icon-active').addClass('portfolio-icon');
    $('.icon-nav3').removeClass('contact-icon-active').addClass('contact-icon');
  }
  if ($(this).index() == 2) {
    $('.icon-nav3').removeClass('contact-icon').addClass('contact-icon-active');
    $('.icon-nav1').removeClass('portfolio-icon-active').addClass('portfolio-icon');
    $('.icon-nav2').removeClass('about-icon-active').addClass('about-icon');
  }
  if ($(this).index() == 0 || $(this).index() == 1 || $(this).index() == 2) {
    tabItemClick($(this).index());
  }
  e.preventDefault();
});

// if what you tapped is already active, close it
// and set grid display to none

function tabItemClick(i) {
  if ($('.tab').eq(i).hasClass('active')) {
    $('.overlay').removeClass('overlay-active');
    $('.tab').eq(i).removeClass('active');
    // display changes happen immediately
    // by executing the remove class 0.25s after the tab is
    // clicked, we can delay it and keep the transition
    setTimeout(function () {
      // had to add i-1 because grid0 is technically "shop"
      $('.grid')
        .eq(i - 1)
        .removeClass('grid-active');
    }, 500);
  } else {
    $('.overlay').addClass('overlay-active');
    $('.grid')
      .eq(i - 1)
      .addClass('grid-active')
      .siblings()
      .removeClass('grid-active');
    $('.tab').eq(i).addClass('active').siblings().removeClass('active');
  }
}

$('body').scrollspy({
  target: '.tab',
  offset: 80,
});
