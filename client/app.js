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