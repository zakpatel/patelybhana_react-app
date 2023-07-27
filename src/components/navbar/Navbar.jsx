import React from 'react';
import { useState } from 'react';
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './Navbar.css';
import logo from '../../Assets/P_BMesa de trabajo 11.png'


const Navbar = () => {

const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='navbar'>
      <div className='navbar-links'>
        <div className='navbar-logo'>
          <a href='#home'><img src={logo} alt='logo'></img></a>
        </div>
        <div className='navbar-links-container'>
        <p><a href='#home'>Home</a></p>
        <p><a href='#legal-services'>Legal Services</a></p>
        <p><a href='#about-us'>About Us</a></p>
        <p><a href='#contact'>Contact</a></p>
        </div>
      </div>
      <div className='navbar-menu'>
      {toggleMenu
          ? <RiCloseLine color="#000000" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#000000" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="navbar-menu-container">
          <div className="navbar-menu-container-links">
            <p><a href='#home'>Home</a></p>
            <p><a href='#legal-services'>Legal Services</a></p>
            <p><a href='#about-us'>About Us</a></p>
            <p><a href='#contact'>Contact</a></p>
          </div>
        </div>
        )}
      </div>
    </div>
  )
}

export default Navbar