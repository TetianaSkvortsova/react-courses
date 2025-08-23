// Task #1--------------------------------
// 1. Кількість замовлень кожного користувача
// Використовуйте reduce, щоб створити об’єкт:
// { Alice: 2, Bob: 2, Charlie: 1 }.
'use strict'

const ordersAmount = orders.reduce((acc, item) => {
    const key = item.user;
    if (typeof acc[key] === 'undefined') {
        acc[key] = 0;
    }
    acc[key] += item.items.length;
    return acc;
}, {});

console.log(ordersAmount);

// Використовуйте Map:
// Замість об’єкту використовуємо Map, де ключ - ім’я користувача, а значення - кількість його замовлень

const mapOrdersAmount = orders.reduce((acc, item) => {
    const key = item.user;
    if (!acc.has(key)) {
        acc.set(key, 0)
    }

    acc.set(key, acc.get(key) + item.items.length);
    return acc;
}, new Map());

console.log(mapOrdersAmount);


// 2. Сума замовлень кожного користувача
// Використати reduce, щоб створити об’єкт
// { Alice: 620, Bob: 1700, Charlie: 300 }.

const getPriceSum = (acc, item) => {
    return acc + item.price;
}

const keyName = (obj, key) => {
    if (typeof obj[key] === 'undefined') {
        return obj[key] = 0;
    }
}

const ordersSum = orders.reduce((acc, item) => {
    const key = item.user;

    keyName(acc, key);

    acc[key] += item.items.reduce(getPriceSum, 0);
    return acc;

}, {});

console.log(ordersSum);

// Використовуємо Map, де ключ - им’я користувача, а значення - сума його покупок
// Map { 'Alice' => 620, 'Bob' => 1700, 'Charlie' => 300 }

const mapOrdersSum = orders.reduce((acc, item) => {
    const key = item.user;

    if (!acc.has(key)) {
        acc.set(key, 0);
    }

    acc.set(key, acc.get(key) + item.items.reduce(getPriceSum, 0));
    return acc;

}, new Map);

console.log(mapOrdersSum);

// 3. Унікальні товари
// Створюємо Set, щоб отримати унікальні товари
// Set { 'Phone', 'Case', 'Laptop', 'Headphones', 'Monitor' }

const uniqueProducts = orders.reduce((productsSet, item) => {
    item.items.forEach((item) => {
        productsSet.add(item.name);
    })
    return productsSet;
}, new Set());
console.log(uniqueProducts);

//4. Використовуйте reduce, щоб знайти користувача з найбільшими витратами.
// "Bob витратив більше за всіх: $1700"

//Зробила двома варіантами
//Варіант 1:
const biggestExpensesMap = {};
const biggestExpenses = orders.reduce((acc, item) => {
    const key = item.user;

    const userIndex = biggestExpensesMap[key];

    if (typeof userIndex !== 'undefined') {
        acc[userIndex].sum += item.items.reduce(getPriceSum, 0);
    } else {
        acc.push(
            {
                user: key,
                sum: item.items.reduce(getPriceSum, 0)
            }
        );
        biggestExpensesMap[key] = acc.length - 1;
    }

    return acc;

}, [])
    .reduce((acc, item) => {
        return acc.sum < item.sum ? item : acc;
    });
console.log('biggestExpenses ', biggestExpenses);

//Варіант 2:
//Використовую готовий Map із другого завдання
const biggestExpenses2 = [...mapOrdersSum].reduce((acc, item) => {
    return acc[1] < item[1] ? item : acc;
});
console.log(`${biggestExpenses2[0]} had spend more than others: ${biggestExpenses2[1]}$`);

