// var MongoClient = require('mongodb').MongoClient;
//
// MongoClient.connect("mongodb://localhost:27017/TasksDb", function(err, db) {
//   if(err) { return console.dir(err); }
//   console.log('database connection established!');
//
// });

var mongoose = require('mongoose');
var timestamp = require('mongoose-times');

var dbURL = 'mongodb://localhost:27017/TasksDb';

var TaskSchema = mongoose.Schema({
  title: String,
  body: String
});

TaskSchema.plugin(timestamp);

mongoose.model('Tasks', TaskSchema);

mongoose.connect(dbURL);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database connection established.');
})