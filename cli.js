#!/usr/bin/env node

const spawn = require('child_process').spawn;
const path = require('path');

const prog = path.resolve(process.argv[2]);
const progArgs = process.argv.slice(3);

const nodeArgs = [
  '-r',
  path.join(__dirname, 'index.js')
];
const nodeOpts = { stdio: 'inherit' };

spawn('node', nodeArgs.concat(prog).concat(progArgs), nodeOpts);