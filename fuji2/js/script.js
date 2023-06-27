$(function () {
  $(".openbtn").click(function () {
    $(this).toggleClass("active");
    $(".nav_field").toggleClass("active");
  });

  $(window).scroll(function () {
    var scroll = $(this).scrollTop();
    var mvHeight = $(".mainvisual").height();
    if (scroll > mvHeight) {
      $("header").addClass("scroll");
    } else {
      $("header").removeClass("scroll");
    }
  });
  $(window).scroll(function () {
    fadeAnime();
  });
  fadeAnime();
});

function fadeAnime() {
  $(".fadeUpTrigger").each(function () {
    $(this).css({ opacity: "0" });
    var obj = $(this).find("img");
    var elemPos = $(this).offset().top + 100;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("fadeUp");
      setTimeout(() => {
        $(obj).css({ opacity: "1" });
      }, 300);
    }
  });
  $(".fadeRightTrigger").each(function () {
    $(this).css({ opacity: "0" });
    var elemPos = $(this).offset().top + 100;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("fadeRight");
    }
  });
  $(".fadeDownTrigger").each(function () {
    $(this).css({ opacity: "0" });
    var elemPos = $(this).offset().top + 100;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("fadeDown");
    }
  });
  $(".fadeLeftTrigger").each(function () {
    $(this).css({ opacity: "0" });
    var elemPos = $(this).offset().top + 100;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("fadeLeft");
    }
  });
}
