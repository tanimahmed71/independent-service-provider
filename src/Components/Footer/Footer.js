import React from 'react';
import "./Footer.css"
const Footer = () => {
    const today =new Date()
    const year = today.getFullYear(today);
    return (
        <footer className='footer-container text-center p-5'>
            <p><small>Copyright:  &copy; {year}</small></p>
        </footer>
    );
};
export default Footer;