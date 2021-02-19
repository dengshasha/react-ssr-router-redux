import ReactDOMServer from 'react-dom/server'
import React from 'react'
import Koa from 'koa'
import Html from './html'
import App from '../client/app'
import { config } from '../package.json'
import { StaticRouter } from 'react-router-dom'

const app = new Koa()

app.use(async ctx => {
    const scripts = ['app.js', 'client.js']
    const appContent = ReactDOMServer.renderToString(
        <StaticRouter>
            <App initialText={"render on server slide."}/>
        </StaticRouter>
        
    )
    const html = ReactDOMServer.renderToString(
        <Html
            scripts={scripts}
            children={appContent}
        />
    )
    ctx.body = `<!DOCTYPE html>${html}`;
});

app.on('error', (e) => {
    console.log('服务出错：', e);
})

app.listen(config.serverPort)

console.log('server is start .',`http://localhost:${config.serverPort}`);