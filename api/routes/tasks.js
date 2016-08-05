'use strict'

const express = require('express');
var router = express.Router();
var db = require('../../db');

router.get('/', function (req, res) {
  db.hgetall('tasks', function(err, response) {
    if (err) {
      // console.log('error: ', err);
      throw err;
    } else {
      if (!response) {
        res.send([]);
      } else {
        res.send(response);
      }
    }
  });
});

module.exports = router;