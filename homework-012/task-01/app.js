// Task #1--------------------------------
// Вивести таблицю Піфагора (10×10), таблиця повинна бути створена динамічно

'use strict'

const tableP = document.querySelector('.wrapper');

for (let i = 0; i < 11; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    tableP.appendChild(row);
    for (let j = 0; j < 11; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        row.appendChild(cell);
        if (i === 0 && j > 0) {
            cell.innerHTML = `${j}`;
        } else if (j === 0 && i > 0) {
            cell.innerHTML = `${i}`;
        } else {
            cell.innerHTML = `${i * j}`;
        }
    }
}


