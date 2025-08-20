// Task #5--------------------------------
'use strict'
const items = [
    { name: "apple", quantity: 2, price: 30 },
    { name: "banana", quantity: 5, price: 10 },
    { name: "orange", quantity: 3, price: 20 },
];

// 1. С помощью map создать новый массив, где к каждому товару добавлено поле total = quantity * price.

const totalPrice = items.map((value) => {
    value.total = value.quantity * value.price;
    return value;
})

console.log('Array with field "total"');
console.log(totalPrice);

// 2. С помощью reduce найти общую стоимость всех товаров.

const totalCost = totalPrice.reduce((acc, currentValue) => {
    return acc + currentValue.total;
}, 0);

console.log(`Total Cost: ${totalCost}`);
