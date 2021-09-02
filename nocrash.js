const nocrash = require('nocrash');

nocrash.watch({
  path: 'index.js',
  minCool: 1,
  maxCool: 300,
  log: (msg) => {
    console.error(msg);
  },
});
