// Task #10--------------------------------
// Вивести на сторінку повну таблицю множення від 1 до 10

for (let i = 1; i <= 10; i++) {
    document.write(`<div style="display: inline-block; padding: 10px; border: black 1px solid">Multiplication table for ${i}`);
    for (let j = 1; j <= 10; j++) {
        const result = j * i;
        document.write(`<p>${j} * ${i} = ${result}</p>`);
    }
    document.write(`</div>`);
}
