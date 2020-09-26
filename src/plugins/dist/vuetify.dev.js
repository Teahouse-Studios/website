"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _lib = _interopRequireDefault(require("vuetify/lib"));

var _colors = _interopRequireDefault(require("vuetify/lib/util/colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_lib["default"]);

var _default = new _lib["default"]({
  theme: {
    themes: {
      light: {
        primary: _colors["default"].indigo,
        secondary: _colors["default"].red,
        accent: _colors["default"].indigo.accent3,
        error: _colors["default"].red.darken3,
        warning: _colors["default"].pink.darken2,
        info: _colors["default"].blue.darken3,
        success: _colors["default"].green.lighten1
      }
    }
  }
});

exports["default"] = _default;