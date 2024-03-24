import React, { useEffect, useState } from "react";

const StopWatch = ()=>
{
    const[time, setTime]=useState(0);
    const[running, setRunning]=useState(false);

    useEffect(()=>
    {
        let interval;
        if(running)
        {
            interval = setInterval(() => 
                setTime(time+1), 10);
        }
        return ()=> clearInterval(interval)
    }, [running, time]);

    const hours = Math.floor(time / 360000);

    const minutes = Math.floor((time % 360000) / 6000);
  
    const seconds = Math.floor((time % 6000) / 100);
  
    const milliseconds = time % 100;

    const handleStart=()=>
    {
        setRunning(true);
    }
    const handlePause=()=>
    {
        setRunning(false)
    }
    const handleResume=()=>
    {
        setTime(0);
    }

    return(<div>
        <div className="time">
            {hours}:{minutes}:{seconds}:{milliseconds}
        </div>
        <div className="stop-watch-buttons">
            <button className="stop-item" onClick={handleStart}>Start</button>
            <button className="stop-item"  onClick={handlePause}>Pause</button>
            <button className="stop-item"  onClick={handleResume}>Resume</button>
        </div>
    </div>)
}

export default StopWatch;