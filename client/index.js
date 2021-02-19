import React from 'react'
import ReactDom from 'react-dom'
import App from './app'
import { BrowserRouter } from 'react-router-dom'
import routesConfig from '../router/route-config'
import { matchRoutes } from 'react-router-config'

function clientRender() {
    const matchResult = matchRoutes(routesConfig, window.location.pathname);
    console.log(matchResult)
    if(matchResult && matchResult[0]) {
        const { route } = matchResult[0]
        route.component().then(comp => {
            // route.component = comp.default
            console.log(routesConfig)
            renderDOM(comp.default)
        })
    }
}

function renderDOM(component) {
    ReactDom.render(
        <BrowserRouter>
            <App component={component}/>
        </BrowserRouter>,
        document.getElementById('root')
    )
}

clientRender()