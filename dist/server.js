"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireWildcard(require("express"));

var _database = require("./database");

var _index = _interopRequireDefault(require("../routes/index.routes"));

var _passengers = _interopRequireDefault(require("../routes/passengers.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var app = (0, _express["default"])(); //Settings

app.set('port', process.env.PORT || 4002); //Routes

//middlewares
app.use((0, _express.json)()); //Use Routes

app.use(_index["default"]);
app.use('/passengers', _passengers["default"]);
var _default = app;
exports["default"] = _default;