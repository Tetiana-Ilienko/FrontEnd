import React from 'react';
import './App.css';
import Users from './components/Users';
import Posts from './components/Posts';
import {BrowserRouter, Routes} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <></>
    <Routes></Routes>
    <div className="App">
       <Posts/>
    </div>
    </BrowserRouter>
  );
}

export default App;
