import React from 'react';
import logo1 from '../../assets/skill_icon/feature/logo1.png'
import logo2 from '../../assets/skill_icon/feature/logo2.png'
import logo3 from '../../assets/skill_icon/feature/logo3.png'
import logo4 from '../../assets/skill_icon/feature/logo4.png'
import Tilt from 'react-parallax-tilt';


const Features = () => {
    return (
        <div className='md:px-14 px-4 py-10'>
            <h1 className='text-red-600 font-semibold'>FEATURES</h1>
            <h1 className='text-4xl font-extrabold'>What I Do</h1>
            <div className='grid md:grid-cols-2 gap-10 pt-6'>
                <Tilt>
                    <div  className=' sm:h-[400px] md:h-[320px] shadow-xl hover:shadow-blue-600 hover:shadow-lg border border-white p-10  hover:text-blue-700 rounded'>
                        <img className='w-36 h-32' src={logo1} alt="logo" />
                        <h1 className='text-2xl font-extrabold'>MERN Stack Developer</h1>
                        <p className='font-serif'>Experienced MERN stack developer proficient in MongoDB, Express.js, React, and Node.js. Skilled in building scalable and efficient web applications, ensuring seamless user experiences.</p>
                    </div>
                </Tilt>

                <Tilt>
                    <div className=' sm:h-[400px] md:h-[320px] shadow-xl hover:shadow-blue-600 hover:shadow-lg border border-white p-10  hover:text-blue-700 rounded'>
                        <img className='w-40 h-32' src={logo2} alt="logo" />
                        <h1 className='text-2xl font-extrabold'>Front End Developer</h1>
                        <p className='font-serif'>Experienced Front-end Developer with expertise in HTML, CSS, and JavaScript. Skilled in creating engaging user interfaces and optimizing performance for seamless user experiences.</p>
                    </div>
                </Tilt>


                <Tilt>
                    <div  className=' sm:h-[400px] md:h-[320px] shadow-xl hover:shadow-blue-600 hover:shadow-lg border border-white p-10  hover:text-blue-700 rounded'>
                        <img className='w-40 h-32' src={logo3} alt="logo" />
                        <h1 className='text-2xl font-extrabold'>React Developer</h1>
                        <p className='font-serif'>Experienced React Developer building scalable web apps. Proficient in state management, API integration, and reusable UI components. Committed to delivering high-quality, interactive interfaces.</p>
                    </div>
                </Tilt>

                <Tilt>
                    <div  className=' sm:h-[400px] md:h-[320px] shadow-xl hover:shadow-blue-600 hover:shadow-lg border border-white p-10  hover:text-blue-700 rounded'>
                        <img className='w-40 h-32' src={logo4} alt="logo" />
                        <h1 className='text-2xl font-extrabold'>Full Stack Developer</h1>
                        <p className='font-serif'>Experienced Full Stack Developer proficient in front-end and back-end technologies. Skilled in HTML, CSS, JavaScript, Node.js, MongoDB, and React for building comprehensive web applications</p>
                    </div>
                </Tilt>

            </div>
        </div>
    );
};

export default Features;