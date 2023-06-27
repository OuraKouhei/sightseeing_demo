$(function () {
  $(".openbtn").click(function () {
    $(this).toggleClass("active");
    $(".nav_field").toggleClass("active");
  });

  $(window).scroll(function () {
    var scroll = $(this).scrollTop();
    var mvHeight = $(".mainvisual").height();
    if(scroll > mvHeight){
        $("header").addClass("scroll");
    }else{
        $("header").removeClass("scroll");
    }
  });
});
