// Task #6--------------------------------
'use strict'

const words = ["apple", "banana", "avocado", "blueberry", "apricot"];

// 1. С помощью filter оставить только слова, начинающиеся на букву "a".

const wordsWithA = words.filter((value) => value[0] === 'a')
console.log('Words with "A":');
wordsWithA.forEach(value => console.log(`- ${value}\n`))


// 2. С помощью reduce сгруппировать все слова по первой букве в объект, где ключ — буква, значение — массив слов.
const groupedBySymbol = words.reduce((acc, item) => {
    const key = item[0];
    if (!acc[key]) {
        acc[key] = [];
    }
    acc[key].push(item);
    return acc;
}, {})

console.log(groupedBySymbol);