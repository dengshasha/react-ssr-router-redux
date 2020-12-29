import React from 'react'
import ReactDom from 'react-dom'
import App from './app'

ReactDom.render(
    <App initialText="rendered on the client slide."/>,
    document.getElementById('root')
)