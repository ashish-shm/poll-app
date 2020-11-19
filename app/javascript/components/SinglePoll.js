import React from 'react'

function SinglePoll(props) {
    let { poll } = props
    return (
        <div className='poll-box'>
            <h1 className='poll-no'>Poll No:{poll.id}</h1>
            <h1 className='poll-question'>{poll.question}</h1>
            <ul className='flex'>
                <li><button className='vote-btn'>{poll.option1}</button></li>
                <li><button className='vote-btn'>{poll.option2}</button></li>
                <li><button className='vote-btn'>{poll.option3}</button></li>
                <li><button className='vote-btn'>{poll.option4}</button></li>
            </ul>
        </div>
    )
}

export default SinglePoll
