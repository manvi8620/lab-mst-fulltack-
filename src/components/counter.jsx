import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container">

      <h1 className="title">✨ Smart Counter App</h1>

      <p className="student">
        <strong>Name:</strong> Manvi | <strong>UID:</strong> 23BAI70279
      </p>

      <div className="counter-box">
        <h2 className="count">{count}</h2>

        <div className="buttons">
          <button className="btn add" onClick={increment}>➕ Increase</button>
          <button className="btn minus" onClick={decrement}>➖ Decrease</button>
          <button className="btn reset" onClick={reset}>🔄 Reset</button>
        </div>
      </div>

    </div>
  );
}

export default Counter;