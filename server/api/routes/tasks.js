const express = require('express');
const router = express.Router();
const db = require('../../db');
import eachSeries from 'async/eachSeries';

var redis = require('redis');
import bluebird from 'bluebird';
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);


router.get('/', function(req, res) {
  console.log('inside get request from tasks', req.query.category)
  db.lrangeAsync(req.query.category, 0, -1)
    .then(function(response) {
      res.send(response);
    });
});

router.post('/', function(req, res) {
  console.log('inside post request from tasks')
})

module.exports = router;