'use strict'

const electron = require('electron');
const {app} = electron;
const {BrowserWindow} = electron;
const express = require('express');
const application = express();
const db = require('./db');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const tasksRoute = require('./api/routes/tasks');

let win;

function onListening() {
  // win.loadURL('http://127.0.0.1:3000');
  win.loadURL(`file://${__dirname}/index.html`);
}

function createWindow() {

  win = new BrowserWindow({width: 800, height: 600});


  // win.loadURL(`file://${__dirname}/index.html`);
  win.webContents.openDevTools();

  // api routing
  application.set('port', 8000);

  application.use(bodyParser.json());
  application.use(bodyParser.urlencoded({ extended: true }));
  application.use(cors());
  application.use(express.static(path.join(__dirname, '/')));

  application.get('/', function(req, res) {
    res.render('index');
  });



  //connect localhost server with electron
  const server = http.createServer(application);
  server.listen(application.get('port'), function(){
    console.log("Listening on port " + application.get('port') + '...');
  });

  server.on('listening', onListening);

  application.use('/api/tasks', tasksRoute);

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
