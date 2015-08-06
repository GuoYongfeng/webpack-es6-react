var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');

var config = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'app/main.js')],
    resolve: {
        alias: {
          'react': pathToReact
        }
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
        	{ test: /\.(jsx|js)$/, loader: 'babel' },
        	{ test: /\.(less|css)$/, loader: 'style!css!less' },
        	{ test: /\.(png|jpg)$/, loader: 'url?limit=25000' }
        ],
        noParse: [pathToReact]
    }    
};

module.exports = config;