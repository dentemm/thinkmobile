const express = require('express');
const mongoose = require('mongoose');

const app = express();

// app.get('/', (req, res) => {
//   res.send({ hello: 'there'});
// });

// app.get('*', (req, res) => {
//   app.use(express.static('client/dist'));
//   const path = require('path');
//   res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'));
// });

const path = require('path');
const publicPath = path.join(__dirname, 'client', 'public');
const otherPath = path.join(__dirname, 'client', 'dist');
app.use(express.static(publicPath));
app.use(express.static(otherPath));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/dist'));

  const path = require('path');

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'));
  });

}

PORT = process.env.PORT || 8000;

app.listen(PORT);

