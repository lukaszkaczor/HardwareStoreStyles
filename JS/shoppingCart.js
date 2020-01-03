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