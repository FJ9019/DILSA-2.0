(function ($) {
  "use strict";
  
  // loader
  var loader = function () {
      setTimeout(function () {
          if ($('#loader').length > 0) {
              $('#loader').removeClass('show');
          }
      }, 1);
  };
  loader();
  
  // Back to top button
  $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
          $('.back-to-top').fadeIn('slow');
      } else {
          $('.back-to-top').fadeOut('slow');
      }
  });
  $('.back-to-top').click(function () {
      $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
      return false;
  });
  
  
  // Sticky Navbar
  $(window).scroll(function () {
      if ($(this).scrollTop() > 0) {
          $('.navbar').addClass('nav-sticky');
      } else {
          $('.navbar').removeClass('nav-sticky');
      }
  });
  
  
  // Dropdown on mouse hover
  $(document).ready(function () {
      function toggleNavbarMethod() {
          if ($(window).width() > 992) {
              $('.navbar .dropdown').on('mouseover', function () {
                  $('.dropdown-toggle', this).trigger('click');
              }).on('mouseout', function () {
                  $('.dropdown-toggle', this).trigger('click').blur();
              });
          } else {
              $('.navbar .dropdown').off('mouseover').off('mouseout');
          }
      }
      toggleNavbarMethod();
      $(window).resize(toggleNavbarMethod);
  });

  
  // Main carousel
  $(".carousel .owl-carousel").owlCarousel({
      autoplay: true,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      items: 1,
      smartSpeed: 300,
      dots: false,
      loop: true,
      nav : true,
      navText : [
          '<i class="fa fa-angle-left" aria-hidden="true"></i>',
          '<i class="fa fa-angle-right" aria-hidden="true"></i>'
      ]
  });
  
  
  // Modal Video
  $(document).ready(function () {
      var $videoSrc;
      $('.btn-play').click(function () {
          $videoSrc = $(this).data("src");
      });
      console.log($videoSrc);

      $('#videoModal').on('shown.bs.modal', function (e) {
          $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
      })

      $('#videoModal').on('hide.bs.modal', function (e) {
          $("#video").attr('src', $videoSrc);
      })
  });
  
  
  // Causes carousel
  $(".causes-carousel").owlCarousel({
      autoplay: true,
      animateIn: 'slideInDown',
      animateOut: 'slideOutDown',
      items: 1,
      smartSpeed: 450,
      dots: false,
      loop: true,
      responsive: {
          0:{
              items:1
          },
          576:{
              items:1
          },
          768:{
              items:2
          },
          992:{
              items:3
          }
      }
  });
  
  
  // Causes progress
  $('.causes-progress').waypoint(function () {
      $('.progress .progress-bar').each(function () {
          $(this).css("width", $(this).attr("aria-valuenow") + '%');
      });
  }, {offset: '80%'});
  
  
  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
      delay: 10,
      time: 2000
  });


  // Testimonials carousel
  $(".testimonials-carousel").owlCarousel({
      center: true,
      autoplay: true,
      dots: true,
      loop: true,
      responsive: {
          0:{
              items:1
          },
          576:{
              items:1
          },
          768:{
              items:2
          },
          992:{
              items:3
          }
      }
  });
  
  
  // Related post carousel
  $(".related-slider").owlCarousel({
      autoplay: true,
      dots: false,
      loop: true,
      nav : true,
      navText : [
          '<i class="fa fa-angle-left" aria-hidden="true"></i>',
          '<i class="fa fa-angle-right" aria-hidden="true"></i>'
      ],
      responsive: {
          0:{
              items:1
          },
          576:{
              items:1
          },
          768:{
              items:2
          }
      }
  });
  
})(jQuery);

$(document).ready(function() {

  var owl = $("#owl-demo1");

  owl.owlCarousel({

      items: 5, //10 items above 1000px browser width
      itemsDesktop: [1000, 3], //5 items between 1000px and 901px
      itemsDesktopSmall: [900, 2], // 3 items betweem 900px and 601px
      itemsTablet: [600, 1], //2 items between 600 and 0;
      itemsMobile: [360, 1] // itemsMobile disabled - inherit from itemsTablet option

  });

  // Custom Navigation Events
  $(".next").click(function() {
      owl.trigger('owl.next');
  })
  $(".prev").click(function() {
      owl.trigger('owl.prev');
  })
  $(".play").click(function() {
      owl.trigger('owl.play', 1000);
  })
  $(".stop").click(function() {
      owl.trigger('owl.stop');
  })

});
