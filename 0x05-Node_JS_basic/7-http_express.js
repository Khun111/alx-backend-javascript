const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const path = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(path).then((data) => {
    res.send(`This is the list of our students\n${data}`);
  }).catch(() => {
    res.send('This is the list of our students');
  });
});

app.listen(1245, () => console.log('Server listening on 1245'));
module.exports = app;
