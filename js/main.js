$(document).ready(function() {
  $('a[href^="#"]').click(function(event) {
    event.preventDefault();
    var target = $($(this).attr('href'));
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 500);
    }
  });
});


$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 50) {
    $('header').addClass('scrolled');
  } else {
    $('header').removeClass('scrolled');
  }
});


$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 500) {
    $('.backtotop').addClass('active');
  } else {
    $('.backtotop').removeClass('active');
  }
});





$(document).ready(function() {
  $('.menu-icon').click(function() {
    $(this).toggleClass('open');
    $('nav').toggleClass('open');
  });
});


$(document).ready(function() {
  $('.top-bar').click(function(event) {
    $(this).toggleClass('slide-open');
    event.stopPropagation(); // Prevent event bubbling
  });

  $(document).click(function(event) {
    if (!$(event.target).closest('.top-bar').length) {
      $('.top-bar').removeClass('slide-open');
    }
  });
});







$(document).ready(function () {
  var counterOffset = $('.counter').offset().top;
  var windowHeight = $(window).height();
  var animated = false;

  $(window).scroll(function () {
    var scrollPos = $(window).scrollTop();

    if (scrollPos > counterOffset - windowHeight && !animated) {
      $('.counter').each(function () {
        animateCounter($(this));
      });
      animated = true;
    }
  });

  function animateCounter(counter) {
    var targetValue = counter.data('target');
    var duration = counter.data('duration');
    var counterTitle = counter.siblings('.counter-title').text().trim();

    $({
      counterValue: 0
    }).animate({
      counterValue: targetValue
    }, {
      duration: duration,
      easing: 'swing',
      step: function (now) {
        // Add "+" sign before the counter value, except for "Happy Customers"
        if (counterTitle !== "Happy Customers") {
          counter.text(Math.ceil(now) + "+");
        } else {
          counter.text(Math.ceil(now));
        }
      }
    });
  }
});


var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  loop: true, // Enable infinite loop
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000, // Change this value to set the delay between slides (in milliseconds)
  },
});

var testimonialSwiper = new Swiper(".testimonial.swiper-container", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".testimonial .swiper-button-next",
    prevEl: ".testimonial .swiper-button-prev",
  },
  pagination: {
    el: ".testimonial .swiper-pagination",
    clickable: true,
  },
});

$(window).on('load', function () {
  setTimeout(function () { // allowing 3 secs to fade out loader
    $('.page-loader').fadeOut('slow');
  }, 3500);
});
