// Task #2--------------------------------
// Дан массив объектов с книгами:

'use strict'

const books = [
    {title: "JS для начинающих", price: 500, genre: "programming"},
    {title: "CSS в деталях", price: 300, genre: "design"},
    {title: "React быстро", price: 800, genre: "programming"}
];

// 1. С помощью filter выбрать только книги жанра "programming".
const programmingBooks = books.filter((book) => book.genre === "programming");

console.log('Genre programming');
programmingBooks.forEach((value) => console.log(`- Title: ${value.title} ${'\n'}- Price: ${value.price}`));

// 2. С помощью map получить массив только с названиями этих книг.
console.log('Book Titles');

const bookTitles = programmingBooks.map((item) => {
    return item.title;
})

bookTitles.forEach((item) => {
    console.log(`- ${item} ${'\n'}`);

})

// 3. С помощью reduce посчитать общую стоимость выбранных книг.
const totalCost = programmingBooks.reduce((total, currentValue) => {
    total += currentValue.price;
    return total;
}, 0);

console.log(`Total Cost: ${totalCost}`);

