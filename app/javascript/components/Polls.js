import React from 'react'
import Header from './Header'

function Polls(props) {
    let { polls, loggedInUser } = props
    console.log(polls)
    return (
        <>
            <Header loggedInUser={loggedInUser} />
        </>
    )
}

export default Polls
