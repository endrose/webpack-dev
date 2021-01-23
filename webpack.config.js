const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    entry: './src/js/index.js',
    mode: "development",
    devServer: {
        open: true
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader","postcss-loader"],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin({
            verbose: true
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        })
    ],
    
};