import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
import { assignees } from './assignees.js';

const app = express();
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientPath = path.join(__dirname, '..', 'client');
app.use(express.static(clientPath));

const port = 3000;
const tasks = [];

function getUndeletedTasks() {
    return tasks.filter((task) => task.status !== 'deleted');
}

app.post('/api/task', (request, response) => {
    const {taskName, taskDescription, selectedPerson, selectedPriority, pickedDate, taskActions, status} = request.body;
    const tasksLength = tasks.length;
    const newTask = {
        id: `tsk-${tasksLength+1}`,
        taskName,
        taskDescription,
        selectedPerson,
        pickedDate,
        selectedPriority,
        taskActions,
        status,
    };

    tasks.push(newTask);
    const undeletedTasks = getUndeletedTasks();
    response.send(undeletedTasks);
});

app.put('/api/task', (request, response) => {
    const {id, editTaskName, editTaskDescription, selectedPerson, editPrioritySelect, editDate, status, taskActions} = request.body;
    const index = tasks.findIndex(task => task.id === id);
    if (index === -1) {
        return response.sendStatus(400);
    }
    tasks[index] = {
        id,
        taskName: `${editTaskName}`,
        taskDescription: `${editTaskDescription}`,
        selectedPerson,
        pickedDate: `${editDate}`,
        selectedPriority: `${editPrioritySelect}`,
        taskActions,
        status,
    };

    response.send(tasks[index]);
})

app.get('/api/assignee/:assigneeName', (request, response) => {
    const {assigneeName} = request.params;
    const foundAssigneeName = Object.entries(assignees).find(([key, value]) => {
        if(key === assigneeName) {
            return {key: value};
        }

    });
    response.send(foundAssigneeName);
});

app.get('/api/description/:id', (request, response) => {
    const {id} = request.params;
    const index = tasks.findIndex(task => task.id === id);
    if (index === -1) {
        return response.sendStatus(400);
    }
    const description = {des: tasks[index].taskDescription};
    response.send(description);
});

app.get('/api/assignees', (request, response) => {
    response.send(assignees);
});

app.get('/api/tasks', (request, response) => {
    const undeletedTasks = getUndeletedTasks();
    response.send(undeletedTasks);
});

app.get('/api/task/:id', (request, response) => {
    const {id} = request.params;
    const index = tasks.findIndex(task => task.id === id);
    if (index === -1) {
        return response.sendStatus(400);
    }
    const task = tasks[index];
    response.send(task);
});

app.delete('/api/task/:id', (request, response) => {
    const {id} = request.params;
    const index = tasks.findIndex(task => task.id === id);
    if (index === -1) {
        return response.sendStatus(400);
    }

    tasks[index].status = 'deleted';
    const undeletedTasks = getUndeletedTasks();
    response.send(undeletedTasks);
})

app.listen(port, () => {
    console.log('We live on ' + port);
});
