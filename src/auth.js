const express = require('express');

const routerauth = express.Router();

const app = express();

routerauth.use(express.json());

const router = require('./endpoints');

app.use(router);

routerauth.get('/login', (request, response) => {

});

module.exports = routerauth;
