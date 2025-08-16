$(document).ready(function(){
  $('.post-wrapper').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      nextArrow: $('.next'),
      prevArrow: $('.prev'),
      responsive: [
        {
          breakpoint: 1368,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });
});

// Highlight the active nav link
(function () {
  // Change this to match your homepage file exactly as it appears in your links
  const DEFAULT_HOME = 'Member.html';

  const pathLast = window.location.pathname.split('/').pop().toLowerCase();
  const currentPage = pathLast === '' ? DEFAULT_HOME.toLowerCase() : pathLast;

  document.querySelectorAll('.navigation a').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;

    const linkFile = href.split('/').pop().toLowerCase();
    if (linkFile === currentPage) {
      link.classList.add('active');
    }
  });
})();
