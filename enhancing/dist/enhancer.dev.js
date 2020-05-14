"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = {
  succeed: succeed,
  fail: fail,
  repair: repair,
  get: get
};

function repair(item) {
  return {
    name: item.name,
    enhancement: item.enhancement,
    durability: 100
  };
}

function succeed(item) {
  if (item.enhancement === 20) {
    return {
      name: item.name,
      enhancement: item.enhancement,
      durability: item.durability
    };
  } else {
    return {
      name: item.name,
      enhancement: item.enhancement + 1,
      durability: item.durability
    };
  }
}

function fail(item) {
  if (item.enhancement < 15) {
    return _objectSpread({}, item, {
      durability: item.durability - 5
    });
  }

  if (item.enhancement > 16) {
    return _objectSpread({}, item, {
      enhancement: item.enhancement - 1
    });
  }

  if (item.enhancement >= 15) {
    return _objectSpread({}, item, {
      durability: item.durability - 10
    });
  }
}

function get(item) {
  if (item.enhancement === 0) {
    return _objectSpread({}, item);
  }

  if (item.enhancement > 0) {
    return _objectSpread({}, item, {
      name: "[+".concat(item.enhancement, "] ").concat(item.name)
    });
  }
}