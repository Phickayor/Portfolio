import React, { useState } from "react";
function BackendTest() {
  // const [data, setData] = React.useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, email, message })
    });
  };

  return (
    <div>
      <form onSubmit={submit}>
        <label>Name</label>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <label>Email</label>
        <input type="text" onChange={(e) => setEmail(e.target.value)}></input>

        <label>Message</label>
        <input type="text" onChange={(e) => setMessage(e.target.value)}></input>

        <input type="submit" value="Test Backend"></input>
      </form>
    </div>
  );
}
export default BackendTest;
