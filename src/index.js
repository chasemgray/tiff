'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pageCount = exports.isMultiPage = exports.decode = undefined;

var _tiffDecoder = require('./tiffDecoder');

var _tiffDecoder2 = _interopRequireDefault(_tiffDecoder);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function decodeTIFF(data) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  const decoder = new _tiffDecoder2.default(data, options);
  return decoder.decode(options);
}

function isMultiPage(data) {
  const decoder = new _tiffDecoder2.default(data);
  return decoder.isMultiPage;
}

function pageCount(data) {
  const decoder = new _tiffDecoder2.default(data);
  return decoder.pageCount;
}

exports.decode = decodeTIFF;
exports.isMultiPage = isMultiPage;
exports.pageCount = pageCount;