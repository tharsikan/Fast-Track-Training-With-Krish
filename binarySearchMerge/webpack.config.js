var path = require('path');

module.exports = {
    entry: './binary.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bunlde.js'
    }
}