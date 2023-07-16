import React from 'react';
import { FaStar } from 'react-icons/fa';
import exp from '../../assets/skill_icon/exp.jpg'
import cp from '../../assets/skill_icon/cp.jpg'
import work from '../../assets/skill_icon/work1.jpg'
import feedback from '../../assets/skill_icon/feedback1.jpg'

const Career = () => {
    return (
        <div className='dark:bg-black dark:text-white pt-10'>
            <div className=' md:mx-14 py-10' data-aos="fade-right"
                data-aos-duration="3000">
                <div className='grid md:grid-cols-4 shadow-xl'>
                    <div className=' border border-white shadow-xl mx-auto p-10 hover:shadow-cyan-400 hover:shadow-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300'>
                        <div className=' flex'>
                            <img className='w-20 h-20 mr-2' src={exp} alt="icon" />
                            <div className='flex items-center'>
                                <p className='text-3xl font-extrabold mr-1'>1+</p>
                            </div>
                        </div>
                        <p>Years experience</p>
                    </div>
                    <div className=' border border-white mx-auto  shadow-xl hover:shadow-cyan-400 hover:shadow-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 p-10'>
                        <div className='flex'>
                            <img className='w-20 h-20 mr-2' src={cp} alt="icon" />
                            <div className='flex items-center'>
                                <p className='text-3xl font-extrabold mr-1'>20+</p>
                            </div>
                        </div>
                        <p>Completed Projects</p>
                    </div>

                    <div className=' border border-white mx-auto  shadow-xl hover:shadow-cyan-400 hover:shadow-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 p-10'>
                        <div className='flex'>
                            <img className='w-20 h-20 mr-2' src={work} alt="icon" />
                            <div className='flex items-center'>
                                <p className='text-3xl font-extrabold mr-1'>0+</p>
                            </div>
                        </div>
                        <p>Companies Work</p>
                    </div>



                    <div className=' border border-white mx-auto  shadow-xl hover:shadow-cyan-400 hover:shadow-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 p-10'>
                        <div className='flex'>
                            <img className='w-20 h-20 mr-2' src={feedback} alt="icon" />
                            <div className='flex items-center'>
                                <p className='text-3xl font-extrabold mr-1'>4.5</p>
                                <p className='text-yellow-500'><FaStar /></p>
                            </div>
                        </div>
                        <p>Feedback</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Career;