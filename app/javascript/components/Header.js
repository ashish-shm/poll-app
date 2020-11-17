import React from 'react'

function Header() {
    return (
        <header className='header'>
            <div className='flex'>
                <h1 className='heading'>Poll-App</h1>
                <nav className='flex'>
                    <a className='link' href='/login'>Login</a>
                    <a className='link' href='/register'>Register</a>
                </nav>
            </div>
        </header>
    )
}

export default Header
