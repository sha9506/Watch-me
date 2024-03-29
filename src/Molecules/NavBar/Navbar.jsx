import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar =()=>
{
    const navigate=useNavigate()

    useEffect(()=>
    {
        let username= localStorage.getItem("user");
        username? null:navigate('/login');
    },[])

    return(<div>
        <div className="head-user">{localStorage.getItem("user")}</div>
        <div className='nav-bar'>
        <div className={window.location.pathname=="/watch"?
                        'nav-bar-item active': 'nav-bar-item'} 
                        onClick={()=>{navigate("/watch")}}>Watch</div>
        <div className={window.location.pathname=="/stopwatch"?
                        'nav-bar-item active': 'nav-bar-item'}  
                        onClick={()=>{navigate("/stopwatch")}}>Stop Watch</div>
        <div className={window.location.pathname=="/timer"?
                        'nav-bar-item active': 'nav-bar-item'} 
                         onClick={()=>{navigate("/timer")}}>Timer</div>
        </div>
    </div>)
}

export default Navbar; 