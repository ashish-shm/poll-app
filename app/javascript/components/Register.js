import React, { useState } from "react";

function Register() {
    const [inputs, setInputs] = useState({});
    let url = "http://localhost:3000/register"
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
                body: JSON.stringify({ user: inputs }),
            })
                .then((res) => {
                    if (res.status == 200)
                        (window.location.href = '/')
                })
                .catch((err) => setError(err));
        }
    }
    return (
        <>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" onChange={handleInputChange} value={inputs.name} required />
                </div>
                <div>
                    <label>Email Address</label>
                    <input type="email" name="email" onChange={handleInputChange} value={inputs.email} required />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" onChange={handleInputChange} value={inputs.password} />
                </div>
                <div>
                    <label>Re-enter Password</label>
                    <input type="password" name="password_confirmation" onChange={handleInputChange} value={inputs.password_confirmation} />
                </div>
                <button type="submit">Sign Up</button>
            </form>



        </>
    );
}

export default Register;