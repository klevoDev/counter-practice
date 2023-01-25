import React, { useState } from "react";
import "./App.css";
import "./1.jpg";

function App() {

  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(count - count);
  };

  return (
    <>
      <div className="main_div">
        <div className="main_center">
          <h1>{count}</h1>
          <div className="button_div">
            <button onClick={plus}>Plus</button>
            <button onClick={minus}>Minus</button>
            <button onClick={reset}>Reset</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
