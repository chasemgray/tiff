'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _standard = require('./tags/standard');

var standard = _interopRequireWildcard(_standard);

var _exif = require('./tags/exif');

var exif = _interopRequireWildcard(_exif);

var _gps = require('./tags/gps');

var gps = _interopRequireWildcard(_gps);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj.default = obj;return newObj;
  }
}

const tags = {
  standard: standard,
  exif: exif,
  gps: gps
};

class IFD {
  constructor(kind) {
    if (!kind) {
      throw new Error('missing kind');
    }
    this.data = null;
    this.fields = new Map();
    this.kind = kind;
    this._map = null;
  }

  get(tag) {
    if (typeof tag === 'number') {
      return this.fields.get(tag);
    } else if (typeof tag === 'string') {
      return this.fields.get(tags[this.kind].tagsByName[tag]);
    } else {
      throw new Error('expected a number or string');
    }
  }

  get map() {
    if (!this._map) {
      this._map = {};
      const taglist = tags[this.kind].tagsById;
      for (var key of this.fields.keys()) {
        if (taglist[key]) {
          this._map[taglist[key]] = this.fields.get(key);
        }
      }
    }
    return this._map;
  }
}
exports.default = IFD;