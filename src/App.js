import React, { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [toggle, setToggle] = useState(false);
  const [user, setUser] = useState({});
  const [request, setRequest] = useState(false);

  const clickHandler = () => setToggle(!toggle);

  const newUser = () => {
    setRequest(!request);
  };

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=1")
      .then((res) => res.json())
      .then((data) => setUser(data.results[0]));
  }, [request]);

  return (
    <div className="card">
      <h1>Using the useEffect hook</h1>
      <button onClick={clickHandler}>Toggle message</button>
      {toggle && <h2>Welcome to Little Lemon</h2>}
      <button onClick={newUser}>Get New User</button>
      <p>{user.email} </p>
    </div>
  );
}
