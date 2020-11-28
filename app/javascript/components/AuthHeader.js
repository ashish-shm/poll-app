import React, { useState } from "react";
import Constants from "./Constants";

function AuthHeader(props) {
  const url = "http://localhost:3000/logout";
  const { loggedInUser } = props;
  const [error, setError] = useState(null);

  const handleLogOutClick = () => {
    fetch(url, {
      method: "DELETE",
      headers: Constants.Headers,
    })
      .then((res) => {
        if (res.status == 204) window.location.href = "/";
      })
      .catch((err) => setError(err));
  };
  return (
    <div className="flex">
      <a className="heading" href="/">
        Poll-App
      </a>
      <nav className="flex">
        <h1 className="link">{loggedInUser}</h1>
        <h1 className="link" onClick={handleLogOutClick}>
          Logout
        </h1>
      </nav>
    </div>
  );
}

export default AuthHeader;
