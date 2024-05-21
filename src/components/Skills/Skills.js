import React from 'react';
import './Skills.css';
import Frontend from './Frontend';
import Networking from './Networking';
import 'boxicons/css/boxicons.min.css';

const Skills = () => {
  return (
    <section id='skills'>
      <h2 className='sectionTitle'>Skills</h2>
      <span className='sectionSubTitle'>My Technical Expertise</span>
      <div className='skillsContainer'>
        <Frontend/>
        <Networking/>
      </div>
    </section>
  )
}

export default Skills;