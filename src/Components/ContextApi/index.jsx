import React, { createContext, useState } from "react";
import HomeComponent from "./home";
export const InitialState = createContext();

const UserContext = () => {

    // const Users = [{ name: "name1", age: 24 }, { name: "name2", age: 29 }];

    // const GreetingHandler = () => {
    //     alert("Hi guys Happy Hello World")
    // }
    const [count, setCount] = useState(0)
    return <>
        <InitialState.Provider value={{ count, setCount }} >
            <HomeComponent />
        </InitialState.Provider>
    </>
}

export default UserContext;