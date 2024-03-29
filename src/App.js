import React, { useEffect, useState } from 'react';
import './App.css';
import Watch from './Pages/Watch'; 
import StopWatch from './Pages/StopWatch';
import Timer from './Pages/Timer';
import Login from './Pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App =()=>
{
  return(<BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/stopwatch' element={<StopWatch/>}/>
            <Route path='/timer' element={<Timer/>}/>
            <Route path='/watch' element={<Watch/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
  </BrowserRouter>)
}

export default App;
