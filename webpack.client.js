const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const clientConfig = {
    mode: 'development',
    entry: {
        client: [
            '@babel/polyfill',
            './client/app.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 4000
    },
    // 配置loader
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        "@babel/preset-env",
                        "@babel/preset-react"
                    ]
                }
            }
        ]
    },
    // 选择一种 source map 格式来增强调试过程。不同的值会明显影响到构建(build)和重新构建(rebuild)的速度。
    devtool: 'eval-cheap-source-map',
    // 优化配置，主要针对公共包的处理
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
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