import React from 'react'

function NonAuthHeader() {
    return (
        <div className='flex'>
            <h1 className='heading'>Poll-App</h1>
            <nav className='flex'>
                <a className='link' href='/login'>Login</a>
                <a className='link' href='/register'>Register</a>

            </nav>
        </div>
    )
}

export default NonAuthHeader
