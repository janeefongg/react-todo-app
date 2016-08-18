import db from '../../db';
import redis from 'redis';
import bluebird from 'bluebird';

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

let Category = {};

Category.getAll = () => {
  return db.keysAsync('*');
};

Category.postCategory = (category) => {
  return db.lpushAsync(category, '');
};

export default Category;