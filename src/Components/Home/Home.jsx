import React from 'react';
import Skills from './Skills';
import Projects from './Projects';

import hero from '../../assets/hero.png'
import Banner from './Banner';
import BannerCard from './Course/BannerCard';




const Home = () => {
    

    return (
        <div>
            <Banner></Banner>
            <Skills></Skills>
            {/* <div className='md:mx-20'>
                <h1 className='text-center text-xl font-semibold'>Professional Web development Course </h1>
                <div className='md: flex items-center justify-between shadow-md hover:shadow-xl p-8 hover:border hover:border-yellow-400 mt-4 md:px-20' data-aos="fade-up" data-aos-duration="3000">
                    <img className='w-32 h-32' src={hero} alt="icon" />
                    <div>
                        <p className='text-lg font-semibold'>Course: Programming Hero (online)</p>
                        <p>Level-4, 34, Awal Centre, Banani, Dhaka</p>
                        <p>Bangladesh</p>
                    </div>
                </div>
            </div> */}
            <BannerCard></BannerCard>
            <Projects></Projects>
        </div>
    );
};

export default Home;