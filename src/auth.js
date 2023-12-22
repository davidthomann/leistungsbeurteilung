const express = require('express');

const routerauth = express.Router();

routerauth.use(express.json());

// Login data
const loginData = { email: 'project@testdata.ch', password: 'm295' };

// Endpoint for the login process
routerauth.post('/login', (request, response) => {
  const { email, password } = request.body;

  if (password === loginData.password) {
    request.session.email = email;
    return response.status(200).json({ email: request.session.email });
  }
  return response.status(401).json({ error: 'Login data is not correct' });
});

// Endpoint for the verify process
routerauth.get('/verify', (request, response) => {
  if (request.session.email) {
    return response.status(200).json({ email: request.session.email });
  }
  return response.status(401).json({ error: 'You are not logged in' });
});

// Endpoint for the logout process
routerauth.delete('/logout', (request, response) => {
  if (request.session.email) {
    request.session.email = null;

    return response.status(204).send();
  }
  return response.status(401).json({ error: 'You are not logged in' });
});

module.exports = routerauth;
