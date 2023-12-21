import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Search from './pages/Search';
import Pizza from './pages/Pizza';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/search' element={<Search />}/>
          <Route path='/pizza.id' element={<Pizza />}/>
          <Route path='*' element={<NotFound />}/>


        </Route>


      </Routes>
    </div >
  );
}

export default App;
