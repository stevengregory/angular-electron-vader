const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let win;

app.on('ready', () => {
  win = new BrowserWindow({
    darkTheme: true,
    height: 300,
    width: 383
  });

  win.loadURL(url.format({
    pathname: 'localhost:4200',
    protocol: 'http:',
    slashes: true
  }));

  win.on('closed', () => {
    win = null;
  });
});
