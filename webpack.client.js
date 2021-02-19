const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const commonConfig = require('./webpack.common')
const { config } = require('./package.json') 
const clientConfig = {
    ...commonConfig,
    mode: 'development',
    entry: {
        client: [
            '@babel/polyfill',
            './client/index.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'dist'),
        port: config.clientPort
    },
    // 选择一种 source map 格式来增强调试过程。不同的值会明显影响到构建(build)和重新构建(rebuild)的速度。
    devtool: 'eval-cheap-source-map',
    // 优化配置，主要针对公共包的处理
    optimization: {
        splitChunks: {
            cacheGroups: {
                default: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'app',
                    chunks: 'all'
                }
            }
        }
    },
    // 配置plugin
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'client', 'index.html')
        })
    ]
}
module.exports = clientConfig;