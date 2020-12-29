import React, { useState } from 'react'

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

export default App