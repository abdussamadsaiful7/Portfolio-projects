import React from 'react';
import google from '../../assets/google.png'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';


const GoogleLogin = () => {
    const { googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        googleLogin()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
            })
            
            .then(() => {
                navigate(from, { replace: true });
            })
    }


    return (
        <div className='text-center pb-4 mx-5'>
            <div className="divider">Or sign in with</div>
            <div className='flex items-center justify-center bg-base-300 mx-20 h-8'>
                <button onClick={handleGoogleSignIn} className="">
                    <img className='w-6 h-6 mr-4' src={google} alt="" />

                </button>
                <p>Login by Google</p>
            </div>
        </div>
    );

}



export default GoogleLogin;