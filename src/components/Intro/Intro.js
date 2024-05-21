import React from 'react';
import './Intro.css';
import neerajImg from '../../assets/NB PIC Profile.jpg';
import resumeLogo from '../../assets/resume_icon.png'
import resume from '../../assets/Neeraj_Bhuvan_Resume.pdf'


const Intro = () => {
  return (
    <section id='intro'>
      <div className='introContent'>
        <img src={neerajImg} alt='Profile' className='bgIntro' />
        <span className='hello'>Hello,</span>
        <span className='introText'> I'm <span className='introName'>Neeraj Bhuvan</span> <br /> JavaScript Developer </span>
        <p className='introPara'>I'm a skilled JavaScript Developer specializing in the Nokia NSP (Network Service Platform) Framework with over 2.8 years of experience in Wipro.</p>
        <a href={resume} download='Neeraj'>
          <button className='ResumeBtn'>
            <img src={resumeLogo} alt='Resume Icon' className='ResumeBtnImg' />
            Download Resume
          </button>
        </a>

      </div>
    </section>
  )
}

export default Intro;