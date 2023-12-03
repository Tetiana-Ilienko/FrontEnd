import React from 'react'

const NavItem:React.FC<{label:string}> = ({ label }) => {
    return <li className="commonButton">{label}</li>;
  };

export default NavItem