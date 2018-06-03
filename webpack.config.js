const webpack = require('webpack')
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const extractTextPlugin = require('extract-text-webpack-plugin')
const copyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.[hash].js',
    },
    devServer: {
        contentBase: path.resolve('dist'),
        port: 4040,
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.(scss|sass)$/,
                use: extractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader', 'sass-loader']
                })
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'assets/img/[name].[ext]'
                    }
                }]
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'assets/font/[name].[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './public/index.html'
        }),
        new extractTextPlugin({
            filename: 'styles.css'
        })
    ]
}