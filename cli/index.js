#!/usr/bin/env node

const os = require('os');

const { execFile:exec } = require('child_process');

var fileName = 'main';

fileName = `./cli/main-${os.platform}-${os.arch}`

switch (os.platform()) {
    case 'win32':
        if(os.arch() === "x64") {
            fileName = '.\\cli\\main-windows-amd64.exe'
        } else {
            fileName = '.\\cli\\main-windows-386.exe'
        }
        break;

    case 'linux':
        os.arch() === 'x64' ? fileName = './cli/main-linux-amd64' : (os.arch() === "arm" ? fileName = './cli/main-linux-arm' : fileName = './cli/main-linux-386')
        break;

    default:
        console.warn("Platform not yet supported")
        process.exit(1)
        break;
}

/* if (os.platform() == 'win32') {
    fileName = '.\\cli\\main-windows-amd64.exe';
}
 */
exec(fileName, process.argv.slice(2), function (err, data) {
    err && console.log(err)
    console.log(data.toString());
})