$(document).ready(function($) {
  var headerHeight;
  headerHeight = 123;
  $('a').click(function() {
    window.scrolling = true;
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - headerHeight + 20
    }, 500, "swing", function() {
      return window.scrolling = false;
    });
    return false;
  });
  $('ul li a').click(function() {
    $('ul li a').removeClass('current');
    return $(this).addClass('current');
  });
  $(document).on('scroll', function() {
    var currentParaIndex, currentScrollTop;
    if (window.scrolling) {
      return;
    }
    currentParaIndex = Math.max(0, Array.from( document.querySelectorAll('.sectionEl')).filter(function(el) {
      return ($(el).offset().top - $(window).scrollTop()) < $(el).height();
    }).length - 1);
    $('ul li a').removeClass('current');
    return $('ul li a:eq(' + currentParaIndex + ')').addClass('current');
  });
  return $('.navigation-toggle').click(function() {
    return $('.navigation').slideToggle();
  });
});
