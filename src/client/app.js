import React, { useState } from "react";

const Test = ()=>{
    const [title, setTitle]=useState('Title')
    return (
        <div onClick={()=>alert('Hydrate active')}>Test Component {title}</div>
    )
}
export default Test;