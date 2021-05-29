var path = require('path');

module.exports = {
    entry: './binary.js',
    // resolve: {
    //     alias: {
    //       core: path.join(__dirname, 'core'),
    //     },
    // },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bunlde.js'
    }
}