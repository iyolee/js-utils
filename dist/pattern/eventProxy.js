"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var eventProxy = {
  onQueue: {},
  oneQueue: {},

  on: function on(key, fn) {
    if (this.onQueue[key] === undefined) {
      this.onQueue[key] = [];
    }
    this.onQueue[key].push(fn);
  },
  one: function one(key, fn) {
    if (this.oneQueue[key] === undefined) {
      this.oneQueue[key] = [];
    }
    this.oneQueue[key].push(fn);
  },
  off: function off(key) {
    this.onQueue[key] = [];
    this.oneQueue[key] = [];
  },
  emit: function emit() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (args.length === 0) {
      return false;
    }

    var key = args[0];
    var argsCache = [].concat(_toConsumableArray(args)).slice(1);

    if (this.onQueue[key] !== undefined && this.onQueue[key].length > 0) {
      for (var i in this.onQueue[key]) {
        this.onQueue[key][i].apply(null, argsCache);
      }
    }

    if (this.oneQueue[key] !== undefined && this.oneQueue[key].length > 0) {
      for (var _i in this.oneQueue[key]) {
        this.oneQueue[key][_i].apply(null, argsCache);
        this.oneQueue[key][_i] = undefined;
      }
      this.oneQueue[key] = [];
    }
  }
};

exports.default = eventProxy;