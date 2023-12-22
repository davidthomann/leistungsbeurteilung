const express = require('express');

const crypto = require('crypto');

const router = express.Router();

router.use(express.json());

// Array with all the tasks
let tasks = [
  {
    isbn: '123', title: 'Make a Task', author: 'David Thomann', created_at: '22.12.2023', closed_at: 'Not closed yet',
  },
];

// Endpoint, which returns a list of all tasks
router.get('/tasks', (request, response) => {
  response.statusCode(200).send(tasks);
});

// Endpoint that creates a new task and returns it
router.post('/tasks/', (request, response) => {
  const newTask = {
    isbn: crypto.randomUUID(),
    title: request.body.title,
    author: request.body.author,
    created_at: request.body.created_at,
    closed_at: request.body.closed_at,
  };
  tasks.push(newTask);
  response.statusCode(200).send(newTask);
});

// Endpoint, which returns a single task
router.get('/tasks/:isbn', (request, response) => {
  response.send(tasks.find((task) => task.isbn === request.params.isbn));
});

// endpoint, which modifies the existing task and returns it.
router.patch('/tasks/:isbn', (request, response) => {
  const oldTask = tasks.find((task) => task.isbn === request.params.isbn);
  const keys = Object.keys(request.body);
  keys.forEach((key) => { oldTask[key] = request.body[key]; });
  tasks = tasks.map((task) => (task.isbn === request.params.isbn ? oldTask : task));
  response.send(tasks);
});

// Endpoint that deletes the existing task
router.delete('/tasks/:isbn', (request, response) => {
  tasks = tasks.filter((task) => task.isbn !== request.params.isbn);
  response.send(tasks);
});

module.exports = router;
