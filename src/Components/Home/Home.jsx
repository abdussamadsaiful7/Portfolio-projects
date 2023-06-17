import React from 'react';
import frame from '../../assets/imgIcon.png'
import samad from '../../assets/samad.png'
import Skills from './Skills';
import { Slide } from "react-awesome-reveal";
import Projects from './Projects';

const Home = () => {
    return (
        <div>
            <Slide>
                <div className='md:flex items-center justify-between space-x-5 py-20 md:px-24'>
                    <div className='md:w-1/2 md:ml-10 p-4'>
                        <h1 className='text-2xl  font-semibold'>ABDUS SAMAD SAIFUL</h1>
                        <p className='text-lg  font-semibold'>Web developer</p>
                        <p className='text-gray-500'>I have completed Masters degree in Economics of Bangladesh National University. Realizing the influence of modernity, I became interested in Web developer. I believe that everyone has the appreciation of a skilled developer, keeping this slogan in front of me, I started study about Web development. And I apply for a job  to prove my success.
                            I have been working one year in React.js developing as MERN full stack developer and believe that I possess all the necessary technical skills to join the team and contribute significantly  of a Front-End Developer. I have received recognition throughout my career as a professional who is focused and skilled at creating innovative applications with modern technologies.</p>
                    </div>
                    <div className='relative'>
                        <img className='w-72 h-72' src={frame} alt="icon" />
                        <img className='w-64 h-64 absolute right-14 md:right-4 rounded-full bottom-8' src={samad} alt="icon" />
                    </div>
                </div>
            </Slide>
            <Skills></Skills>
            <Projects></Projects>
        </div>
    );
};

export default Home;