import React from 'react';
import frame from '../../assets/imgIcon.png'
import samad from '../../assets/samad.png'
import Skills from './Skills';
import { Slide } from "react-awesome-reveal";
import Projects from './Projects';
import { Link } from 'react-router-dom';
import { FaArrowDown, FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';


const pdf_file_url = 'https://drive.google.com/file/d/1_nJswwsB37486hAvk_SaIv5DyH1sj8Nb/view?usp=drive_link'

const Home = () => {
    const downloadFile = (url) => {
        const fileName = url.split('/').pop();
        const aTag = document.createElement('a');
        aTag.href = url;
        aTag.setAttribute("download", fileName);
        aTag.setAttribute("target", "_blank");
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }

    return (
        <div>
            <Slide>
                <div className='md:flex items-center justify-between space-x-5 py-20 md:px-24'>
                    <div className='md:w-1/2 md:ml-10 p-4'>
                        <div>
                            <h1 className='text-2xl  font-semibold'>ABDUS SAMAD SAIFUL</h1>
                            <p className='text-lg  font-semibold'>Web developer</p>
                            <p className='text-gray-500'>
                                I have been working one year in React.js developing as MERN full stack developer and believe that I possess all the necessary technical skills to join the team and contribute significantly  of a web Developer. I have received recognition throughout my career as a professional who is focused and skilled at creating innovative applications with modern technologies.</p>
                        </div>
                        <div className='mt-4'>
                            <p>What's App & cell +8801932180980</p>
                            <p>Email: samadsaifullah11@gmail.com</p>
                        </div>
                        <div className='flex items-center space-x-4 pt-4'>
                            <Link to='https://www.facebook.com/profile.php?id=100072454039583' target="_blank">
                                <button className="btn btn-circle btn-warning btn-outline">
                                    <span className='text-2xl'><FaFacebookF /></span>
                                </button>
                            </Link>
                            <Link to='https://www.linkedin.com/in/a-samad-saiful-781611278/' target="_blank">
                                <button className="btn btn-circle btn-warning btn-outline">
                                    <span className='text-2xl'> <FaLinkedin /></span>
                                </button>
                            </Link>
                            <Link>
                                <button className="btn btn-circle btn-warning btn-outline">
                                    <span className='text-2xl'> <FaTwitter /></span>
                                </button>
                            </Link>
                            <Link to='https://github.com/abdussamadsaiful7' target="_blank">
                                <button className="btn btn-circle btn-warning btn-outline">
                                    <span className='text-2xl'> <FaGithub/></span>
                                </button>
                            </Link>
                        </div>
                        <div className='ml-6 pt-2'>
                            <Link>
                                <button onClick={() => downloadFile(pdf_file_url)} className='btn btn-warning btn-outline btn-sm'>Download CV
                                    <FaArrowDown />
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className='relative'>
                            <img className='w-72 h-72' src={frame} alt="icon" />
                            <img className='w-64 h-64 absolute right-14 md:right-4 rounded-full bottom-8' src={samad} alt="icon" />
                        </div>
                        {/* <div className='text-center pt-2'>
                            <Link>
                                <button onClick={() => downloadFile(pdf_file_url)} className='btn btn-warning btn-outline'>Download CV
                                    <FaArrowDown />
                                </button>
                            </Link>
                        </div> */}
                    </div>
                </div>
            </Slide>
            <Skills></Skills>
            <Projects></Projects>
        </div>
    );
};

export default Home;