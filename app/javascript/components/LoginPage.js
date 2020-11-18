import React, { useState } from "react";

function LoginPage() {
    const [inputs, setInputs] = useState({});
    let url = "http://localhost:3000/login"
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
                body: JSON.stringify({ session: inputs }),
            })
                .then((res) => {
                    if (res.status == 204)
                        (window.location.href = '/')
                })
                .catch((err) => setError(err));
        }
    }
    return (
        <>

            <form onSubmit={handleSubmit}>

                <div>
                    <label>Email Address</label>
                    <input type="email" name="email" onChange={handleInputChange} value={inputs.email} required />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" onChange={handleInputChange} value={inputs.password} />
                </div>

                <button type="submit">Sign In</button>
            </form>



        </>
    );
}

export default LoginPage;