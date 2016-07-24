let core = require('./core');

module.exports = function () {
  core();
  let h = "Hello,";
  let w = "world!";
  return h + w;
};