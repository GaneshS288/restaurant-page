const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : {
        index : './src/index.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(woff|woff2|ttf|otf|eot)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(jpg|jpeg|gif|png|svg)$/i,
                type: 'asset/resource'
            },
        ]
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './dist'),
        clean: true,
    }
}