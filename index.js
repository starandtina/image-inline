'use strict';

var fs = require('fs');
var path = require('path');
var read = fs.readFileSync;
var exists = fs.existsSync;
var mime = require('mime');

module.exports = function(file) {
  if (!exists(file)) {
    throw new Error('imageinline: failed to find "' + file + '"');
  }

  var type = mime.lookup(file);
  var base64 = new Buffer(read(file)).toString('base64');

  return 'url("data:' + type + ';base64,' + base64 + '")';
};