interface Mountain {
  name: string;
  height: number;
}

let mountains: Mountain[] = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 }
];

function findNameOfTallestMountain(arrayOfMountains: Mountain[]): string {
  let currentTallest = 0;
  let currentTallestName: string = "";
  arrayOfMountains.forEach(mountain => {
    if (mountain.height > currentTallest) {
      currentTallest = mountain.height;
      currentTallestName = mountain.name;
    }
  });
  return currentTallestName;
}

let result = findNameOfTallestMountain(mountains);

console.log(result);
//set a variable to keep track of current tallest height
//set a variable to keep track of current tallest name
//loop through the array
//check if current mountain is taller than the last one.
//return the name of tallest mountain

interface Product {
  name: string;
  price: number;
}

let products: Product[] = [
  { name: "Air Pods", price: 150 },
  { name: "iPhone", price: 1000 },
  { name: "Mac", price: 2500 }
];

function calcAverageProductPrice(arrayOfProducts: Product[]): number {
  let total = 0;

  arrayOfProducts.forEach(product => {
    total += product.price;
  });
  return total / products.length;
}

let priceAverage = calcAverageProductPrice(products);
console.log(priceAverage);

interface InventoryItem {
  product: Product;
  quantity: number;
}

let inventory: InventoryItem[] = [
  { product: { name: "motor", price: 10.0 }, quantity: 10 },
  { product: { name: "sensor", price: 12.5 }, quantity: 4 },
  { product: { name: "LED", price: 1.0 }, quantity: 20 }
];

function calcInventoryValue(arrayOfInventory: InventoryItem[]): number {
  let all = 0;

  arrayOfInventory.forEach(item => {
    all += item.product.price * item.quantity;
  });
  return all;
}

let pricesQuantities = calcInventoryValue(inventory);
console.log(pricesQuantities);
