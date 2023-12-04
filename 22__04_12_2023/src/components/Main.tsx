
import Hero from './Hero'
import FarDalaxy from './FarDalaxy'
import DreamTeam from './DreamTeam'
import { navItems } from './utils';
import AboutMe from '../pages/AboutMe';
import StarWars from '../pages/StarWars';
import Contact from '../pages/Contact';
import Home from '../pages/Home';

const Main: React.FC<{ currentPage: string }> = ({ currentPage }) => {

    switch (currentPage) {
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