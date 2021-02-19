## 同构
### 准备工作
#### 本机
node(v12.*)
#### 服务端
koa
#### 公共
- react
- react-dom
- webpack
- webpack-cli
- @babel/core 
- @babel/cli 
- @babel/preset-env
- @babel/preset-react

服务端需要webpack吗？

答：看你的服务端运行的代码是源码还是编译之后的代码，如果是源码，一般是需要webpack的。

### 把客户端跑起来
目录结构：
```
-client
-----app.js
-----index.html
-webpack.client.js
-package.json
```
webpack.client.js
```
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
```
client/app.js
```
import React, { useState } from 'react'
import ReactDom from 'react-dom'

const App = ({initialText}) => {
    const [ text, setText ] = useState(initialText)
    
    const handleClick = () => {
        setText('changed by client event.')
    }

    return (
        <div>
            <p onClick={handleClick}>{text}</p>
        </div>
    )
}

ReactDom.render(
    <App initialText="rendered on the client slide."/>,
    document.getElementById('root')
)
```
client/index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React SSR With React-router and redux</title>
</head>
<body>
    <div id="root"></div>
</body>
</html>
```
package.json
```
  "scripts": {
    "start:dev": "webpack serve --config webpack.client.js"
  },
```
