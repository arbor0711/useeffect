import React, { useEffect, useState } from "react";

export default function App() {
  const [toggle, setToggle] = useState(false);

  const clickHandler = () => setToggle(!toggle);

  return (
    <div>
      <h1>Using the useEffect hook</h1>
      <button onClick={clickHandler}>Toggle message</button>
      {toggle && <h2>Welcome to Little Lemon</h2>}
    </div>
  );
}
