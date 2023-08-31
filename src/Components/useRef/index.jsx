import React, { useRef, useState } from "react";

const UseRefHook = () => {
    const [render, setRender] = useState(null)
    const state = useRef("");
    const element = useRef("");
    const InputHandler = () => {
        setRender(state.current.value)
        console.log(state.current.value);
        state.current.value = ""
        element.current.style.borderColor = "yellow"
    }
    return <>
        <div>
            <input type="text" ref={state} />
            <button onClick={InputHandler}> Submit</button>
        </div>

        <div style={{ width: "fit-content", height: "fit-content", border: "2px solid black", margin: "10px", backgroundColor: "red" }} value={state} ref={element}>
            <p>{render}</p>
        </div>
    </>
}

export default React.memo(UseRefHook);