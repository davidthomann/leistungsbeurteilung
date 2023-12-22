const express = require('express');
const session = require('express-session');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

const app = express();
const port = 3001;

const router = require('./endpoints');
const routerauth = require('./auth');

// Add swagger ui
app.use('/swagger-ui/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/swagger-ui', (request, response) => {
  // #swagger.tags = ['swagger-ui']
  response.sendFile(`${__dirname}/swagger-output.json`);
});

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
