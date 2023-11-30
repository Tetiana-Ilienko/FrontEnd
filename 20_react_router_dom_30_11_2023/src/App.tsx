import React from 'react';
import './App.css';
import Users from './components/Users';
import Posts from './components/Posts';
import Todos from './components/Todos';
import Layout from './components/Layout';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Commentes from './components/Commentes';


function App() {
  return (
    <BrowserRouter>
       <Routes>
         <Route path='/' element = {<Layout/>}>
              {/* будет открываться по умолчанию */}
            <Route index element ={<Users/>}></Route>   

            <Route path='/posts' element ={<Posts/>}></Route>
            <Route path='/todos' element ={<Todos/>}></Route>
            <Route path='/commentes' element ={<Commentes/>}></Route>
           

         </Route>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
