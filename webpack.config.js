var path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'um.js',
        path: path.resolve(__dirname, 'lib')
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            }]
        }, {
            test: /\.html$/,
            use: [{
                loader: 'html-loader',
                options: {
                    minimize: true
                }
            }],
        }]
    }
};