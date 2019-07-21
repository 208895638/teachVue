const path = require('path');
//import HtmlWebpackPlugin from "html-webpack-plugin";
var htmls = require("html-webpack-plugin");
var webpack = require("webpack")
var {
    CleanWebpackPlugin
} = require("clean-webpack-plugin");
module.exports = {
    //entry: './src/index.js',
    mode: 'development',
    entry: {
        // app: "./src/index",
        // prints: "./src/print.js"
        app:"./src/index.js"
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    devtool: 'inline-source-map',
    output: {
        //filename: 'bundle.js',
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new htmls({
            title: "aaaa"
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: [
                    "file-loader"
                ]
            },
            {
                test: /\.(ttf)$/,
                use: [
                    "file-loader"
                ]
            }
        ]
    }
};