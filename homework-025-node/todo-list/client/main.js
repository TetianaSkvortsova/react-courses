import 'bootstrap';
import './styles.scss';
import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';
import {Modal} from 'bootstrap';

flatpickr("#myDatePicker", {
    dateFormat: "Y-m-d",
});

const sendTask = document.getElementById('sendTask');
const container = document.querySelector('.container');

async function postData(data, method, postUrl) {
    try {

        const response = await fetch(postUrl, {
            // 1. Метод: Обов'язково POST
            method,

            // 2. Заголовки: Вказуємо, що ми надсилаємо JSON
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': 'Bearer YOUR_TOKEN' // Якщо потрібна автентифікація
            },

            // 3. Тіло запиту: Конвертуємо JS-об'єкт у рядок JSON
            body: JSON.stringify(data)
        });

        // Перевіряємо, чи успішна відповідь сервера (наприклад, статус 200-299)
        if (!response.ok) {
            // Викидаємо помилку, якщо статус, наприклад, 404 або 500
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Отримуємо та повертаємо JSON-відповідь від сервера
        return await response.json();

    } catch (error) {
        console.error('Помилка при відправці запиту:', error);
        // Можна повернути помилковий об'єкт або null
        return null;
    }
}

async function getData(getUrl, params = {}) {
    try {
        let fullUrl;
        if (params.value) {
            fullUrl = `${getUrl}/${params.value}`;
        } else {
            fullUrl = `${getUrl}`;
        }
        const response = await fetch(fullUrl);

        if (!response.ok) {
            // Кидаємо помилку, якщо HTTP-статус невдалий
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // 2. Очікуємо парсингу відповіді у JSON і ПОВЕРТАЄМО ці дані
        return await response.json();

    } catch (error) {
        console.error('Fetch operation failed:', error);
        // Повертаємо null або пустий об'єкт у разі помилки
        return null;
    }
}

function addAssigneeList(data) {
    const assigneeList = document.getElementById('personSelect');

    for (let assignee in data) {
        const listItem = document.createElement('option');
        listItem.setAttribute('value', `${assignee}`);
        listItem.textContent = `${data[assignee]}`;
        assigneeList.appendChild(listItem);
    }
}

function render(dataTable) {
    const tasksTable = document.getElementById('tasksTable');
    tasksTable.textContent = '';
    const header = document.getElementById('header');

    dataTable.forEach(async (field) => {
        const tableRow = document.createElement('div');
        tableRow.classList.add('row', 'text-center');
        tableRow.setAttribute('id', `${field.id}`);
        tableRow.setAttribute('data-priority', field.selectedPriority);
        for (const key in field) {
            if (key === 'taskActions') {
                const tasksField = document.createElement('div');
                tasksField.classList.add('col-2', 'task-actions');
                const deleteBtn = document.createElement('span');
                const editBtn = document.createElement('span');
                deleteBtn.classList.add('delete-btn');
                editBtn.classList.add('edit-btn');
                deleteBtn.textContent = `delete`;
                editBtn.textContent = `edit`;
                tasksField.appendChild(deleteBtn);
                tasksField.appendChild(editBtn);
                tableRow.appendChild(tasksField);
            } else if (key !== 'status' && key !== 'taskDescription') {
                const tasksField = document.createElement('div');
                tasksField.classList.add('col-2');
                if (key === 'selectedPriority') {
                    tasksField.setAttribute('data-priority', field[key]);
                    tasksField.textContent = `${field[key]}`;
                } else if (key === 'selectedPerson') {
                    const assignee = {value: field[key]};
                    const assigneeList = await getData('api/assignee', assignee);
                    tasksField.textContent = `${assigneeList[1]}`;
                } else {
                    tasksField.textContent = `${field[key]}`;
                }
                tableRow.appendChild(tasksField);
            }
        }
        tasksTable.appendChild(tableRow)
        header.after(tasksTable);
    })
}

function formRequestObject(form) {
    const formData = {};
    const formElements = new FormData(form);
    for (const [name, value] of formElements.entries()) {
        formData[name] = value;
    }
    formData.status = 'new';
    return formData;
}

sendTask.addEventListener('click', async () => {
    const newTaskForm = document.getElementById('newTask');
    const requestData = formRequestObject(newTaskForm);
    const postUrl = `api/task`;

    const modalElement = document.getElementById('creatNewTask');
    const modalInstance = Modal.getInstance(modalElement);

    const taskModalElement = document.getElementById('creatNewTask');
    const newTask = document.getElementById('newTask');

    requestData.taskActions = '';
    const tasks = await postData(requestData, 'POST', postUrl);
    render(tasks);
    modalInstance.hide();

    if (taskModalElement && newTask) {
        taskModalElement.addEventListener('hidden.bs.modal', function () {
            newTask.reset();
        });
    }
})

container.addEventListener('click', async (event) => {
    const target = event.target.classList.value;
    if (target === 'delete-btn') {
        const taskId = event.target.closest('.row').getAttribute('id');
        const postUrl = `api/task/${taskId}`;
        const tasks = await postData({}, 'DELETE', postUrl);
        render(tasks);
    } else if (target === 'col-2') {
        const viewTaskModalElement = document.getElementById('viewTaskModal');
        const viewTaskModal = new Modal(viewTaskModalElement);

        const taskId = event.target.closest('.row').getAttribute('id');
        const taskDescription = await getData(`api/description/${taskId}`, {id: taskId});
        const descriptionContentElement = document.getElementById('viewTaskDescriptionContent');
        descriptionContentElement.textContent = `${taskDescription.des}`;
        viewTaskModal.show();
    }
})
document.addEventListener('DOMContentLoaded', async () => {
    const assigneeList = await getData('api/assignees');
    if (assigneeList) {
        addAssigneeList(assigneeList);
    }
    const tasks = await getData('api/tasks');
    render(tasks);
})

