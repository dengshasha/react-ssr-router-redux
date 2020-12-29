##　同构
### 准备工作
#### 本机
node(v12.*)
#### 服务端
koa
#### 公共
react
react-dom
webpack
webpack-cli
@babel/core 
@babel/cli 
@babel/preset-env
@babel/preset-react

服务端需要webpack吗？
答：要做服务端渲染，就必须依赖webpack。

### 把客户端跑起来
目录结构：
-client
-----app.js
-----index.html
-webpack.client.js
-package.json

webpack.client.js
```
const path = require('path')
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
    // 配置loader
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                loader: 'babel-loader',
                query: {
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
    }
}
module.exports = clientConfig;
```
