import React from 'react'
import NavItem from './NavItem';

const Navigation: React.FC = () => {
    return (
      <nav>
        <ul>
          <NavItem label="Home" />
          <NavItem label="About Me" />
          <NavItem label="Star Wars" />
          <NavItem label="Contact" />
        </ul>
      </nav>
    );
  };
export default Navigation