const express = require('express');
const router = express.Router();
const db = require('../../db');
const redis = require('redis');
// var redis = require('redis');
import bluebird from 'bluebird';
import Task from '../helpers/tasks';

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);


router.get('/', function(req, res) {
  if (!req.query.category) {
    res.send()
  } else {
    Task.getAll(req.query.category)
      .then(function (response) {
        res.send(response);
      });
  }
});

router.post('/', function(req, res) {
  Task.postTask(req.body.category, req.body.task)
    .then(function(response) {
      res.json({
        success: true
      });
    });
});

router.delete('/', function(req, res) {
  Task.removeTask(category, 1, task)
    .then(function(response) {
      res.json({
        success: true
      })
    })
});

router.put('/', function(req, res) {
  console.log('inside put req', req.body.params);
  Task.getAll(req.body.params.category)
    .then(function(response) {
      Task.updateTask(req.body.params.category, req.body.params.task, req.body.params.update, response)
        .then(function(result) {
          res.json({
            success: true
          })
        })
    })
});

module.exports = router;