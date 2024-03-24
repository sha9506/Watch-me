import React, { useState } from "react";

const Timer =()=>
{
    const[count, setcount]=useState(0);


    return(<div>
        <div className="time">
            time
        </div>
        <div className="timer-button">
            <button className="timer-item" onClick={()=>setcount(count-1)}>-</button>
            <div className="timer-text"> {count} min</div>
            <button className="timer-item" onClick={()=>setcount(count+1)}>+</button>
        </div>
        <div className="start-button">
            <button className="timer-start">Start</button>
        </div>
    </div>)
}

export default Timer;