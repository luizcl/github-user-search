import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss'


const Navbar = () => (
    <nav className="main-nav">
        <Link to="/" className='nav-decoration'>
            <h5 className="nav-text">Bootcamp DevSuperior</h5>
        </Link>
    </nav>
);

export default Navbar;