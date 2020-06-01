const nr = require('newrelic');

const express = require('express');
const parser = require('body-parser');
const cors = require('cors');

const router = require('./routes.js');

const app = express();

app.use(express.static('dist'));
app.use(express.static('src/assets'));
app.use(cors());
app.use(
  parser.urlencoded({
    extended: true,
  }),
);
app.use(parser.json());
app.use(router);

const port = process.env.PORT || 1128;

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
