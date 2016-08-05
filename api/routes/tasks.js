'use strict'

const express = require('express');
var router = express.Router();
var db = require('../../db');

router.post('/', function (req, res) {
  // db.hmset(["key", "test keys 1", "test val 1", "test keys 2", "test val 2"], function (err, res) {
  //   console.log('res', res);
  // });
  res.send('hello world');
});

module.exports = router;