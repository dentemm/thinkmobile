const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/', (req, res) => {
  res.send({ hello: 'there'});
});

PORT = process.env.PORT || 8000;

app.listen(PORT);

