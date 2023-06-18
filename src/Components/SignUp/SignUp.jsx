import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Lottie from "lottie-react";
import lottieLogo from "../../assets/signUp.json";

const SignUp = () => {

    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState([]);


    const handleSignUp = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(error => {
                console.log(error.message)
                setError(error)
            })
    }

    return (
        <div className='md:flex items-center justify-around md:px-32 bg-cyan-800' >
            <div>
                <div className=' w-full mr-10 my-8 shadow-md rounded hover:shadow-xl hover:shadow-yellow-600 p-10 bg-white'>
                    <h1 className='text-center text-2xl font-bold'>Please Registration!</h1>
                    <form onSubmit={handleSignUp}>
                        <div>
                            <p className='text-xl'>Name</p>
                            <input type="text" name="name" placeholder='Enter your email'
                                className='w-full border-2 p-2 rounded' required />
                        </div>
                        <div className='pt-6'>
                            <p className='text-xl'>Email</p>
                            <input type="text" name="email" placeholder='Enter your email'
                                className='w-full border-2 p-2 rounded' required />
                        </div>
                        <div className='pt-6'>
                            <p className='text-xl'>Password</p>
                            <input type="password" name="password" placeholder='Enter your email'
                                className='w-full border-2 p-2 rounded' required />
                        </div>
                        <div className='pt-6'>
                            <p className='text-xl'>Photo URL</p>
                            <input type="text" name="photo" placeholder='Enter your email'
                                className='w-full border-2 p-2 rounded' required />
                        </div>
                        <div className='pt-4'>
                            <input type="submit" value="Sign Up" className=' btn btn-block 
                            btn-warning btn-outline' />
                        </div>
                    </form>
                    <p className='text-center my-4'>Already have an account? <Link to='/login' className='text-red-500 
                    font-semibold'>LogIn</Link></p>
                </div>
            </div>
            <div className='md:w-1/2'>
                <Lottie className='w-96 h-96' animationData={lottieLogo} loop={true} />
            </div>
        </div>
    );
};

export default SignUp;