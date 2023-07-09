import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import GoogleLogin from '../GoogleLogin/GoogleLogin';
import Lottie from "lottie-react";
import lottieLogo from "../../assets/n3.json";

const Login = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    //const onSubmit = data => console.log(data);

    const { logIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const onSubmit = data => {
        console.log(data);
        logIn(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, { replace: true });
            })
    }

    return (
        <div className='md:px-40 py-20'>
            <div className='md:flex items-center justify-center gap-4'>
                <div className=' bg-white rounded shadow-md hover:shadow-xl hover:shadow-blue-600'>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <h1 className="text-2xl text-center font-bold">Login please!</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" {...register("email", { required: true })} className="input input-bordered" />
                            {errors.email && <span className='text-red-500'>Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password"  {...register("password", { required: true })} className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-blue-700 text-white hover:text-blue-800" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='pl-4 pb-4'>Don't have an account ?
                        <Link className='text-red-500' to='/signUp'>SignUp</Link>
                    </p>
                    <GoogleLogin></GoogleLogin>
                </div>
                <div className='ml-10 md:w-1/2'>
                    <Lottie className='w-3/4 h-3/4' animationData={lottieLogo} loop={true} />
                </div>
            </div>

        </div>
    );
};

export default Login;