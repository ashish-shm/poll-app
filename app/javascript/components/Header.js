import React from 'react'
import AuthHeader from './AuthHeader'
import NonAuthHeader from './NonAuthHeader'

function Header(props) {
    let { loggedInUser } = props

    return (
        <header className='header'>
            {loggedInUser ? <AuthHeader loggedInUser={loggedInUser.name} /> : <NonAuthHeader />}
        </header>
    )
}

export default Header
