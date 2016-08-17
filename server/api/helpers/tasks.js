import db from '../../db';
import redis from 'redis';
import bluebird from 'bluebird';

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

let Task = {};

Task.getAll = function (category) {
  return db.lrangeAsync(category, 0, -1);
};

Task.postTask = function (category, task) {
  return db.lpushAsync(category, task);
};

Task.removeTask = function (category, task) {
  console.log('this is removetask', category, task)
  return db.lremAsync(category, 1, task);
};

Task.updateTask = function (category, task, update, taskArr) {
  const index = taskArr.indexOf(task);
  return db.lsetAsync(category, index, update);
};

export default Task;