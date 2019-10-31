$(".hamburgerMenu").on("click", function () {
    $(".mobileMenuBtn").toggleClass("mobileMenuBtnTransform");
    $(".mobileSections").toggleClass("leftZero");

});

$(".fa-search").on("click", function () {
 //   $(".searchForm").toggleClass("displayFlex");
    $(".searchForm").toggleClass("showSearchForm");
   //$(".test").fadeToggle()

});