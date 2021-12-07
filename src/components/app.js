import React, { useState } from "react";

const Test = ()=>{
    const [title, setTitle]=useState('Title')
    return (
        <div onClick={()=>alert('Hydrate activex')}>Test Componentxy{title}</div>
    )
}
export default Test;