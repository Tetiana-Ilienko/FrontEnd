import React, { useState, createContext } from 'react'
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { navItems } from './components/utils';


// 1. Создание контекста 
export const ChangePageContext = createContext((currentPage: string) => { });
export const PageContext = createContext('');


function App() {
  const [currentPage, setCurrentPage] = useState<string>(navItems[0]);

  const changePage = (newPage: string) => setCurrentPage(newPage);

  return (
    <>
      {/* 2. Передача контекста */}
      <ChangePageContext.Provider value={changePage}>
        <PageContext.Provider value={currentPage}>
          <Header changePage={changePage} />
          <Main currentPage={currentPage} />
          <Footer />
        </PageContext.Provider>
      </ChangePageContext.Provider>
    </>
  );
}

export default App;
