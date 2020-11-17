import React from 'react'
import Header from './Header'

function HomePage() {
    return (
        <>
            <Header />
            <div className='hero-section'>
                <p className='hero-text'>Welcome to Polls App!</p>
                <p className='hero-text'> Login/Register to start casting votes on the Poll-App</p>
            </div>
        </>
    )
}

export default HomePage
