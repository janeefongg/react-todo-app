const redis = require('redis');
const client = redis.createClient();

client.on('error', function (err) {
  console.log("Error: ", err);
});

client.on('connect', function () {
  console.log('Database connection established!');
});
