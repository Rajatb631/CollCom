import React from 'react'
import logo from '../assets/CollComLogo.png'

const Navbar = () => {
    const [isActive, setIsActive] = React.useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <>
            <div className="logo">
                <img className='logo-dim' src={logo}></img>
            </div>
            <nav>

                <div className="menu-toggle" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className={`nav-links ${isActive ? 'active' : ''}`}>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Work</a>
                    <a href="#">Join Us</a>
                    <a href="#">Collaboration</a>
                    <a href="#">R&D</a>
                    <a href="#">Publication</a>
                    <a href="#">Highlights</a>
                    <a href="#">Career</a>
                    <a href="#">Event</a>
                    <a href="#">Gallery</a>
                    <a href="#">Contact</a>
                    <a href="#" className="cta-button">Need Blood</a>
                </div>


            </nav>
        </>


    );
};

export default Navbar