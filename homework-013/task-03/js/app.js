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
const taskItems = document.querySelector('ul');

showTodoList(todoList);

btnAddTask.addEventListener('click', () => {
    const newTask = document.querySelector('input');
    const taskValue = newTask.value.trim();
    if (!taskValue) {
        return;
    }
    addTask(taskValue);
    newTask.value = '';
});

taskItems.addEventListener('click', (event) => {
    if (event.target && event.target.tagName === 'BUTTON') {
        const parentElement = event.target.parentElement;
        const taskId = parentElement.getAttribute('id');
        const index = todoList.findIndex(index => index = taskId);

        todoList.splice(index, 1);
        parentElement.remove();
    }
})

function showTodoList(list) {
    taskItems.textContent = '';
    list.forEach((item) => {
        const taskItem = document.createElement('li');
        const taskValue = document.createElement('span');
        const deleteBtn = document.createElement('button');

        deleteBtn.setAttribute('type', 'button');
        deleteBtn.setAttribute('class', 'deleteBtn font');
        deleteBtn.innerHTML = 'Delete';

        taskValue.innerHTML = item.task;
        taskItem.setAttribute('id', item.id);
        taskItem.appendChild(taskValue);
        taskItem.appendChild(deleteBtn);

        taskItems.appendChild(taskItem);
    })
}

function addTask(value) {
    const uniqueId = crypto.randomUUID();
    todoList.push({id: uniqueId, task: value});
    showTodoList(todoList);
}
