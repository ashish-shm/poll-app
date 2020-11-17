import React from 'react'

function AuthHeader(props) {
    return (
        <div className='flex'>
            <h1 className='heading'>Poll-App</h1>
            <nav className='flex'>
                <a className='link' href='#'>{props.loggedInUser}</a>

            </nav>
        </div>
    )
}

export default AuthHeader
