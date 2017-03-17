var chokidar = require('chokidar');
var exec = require('child_process').exec;

exec('node_modules/.bin/ws -d ./dist -p 8000', (err) => {
});

var compile = () => {    
    exec('node_modules/.bin/rollup -c rollup.config.js', (err) => {});
    exec('node_modules/.bin/copyfiles ./src/**/*.html dist -f', (err) => {});
    exec('node_modules/.bin/copyfiles ./src/**/*.css dist -f', (err) => {});
};

chokidar.watch(['./src/**/*.ts', './src/**/*.css', './src/**/*.html'])
    .on('add', compile)
    .on('change',compile);


