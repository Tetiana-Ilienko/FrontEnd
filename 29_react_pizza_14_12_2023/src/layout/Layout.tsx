import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const Layout : React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    function visibleToTop() {
        setIsVisible(window.scrollY >= 40)
    }

    useEffect(() => {
        document.addEventListener('scroll',visibleToTop);
        return () => {
            document.removeEventListener('scroll',visibleToTop);
        }
    }, []);
  return (
    <div>
        <Header/>
        <main>
            <Outlet/>
        </main>
        <button
        onClick={() => window.scrollTo(0,0)}
        >

        </button>
    </div>
  )
}

export default Layout