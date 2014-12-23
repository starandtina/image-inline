'use strict';

var inline = require('../');
var fs = require('fs');
var assert = require('assert');
var read = fs.readFileSync;

describe('inline', function () {
  it('should inline image', function () {
    assert(inline('test/fixtures/dot.png') === read('test/fixtures/dot-data-uri.txt', 'utf8').toString());
  });

  it('should throw error when file is not existed', function () {
    assert.throws(function () {
      inline('test/fixtures/nonexistent.png')
    }, Error);
  });
});