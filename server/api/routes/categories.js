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
  db.keysAsync('*')
    .then(function(response) {
      res.send(response);
    });
  // console.log('inside fetch');
  // db.keys('*', function(err, response) {
  //   console.log('keys response', response);
  //   response.pop();
  //   if (err) {
  //     throw err;
  //   } else {
  //     if (response.length === 0) {
  //       console.log('in the length is 0');
  //       res.send([]);
  //     } else {
  //       eachSeries(response, function(item, callback) {
  //         db.lrangeAsync(item, 0, -1).then(function(res) {
  //           responseArr.push(res);
  //           callback();
  //         });
  //       }, function(err, result) {
  //         console.log('responseArr', responseArr);
  //         res.send(responseArr);
  //       });
  //     }
  //   }
  // });
});

router.post('/', function (req, res) {
  console.log(req.body.category);
  db.lpushAsync(req.body.category, '')
    .then(function(response) {
      console.log('this is the response', response);
      res.json({
        success: true
      })
    })
  // db.lset([req.body.name, "name", req.body.name, "content", req.body.content, "due", req.body.due], function (err, response) {
  //   if (err) {
  //     throw err;
  //   } else {
  //     console.log(response);
  //     res.json({
  //       success: true
  //     });
  //   }
  // });
});

module.exports = router;