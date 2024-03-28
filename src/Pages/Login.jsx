import React from "react";

const Login=({setUsername})=>
{
    let proxy;
    const handleInput=(event)=>
    {
       proxy=event.target.value;
    }
    const handleLogin =()=>
    {
        setUsername(proxy);
    }


    return(
        <div>
            <input type="text" name="username" 
            onChange={(e)=>{handleInput(e)}} />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login;