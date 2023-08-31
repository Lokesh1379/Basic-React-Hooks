import React, { useEffect, useState } from "react";
import Axios from "axios"
const UseEffectHook = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        async function fetchData() {
            let fetchedData = await Axios.get("https://dummyjson.com/users")
            setData(fetchedData.data.users)

        }
        fetchData();
    }, [])
    return <>
        {console.log(data)}
        {
            data.map((user, index) => {
                const { id, firstName, lastName, age } = user
                return <React.Fragment key={index}>
                    <h3>ID :{id}</h3>
                    <h3>FIRSTNAME :{firstName}</h3>
                    <h3>LASTNAME :{lastName}</h3>
                    <h3>AGE :{age}</h3>
                </React.Fragment>
            })
        }
    </>
}

export default UseEffectHook;