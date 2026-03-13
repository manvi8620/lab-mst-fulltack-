import React, { useState } from "react";
import "./Counter.css";

function Counter(){

const [count,setCount]=useState(0);

const increment=()=>{
setCount(count+1);
}

const decrement=()=>{
setCount(count-1);
}

const reset=()=>{
setCount(0);
}

return(

<div className="counter-container">

<h2 className="heading">
Counter App Made by Manvi | UID: 23BAI70279
</h2>

<div className="counter-box">

<h1 className="title">Counter App</h1>

<h2 className="counter-value">{count}</h2>

<div className="btn-container">

<button className="increment" onClick={increment}>Increment</button>

<button className="decrement" onClick={decrement}>Decrement</button>

<button className="reset" onClick={reset}>Reset</button>

</div>

</div>

</div>

)

}

export default Counter;