'use strict';

const electron = require('electron')
const {app, BrowserWindow} = electron

require('electron-reload')(__dirname);

app.on('ready', () => {
    let win = new BrowserWindow({
        width: 900,
        height: 600
    })
    win.loadURL(`file://${__dirname}/views/index.html`)
})

exports.openWindow = (filename) => {
    let win = new BrowserWindow({
        width:500,
        height: 400
    })
    win.loadURL(`file://${__dirname}/views/${filename}.html`)
}

exports.closeWindow = (window) => {
    window.close()
}
