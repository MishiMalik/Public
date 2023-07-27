$(".button-menu-toggle").click(function () {
  $(this).toggleClass("active");
  $(".navbar-main-menu").toggleClass("active");
});

$(document).ready(function () {
  var header = $(".site-header");
  var scrollPosition = 200; // Scroll position to change the header color (300px)

  $(window).scroll(function () {
    if ($(window).scrollTop() > scrollPosition) {
      header.addClass("scrolled"); // Add a CSS class to change the header color
    } else {
      header.removeClass("scrolled"); // Remove the CSS class to reset the header color
    }
  });
});

$(document).ready(function () {
  $(".menu-item-link").click(function () {
    // Remove active class from all menu items
    $(".menu-item-link").removeClass("active");
    $(".sub-menu-grid").removeClass("active");

    // Add active class to clicked menu item and its next sub-menu-grid element
    $(this).addClass("active");
    $(this).next(".sub-menu-grid").addClass("active");
  });
});

$(document).ready(function () {
  var $slider = $(".scroll-cards-1");
  var $paginationNumbers = $(".pagination-number");
  var slideToShow = 1.5; // Number of slides to show in the viewport
  var slideToScroll = 1; // Number of slides to scroll at a time

  // Initialize the slider
  $slider.on("init", function (event, slick) {
    // Update pagination numbers based on total slides
    var totalSlides = slick.slideCount;
    updatePagination(totalSlides);

    // Mark the current slide as active when initialized
    var firstVisibleSlide = Math.floor(slick.currentSlide / slideToScroll);
    setActivePagination(firstVisibleSlide);
  });

  // Update pagination numbers on slide change
  $slider.on("afterChange", function (event, slick, currentSlide) {
    var firstVisibleSlide = Math.floor(currentSlide / slideToScroll);
    setActivePagination(firstVisibleSlide);
  });

  // Slick slider initialization
  $slider.slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: slideToShow,
    slidesToScroll: slideToScroll,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // Function to update pagination numbers based on total slides
  function updatePagination(totalSlides) {
    $paginationNumbers.each(function (index) {
      var pageNumber = index + 1;
      if (pageNumber <= totalSlides) {
        $(this).text(formatNumber(pageNumber));
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  }

  // Function to format the pagination number with leading zeros (e.g., 01, 02, ...)
  function formatNumber(number) {
    return ("0" + number).slice(-2);
  }

  // Function to set the active pagination number
  function setActivePagination(activeSlide) {
    $paginationNumbers.removeClass("active-card");
    $paginationNumbers.eq(activeSlide).addClass("active-card");
  }

  // Click event for pagination numbers to navigate to the corresponding slide
  $paginationNumbers.on("click", function () {
    var pageNumber = parseInt($(this).text(), 10);
    var slideToGo = (pageNumber - 1) * slideToScroll;
    $slider.slick("slickGoTo", slideToGo);
  });
});

// $(document).ready(function () {
//     var $slider = $('.scroll-cards-1');
//     var $paginationNumbers = $('.pagination-number');
//     var slideToShow = 1.5; // Number of slides to show in the viewport
//     var slideToScroll = 1; // Number of slides to scroll at a time

//     // Initialize the slider
//     $slider.on('init', function (event, slick) {
//       // Update pagination numbers based on total slides
//       var totalSlides = slick.slideCount;
//       updatePagination(totalSlides);

//       // Mark the current slide as active when initialized
//       var firstVisibleSlide = Math.floor(slick.currentSlide / slideToScroll);
//       setActivePagination(firstVisibleSlide);
//     });

//     // Update pagination numbers on slide change
//     $slider.on('afterChange', function (event, slick, currentSlide) {
//       var firstVisibleSlide = Math.floor(currentSlide / slideToScroll);
//       setActivePagination(firstVisibleSlide);
//     });

//     // Slick slider initialization
//     $slider.slick({
//       dots: false,
//       infinite: false,
//       speed: 300,
//       slidesToShow: slideToShow,
//       slidesToScroll: slideToScroll,
//       responsive: [
//         // Your responsive settings here...
//       ]
//     });

//     // Function to update pagination numbers based on total slides
//     function updatePagination(totalSlides) {
//       $paginationNumbers.each(function (index) {
//         var pageNumber = index + 1;
//         if (pageNumber <= totalSlides) {
//           $(this).text(formatNumber(pageNumber));
//           $(this).show();
//         } else {
//           $(this).hide();
//         }
//       });
//     }

//     // Function to format the pagination number with leading zeros (e.g., 01, 02, ...)
//     function formatNumber(number) {
//       return ('0' + number).slice(-2);
//     }

//     // Function to set the active pagination number
//     function setActivePagination(activeSlide) {
//       $paginationNumbers.removeClass('active-card');
//       $paginationNumbers.eq(activeSlide).addClass('active-card');
//     }
//   });

// $(document).ready(function () {
//     var totalSlides = $('.scroll-cards-1-1 .container-slide').length;
//     var $currentSlide = $('.slider-counter .current-slide');
//     var $totalSlides = $('.slider-counter .total-slides');
//     $totalSlides.text(totalSlides);

//     $('.scroll-cards-1').slick({
//         dots: false,
//         infinite: false,
//         speed: 300,
//         slidesToShow: 4,
//         slidesToScroll: 1,
//       // Add the 'onAfterChange' event to update the current slide number
//       onAfterChange: function (slick, currentSlide) {
//         var currentCard = currentSlide + 1;
//         $currentSlide.text(currentCard);
//       },
//     });
//   });

$(document).ready(function () {
  $(".scroll-cards").slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});
