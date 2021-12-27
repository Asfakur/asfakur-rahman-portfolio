import React from 'react';
import Hero from './hero';
import Skill from './Skills/skill';
import Specialty from './Specialty/specialty';


const Home = () => {
    return (
        <div className='bg-light'>

            <Hero/>
            <Skill/>
            <Specialty/>
        </div>
    );
};

export default Home;