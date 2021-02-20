
import React from 'react'
import RadioContext from './context'
const RadioGroup = (props) => {
    const {
        children
    } = props

    const handleChange = (e, selectedValue) => {
        console.log(selectedValue)
    }
    return (
        <RadioContext.Provider value={{
            onChange: handleChange
        }}>
            {children}
        </RadioContext.Provider>
    )
}

export default RadioGroup