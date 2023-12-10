import React from 'react';
import './App.css';
import Counter from './components/Counter';
//import Sandwich from './components/Sandwich';
import Books from './components/Books';
import CounterRTK from './components/CounterRTK'
import BooksPage from './components/BooksPage';
import SandwichRTK from './components/SandwichRTK';

function App() {
  return (<>
      <CounterRTK />
      <SandwichRTK />
      </>
    // <>
    //   <Books />
    //   <BooksPage />
    // </>
  );
}

export default App;
