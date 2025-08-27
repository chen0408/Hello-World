const express = require('express');
const app = express();

app.get('/unsafe', (req, res) => {
  res.send(`<div>${req.query.input}</div>`);
});

app.listen(3000);