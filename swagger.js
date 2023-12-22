// Code from the Swagger Documentation

const swaggerAutogen = require('swagger-autogen');

const doc = {
  info: {
    title: 'My API',
    description: 'Description',
  },
  host: 'localhost:3000',
};

const outputFile = './swagger-output.json';
const routes = ['./src/server.js', './src/server.js'];

swaggerAutogen(outputFile, routes, doc);
