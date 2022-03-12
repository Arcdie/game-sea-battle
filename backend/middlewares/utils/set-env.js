const path = require('path');

let fileEnv = '../config/envs/';

switch (process.env.pm_cwd) {
  default: { fileEnv += 'localhost.env'; break; }
}

require('dotenv').config({
  path: path.join(__dirname, `../${fileEnv}`),
});
