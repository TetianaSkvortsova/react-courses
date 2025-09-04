// Task #1--------------------------------
// Створіть HTML-сторінку, яка містить список завдань (to-do list) з можливістю додавання нових завдань.
// Ваша ціль - використовуючи делегування подій, створити обробник подій для списку завдань,
// який дозволить видаляти завдання при кліку на них.
//
// Покроковий план:
//
// Створіть HTML-елементи: список завдань ul, текстове поле для вводу нових завдань та кнопку для додавання.
// Додайте обробник подій до списку завдань ul, використовуючи делегування.
// При кліку на будь-якій кнопці видалення, видаліть цей пункт.
// Додайте можливість вводити нові завдання у текстове поле і додавати їх до списку за допомогою кнопки.

'use strict'

const btnAddTask = document.querySelector('.addTask');
const todoList = document.querySelector('.todoList');

btnAddTask.addEventListener('click', () => {
    const newTask = document.querySelector('input');
    const taskValue = newTask.value.trim();
    if(!taskValue) {
        return;
    }
    addTask(taskValue);
    newTask.value = '';
});

function addTask(value) {
    const newTaskItem = document.createElement('li');
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('type', 'button');
    deleteBtn.setAttribute('class', 'deleteBtn font');
    deleteBtn.innerHTML = 'Delete';
    newTaskItem.innerHTML = value;
    todoList.appendChild(newTaskItem);
    newTaskItem.appendChild(deleteBtn);
}

todoList.addEventListener('click', (event) => {
    if (event.target && event.target.tagName === 'BUTTON') {
        const parentElement = event.target.parentElement;
        parentElement.remove();
    }
})
