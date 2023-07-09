import React from 'react';
import { Link } from 'react-router-dom';
import { Slide } from "react-awesome-reveal";
import { FaArrowDown, FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
//import frame from '../../assets/imgIcon.png'
import samad from '../../assets/samad1.png'
import { Typewriter } from 'react-simple-typewriter'
import './Banner.css';



const pdf_file_url = 'https://drive.google.com/file/d/1_nJswwsB37486hAvk_SaIv5DyH1sj8Nb/view?usp=drive_link'

const Banner = () => {

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
        <div className=' relative'>
            <Slide cascade>
                <div className='md:flex items-center justify-between space-x-5 pt-14 md:px-24'>

                    <div className='md:w-1/2 md:ml-10 p-4'>
                        <div>
                            <h1 className='text-2xl  font-extrabold text-blue-600'>𝘼𝘽𝘿𝙐𝙎 𝙎𝘼𝙈𝘼𝘿 𝙎𝘼𝙄𝙁𝙐𝙇</h1>
                            {/* <p className='text-lg  font-semibold'>Web developer</p> */}

                            <h1 className='text-2xl font-extrabold' style={{ fontWeight: 'normal' }}>
                               {' '}
                                <span style={{ color: '', fontWeight: 'bold' }}>
                                    {/* Style will be inherited from the parent element */}
                                    <Typewriter
                                        words={['Web developer', 'Front-end Developer', 'React developer', 'MERN full stack developer']}
                                        loop={true}
                                        cursor
                                        cursorStyle='|'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </span>
                            </h1>

                            <p className='text-gray-500 text-lg font-serif'>
                                I have been working one year in React.js developing as MERN full stack developer and believe that I possess all the necessary technical skills to join the team and contribute significantly  of a web Developer. I have received recognition throughout my career as a professional who is focused and skilled at creating innovative applications with modern technologies.</p>
                        </div>
                        <div className='mt-4'>
                            <p>What's App & cell +8801932180980</p>
                            <p>Email: samadsaifullah11@gmail.com</p>
                        </div>
                        <div className='flex items-center space-x-4 pt-4'>
                            <Link to='https://www.facebook.com/profile.php?id=100072454039583' target="_blank">
                                <button className="btn btn-circle border-blue-600  btn-outline transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                                    <span className='text-2xl text-blue-600'><FaFacebookF /></span>
                                </button>
                            </Link>
                            <Link>
                                <button className="btn btn-circle border-blue-600 btn-outline transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                                    <span className='text-2xl text-blue-600 '> <FaTwitter /></span>
                                </button>
                            </Link>
                            <Link to='https://www.linkedin.com/in/a-samad-saiful-781611278/' target="_blank">
                                <button className="btn btn-circle border-blue-600 btn-outline transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                                    <span className='text-2xl text-blue-600'> <FaLinkedin /></span>
                                </button>
                            </Link>

                            <Link to='https://github.com/abdussamadsaiful7' target="_blank">
                                <button className="btn btn-circle border-blue-600 btn-outline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                                    <span className='text-2xl text-blue-600'> <FaGithub /></span>
                                </button>
                            </Link>
                        </div>
                        <div className='ml-1 pt-4'>
                            <Link>
                                <button onClick={() => downloadFile(pdf_file_url)} className='btn rounded-none border-blue-600 hover:bg-blue-600  text-blue-600 btn-outline transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 mr-4 '>Download CV
                                    <FaArrowDown />
                                </button>
                            </Link>
                            <Link to='/contact'>
                                <button className='btn rounded-none btn-outline border-blue-600 text-blue-600 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-blue-600  duration-300'>Hire Me</button>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div className='box shadow-lg hover:shadow-lg hover:shadow-blue-600'>
                            <div className='bg-pic bg-black border-none'>
                                <img src={samad} alt="" />
                                <h4 className=' text-white font-bold'>A Samad Saiful <br /> <span>Web Developer</span> </h4>
                                <Link to='/contact'> <a className='text-white bg-blue-600 hover:shadow-lg hover:shadow-blue-600'>Hire Me</a></Link>
                            </div>
                        </div>                        
                    </div>
                </div>
            </Slide>
        </div>
    );
};

export default Banner;