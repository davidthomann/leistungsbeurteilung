const express = require('express');

const app = express();
const port = 3001;

const router = require('./endpoints');
const routerauth = require('./auth');

app.use(router, routerauth);

// ToDo

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
