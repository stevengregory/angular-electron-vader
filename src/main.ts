import {app, BrowserWindow} from 'electron';
let win;

app.on('ready', () => {
  win = new BrowserWindow({
    darkTheme: true,
    title: 'Noooooo!'
  });

  app.setBadgeCount(1);
})