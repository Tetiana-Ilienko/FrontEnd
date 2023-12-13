import React from 'react'
import { Link } from 'react-router-dom'
import styles from './header.module.css'

const Header = () => {
    return (
        <nav className={styles.container}>
            <ul >
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/counter'>Counter</Link>
                </li>
                <li>
                    <Link to='/sandwich'>Sandwich</Link>
                </li>
                <li>
                    <Link to='/library'>Library</Link>
                </li>

            </ul>
        </nav>
    )
}

export default Header