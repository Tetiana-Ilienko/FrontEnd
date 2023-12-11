import React from 'react';
import { ElementsWrapper, HeaderWrapper, ListWrapper, LoginWrapper, NavWrapper } from "./styles";

const Header = () => {
  return (
    <HeaderWrapper>
      <NavWrapper>
        <ListWrapper>
          <li>
            <ElementsWrapper href="">Main page</ElementsWrapper>
          </li>

          <li>

            <ElementsWrapper href="">Info</ElementsWrapper>
          </li>
          <li>
            <ElementsWrapper href="">Profile</ElementsWrapper>
          </li>



        </ListWrapper>

      </NavWrapper>
      <LoginWrapper>
        <ElementsWrapper href="">Login</ElementsWrapper>
        <ElementsWrapper href="">Registration</ElementsWrapper>

      </LoginWrapper>

    </HeaderWrapper>
  )
}

export default Header;