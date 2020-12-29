import React from 'react'
import { config } from '../package.json'

const Html = ({children, initialState, scripts}) => {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>React SSR With React-router and redux</title>
            </head>
            <body>
                <div 
                    dangerouslySetInnerHTML={{__html: children}}
                    id="root">
                </div>
                {initialState &&
                    <script 
                        dangerouslySetInnerHTML={{
                            __html: `window.initialData = ${JSON.stringify(initialState)}`
                        }} />
                }
                {
                    scripts.map((item,index) => <script key={index} src={getSource(item)}/>)
                }
            </body>
        </html>
    )
};

function getSource(item) {
    return `http://localhost:${config.clientPort}/${item}`
}
export default Html