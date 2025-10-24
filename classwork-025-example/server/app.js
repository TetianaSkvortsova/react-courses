import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
app.use(express.json());

// Serve the client folder as static files so the frontend is served from the same origin.
// This prevents CORS issues when the browser loads `index.html` and then calls this API.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientPath = path.join(__dirname, '..', 'client');
app.use(express.static(clientPath));

// Serve index.html for the root path
app.get('/', (req, res) => {
  res.sendFile(path.join(clientPath, 'index.html'));
});

const usersDB = [];

const port = 3000;

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

app.listen(port, () => {
  console.log('We live on ' + port);
});
