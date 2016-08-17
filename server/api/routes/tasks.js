const express = require('express');
const router = express.Router();
const db = require('../../db');
const redis = require('redis');
// var redis = require('redis');
import bluebird from 'bluebird';
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);


router.get('/', function(req, res) {
  if (!req.query.category) {
    res.send()
  } else {
    db.lrangeAsync(req.query.category, 0, -1)
      .then(function (response) {
        res.send(response);
      });
  }
  // db.lrange(req.query.category, 0, -1, function(err, response) {
  //   console.log('hi', db.lrangeAsync)
  // })
});

router.post('/', function(req, res) {
  // console.log('inside post request from tasks', req)
  db.lpushAsync(req.body.category, req.body.task)
    .then(function(response) {
      res.json({
        success: true
      });
    });
});

router.delete('/', function(req, res) {
  db.lremAsync(req.query.category, 1, req.query.task)
    .then(function(response) {
      res.json({
        success: true
      })
    })
});

router.put('/', function(req, res) {
  console.log('inside put req', req.body);
})

module.exports = router;