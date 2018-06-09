$(window).on("load", function() {
  $(".loader")
    .delay(1000)
    .fadeOut("slow");
});

$(document).ready(function() {
  $("#currentYear").text(new Date().getFullYear());
  attachTopScroller(".scrollUp");
  closeMenuOnScrollTrigger(".scroll-trigger");
  scrollToDiv();
  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#main-navigation",
    offset: 54
  });
});

function attachTopScroller(elementId) {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $(elementId).fadeIn();
    } else {
      $(elementId).fadeOut();
    }
  });
  // Scroll To Top Animation
  $(elementId).click(function() {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      1000
    );
    return false;
  });
}

// Closes responsive menu when a scroll trigger link is clicked
function closeMenuOnScrollTrigger(elementId) {
  $(elementId).click(function() {
    $(".navbar-collapse").collapse("hide");
  });
}

function scrollToDiv() {
  /* smooth scrolling sections */
  $('a.scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html,body").animate(
          {
            scrollTop: target.offset().top - 54
          },
          1000
        );
        return false;
      }
    }
  });
}
