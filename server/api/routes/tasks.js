const express = require('express');
const router = express.Router();
const db = require('../../db');
import eachSeries from 'async/eachSeries';

var redis = require('redis');
import bluebird from 'bluebird';
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);


router.get('/', function (req, res) {
  var responseArr = [];
  db.keys('*', function(err, response) {
    response.pop();
    if (err) {
      throw err;
    } else {
      if (response.length === 0) {
        console.log('in the length is 0');
        res.send([]);
      } else {
        eachSeries(response, function(item, callback) {
          db.hgetallAsync(item).then(function(res) {
            responseArr.push(res);
            callback();
          });
        }, function(err, result) {
          // console.log('responseArr', responseArr);
          res.send(responseArr);
        });
      }
    }
  });
});

router.post('/', function (req, res) {
  console.log(req.body)
  db.hmset([req.body.name, "name", req.body.name, "content", req.body.content, "due", req.body.due], function (err, response) {
    if (err) {
      throw err;
    } else {
      console.log(response);
      res.json({
        success: true
      });
    }
  });
});

module.exports = router;