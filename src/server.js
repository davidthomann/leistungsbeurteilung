const express = require('express');

const app = express();
const port = 3001;

const router = require('./endpoints');

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
