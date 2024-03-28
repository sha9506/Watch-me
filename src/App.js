import React, { useState } from 'react';
import './App.css';
import Watch from './Pages/Watch'; 
import StopWatch from './Pages/StopWatch';
import Timer from './Pages/Timer';
import Login from './Pages/Login';

const App =()=>
{
  const [pagenumber , setPageNumber]=useState(3);
  const[username, setUsername]=useState("");

  

  return(<div>
    <div>{username}</div>
    <div className='nav-bar'>
        <div className='nav-bar-item' onClick={()=>{setPageNumber(1)}}>Watch</div>
        <div className='nav-bar-item' onClick={()=>{setPageNumber(2)}}>Stop Watch</div>
        <div className='nav-bar-item' onClick={()=>{setPageNumber(3)}}>Timer</div>
    </div>
    {
      pagenumber===0? <Login setUsername={setUsername}/>:null
    }
   {
    pagenumber===1? <Watch /> : null
   }
   {
    pagenumber===2? <StopWatch/>:null
   }
   {
    pagenumber===3? <Timer/> :null
   }
  </div>)
}

export default App;
