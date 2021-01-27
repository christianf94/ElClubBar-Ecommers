"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFirebase = getFirebase;
exports.getFirestone = getFirestone;

var _app = _interopRequireDefault(require("firebase/app"));

require("@firebase/firestore");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = _app["default"].initializeApp({
  apiKey: "AIzaSyAtStKqORf3kkAfSe0GE_oXa2TEXuW7LEQ",
  authDomain: "el-club-bar.firebaseapp.com",
  projectId: "el-club-bar",
  storageBucket: "el-club-bar.appspot.com",
  messagingSenderId: "604095940762",
  appId: "1:604095940762:web:1f16f599d395341c8a3723"
});

function getFirebase() {
  return app;
}

function getFirestone() {
  return _app["default"].firestore(app);
}