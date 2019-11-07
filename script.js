"use strict";
var mountains = [
    { name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 }
];
function findNameOfTallestMountain(arrayOfMountains) {
    var currentTallest = 0;
    var currentTallestName = "";
    arrayOfMountains.forEach(function (mountain) {
        if (mountain.height > currentTallest) {
            currentTallest = mountain.height;
            currentTallestName = mountain.name;
        }
    });
    return currentTallestName;
}
var result = findNameOfTallestMountain(mountains);
console.log(result);
var products = [
    { name: "Air Pods", price: 150 },
    { name: "iPhone", price: 1000 },
    { name: "Mac", price: 2500 }
];
function calcAverageProductPrice(arrayOfProducts) {
    var total = 0;
    arrayOfProducts.forEach(function (product) {
        total += product.price;
    });
    return total / products.length;
}
var priceAverage = calcAverageProductPrice(products);
console.log(priceAverage);
var inventory = [
    { product: { name: "motor", price: 10.0 }, quantity: 10 },
    { product: { name: "sensor", price: 12.5 }, quantity: 4 },
    { product: { name: "LED", price: 1.0 }, quantity: 20 }
];
function calcInventoryValue(arrayOfInventory) {
    var all = 0;
    arrayOfInventory.forEach(function (item) {
        all += item.product.price * item.quantity;
    });
    return all;
}
var pricesQuantities = calcInventoryValue(inventory);
console.log(pricesQuantities);
