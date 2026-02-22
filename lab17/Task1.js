let prices = [100, 45, 230, 9, 1500];

let newPrices = prices.map(function(price) {
    return "$" + price;
});

console.log(newPrices);