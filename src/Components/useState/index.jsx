import React, { useState } from "react";

const UseStateHook = () => {

    const [state, setState] = useState("Your Name");
    const [count, setCount] = useState(0)
    const nameHandler = ({ target: { value } }) => {

        setState(value);
    }

    const IncrementHandler = () => {
        setCount((count) => count + 1)
    }
    const DecrementHandler = () => {
        setCount((count) => count > 0 ? count - 1 : count)
    }
    return <>
        <input type="text" placeholder="Enter Your Name" onChange={nameHandler} value={state} />
        <h2>Entered Name is :{state}</h2>



        <h2>{count}</h2>
        <button onClick={IncrementHandler}>
            Increment
        </button>
        <button onClick={DecrementHandler}>
            Decrement
        </button>
    </>
}

export default UseStateHook;