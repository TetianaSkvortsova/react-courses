import 'bootstrap';
import './styles.scss';
import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';
import {Modal} from 'bootstrap';

flatpickr("#datePicker", {
    dateFormat: "Y-m-d",
});

flatpickr("#editDate", {
    dateFormat: "Y-m-d",
});

const creatNewTaskBtn = document.getElementById('creatTask');
const saveTaskChangesBtn = document.getElementById('saveTaskChanges');
const container = document.querySelector('.container');

async function postData(data, method, postUrl) {
    try {

        const response = await fetch(postUrl, {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();

    } catch (error) {
        console.error('Помилка при відправці запиту:', error);
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
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();

    } catch (error) {
        console.error('Fetch operation failed:', error);
        return null;
    }
}

function renderAssigneesList(list, element) {
    for (let assignee in list) {
        const listItem = document.createElement('option');
        listItem.setAttribute('value', `${assignee}`);
        listItem.textContent = `${list[assignee]}`;
        element.appendChild(listItem);
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
        if (value === '') {
            return false;
        }
    }
    formData.status = 'new';
    return formData;
}

function fillEditForm(task) {
    const headerElement = document.getElementById('editNewTaskLabel');
    const taskNameElement = document.getElementById('editTaskName');
    const descriptionElement = document.getElementById('editTaskDescription');
    const selectPersonElement = document.getElementById('editPersonSelect');
    const selectPriorityElement = document.getElementById('editPrioritySelect');
    const editDateElement = document.getElementById('editDate');
    headerElement.textContent += ` ${task.id}`;
    taskNameElement.value = task.taskName;
    descriptionElement.value = task.taskDescription;
    selectPersonElement.value = task.selectedPerson;
    selectPriorityElement.value = task.selectedPriority;
    editDateElement.value = task.pickedDate;
}

async function renderTask(editedTask) {
    const rowElement = document.getElementById(editedTask.id);
    const rowChildren = rowElement.childNodes;
    rowChildren[1].textContent = editedTask.taskName;
    const assigneeName = await getData('api/assignee', {value: editedTask.selectedPerson});
    rowChildren[2].textContent = assigneeName[1];
    rowChildren[3].textContent = editedTask.pickedDate;
    rowChildren[4].textContent = editedTask.selectedPriority;
}

creatNewTaskBtn.addEventListener('click', async () => {
    const newTaskForm = document.getElementById('newTask');
    const requestData = formRequestObject(newTaskForm);

    if (requestData) {
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
    } else {
        window.alert('All the fields have to be filled');
    }
})

saveTaskChangesBtn.addEventListener('click', async (event) => {
    const modalElement = document.getElementById('editTaskModal');
    const editTaskElement = document.getElementById('editTask');

    const putUrl = `api/task`;
    const requestData = formRequestObject(editTaskElement);
    if (requestData) {
        requestData.id = event.target.getAttribute('data-task-id');
        requestData.taskActions = '';
        const editedTask = await postData(requestData, 'PUT', putUrl);

        await renderTask(editedTask);

        const modalInstance = Modal.getInstance(modalElement);
        modalInstance.hide();
    } else {
        window.alert('All the fields have to be filled');
    }
})

container.addEventListener('click', async (event) => {
    const target = event.target.classList.value;
    if (target === 'delete-btn') {
        const taskId = event.target.closest('.row').getAttribute('id');
        const postUrl = `api/task/${taskId}`;
        const tasks = await postData({}, 'DELETE', postUrl);
        render(tasks);

    } else if (target === 'edit-btn') {
        const editTaskModalElement = document.getElementById('editTaskModal');
        const saveTaskChangesBtn = document.getElementById('saveTaskChanges');
        const taskId = event.target.closest('.row').getAttribute('id');
        const getUrl = `api/task/${taskId}`;
        const task = await getData(getUrl, {});
        saveTaskChangesBtn.setAttribute('data-task-id', `${taskId}`);

        fillEditForm(task);

        const editTaskModal = new Modal(editTaskModalElement);
        editTaskModal.show();
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
    const personSelectElement = document.getElementById('personSelect');
    const editPersonSelect = document.getElementById('editPersonSelect');
    const assigneeList = await getData('api/assignees');
    if (assigneeList) {
        renderAssigneesList(assigneeList, personSelectElement);
        renderAssigneesList(assigneeList, editPersonSelect);
    }
    const tasks = await getData('api/tasks');
    render(tasks);
})

