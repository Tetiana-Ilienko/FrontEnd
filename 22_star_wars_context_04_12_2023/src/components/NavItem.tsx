import React, {useContext} from 'react';
import { FullPageContext } from '../App';

interface IProps{
  itemTitle:string;
  changePage: (title:string) => void;
}

const NavItem:React.FC<IProps> = ({ itemTitle, changePage }) => {
  // 3. Принятие переданной в контексте информации
  //const myContextFunction = useContext(ChangePageContext);
  const {change} = useContext(FullPageContext);
    return(
       <li className="commonButton" onClick = {() => {change(itemTitle)}}>{itemTitle}</li>)
  };

export default NavItem