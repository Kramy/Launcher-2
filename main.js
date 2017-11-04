const electron = require('electron')
const {app, BrowserWindow} = electron

app.on('ready', () => {
    let win = new BrowserWindow({
        width: 900,
        height: 600
    })
    win.loadURL(`file://${__dirname}/index.html`)
})

exports.openWindow = (filename) => {
    let win = new BrowserWindow({
        width:400,
        height: 200
    })
    win.loadURL(`file://${__dirname}/${filename}.html`)
}

exports.closeWindow = (window) => {
    window.close()
}
