const remote = require('electron').remote
const main = remote.require('./main.js')

var button = document.createElement('button')
button.textContent = 'Configuration'
button.addEventListener('click', () => {
    main.openWindow('configuration')
}, false)

document.body.appendChild(button)