import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase_init';
import "./Header.css";

const Header = () => {
    const [user] =useAuthState(auth);
    const handleSignOut =()=>{
        signOut(auth);
    }
    return (
        <header className='header-container'>  
            <Link to={"/home"}>Home</Link>
            <Link to={"/checkout"}>CheckOut</Link>
            <Link to={"/blogs"}>Blogs</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/registration"}>Registration</Link>
            {
                user?
                <button onClick={handleSignOut} className='sign-out-btn'>Sign out </button>:
                <Link to={"/login"}>Login</Link>
            }
        </header>
    );
};

export default Header;