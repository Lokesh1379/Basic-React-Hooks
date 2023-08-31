import React, { useContext } from "react";
import { InitialState } from ".";

const HomeComponent = () => {
    const state = useContext(InitialState);
    const { count, setCount } = state
    const Increment = () => {
        setCount((count) => count + 1);

    }
    const Decrement = () => {
        setCount((count) => count > 0 ? count - 1 : count)
    }
    return <>
        <h1>{count}</h1>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
    </>
}

export default HomeComponent;