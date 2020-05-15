const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

let totalPrice;

const calculateTotalPrice = function (allProdcuts, productName) {
  for (const item of allProdcuts) {
    const { name, price, quantity } = item;
    if (productName === name) {
      totalPrice = price * quantity;
    }
  }
  return totalPrice;
};

console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800
