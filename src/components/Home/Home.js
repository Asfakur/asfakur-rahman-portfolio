import React from 'react';
import Hero from './hero';
import ProjectSummary from './ProjectSummary/ProjectSummary';
import Skill from './Skills/skill';
import Specialty from './Specialty/specialty';


const Home = () => {
    return (
        <div className='bg-light'>

            <Hero/>
            <Skill/>
            <Specialty/>
           
            {/* <ProjectSummary></ProjectSummary> */}
        </div>
    );
};

export default Home;