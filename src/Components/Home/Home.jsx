import React from 'react';
import Skills from './Skills';
import Banner from './Banner';
import BannerCard from './Course/BannerCard';
import ProjectOne from '../ProjectSection/ProjectOne';
import ProjectTwo from '../ProjectSection/ProjectTwo';
import ProjectThree from '../ProjectSection/ProjectThree';
import Career from '../Career/Career';
import Features from '../Featuses/Features';
import Lottie from "lottie-react";
import lottieLogo from "../../assets/proj.json";




const Home = () => {


    return (
        <div className='dark:bg-black dark:text-white'>
            <Banner></Banner>
            <Career></Career>
            <Skills></Skills>
            <BannerCard></BannerCard>
            <div className='pt-8'>
                <div>
                    <Lottie className='' animationData={lottieLogo} loop={true} />
                </div>
                <div className='text-center pt-2'>
                    <h1 className='text-center text-2xl font-bold'>My Projects_</h1>
                </div>
                <ProjectOne></ProjectOne>
                <ProjectTwo></ProjectTwo>
                <ProjectThree></ProjectThree>
                <Features></Features>
            </div>
        </div>
    );
};

export default Home;