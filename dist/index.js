"use strict";

require("@babel/polyfill");

var _server = _interopRequireDefault(require("./server"));

var _database = require("./database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function main() {
  return _main.apply(this, arguments);
}

function _main() {
  _main = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var port, db;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            port = _server["default"].get('port'); //connect to database

            _context.next = 3;
            return (0, _database.connect)();

          case 3:
            db = _context.sent;
            _server["default"].locals.database = db;
            _context.next = 7;
            return _server["default"].listen(port);

          case 7:
            console.log('Server on port', port);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _main.apply(this, arguments);
}

main();