import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../assets/icon2.png'
import Typewriter from 'typewriter-effect';


const Header = () => {
    return (
        <div>
            <header className="bg-white md:px-10 hover:shadow-md pb-3">
                <div className="container flex items-center justify-between">
                    <div className="dropdown md:hidden">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <img src={icon} alt="Logo" className="w-12 h-12 mr-4" />
                        <br />
                        <div>
                            <Typewriter
                                options={{
                                    strings: ["Saiful's portfolio"],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                            {/* <h1 className="text-black font-bold text-lg">Saiful's portfolio</h1> */}

                        </div>
                    </div>
                    <nav className="flex items-center space-x-4">
                        <Link to='/' className="hidden md:inline-block text-gray-500 hover:text-white hover:bg-black p-3">Home</Link>
                        <Link to='/about' className="hidden md:inline-block text-gray-500 hover:text-white hover:bg-black p-3">About</Link>
                        <Link to='/contact' className="hidden md:inline-block text-gray-500 hover:text-white hover:bg-black p-3">Contact</Link>
                    </nav>
                </div>
            </header>

        </div>
    );
};

export default Header;