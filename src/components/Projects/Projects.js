import React, { useState } from 'react';
import './Projects.css'
import Menu from './Menu';

const Projects = () => {
    const [items, setItems] = useState(Menu);
    const [toggle, setToggle] = useState('Everything');
    const filterItem = (categoryItem) => {
        if (categoryItem === 'Everything') {
            setToggle('Everything');
            setItems(Menu);
        } else {
            setToggle(categoryItem);
            const updatedItem = Menu.filter((catgElem => {
                return catgElem.category === categoryItem;
            }));
            setItems(updatedItem);
        }
    }
    return (
        <section id='projects'>
            <h2 className='projectsMainTitle'> Projects </h2>
            <span className='projectsMainSubTitle' >My Works</span>

            <div className='workFilters'>
                <span className={toggle === 'Everything' ? 'workItem workItemEverything' : 'workItem'}
                    onClick={() => filterItem('Everything')}>Everything</span>
                <span className={toggle === 'Design' ? 'workItem workItemDesign' : 'workItem'}
                    onClick={() => filterItem('Design')}>Design</span>
                <span className={toggle === 'Development' ? 'workItem workItemBranding' : 'workItem'}
                    onClick={() => filterItem('Development')}>Development</span>
            </div>

            <div className='workContainer'>
                {items.map((elem) => {
                    const { id, image, title, category, url} = elem;
                    return (
                        <div className='workCard' key={id}>
                            <div className='workThumbnail'>
                                <img src={image} alt='bgImg' className='workImg'></img>
                                <div className='workMask'></div>
                            </div>

                            <span className='workCategory'>{category}</span>
                            <h3 className='workTitle'>{title}</h3>
                            <a href={url} className='workButton'>
                                <i className='bx bx-link workButtonIcon'></i>
                            </a>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Projects;