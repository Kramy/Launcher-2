const remote = require('electron').remote
const main = remote.require('./main.js')
require('./configuration-renderer.js');

var button = document.createElement('button')
button.textContent = 'Close'
button.addEventListener('click', () => {
    var window = remote.getCurrentWindow()
    main.closeWindow(window)
}, false)

document.body.appendChild(button)