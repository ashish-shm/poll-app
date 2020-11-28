import React, { useState } from "react";
import Header from "./Header";
import Constants from "./Constants";

function LoginPage(props) {
  const [inputs, setInputs] = useState({});
  const { loggedInUser } = props;
  const url = "http://localhost:3000/login";

  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
      fetch(url, {
        method: "POST",
        headers: Constants.Headers,
        body: JSON.stringify({ session: inputs }),
      })
        .then((res) => {
          if (res.status == 204) window.location.href = "/";
        })
        .catch((err) => setError(err));
    }
  };
  return (
    <>
      <Header loggedInUser={loggedInUser} />
      <div className="polls-container">
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              onChange={handleInputChange}
              value={inputs.email}
              required
            />
          </div>
          <div className="form-control">
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={handleInputChange}
              value={inputs.password}
              required
            />
          </div>

          <button className="btn" type="submit">
            Sign In
          </button>
        </form>
      </div>
    </>
  );
}

export default LoginPage;
