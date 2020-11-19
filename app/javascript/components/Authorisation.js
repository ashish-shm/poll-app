import React from 'react'
import Header from './Header'

function Authorisation() {
    return (
        <>
            <Header />
            <div className='polls-container'>
                <h1 className='poll-heading'>Error</h1>
                <p className='hero-text'> <a className='hero-link' href='/login'> Login </a>/<a className='hero-link' href='/register'> Register </a> to start casting votes on the Poll-App</p>


            </div>
        </>
    )
}

export default Authorisation
