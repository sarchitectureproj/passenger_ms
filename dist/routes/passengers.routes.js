"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _database = require("../database");

var _mongodb = require("mongodb");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var router = (0, _express.Router)();
var collection = 'passengers';
router.get('/',
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var db, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            db = req.app.locals.database;
            _context.prev = 1;
            _context.next = 4;
            return db.collection(collection).find({}).toArray();

          case 4:
            result = _context.sent;
            res.json(result);
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            res.status(500).json({
              error: _context.t0.toString()
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
router.post('/',
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var db, passenger, result;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            db = req.app.locals.database;
            _context2.prev = 1;
            passenger = {
              first_name: req.body.first_name,
              last_name: req.body.last_name,
              age: req.body.age,
              gender: req.body.gender,
              email: req.body.email,
              phone_number: req.body.phone_number,
              birthdate: req.body.birthdate,
              occupation: req.body.occupation,
              nationality: req.body.nationality,
              native_language: req.body.native_language
            };
            _context2.next = 5;
            return db.collection(collection).insertOne(passenger);

          case 5:
            result = _context2.sent;
            res.json({
              message: 'Passanger created',
              result: result
            });
            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](1);
            res.status(500).json({
              error: _context2.t0.toString()
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 9]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
router.put('/:id',
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var db, id, passenger, result;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            db = req.app.locals.database;
            id = req.params.id;
            passenger = {
              first_name: req.body.first_name,
              last_name: req.body.last_name,
              age: req.body.age,
              gender: req.body.gender,
              email: req.body.email,
              phone_number: req.body.phone_number,
              birthdate: req.body.birthdate,
              occupation: req.body.occupation,
              nationality: req.body.nationality,
              native_language: req.body.native_language
            };
            _context3.prev = 3;
            _context3.next = 6;
            return db.collection(collection).updateOne({
              _id: (0, _mongodb.ObjectID)(id)
            }, {
              $set: passenger
            });

          case 6:
            result = _context3.sent;
            res.json({
              message: 'Passanger updated',
              result: result
            });
            _context3.next = 13;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](3);
            res.status(500).json({
              error: _context3.t0.toString()
            });

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[3, 10]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
router.get('/:id',
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var id, db, result;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.prev = 1;
            db = req.app.locals.database;
            _context4.next = 5;
            return db.collection(collection).findOne({
              _id: (0, _mongodb.ObjectID)(id)
            });

          case 5:
            result = _context4.sent;
            res.json(result);
            _context4.next = 12;
            break;

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](1);
            res.status(500).json({
              error: _context4.t0.toString()
            });

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 9]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());
router["delete"]('/:id',
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var _ref6, id, db, result;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return req.params;

          case 2:
            _ref6 = _context5.sent;
            id = _ref6.id;
            db = req.app.locals.database;
            _context5.prev = 5;
            _context5.next = 8;
            return db.collection(collection).remove({
              _id: (0, _mongodb.ObjectID)(id)
            });

          case 8:
            result = _context5.sent;
            res.json({
              message: "The object ".concat(id, " was deleted"),
              result: result
            });
            _context5.next = 15;
            break;

          case 12:
            _context5.prev = 12;
            _context5.t0 = _context5["catch"](5);
            res.status(500).json({
              error: _context5.t0.toString()
            });

          case 15:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[5, 12]]);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());
var _default = router;
exports["default"] = _default;