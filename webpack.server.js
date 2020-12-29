const path = require('path')
// node端需要忽略的文件处理
const nodeExternals = require('webpack-node-externals')

const commonConfig = require('./webpack.common')

const serverConfig = {
    ...commonConfig,
    mode: 'development',
    entry: {
        server: [
            '@babel/polyfill',
            './server/index.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.js'
    },
    target: 'node',
    externals: [nodeExternals()]
}

module.exports = serverConfig