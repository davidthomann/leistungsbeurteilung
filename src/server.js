const express = require('express');
const session = require('express-session');

const app = express();
const port = 3001;

const router = require('./endpoints');
const routerauth = require('./auth');

app.use(
  session({
    secret: 'secretkey',
    resave: false,
    saveUninitialized: true,
  }),
);

app.use('/', routerauth);
app.use('/tasks', router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
