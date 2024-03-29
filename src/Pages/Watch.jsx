import React from "react";
import Navbar from "../Molecules/NavBar/Navbar";

const Watch =()=>
{
    const date = new Date();
    const showTime = date.getHours() 
      + ':' + date.getMinutes() 
      + ":" + date.getSeconds();
      
    return(<div>
        <Navbar/>
        <div className="time">
            {showTime}
        </div>
    </div>)
}
 export default Watch;