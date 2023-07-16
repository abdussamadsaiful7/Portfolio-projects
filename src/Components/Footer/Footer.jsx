import React from 'react';
import icon from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className=' dark:bg-black'>
            <footer className="footer items-center p-4 bg-white text-neutral-content dark:bg-black ">
                <div className="items-center grid-flow-col">
                    <img src={icon} alt="Logo" className="w-36 h-20 mr-4 " />
                    <p className='text-black dark:text-white'>Copyright © 2023 - All right reserved</p>
                </div>
                <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <Link to='https://www.facebook.com/profile.php?id=100072454039583' target="_blank">
                        <button className="btn btn-square border-cyan-400  btn-outline transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                            <span className='text-2xl text-cyan-400'><FaFacebookF /></span>
                        </button>
                    </Link>
                    <Link>
                        <button className="btn btn-square border-cyan-400 btn-outline transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                            <span className='text-2xl text-cyan-400 '> <FaTwitter /></span>
                        </button>
                    </Link>
                    <Link to='https://www.linkedin.com/in/a-samad-saiful-781611278/' target="_blank">
                        <button className="btn btn-square border-cyan-400 btn-outline transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                            <span className='text-2xl text-cyan-400'> <FaLinkedin /></span>
                        </button>
                    </Link>

                    <Link to='https://github.com/abdussamadsaiful7' target="_blank">
                        <button className="btn btn-square border-cyan-400 btn-outline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                            <span className='text-2xl text-cyan-400'> <FaGithub /></span>
                        </button>
                    </Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;