import React from 'react'

function Polls(props) {
    let { polls } = props
    console.log(polls)
    return (
        <div>
            <h1 className='heading'>Hello pools</h1>
        </div>
    )
}

export default Polls
