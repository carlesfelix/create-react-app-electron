const shell = require('shelljs');

shell.exec('./node_modules/.bin/react-scripts build');

shell.cp('-rf', './src/electron/*', './build');

shell.exec('./node_modules/.bin/electron-builder');
