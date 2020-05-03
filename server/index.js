const express = require('express');
const path = require('path');
const parser = require('body-parser');
const cors = require('cors');

const router = require('./routes.js');

const app = express();

app.use(express.static(path.join(__dirname, '../dist')));
app.use(cors());
app.use(parser.json());
app.use(router);

const port = process.env.PORT || 1128;

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
