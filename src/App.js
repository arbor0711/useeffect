import React, { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [toggle, setToggle] = useState(false);
  const [user, setUser] = useState({});
  const [request, setRequest] = useState(false);
  const [btcData, setBtcData] = useState({});

  const clickHandler = () => setToggle(!toggle);

  const newUser = () => {
    setRequest(!request);
  };

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=1")
      .then((res) => res.json())
      .then((data) => setUser(data.results[0]));
  }, [request]);

  useEffect(() => {
    fetch("http://api.coindesk.com/v1/bpi/currentprice.json")
      .then((res) => res.json())
      .then((jsonData) => setBtcData(jsonData.bpi.USD))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="card">
      <div>
        <h1>Using the useEffect hook</h1>
        <button onClick={clickHandler}>Toggle message</button>
        {toggle && <h2>Welcome to Little Lemon</h2>}
      </div>
      <div>
        <button onClick={newUser}>Get New User</button>
        <p>{user.email} </p>
      </div>
      <div>
        <h2>Current BTC/USD Data:</h2>
        <p>Code: {btcData.code}</p>
        <p>symbol: {btcData.symbol}</p>
        <p>rate: {btcData.rate}</p>
        <p>description: {btcData.description}</p>
        <p>rate_float: {btcData.rate_float}</p>
      </div>
    </div>
  );
}
