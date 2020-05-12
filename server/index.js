const express = require('express');
const parser = require('body-parser');

const router = require('./routes.js');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(express.static('dist'));
app.use(express.static('src/assets'));
app.use(parser.json());
app.use(router);

const port = process.env.PORT || 1128;

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
