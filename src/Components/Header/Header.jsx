import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../assets/icon2.png'

const Header = () => {
    return (
        <div>
            <header class="bg-white md:px-10 hover:shadow-md pb-3">
                <div class="container flex items-center justify-between">
                    <div className="dropdown md:hidden">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link>Contact</Link></li>
                        </ul>
                    </div>
                    <div class="flex items-center">
                        <img  src={icon} alt="Logo" class="w-12 h-12 mr-4" />
                        <br/>
                        <h1 class="text-black font-bold text-lg">Saiful's portfolio</h1>
                    </div>
                    <nav class="flex items-center space-x-4">
                        <Link to='/' class="hidden md:inline-block text-gray-500 hover:text-white hover:bg-black p-3">Home</Link>
                        <Link to='/about' class="hidden md:inline-block text-gray-500 hover:text-white hover:bg-black p-3">About</Link>
                        <Link to='' class="hidden md:inline-block text-gray-500 hover:text-white hover:bg-black p-3">Contact</Link>
                    </nav>
                </div>
            </header>

        </div>
    );
};

export default Header;