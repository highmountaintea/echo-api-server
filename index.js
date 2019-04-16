#!/usr/bin/env node

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

let port = process.env.PORT == null ? 3007 : parseInt(process.env.PORT, 10);

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/echo/:message', (req, res) => {
  try {
    let output = JSON.stringify({ echo: req.params.message });
    res.setHeader('Content-Type', 'application/json');
    res.send(output);
  } catch (e) {
    res.status(400);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ error: true }));
  }
});

app.post('/echo', (req, res) => {
  try {
    let output = JSON.stringify({ echo: req.body.message, extra: true });
    res.setHeader('Content-Type', 'application/json');
    res.send(output);
  } catch (e) {
    res.status(400);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ error: true }));
  }
});

app.listen(port, () => console.log(`echo-api server listening on port ${port}!`));
