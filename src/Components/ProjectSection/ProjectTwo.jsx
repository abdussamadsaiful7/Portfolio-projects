import React from 'react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom';
import pic1 from '../../assets/skill_icon/project2/toy1.png'
import pic2 from '../../assets/skill_icon/project2/toy2.png'
import pic3 from '../../assets/skill_icon/project2/toy3.png'
import pic4 from '../../assets/skill_icon/project2/toy4.png'
import pic5 from '../../assets/skill_icon/project2/toy5.png'
import pic6 from '../../assets/skill_icon/project2/toy6.png'
import pic7 from '../../assets/skill_icon/project2/toy7.png'
import baby from '../../assets/skill_icon/baby.png'

const ProjectTwo = () => {
    return (
        <div className='pb-5'>
            <div className='relative'>
                <div className=' border border-white shadow-md hover:shadow-xl hover:shadow-blue-600  md:mx-36 my-20' data-aos="fade-right" data-aos-duration="3000">
                    <h1 className='text-center  text-lg font-semibold my-4'>Project Name: <span className='text-slate-500'> PJ-MARSKS GALLERY</span>
                        <span className='text-slate-500'></span></h1>
                    <div className=' md:flex items-center justify-between'>
                        <div className='relative md:w-1/2'>
                            <div className=' px-2'>
                                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                                    <SwiperSlide>
                                        <div className='md:ml-5'>
                                            <img className='md:w-96  h-64' src={pic1} alt="photo" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='md:ml-5'>
                                            <img className='md:w-96  h-64' src={pic2} alt="photo" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='md:ml-5'>
                                            <img className='md:w-96  h-64' src={pic3} alt="photo" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='md:ml-5'>
                                            <img className='md:w-96  h-64' src={pic4} alt="photo" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='md:ml-5'>
                                            <img className='md:w-96  h-64' src={pic5} alt="photo" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='md:ml-5'>
                                            <img className='md:w-96 w-full h-64' src={pic6} alt="photo" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='md:ml-5'>
                                            <img className='md:w-96 w-full h-64' src={pic7} alt="photo" />
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div className='md:w-1/2 p-6'>
                            <h1 className='font-extrabold text-xl'>Project Summary.</h1>
                            <div className='font-serif text-slate-500'>
                                <p> ✓ Create Unique Navbar etc.</p>
                                <p> ✓ Create a server and deploy vercel with connect this clint site.</p>
                                <p> ✓ create many components as like Home, Header, Login, Register, PrivateRout etc.</p>
                                <p> ✓ Use the Environment variable to hide the Firebase config keys.</p>
                                <p> ✓ Create a 404 page. Add a picture on the 404 page.</p>
                                <p> ✓ Add A Toy page with private route.</p>
                                <p> ✓ Create a Blog page.</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-end space-x-4 p-6'>
                        <Link to='https://github.com/abdussamadsaiful7/PJ-Marks-toy-Gallery-Client' target="_blank"><button className='btn btn-sm btn-outline rounded-none border-blue-600 text-blue-600 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-blue-600'>github</button></Link>

                        <Link to='https://github.com/abdussamadsaiful7/PJ-Marks-toy-Gallery-server' target="_blank"><button className='btn btn-sm btn-outline rounded-none border-blue-600 text-blue-600 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-blue-600'> Server</button></Link>

                        <Link to='https://assignment-11-firebase-caf82.web.app/' target="_blank">
                            <button className='btn btn-sm btn-outline rounded-none border-blue-600 text-blue-600 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-blue-600'>Live</button></Link>
                    </div>
                </div>
                <div className=''>
                    <img className='absolute z-20 hidden lg:block -bottom-20  md:left-10 w-96 h-72' src={baby} alt="" />
                </div>

            </div>
        </div>
    );
};

export default ProjectTwo;