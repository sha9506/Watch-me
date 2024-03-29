import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Molecules/NavBar/Navbar";

const Timer =()=>
{
    const[seconds, setSeconds]=useState(0);
    const[count, setcount]=useState(0);
    let countValue =useRef(null);
    const[message ,setMessage]=useState("");

   const handle=()=>
   {
     if(seconds===0)
     {
        setSeconds(count*60)
     }
     if(count==0)
     {
        setMessage("SELECT TIME")
        return;
     }
        setMessage("TIMER IS RUNNING")
        countValue.current=setInterval(()=>
        {
        setSeconds(seconds=>seconds-1);
        },1000);
   }

   useEffect(()=>
   {
    if(seconds===0 && message=="TIMER IS RUNNING")
     {
        clearInterval(countValue.current)
        setMessage("TIME UP");
   1 }
   },[seconds])
    

    return(<div>
        <Navbar/>
        <div className="time">
            {parseInt(seconds/60)}:{seconds%60}  
        </div>
        <div className="timer-button">
            <button className="timer-item" onClick={()=>
            {
                count<1? setcount(0):setcount(count-1)
            }}>-</button>
            <div className="timer-text"> {count} min</div>
            <button className="timer-item" onClick={()=>setcount(count+1)}>+</button>
        </div>
        <div className="start-button">
            <button className="timer-start" onClick={handle}>Start</button>
        </div>
          <div className="message">{message}</div>
        
    </div>)
}

export default Timer;