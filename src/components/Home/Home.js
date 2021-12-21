import React from 'react';
import Hero from './hero';
import ProjectSummary from './ProjectSummary/ProjectSummary';
import Skill from './Skills/skill';


const Home = () => {
    return (
        <div className='bg-light'>

            <Hero/>
            <Skill/>
           
            {/* <ProjectSummary></ProjectSummary> */}
        </div>
    );
};

export default Home;