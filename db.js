// var MongoClient = require('mongodb').MongoClient;
//
// MongoClient.connect("mongodb://localhost:27017/TasksDb", function(err, db) {
//   if(err) { return console.dir(err); }
//   console.log('database connection established!');
//
// });

const mongoose = require('mongoose');
const timestamp = require('mongoose-times');

const dbURL = 'mongodb://localhost:27017/TasksDb';

let TaskSchema = mongoose.Schema({
  title: String,
  body: String
});

TaskSchema.plugin(timestamp);

mongoose.model('Tasks', TaskSchema);

mongoose.connect(dbURL);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database connection established.');
})