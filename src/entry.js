const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

require('dotenv').config();
require('electron-reload')(__dirname, {
  electron: path.join(__dirname, '../node_modules', '.bin', 'electron')
});

let win;

app.on('ready', () => {
  win = new BrowserWindow({
    darkTheme: true,
    height: 300,
    width: 383
  });

  if (process.env.PACKAGE === 'true') {
    win.loadURL(url.format({
      pathname: path.join(__dirname, '../dist/index.html'),
      protocol: 'file:',
      slashes: true
    }));
  } else {
    win.loadURL(url.format({
      pathname: process.env.HOST,
      protocol: 'http:',
      slashes: true
    }));
  }

  win.on('closed', () => {
    win = null;
  });
});
