const express = require('express');
const router = express.Router();
const db = require('../../db');
import eachSeries from 'async/eachSeries';

var redis = require('redis');
import bluebird from 'bluebird';
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);


router.get('/', function(req, res) {
  if (!req.query.category) {
    res.send()
  } else {
    console.log('inside get request from tasks', req.query.category)
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
      console.log('this is response after posting task', response)
      res.json({
        success: true
      });
    });
});

router.delete('/', function(req, res) {
  console.log('inside delete task')
})

module.exports = router;