import React, { useState } from "react";
import Authorisation from "./Authorisation";
import Header from "./Header";
import Constants from "./Constants";

function NewPoll(props) {
  const { isLoggedIn, loggedInUser } = props;
  const [inputs, setInputs] = useState({});
  const url = window.location.origin + "/polls";

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
        body: JSON.stringify({ poll: inputs }),
      })
        .then((res) => {
          if (res.status == 200) window.location.href = "/polls";
        })
        .catch((err) => setError(err));
    }
  };
  return (
    <>
      <Header loggedInUser={loggedInUser} />

      {isLoggedIn ? (
        <div className="polls-container">
          <form onSubmit={handleSubmit}>
            <div>
              <label>Question</label>
              <input
                type="text"
                name="question"
                onChange={handleInputChange}
                value={inputs.question}
                required
              />
            </div>
            <div>
              <label>Enter option 1</label>
              <input
                type="text"
                name="option1"
                onChange={handleInputChange}
                value={inputs.option1}
                required
              />
            </div>
            <div>
              <label>Enter option 2</label>
              <input
                type="text"
                name="option2"
                onChange={handleInputChange}
                value={inputs.option2}
                required
              />
            </div>
            <div>
              <label>Enter option 3</label>
              <input
                type="text"
                name="option3"
                onChange={handleInputChange}
                value={inputs.option3}
                required
              />
            </div>
            <div>
              <label>Enter option 4</label>
              <input
                type="text"
                name="option4"
                onChange={handleInputChange}
                value={inputs.option4}
                required
              />
            </div>
            <button className="btn" type="submit">
              Create Poll
            </button>
          </form>
        </div>
      ) : (
        <Authorisation />
      )}
    </>
  );
}

export default NewPoll;
