#!/usr/bin/env node

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

console.log('starting echo api');

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
    let output = JSON.stringify({ echo: req.body.message });
    res.setHeader('Content-Type', 'application/json');
    res.send(output);
  } catch (e) {
    res.status(400);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ error: true }));
  }
});

app.get('/shutdown/:type', (req, res) => {
  let { type } = req.params;
  console.log(`received shutdown ${type}`);
  switch (type) {
    case 'graceful':
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({success: true}));
      shutdownGracefully('graceful');
      break;
    default:
      process.exit(1);
  }
});

function shutdownGracefully(sig) {
  console.log(`worker obtained ${sig}`);
  server.close(() => {
    console.log('Http server closed.');
    process.exit(0);
  });
  setTimeout(() => {
    console.log('server took too long to close, exiting after 8 seconds');
    process.exit(1);
  }, 8000);
}

process.on('SIGINT', shutdownGracefully);
process.on('SIGTERM', shutdownGracefully);
process.on('SIGQUIT', shutdownGracefully);

const server = app.listen(port, () => console.log(`echo-api server listening on port ${port}!`));
