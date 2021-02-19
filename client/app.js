import React from 'react'
import { Route, Switch } from 'react-router-dom'
import routesConfig from '../router/route-config'

const App = ({component}) => {
    return (
        <Switch>
        {
            routesConfig.map((route) => (
                <Route 
                    key={route.path}
                    {...route}
                    component={component}
                />
            ))
        }
        </Switch>
    )
}

export default App