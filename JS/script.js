//Navbar
$(".hamburgerMenu").on("click", function () {
    $(".mobileMenuBtn").toggleClass("mobileMenuBtnTransform");
    $(".mobileSections").toggleClass("leftZero");

});

$(".fa-search").on("click", function () {
    $(".searchForm").toggleClass("showSearchForm");
});

//BoxShadow dla navbara po scrollowaniu 
$(window).on('scroll', function () {

    if (window.scrollY > 50)
        $("nav").addClass("showBoxShadow");

    else
        $("nav").removeClass("showBoxShadow");
});


//Oskryptowanie okazji dnia
var sold = $(".soldValue").text();
var left = $(".leftValue").text();
var total = parseInt(sold) + parseInt(left);
var percent = (sold / total) * 100

setProgressBarWidth();

function setProgressBarWidth() {
    $(".progress").css("width", percent + "%");

    if (left == 0) {
        $(".timeLeft").text("");
        $(".timeCaption").text("Wyprzedano!");
    }
}

setInterval(() => {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    var hoursLeft = 24 - hours;
    var minutesLeft = 59 - minutes;
    var secondsLeft = 59 - seconds

    if (hoursLeft < 10) hoursLeft = "0" + hoursLeft
    if (minutesLeft < 10) minutesLeft = "0" + minutesLeft
    if (secondsLeft < 10) secondsLeft = "0" + secondsLeft

    $(".timeLeft").text(hoursLeft + ":" + minutesLeft + ":" + secondsLeft);
}, 1000);
