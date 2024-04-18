"use strict";

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var fs = require('fs');

var filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';

var _fs$readFileSync$toSt = fs.readFileSync(filePath).toString().trim().split('\n'),
    _fs$readFileSync$toSt2 = _toArray(_fs$readFileSync$toSt),
    input = _fs$readFileSync$toSt2.slice(0);

console.log('🍀', input);