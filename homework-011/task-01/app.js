// Task #1--------------------------------
// Створіть об'єкт, що містить інформацію про користувача, таку як ім'я, вік, місце проживання тощо.
// Створіть метод об'єкту для отримання та відображення цих даних.
'use strict'

const user = {
    name: 'Alice',
    age: 17,
    city: 'Kyiv',
    getInfo: function () {
        return `User's name is ${this.name}, age ${this.age}, city ${this.city}`;
    },
    showInfo: function () {
        console.log(this.getInfo());
    },
}
user.showInfo();
const userInfo = user.getInfo();
console.log(userInfo);
