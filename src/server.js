const express = require('express');

const crypto = require('crypto');

const app = express();
const port = 3001;

app.use(express.json());

// Array with all the tasks
let tasks = [
  {
    isbn: '123', title: 'Make a Task', author: 'David Thomann', created_at: '22.12.2023', closed_at: 'Not closed yet',
  },
];

// Endpoint, which returns a list of all tasks
app.get('/tasks', (request, response) => {
  response.send(tasks);
  response.status(200).send('successfully worked');
});

// Endpoint that creates a new task and returns it
app.post('/tasks/', (request, response) => {
  const newTask = {
    isbn: crypto.randomUUID(),
    title: request.body.title,
    author: request.body.author,
    created_at: request.body.created_at,
    closed_at: request.body.closed_at,
  };
  tasks.push(newTask);
  response.send(newTask);
  response.status(200).send('successfully added');
});

// Endpoint, which returns a single task
app.get('/tasks/:isbn', (request, response) => {
  response.send(tasks.find((task) => task.isbn === request.params.isbn));
});

// endpoint, which modifies the existing task and returns it.
app.patch('/tasks/:isbn', (request, response) => {
  const oldTask = tasks.find((task) => task.isbn === request.params.isbn);
  const keys = Object.keys(request.body);
  keys.forEach((key) => { oldTask[key] = request.body[key]; });
  tasks = tasks.map((task) => (task.isbn === request.params.isbn ? oldTask : task));
  response.send(tasks);
});

// Endpoint that deletes the existing task
app.delete('/tasks/:isbn', (request, response) => {
  tasks = tasks.filter((task) => task.isbn !== request.params.isbn);
  response.send(tasks);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});