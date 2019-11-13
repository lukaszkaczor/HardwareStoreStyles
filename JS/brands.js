const quantity = $(".brand").length;
var elementsInOneBox = 5; //5
var brandBoxWidth = 230; //230
var pos = 0;


var cale = parseInt(quantity / elementsInOneBox);
const a = cale;
var reszta = quantity % elementsInOneBox;
var flagNext = false;

var cw = document.querySelector(".content").offsetWidth; //SZEROKOSC CONTENTU
var dudu = cw * (reszta/100);  //szerokosc "reszty"
var rr = parseInt((cw*(cale-1)+dudu)); //szerokosc jednego "paska (z elementsInTheBox sztuk*szerokosc contentu )  //plus szerokosc reszty"

$(".next").on('click', function () {

    if (pos < rr) {

        if (cale - 1 > 0) {
            pos += elementsInOneBox * brandBoxWidth;
            cale--;
        } else {
            pos += reszta * brandBoxWidth;
        }
        translateBrands();
    }
});

$(".prev").on('click', function () {
    if (pos > 1) {
        if (reszta == 0 || cale < a) {
            pos -= elementsInOneBox * brandBoxWidth;
            cale++;
        } else {
            pos -= reszta * brandBoxWidth;
        }
        translateBrands();
    }
});


//DOBRE
/*
const quantity = $(".brand").length;
var elementsInOneBox = 3; //5
var brandBoxWidth = 230; //230
var pos = 0;




var cale = parseInt(quantity / elementsInOneBox);
const a = cale;
var reszta = quantity % elementsInOneBox;
var flagNext = false;



var cw = document.querySelector(".content").offsetWidth; //SZEROKOSC CONTENTU

var dudu = cw * (reszta/100);  //szerokosc "reszty"


var rr = parseInt((cw*(cale-1)+dudu)); //szerokosc jednego "paska (z elementsInTheBox sztuk*szerokosc contentu )  //plus szerokosc reszty"
alert(rr);






$(".brandsCaption").text(pos);
$(".next").on('click', function () {

    if (pos < rr) {

        if (cale - 1 > 0) {
            pos += elementsInOneBox * brandBoxWidth;
            cale--;
        } else {
            pos += reszta * brandBoxWidth;
        }


        translateBrands();
    }
    $(".brandsCaption").text(pos);
});


$(".prev").on('click', function () {

    if (pos > 1) {
      

        if (reszta == 0 || cale < a) {
            pos -= elementsInOneBox * brandBoxWidth;
            cale++;
        } else {
            pos -= reszta * brandBoxWidth;
        }

        translateBrands();
        $(".brandsCaption").text(pos);
    }
});





*/
















/*const quantity = $(".brand").length;
var elementsInOneBox = 5; //5
var brandBoxWidth = 230; //230
var left = quantity - elementsInOneBox;
var tutej = 0;
var flag = false;

$(".next").on('click', function () {
    flag = true;
    if(left>=elementsInOneBox)
    {
        left-=elementsInOneBox;
        tutej += brandBoxWidth*elementsInOneBox;
    }
    else{
        tutej += brandBoxWidth*(left%elementsInOneBox);
        left = 0;
    }

    translateBrands();
});

$(".prev").on('click', function () {
    
    if(left!=quantity-elementsInOneBox)
    {
    if(elementsInOneBox == 1){
        tutej -= brandBoxWidth;
        left += elementsInOneBox;
    }
    else if(left<=elementsInOneBox)
    {
        tutej -= brandBoxWidth*elementsInOneBox;
        left += elementsInOneBox;
    }
    else{
        left += quantity%elementsInOneBox;
        tutej = 0;
    }
    $(".brandsCaption").text(left+"/"+ left%elementsInOneBox);

    translateBrands();
}
});

function translateBrands(){
    $(".brands").css("transform", "translateX(" + (-tutej) + "px)");
    $(".prev").css("transform", "translateX(" + tutej + "px)");
    $(".next").css("transform", "translateX(" + tutej + "px)");
}
*/
function translateBrands() {
    $(".brands").css("transform", "translateX(" + (-pos) + "px)");
    $(".prev").css("transform", "translateX(" + pos + "px)");
    $(".next").css("transform", "translateX(" + pos + "px)");
}