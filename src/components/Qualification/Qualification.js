import React, { useState } from 'react';
import './Qualification.css';

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <section id='qualification'>

            <h2 className='qualificationMainTitle'> Qualification </h2>
            <span className='qualificationMainSubTitle' >My Personal Journey</span>

            <div className='qualificationContainer'>
                <div className='qualificationTabs'>
                    <div className={toggleState === 1 ? 'qualificationButton qualificationActive' : 'qualificationButton'}
                    onClick={() => toggleTab(1)}>
                        <i className={toggleState === 1 ? 'bx bxs-graduation bxs-graduationActive' : 'bx bxs-graduation'}></i>
                        Education
                    </div>

                    <div className={toggleState === 2 ? 'qualificationButton qualificationActive' : 'qualificationButton'}
                    onClick={() => toggleTab(2)}>
                        <i className={toggleState === 2 ? 'bx bxs-briefcase bxs-briefcaseActive' : 'bx bxs-briefcase'}></i>
                        Experience
                    </div>
                </div>

                <div className='qualificationSections'>

                    <div className={toggleState === 1 ? 'qualificationContent qualificationContent-active' : 'qualificationContent'}>

                        <div className='qualificationData'>
                            <div>
                                <h3 className='qualificationTitle'>Master of Computer Applications</h3>
                                <span className='qualificationSubTitle'>Anna University, Chennai, Tamil Nadu.</span>
                                <div className='qualificationCalender'>
                                    <i className='bx bxs-calendar'></i>
                                    Apr 2024 - Present
                                </div>
                            </div>
                            <div>
                                <span className='qualificationRounder'><i className='bx bxs-graduation bxsRounderGraduation'></i></span>
                                <span className='qualificationLine'></span>
                            </div>
                        </div>

                        <div className='qualificationData'>
                            <div></div>
                            <div>
                                <span className='qualificationRounder'><i className='bx bxs-graduation bxsRounderGraduation'></i></span>
                                <span className='qualificationLine'></span>
                            </div>
                            <div>
                                <h3 className='qualificationTitle'>Bachelor of science - Information Technologies</h3>
                                <span className='qualificationSubTitle'> Sri Krishna Arts and Science College, Coimbatore, Tamil Nadu.</span>
                                <div className='qualificationCalender'>
                                    <i className='bx bxs-calendar'></i>
                                    Jun 2018 - May 2021
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className={toggleState === 2 ? 'qualificationContent qualificationContent-active' : 'qualificationContent'}>

                        <div className='qualificationData'>
                            <div>
                                <h3 className='qualificationTitle'>JavaScript Developer</h3>
                                <span className='qualificationSubTitle'>Wipro Technologies, Chennai, Tamil Nadu.</span>
                                <div className='qualificationCalender'>
                                    <i className='bx bxs-calendar'></i>
                                    Aug 2021 - Mar 2024
                                </div>
                            </div>
                            <div>
                                <span className='qualificationRounder'><i className='bx bxs-briefcase bxsRounderBriefcase'></i></span>
                                <span className='qualificationLine'></span>
                            </div>
                        </div>

                        <div className='qualificationData'>
                            <div></div>
                            <div>
                                <span className='qualificationRounder'><i className='bx bxs-briefcase bxsRounderBriefcase'></i></span>
                                <span className='qualificationLine'></span>
                            </div>
                            <div>
                                <h3 className='qualificationTitle'>UI/UX Designer</h3>
                                <span className='qualificationSubTitle'>Aborted Developers, Coimbatore, Tamil Nadu.</span>
                                <div className='qualificationCalender'>
                                    <i className='bx bxs-calendar'></i>
                                    Mar 2020 - Jul 2020
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </section>
    )
}

export default Qualification