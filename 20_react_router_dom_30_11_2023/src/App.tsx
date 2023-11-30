import React from 'react';
import './App.css';
import Users from './components/Users';
import Posts from './components/Posts';
import Todos from './components/Todos';
import Layout from './components/Layout';


import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
       <Routes>
         <Route path='/' element = {<Layout/>}>
              {/* будет открываться по умолчанию */}
            <Route index element ={<Users/>}></Route>   

            <Route path='/posts' element ={<Posts/>}></Route>
            <Route path='/todos' element ={<Todos/>}></Route>
         </Route>
       {/* <div className=" App">
       <Posts/>
       </div> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
