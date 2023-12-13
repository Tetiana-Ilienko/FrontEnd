import React from 'react';
import './App.css';
import CounterRTK from './components/counter/CounterRTK'
import CreateBookRTK from './components/library/CreateBookRTK';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import SandwichRTK from './components/sandwich/SandwichRTK';
import Home from './components/home/Home';

function App() {
  return (

    <BrowserRouter>
      <Routes>


        <Route path='/' element={<Layout />}>
          <Route index  element={<Home />}/>
          <Route path='/counter'  element={<CounterRTK />}/>

          <Route path='/sandwich' element ={<SandwichRTK/>}/>
          <Route path='/library' element={<CreateBookRTK />}/>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App;
