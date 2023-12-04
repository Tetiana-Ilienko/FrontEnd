import React from 'react'
import NavItem from './NavItem';
import { navItems } from './utils';

const Navigation: React.FC <{changePage: (title:string) => void }> = ({changePage}) =>  {
    return (
      <nav>
        <ul>
          {navItems.map((navItem, index) =>(
            <NavItem key ={index} itemTitle = {navItem} changePage ={changePage}/>
          ))}
          {/* <NavItem label="Home" />
          <NavItem label="About Me" />
          <NavItem label="Star Wars" />
          <NavItem label="Contact" /> */}
        </ul>
      </nav>
    );
  };
export default Navigation