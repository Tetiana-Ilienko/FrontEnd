
import { navItems } from './utils';
import AboutMe from '../pages/AboutMe';
import StarWars from '../pages/StarWars';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import { useContext } from 'react';
import { FullPageContext, PageContext } from '../App';

const Main: React.FC<{ currentPage: string }> = ({ currentPage }) => {

   // const page = useContext(PageContext);
    const fullPage = useContext(FullPageContext);

    switch (fullPage.page) {
        case navItems[1]:
            return <AboutMe />

        case navItems[2]:
            return <StarWars />
        case navItems[3]:
            return <Contact />

        default:
            return <Home />
    }

}

export default Main