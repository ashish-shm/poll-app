import React from 'react'
import Header from './Header'

function Polls(props) {
    let { polls, loggedInUser } = props
    console.log(polls)
    return (
        <>
            <Header loggedInUser={loggedInUser} />
            <div className='polls-container'>
                <h1 className='poll-heading'>All Polls</h1>
                {polls?.map(poll => {
                    return (
                        <div className='poll-box'>
                            <h1 className='poll-no'>Poll No:{poll.id}</h1>
                            <h1 className='poll-question'>{poll.question}</h1>
                            <ul className='flex'>
                                <li key={'option1'}><button className='vote-btn'>{poll.option1}</button></li>
                                <li key={'option2'}><button className='vote-btn'>{poll.option2}</button></li>
                                <li key={'option3'}><button className='vote-btn'>{poll.option3}</button></li>
                                <li key={'option4'}><button className='vote-btn'>{poll.option4}</button></li>
                            </ul>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Polls
