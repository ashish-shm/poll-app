import React from 'react'
import Header from './Header'
import SinglePoll from './SinglePoll'

function Polls(props) {
    let { polls, loggedInUser } = props
    console.log(polls)
    return (
        <>
            <Header loggedInUser={loggedInUser} />
            <div className='polls-container'>
                <h1 className='poll-heading'>All Polls</h1>
                {polls?.map(el => {
                    return (
                        <SinglePoll key={el.id} poll={el} />
                    )
                })}
            </div>
        </>
    )
}

export default Polls
