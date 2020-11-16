const shell = require('shelljs');

shell.exec(`${__dirname}/../node_modules/.bin/react-scripts build`);

shell.cp('-r', `${__dirname}/../src/electron/*`, `${__dirname}/../build/`);

shell.exec(`${__dirname}/../node_modules/.bin/electron-builder`);
