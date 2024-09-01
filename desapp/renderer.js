const { webContents } = require('electron');

const webview = document.createElement('webview');
webview.src = 'http://127.0.0.1:8000/admin';
document.body.appendChild(webview);