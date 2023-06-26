import React from 'react';
import samad from '../../assets/samad2.jpg'
import nu from '../../assets/skill_icon/nu.webp'
import hero from '../../assets/hero.png'
import fifo from '../../assets/skill_icon/fifo2.jpg'
import wsda from '../../assets/skill_icon/wsda.jpg'
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='px-4 md:px-32 py-20 dark:bg-black dark:text-white'>
            <h1 className='text-center text-2xl font-bold'>ABOUT ME</h1>
            <div className='md:flex items-center justify-between mt-4  shadow-md hover:shadow-xl p-8 hover:border hover:border-yellow-400'>
                <img src={samad} className='w-64 h-64 mr-20' data-aos="fade-right"
                    data-aos-duration="3000" alt="pic" />
                <div data-aos="fade-left" data-aos-duration="3000">
                    <p>Hi, I'm Abdus samad saiful from Dhaka, Bangladesh. Actually
                        I'm non backGround CSE    Web developer.
                        I've completed my Post-gratulate in Economics Under National University of Bangladesh. Before learn development, I had doing a job of Abul Kahair Group ltd as a Seals Manager, also doing a job of ISP networking company as an Executive officer. </p>
                    <p>I had a keep interest in software engineering since childhood, but due to various adversities, I could not pursue a university degree in the subject. Today I am glad that I am a web developer. I believe that if I acquire the right skills, certification will not stand in my way. Anyway give me a chance to publish my success.</p>
                </div>
            </div>
            <div className='my-10'>
                <h1 className='text-center text-xl font-semibold'>Educational Qualifications_</h1>
                <div className='md:flex items-center justify-between mt-4 shadow-md hover:shadow-xl p-8 hover:border hover:border-yellow-400' data-aos="fade-up"
                    data-aos-duration="3000">
                    <div>
                        <div className='mb-4'>
                            <h3 className='text-lg font-semibold'>Master's of Social Science(MSS)</h3>
                            <p>Major: Economics</p>
                            <p>Result: 3.03(out of 4.00)</p>
                            <p>Institution: National University of Bangladesh</p>
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold'>Bachelor of Social Science(BSS)</h3>
                            <p>Major: Economics</p>
                            <p>Result: 3.10(out of 4.00)</p>
                            <p>Institution: National University of Bangladesh</p>
                        </div>
                    </div>
                    <img src={nu} className='w-72 h-64 mr-20' alt="pic" />
                </div>
            </div>
            <div>
                <h1 className='text-center text-xl font-semibold'>Professional Web development Course </h1>
                <div className='md:flex items-center justify-between shadow-md hover:shadow-xl p-8 hover:border hover:border-yellow-400 mt-4 md:px-20' data-aos="fade-up" data-aos-duration="3000">
                    <img className='w-32 h-32' src={hero} alt="icon" />
                    <div>
                        <p className='text-lg font-semibold'>Course: Programming Hero (online)</p>
                        <p>Year: 2023</p>
                        <p>Level-4, 34, Awal Centre, Banani, Dhaka</p>
                        <p>Bangladesh</p>
                    </div>
                </div>
            </div>
            <div className='pt-10'>
                <h1 className='text-center text-xl font-semibold'>Professional Back Office service Course </h1>
                <div className='md:flex items-center justify-between shadow-md hover:shadow-xl p-8 hover:border hover:border-yellow-400 mt-4 md:px-20' data-aos="fade-up" data-aos-duration="3000">
                    <img className='w-32 h-32 rounded-md' src={fifo} alt="icon" />
                    <div className='md:ml-14'>
                        <p className='text-lg font-semibold'>Course: Professional Back Office Service
                            (<Link className='pointer ml-2 text-blue-600' to='https://drive.google.com/file/d/1-5IizQ5fceT9UpXwKhNgmowrl2mzjLBJ/view?usp=drive_link'>Certificate</Link>)</p>
                        <p>I have completed a course on office management from Fifo tech. Fifo tech is a subsidiary of BACCO under Project SEIP of Bangladesh Government.
                        </p>
                        <p>Fifo tech, Vision tower, Kawran Bazar, Dhaka,</p>
                        <p>Bangladesh</p>
                    </div>
                </div>
            </div>

            <div className='pt-10'>
                <h1 className='text-center text-xl font-semibold'>English Spoken Course </h1>
                <div className='md:flex items-center justify-between shadow-md hover:shadow-xl p-8 hover:border hover:border-yellow-400 mt-4 md:px-20' data-aos="fade-up" data-aos-duration="3000">
                    <img className='w-32 h-32 rounded-md' src={wsda} alt="icon" />
                    <div className='md:ml-14'>
                        <p className='text-lg font-semibold'>Course: English Spoken Course
                            (<Link className='pointer ml-2 text-blue-600' to=''>Certificate</Link>)</p>
                        <p>I have completed a course on English Spoken from Fifo tech Under WSDA from New Zeland. Fifo tech is a subsidiary of BACCO under Project SEIP of Bangladesh Government.</p>
                        <p> Fifo tech, Vision tower, Kawran Bazar, Dhaka,</p>
                        <p>Bangladesh</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;