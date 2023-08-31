import { memo } from "react";


const SearchComponent = ({ funct }) => {
    console.log("Search Rendered")
    return <>
        <input type="text" placeholder="Search User" onChange={funct} />
    </>
}

export default memo(SearchComponent);