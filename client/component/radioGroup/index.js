
import React from 'react'
import RadioContext from './context'
const RadioGroup = (props) => {
    const {
        children
    } = props

    const handleChange = (e) => {
        debugger
    }
    const childrenWithProps = React.Children.map(children, child => React.cloneElement(child, 
        {
            onChange: handleChange
        }
    ));
    return (
        <RadioContext.Provider value={{
            onChange: handleChange
        }}>
            {childrenWithProps}
        </RadioContext.Provider>
    )
}

export default RadioGroup