import React, { useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";

const Login=()=>
{
    const[username, setUsername]=useState("");
    const[message, setMessage]=useState("");
    const navigate = useNavigate();

    useEffect(()=>
    {
        const savedValue = localStorage.getItem("user");
        setUsername(savedValue);
    },[])

    const handleLogin= ()=>
    {
        if(!username)
        {
            setMessage("Enter Username to Proceed")
        }
        else
        {
            setMessage("");
            localStorage.setItem("user", username);
            navigate("/stopwatch");
        }
    }

    return(
        <div>
           <div className="login">
           <input className="username-input" type="text" name="username" value={username}
            onChange={(e)=>{setUsername(e.target.value)}} />
            <button className="login-button" onClick={handleLogin}>Login</button>
            <div>{message}</div>
           </div>

        </div>
    )
}

export default Login;