import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import icon from '../../assets/logo.png'
import Typewriter from 'typewriter-effect';
import { AuthContext } from '../Provider/AuthProvider';
import { FaCloudSun, FaMoon, FaRegMoon } from 'react-icons/fa';




const Header = () => {

    const { user, logOut, loading } = useContext(AuthContext);

    const notify = () => toast.error('Successfully logout!');

    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error)
            })
        if (loading) {
            return <progress className="progress progress-error w-56" value="100" max="100"></progress>
        }
        notify();
    }

    //dark theme
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        if (localStorage.getItem("theme") === null) {
            localStorage.setItem("theme", "light");
        }
    }, [])

    useEffect(() => {
        const html = document.querySelector("html");
        if (localStorage.getItem("theme") === "dark") {
            html.classList.add("dark")
            setTheme("dark");
        } else {
            html.classList.remove("dark");
            setTheme("light")
        }
    }, [theme])

    const handleTheme = () => {
        if (localStorage.getItem("theme") === "light") {
            setTheme("dark")
            localStorage.setItem('theme', 'dark')
        } else {
            setTheme("light")
            localStorage.setItem("theme", "light")
        }
    };

    return (

        <header className="bg-white md:px-10 shadow-md pb-4 dark:bg-gray-900 dark:text-white sticky top-0 z-50">
            <div className="container flex items-center justify-between">
                <div className="dropdown md:hidden">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow z-50 bg-base-100 rounded-box w-40">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                        <li><Link to='/login'>LogIn</Link></li>
                    </ul>
                </div>
                <div className="flex items-center">
                    <img src={icon} alt="Logo" className="w-24 h-12 mr-4" />
                    <br />
                    <div>
                        <Typewriter
                            options={{
                                strings: ["🆂🅰🅼🅰🅳 🆂🅰🅸🅵🆄🅻"],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                        {/* <h1 className="text-black font-bold text-lg">Saiful's portfolio</h1> */}

                    </div>
                </div>

                <div>
                    <nav className="flex items-end space-x-4">
                        <Link to='/' className="hidden md:inline-block text-gray-500 hover:text-white hover:bg-cyan-400 p-3">Home</Link>
                        <Link to='/about' className="hidden md:inline-block text-gray-500 hover:text-white hover:bg-cyan-400 p-3">About</Link>
                        <Link to='/contact' className="hidden md:inline-block text-gray-500 hover:text-white hover:bg-cyan-400 p-3">Contact</Link>

                        {
                            user ?
                                <>
                                    <a className="hidden md:inline-block text-gray-500 hover:text-white hover:bg-cyan-400 p-3"><Link onClick={handleLogout}>Logout</Link></a>
                                    <div className="avatar tooltip tooltip-bottom" data-tip={user?.displayName}>
                                        <div className="w-8 ml-4  rounded-full 
                                         ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={user?.photoURL} />
                                        </div>
                                    </div>
                                </>
                                :
                                <a className="hidden md:inline-block text-gray-500 hover:text-white hover:bg-cyan-400 p-3"> <Link to='/login'>Login</Link></a>
                        }
                        <div className='md:ml-4  md:block'>
                            <button onClick={handleTheme}
                                className=' rounded text-4xl flex justify-center items-center'>
                                {theme === "light" ?  <svg className="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg> :  <svg className="swap-off fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>}
                            </button>
                        </div>

                    </nav>
                </div>
            </div>

        </header>


    );
};

export default Header;