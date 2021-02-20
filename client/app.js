import React, { useState } from 'react'
import RadioGroup from './component/radioGroup'
import Radio from './component/radio'

const optionList = [
    {
        label: 'male',
        checked: true,
        id: 'GENDER_MALE'
    },
    {
        label: 'female',
        checked: false,
        id: 'GENDER_FEMALE'
    },
]

const App = ({initialText}) => {
    const [ text, setText ] = useState(initialText)
    
    const handleClick = () => {
        setText('changed by client event.')
    }

    return (
        <div>
            <p onClick={handleClick}>{text}</p>
            <form>
                <Input />
                <RadioGroup>
                    {optionList.map(option => (
                        <Radio {...option} key={option.id}/>
                    ))}
                </RadioGroup>
            </form>
        </div>
    )
}

const Input = ({name}) => {
    return (
        <section>
            <label htmlFor={name}></label>
            <input id={name} />
        </section>
    )
}

export default App