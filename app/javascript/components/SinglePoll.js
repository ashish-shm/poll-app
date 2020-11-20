import React, { useState } from 'react'

function SinglePoll(props) {
    let { poll } = props
    let [error, setError] = useState("")
    // let [option, setOption] = useState("")
    // let [voteData, setVoteData] = useState("")
    const [data, setData] = useState(null)
    let url = `http://localhost:3000/polls/${poll.id}/votes`
    console.log(url)
    const headers = {
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": document.querySelector('[name="csrf-token"]').content,
    }

    const handleClick = async (event) => {
        let optionVal = await event.target.className.split(" ")[1]

        // await setOption(event.target.className && event.target.className.split(" ")[1])
        await fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify({ option: optionVal }),
        })
            .then((res) => res.json()

            )
            .then((vote) => setData(vote))
            .catch((err) => setError(err));
        console.log(error, 'from error')
        console.log(data)
    }

    return (
        <div className='poll-box'>
            <h1 className='poll-no'>Poll No:{poll.id}</h1>
            <h1 className='poll-question'>{poll.question}</h1>
            <ul className='flex'>
                <li><button onClick={handleClick} className='vote-btn option1'>{poll.option1}</button></li>
                <li><button onClick={handleClick} className='vote-btn option2'>{poll.option2}</button></li>
                <li><button onClick={handleClick} className='vote-btn option3'>{poll.option3}</button></li>
                <li><button onClick={handleClick} className='vote-btn option4'>{poll.option4}</button></li>
            </ul>
            <ul className='flex'>
                <li className='vote-count'>{poll.option1}</li>
                <li className='vote-count'>{poll.option1}</li>
                <li className='vote-count'>{poll.option1}</li>
                <li className='vote-count'>{poll.option1}</li>
            </ul>
        </div>
    )
}

export default SinglePoll
