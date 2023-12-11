import React from 'react';
import './App.css';
import Counter from './components/Counter';
//import Sandwich from './components/Sandwich';
import Books from './components/Books';
import CounterRTK from './components/CounterRTK'
import BooksPage from './components/BooksPage';

function App() {
  return (
      <CounterRTK />
    // <Sandwich />
    // <>
    //   <Books />
    //   <BooksPage />
    // </>
  );
}

export default App;
