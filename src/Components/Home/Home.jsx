import React from 'react';
import Skills from './Skills';
import Projects from './Projects';

import hero from '../../assets/hero.png'
import Banner from './Banner';
import BannerCard from './Course/BannerCard';
import ProjectOne from '../ProjectSection/ProjectOne';
import ProjectTwo from '../ProjectSection/ProjectTwo';
import ProjectThree from '../ProjectSection/ProjectThree';




const Home = () => {


    return (
        <div>
            <Banner></Banner>
            <Skills></Skills>
            <BannerCard></BannerCard>
            <div className='pt-10'>
                <div className='text-center'>
                    <h1 className='text-center text-2xl font-bold'>My Projects_</h1>
                </div>
                <ProjectOne></ProjectOne>
                <ProjectTwo></ProjectTwo>
                <ProjectThree></ProjectThree>
            </div>
        </div>
    );
};

export default Home;