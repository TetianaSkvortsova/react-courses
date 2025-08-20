// Task #4--------------------------------
// Задание:
// Реализовать метод increment, который увеличивает value на 1 каждую секунду,
// используя стрелочную функцию внутри setInterval(придется погуглить этот метод) для сохранения контекста this.

'use strict'
const counter = {
    value: 0,
    increment() {
        // Здесь внутри вызвать setInterval с использованием стрелочной функции
        const stopInc = setInterval(() => {
            this.value++;
            console.log(this.value);
            if (this.value > 4) {
                clearInterval(stopInc);
            }
        }, 1000)
    }
};

counter.increment();
