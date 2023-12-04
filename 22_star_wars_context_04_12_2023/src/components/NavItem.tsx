import React, {useContext} from 'react';
import { ChangePageContext } from '../App';

interface IProps{
  itemTitle:string;
  changePage: (title:string) => void;
}

const NavItem:React.FC<IProps> = ({ itemTitle, changePage }) => {
  // 3. Принятие переданной в контексте информации
  const myContextFunction = useContext(ChangePageContext)
    return(
       <li className="commonButton" onClick = {() => {myContextFunction(itemTitle)}}>{itemTitle}</li>)
  };

export default NavItem