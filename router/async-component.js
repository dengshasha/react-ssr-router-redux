import React, { useEffect, useState } from 'react'

const asyncLoader = (getComponent) => {
    return function() {
        <AsyncComponent getComponent={getComponent}>
            {(Comp) => <Comp />}
        </AsyncComponent>
    }
}   

const AsyncComponent = (props) => {
    const [comp, setComp] = useState(null)
    useEffect(() => {
        const { getComponent } = props
        getComponent().then(res => {
            setComp(res.default)
        })
    }, [])
    if(!comp) return <LoadingComp />
    return props.children(comp)
}

const LoadingComp = () => {
    return (
        <div>
            <h1>
                Loading......
            </h1>
        </div>
    )
}

const ErrorComp = ({error}) => {
    return (
        <div>
            <h1>
                {error}
            </h1>
        </div>
    )
}


export default asyncLoader