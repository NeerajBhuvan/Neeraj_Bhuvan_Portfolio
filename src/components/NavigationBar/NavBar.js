import React, { useState } from 'react';
import "./NavBar.css"
import logo from "../../assets/nb_logo.png";
import contactImg from "../../assets/contact_logo.png";
import { Link } from 'react-scroll';
//rafce
const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='navbar'>
      <Link to='intro' smooth={true} offset={-200} duration={500}><img src={logo} alt='NB Logo' className='logo' /></Link>
      <div className='desktopMenu'>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-200} duration={500} className='destopMenuListItem'>About</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='destopMenuListItem'>Skills</Link>
        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className='destopMenuListItem'>Projects</Link>
        <Link activeClass='active' to='qualification' spy={true} smooth={true} offset={-100} duration={500} className='destopMenuListItem'>Qualification</Link>
      </div>
      <Link to='contactPage' smooth={true} offset={-100} duration={500} className='desktopMenuBtn'>
        <img src={contactImg} alt='Contact Logo' className='desktopMenuImg' />
        Contact Me
      </Link>

      
      <span className='mobileMenu' onClick={() => setShowMenu(!showMenu)}><i class='bx bx-menu-alt-right'></i></span>
      <div className='mobileMenuBar' style={{display: showMenu? 'flex' : 'none'}}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-200} duration={500} className='mobileListItem' onClick={() => setShowMenu(false)}>About</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='mobileListItem' onClick={() => setShowMenu(false)}>Skills</Link>
        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className='mobileListItem' onClick={() => setShowMenu(false)}>Projects</Link>
        <Link activeClass='active' to='qualification' spy={true} smooth={true} offset={-100} duration={500} className='mobileListItem' onClick={() => setShowMenu(false)}>Qualification</Link>
        <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-100} duration={500} className='mobileListItem' onClick={() => setShowMenu(false)}>Contact</Link>
      </div>

    </nav>
  )
}

export default NavBar;