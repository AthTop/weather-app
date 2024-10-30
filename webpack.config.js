const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    devServer: {
        static: './dist',
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i, // Check for any .css files
                use: ['style-loader', 'css-loader'], // Use style-loader and css-loader
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
};

