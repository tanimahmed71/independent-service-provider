import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    return (
        <header className='header-container'>  
            <Link to={"/home"}>Home</Link>
            <Link to={"/checkout"}>CheckOut</Link>
            <Link to={"/blogs"}>Blogs</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/registration"}>Registration</Link>
            <Link to={"/login"}>Login</Link>
        </header>
    );
};

export default Header;