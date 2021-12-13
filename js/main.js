$(function () {
  $(".header__tabs-item").on("click", function () {
    $(".header__tabs-item").removeClass("active");
    $(this).addClass("active");
  });
});
