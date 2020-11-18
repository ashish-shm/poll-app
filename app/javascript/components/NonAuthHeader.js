import React from 'react'

function NonAuthHeader() {
    return (
        <div className='flex'>
            <a className='heading' href='/'>Poll-App</a>
            <nav className='flex'>
                <a className='link' href='/login'>Login</a>
                <a className='link' href='/register'>Register</a>

            </nav>
        </div>
    )
}

export default NonAuthHeader
