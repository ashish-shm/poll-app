import React, { useState } from "react";

function NewPoll(props) {
    const { isLoggedIn } = props
    const [inputs, setInputs] = useState({});
    let url = "http://localhost:3000/polls"
    const headers = {
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": document.querySelector('[name="csrf-token"]').content,
    }

    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
    }

    const handleSubmit = (event) => {
        if (event) {
            event.preventDefault();
            fetch(url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify({ poll: inputs }),
            })
                .then((res) => {
                    if (res.status == 200)
                        (window.location.href = '/polls')
                })
                .catch((err) => setError(err));
        }
    }
    return (
        <>
            {isLoggedIn ? <form onSubmit={handleSubmit}>
                <div>
                    <label>Question</label>
                    <input type="text" name="question" onChange={handleInputChange} value={inputs.question} required />
                </div>
                <div>
                    <label>Enter option 1</label>
                    <input type="text" name="option1" onChange={handleInputChange} value={inputs.option1} required />
                </div>
                <div>
                    <label>Enter option 2</label>
                    <input type="text" name="option2" onChange={handleInputChange} value={inputs.option2} />
                </div>
                <div>
                    <label>Enter option 3</label>
                    <input type="text" name="option3" onChange={handleInputChange} value={inputs.option3} />
                </div>
                <div>
                    <label>Enter option 4</label>
                    <input type="text" name="option4" onChange={handleInputChange} value={inputs.option4} />
                </div>
                <button type="submit">Create Poll</button>
            </form>
                : <div className='Error'>
                    <p className='heading'>You need to login before visiting this page</p>
                    <a href='/login' className='link'>Login to you account</a></div>}



        </>
    );
}

export default NewPoll;