import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header className="App-header">
            <ul className="nav-list">
                <li>

        <Link to="/">Home</Link>
                </li>
                <li>

        <Link to="/todoApp">TodoApp</Link>
                </li>
            </ul>
      </header>
    )
}

export default Header;