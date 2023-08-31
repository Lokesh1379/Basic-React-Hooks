import React, { useReducer } from "react";
const Reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "Increment":
            return { count: state.count + payload };
        case "Decrement":
            return state.count > 0 ? { count: state.count - payload } : state
        default:
            return state;
    }
}
const InitialState = {
    count: 0
}
const UseReducerHook = () => {
    const [state, dispatch] = useReducer(Reducer, InitialState)
    return <>
        <h2>{state.count}</h2>
        <button onClick={() => {
            dispatch({ type: "Increment", payload: 1 })
        }}>Increment</button>
        <button
            onClick={() => {
                dispatch({ type: "Decrement", payload: 1 })
            }}
        >Decrement</button>
    </>
}

export default UseReducerHook;