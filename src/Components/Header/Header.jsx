import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import icon from '../../assets/icon2.png'
import Typewriter from 'typewriter-effect';
import { AuthContext } from '../Provider/AuthProvider';






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

    return (

        <header className="bg-white md:px-10 shadow-md pb-4">
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

                <div>
                    <nav className="flex items-end space-x-4">
                        <Link to='/' className="hidden md:inline-block text-gray-500 hover:text-white hover:bg-cyan-800 p-3">Home</Link>
                        <Link to='/about' className="hidden md:inline-block text-gray-500 hover:text-white hover:bg-cyan-800 p-3">About</Link>
                        <Link to='/contact' className="hidden md:inline-block text-gray-500 hover:text-white hover:bg-cyan-800 p-3">Contact</Link>

                        {
                            user ?
                                <>
                                    <a className="hidden md:inline-block text-gray-500 hover:text-white hover:bg-cyan-800 p-3"><Link onClick={handleLogout}>Logout</Link></a>
                                    <div className="avatar tooltip tooltip-bottom" data-tip={user?.displayName}>
                                        <div className="w-8 ml-4  rounded-full 
                                         ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={user?.photoURL} />
                                        </div>
                                    </div>
                                </>
                                :
                                <a className="hidden md:inline-block text-gray-500 hover:text-white hover:bg-cyan-800 p-3"> <Link to='/login'>Login</Link></a>
                        }

                    </nav>
                </div>
            </div>
        </header>


    );
};

export default Header;