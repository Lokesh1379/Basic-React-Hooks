import { useCallback, useState, Fragment, memo } from "react";
import SearchComponent from "./child";
const allUsers = ["john", "vikram", "shahid", "salman", "chiru"];
const UseCallbackHook = () => {
    const [state, setState] = useState(allUsers);
    const [count, setCount] = useState(0)


    const searchHandler = useCallback(({ target: { value } }) => {
        console.log(state[0])
        setState(
            allUsers.filter(user => {
                return user.includes(value)
            }))

    }, [state])

    const IncrementHandler = () => {
        setCount(count => count + 1)
    }
    return <>
        <SearchComponent funct={searchHandler} />
        <ul>
            {
                state.map((user, index) => {
                    return <Fragment key={index}>
                        <li>
                            {user}
                        </li>
                    </Fragment>
                })
            }
        </ul>

        <h2>{count}</h2>
        <button onClick={IncrementHandler}>Incerment</button>
    </>
}

export default memo(UseCallbackHook);