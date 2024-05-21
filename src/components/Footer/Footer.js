import React from 'react';
import './Footer.css';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <footer className='footerSection'>
            <div className='footerContainer'>
                <h1 className='footerTitle'>Neeraj Bhuvan</h1>
                <div className='footerList'>
                    <Link to='intro' smooth={true} offset={-200} duration={500} className='footerListItem'>About</Link>
                    <Link to='skills' smooth={true} offset={-100} duration={500} className='footerListItem'>Skills</Link>
                    <Link to='projects' smooth={true} offset={-100} duration={500} className='footerListItem'>Projects</Link>
                    <Link to='qualification' smooth={true} offset={-100} duration={500} className='footerListItem'>Qualification</Link>
                </div>
                <div className='footerSocialContainer'>
                    <a href='https://www.instagram.com/neeraj_bhuvan' className='footerSocialLink'>
                        <i className='bx bxl-instagram'></i>
                    </a>
                    <a href='https://github.com/NeerajBhuvan' className='footerSocialLink'>
                        <i className='bx bxl-github' ></i>
                    </a>
                    <a href='https://www.linkedin.com/in/neerajbhuvan' className='footerSocialLink'>
                        <i className='bx bxl-linkedin-square' ></i>
                    </a>
                </div>
                <span className='footerCopy'>&#169; NeerajBhuvan. All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer;