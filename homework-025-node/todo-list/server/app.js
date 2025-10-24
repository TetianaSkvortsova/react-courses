import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
// import { randomUUID } from 'crypto';
import { assignees } from './assignees.js';

const app = express();
app.use(express.json());

// Serve the client folder as static files so the frontend is served from the same origin.
// This prevents CORS issues when the browser loads `index.html` and then calls this API.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientPath = path.join(__dirname, '..', 'client');
app.use(express.static(clientPath));

// Serve index.html for the root path
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

app.get('/api/assignee/:assigneeName', (request, response) => {
    const {assigneeName} = request.params;
    const foundAssigneeName = Object.entries(assignees).find(([key, value]) => {
        // Шукаємо пару, де значення дорівнює 'John'
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
    // console.log(taskDescription);
    response.send(description);
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

app.get('/api/assignees', (request, response) => {
    response.send(assignees);
});

app.get('/api/tasks', (request, response) => {
    const undeletedTasks = getUndeletedTasks();
    response.send(undeletedTasks);
});
/*app.get('/api/test', (request, response) => {
    // console.log('My first request');
    response.send(`My first request ${request.body}`);
});*/
/*
app.get('/', (req, res) => {
    res.sendFile(path.join(clientPath, 'index.html'));
});

const usersDB = [{id: 1, name: 'Serhii'}];


app.get('/api/users', (request, response) => {
    response.send(usersDB);
});

// request.body = { name, login }
app.post('/api/users', (request, response) => {
    const { name: fullname, login } = request.body;
    const newUser = {
        id: usersDB.length + 1,
        fullname,
        login,
    };

    usersDB.push(newUser);
    response.send(newUser);
});

// id
app.delete('/api/users/:id', (request, response) => {
    const { id } = request.params;
    const index = usersDB.findIndex(user => user.id == id);
    if (index === -1) {
        return response.sendStatus(400);
    }

    usersDB.splice(index, 1);
    response.send('Removed successfully');
})
*/

app.listen(port, () => {
    console.log('We live on ' + port);
});
