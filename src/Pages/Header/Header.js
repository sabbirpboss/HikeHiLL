import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../images/LOGO.png'

const Header = () => {
    return (
        <div className='header-section'>
            <Link to="/">
                <img src={logo} alt="" />
            </Link>
            <div>
                <Link to="/home">Home</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About Us</Link>
                <Link to="/login">Login</Link>
            </div>
        </div>
    );
};

export default Header;