import React from 'react'

function AuthHeader(props) {
    let url = "http://localhost:3000/logout"
    const headers = {
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": document.querySelector('[name="csrf-token"]').content,
    }
    const handleClick = () => {
        fetch(url, {
            method: "DELETE",
            headers: headers,
        })
            .then((res) => {
                if (res.status == 204)
                    (window.location.href = '/')
            })
            .catch((err) => setError(err));

    }
    return (
        <div className='flex'>
            <a className='heading' href='/'>Poll-App</a>
            <nav className='flex'>
                <h1 className='link'>{props.loggedInUser}</h1>
                <h1 className='link' onClick={handleClick}>Logout</h1>
            </nav>
        </div>
    )
}

export default AuthHeader
