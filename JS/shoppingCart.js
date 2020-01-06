var inputs = $(".inputQuantity");
var prices = $(".price");
var totals = $(".priceTimesQuantity");
var total = 0;

for(var i =0; i< prices.length; i++)
{
    let quantity = inputs[i].value;
    let price = parseFloat(prices[i].textContent);
    totals[i].textContent = quantity*price;
    total += quantity*price;
}

$(".total").text(total);


var inputs = $(".inputQuantity");
var products = $(".ProductId");

var products
$( inputs).change(function() {

    alert("Quantity: " + this.value + "\nIndexOf: " +inputs.index(this) + "\nProductId: " +products[inputs.index(this)].value );
});