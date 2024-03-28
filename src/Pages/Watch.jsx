import React from "react";

const Watch =()=>
{
    const date = new Date();
    const showTime = date.getHours() 
      + ':' + date.getMinutes() 
      + ":" + date.getSeconds();
      
    return(<div>
        <div className="time">
            {showTime}
        </div>
    </div>)
}
 export default Watch;