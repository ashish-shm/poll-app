import React, { useState } from "react";
import Constants from "./Constants";

function SinglePoll(props) {
  const { poll } = props;
  const [error, setError] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [data, setData] = useState(null);
  var url = `http://localhost:3000/polls/${poll.id}/votes`;

  var handleClick = async (event) => {
    var optionVal = await event.target.className.split(" ")[1];
    setErrorMsg("");
    fetch(url, {
      method: "POST",
      headers: Constants.Headers,
      body: JSON.stringify({ option: optionVal }),
    })
      .then(async (res) => {
        if (res.status == 403) {
          await setErrorMsg("Already voted");
          return;
        }
        return res.json();
      })
      .then(async (vote) => await setData(vote))
      .catch((err) => setError(err));
  };

  if (data != null)
    var {
      vote_data: { votes },
    } = data;

  return (
    <div className="poll-box">
      <h1 className="poll-no">Poll No:{poll.id}</h1>
      <h1 className="poll-question">{poll.question}</h1>
      <ul className="flex">
        <li>
          <button onClick={handleClick} className="vote-btn option1">
            {poll.option1}
          </button>
        </li>
        <li>
          <button onClick={handleClick} className="vote-btn option2">
            {poll.option2}
          </button>
        </li>
        <li>
          <button onClick={handleClick} className="vote-btn option3">
            {poll.option3}
          </button>
        </li>
        <li>
          <button onClick={handleClick} className="vote-btn option4">
            {poll.option4}
          </button>
        </li>
      </ul>
      <ul className="flex">
        <li className="vote-count">
          {votes ? `${votes.option1} votes` : errorMsg ? errorMsg : null}
        </li>
        <li className="vote-count">
          {votes ? `${votes.option2} votes` : null}
        </li>
        <li className="vote-count">
          {votes ? `${votes.option3} votes` : null}
        </li>
        <li className="vote-count">
          {votes ? `${votes.option4} votes` : null}
        </li>
      </ul>
    </div>
  );
}

export default SinglePoll;
