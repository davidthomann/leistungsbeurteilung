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

function isAuth(require, response, next) {
  if (require.session.email) {
    next();
  }
  return response.statusCode(402);
}

// Endpoint, which returns a list of all tasks
router.get('/', isAuth, (request, response) => {
  //  #swagger.tags = ['Tasks']
  response.send(tasks);
});

// Endpoint that creates a new task and returns it
router.post('/', isAuth, (request, response) => {
  //  #swagger.tags = ['Tasks']
  const newTask = {
    isbn: crypto.randomUUID(),
    title: request.body.title,
    author: request.body.author,
    created_at: request.body.created_at,
    closed_at: request.body.closed_at,
  };
  tasks.push(newTask);
  response.send(newTask);
});

// Endpoint, which returns a single task
router.get('/:isbn', isAuth, (request, response) => {
  //  #swagger.tags = ['Tasks']
  response.send(tasks.find((task) => task.isbn === request.params.isbn));
});

// endpoint, which modifies the existing task and returns it.
router.patch('/:isbn', isAuth, (request, response) => {
  //  #swagger.tags = ['Tasks']
  const oldTask = tasks.find((task) => task.isbn === request.params.isbn);
  const keys = Object.keys(request.body);
  keys.forEach((key) => { oldTask[key] = request.body[key]; });
  tasks = tasks.map((task) => (task.isbn === request.params.isbn ? oldTask : task));
  response.send(tasks);
});

// Endpoint that deletes the existing task
router.delete('/:isbn', (request, response) => {
  //  #swagger.tags = ['Tasks']
  tasks = tasks.filter((task) => task.isbn !== request.params.isbn);
  response.send(tasks);
});

module.exports = router;
