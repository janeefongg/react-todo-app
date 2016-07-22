var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/TasksDb", function(err, db) {
  if(err) { return console.dir(err); }
  console.log('database connection established!');

});