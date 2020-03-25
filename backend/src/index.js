const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()); // makes every json request will be converted to js object.
app.use(routes); // this must be below the app.use(express.json());

app.listen(3333);