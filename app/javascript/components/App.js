import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LoginPage from './LoginPage'
import Register from './Register'
import HomePage from './HomePage'

function App() {
    return (
        <main>
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={Register} />
            </Switch>
        </main>
    )
}

export default App
