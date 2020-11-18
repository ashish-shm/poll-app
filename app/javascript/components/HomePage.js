import React from 'react'
import Header from './Header'

function HomePage(props) {
    let { loggedInUser } = props
    return (
        <>
            <Header loggedInUser={loggedInUser} />
            <div className='hero-section'>
                <p className='hero-text'>Welcome to Poll App!</p>
                {loggedInUser ?
                    <><a className='link' href='/polls/new'>Create a poll!</a>
                        <a className='link' href='/login'>Cast a vote!</a></>
                    : <p className='hero-text'> <a className='hero-link' href='/login'> Login </a>/<a className='hero-link' href='/register'> Register </a> to start casting votes on the Poll-App</p>}

            </div>
        </>
    )
}

export default HomePage
