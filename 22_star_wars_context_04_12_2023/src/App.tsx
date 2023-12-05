import React, { useState, createContext } from 'react'
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { navItems } from './components/utils';


// 1. Создание контекста 
export const ChangePageContext = createContext((currentPage: string) => { });
export const PageContext = createContext('');

export const FullPageContext = createContext({
  change: (currentPage: string) => { },
  page: ''

});




function App() {
  const [currentPage, setCurrentPage] = useState<string>(navItems[0]);

  const changePage = (newPage: string) => setCurrentPage(newPage);

  const obj = {
    change: changePage,
    page: currentPage
  }

  return (
    <>
      {/* 2. Передача контекста */}
      <FullPageContext.Provider value={obj}>
        {/* <ChangePageContext.Provider value={changePage}>
          <PageContext.Provider value={currentPage}> */}

        <Header changePage={changePage} />
        <Main currentPage={currentPage} />
      </FullPageContext.Provider>

      <Footer />
      {/* </PageContext.Provider>
        </ChangePageContext.Provider> */}

    </>
  );
}

export default App;
