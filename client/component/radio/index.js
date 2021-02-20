import React, {useState} from 'react'
const Radio = (props) => {
    const {
        className,
        id,
        checked: defaultChecked,
        label,
        onChange
    } = props
    const [checked, setCheckedStatus] = useState(defaultChecked)
    const handleChange = (e) => {
        debugger
        setCheckedStatus(e.target.checked)
        onChange(e, e.target.checked)
    }
    return (
        <section className={className}>
            <input 
                id={id} 
                type="radio"
                checked={checked}
                onChange={handleChange}
            />
            <label htmlFor={id}>{label}</label>
        </section>
    )
}

const loop = () => {}
Radio.defaultProps = {
    checked: false,
    className: '',
    onChange:loop
}

export default Radio
