import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    
    return (
        <nav>
            <ul className='navigation'>
                <li> 
                    <Link to='/' className='link'>Home</Link>
                </li>

                <li> 
                    <Link to='/galery' className='link'>Galery</Link>
                </li>

                <li> 
                    <Link to='/publications' className='link'>Publication</Link>
                </li>
                <li> 
                    <Link to='/contacts' className='link'>Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;