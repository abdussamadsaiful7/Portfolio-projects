import React from 'react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom';
import pic1 from '../../assets/skill_icon/project3/academy1.png'
import pic2 from '../../assets/skill_icon/project3/academy2.png'
import pic3 from '../../assets/skill_icon/project3/academy3.png'
import pic4 from '../../assets/skill_icon/project3/academy4.png'
import pic5 from '../../assets/skill_icon/project3/academy5.png'
import pic6 from '../../assets/skill_icon/project3/academy6.png'
import pic7 from '../../assets/skill_icon/project3/academy7.png'
import pic8 from '../../assets/skill_icon/project3/academy8.png'
import pic9 from '../../assets/skill_icon/project3/academy9.png'
import student from '../../assets/skill_icon/student.png'


const ProjectThree = () => {
    return (
        <div className='pb-10'>
            <div className='relative'>
                <div className=' shadow-md hover:shadow-xl hover:shadow-yellow-600  md:mx-36 my-20' data-aos="fade-right" data-aos-duration="3000">
                    <h1 className='text-center  text-lg font-semibold my-4'>Project Name: <span className='text-slate-500'>Polyglot language Academy</span>
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
                                    <SwiperSlide>
                                        <div className='md:ml-5'>
                                            <img className='md:w-96 w-full h-64' src={pic8} alt="photo" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='md:ml-5'>
                                            <img className='md:w-96 w-full h-64' src={pic9} alt="photo" />
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div className='md:w-1/2 p-6'>
                            <h1 className='font-extrabold'>Project summary.</h1>
                            <p> ✔️ Create Unique Navbar etc.</p>
                            <p> ✔️ Create a server and deploy vercel with connect this clint site.</p>
                            <p> ✔️ create many components as like Home, Header, Login, Register, PrivateRout etc.</p>
                            <p> ✔️ Use the Environment variable to hide the Firebase config keys.</p>
                            <p> ✔️ Create a 404 page. Add a picture on the 404 page.</p>
                            <p> ✔️ Create Dashboard, Admin panel, role: Admin, Instructor, user.</p>
                            <p> ✔️ Create payment option by stripe.</p>
                            <p> ✔️ Create a Blog page.</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-end space-x-4 p-6'>
                        <Link to='https://github.com/abdussamadsaiful7/Polyglot-Academy-client' target="_blank"><button className='btn btn-xs btn-outline btn-warning'>github</button></Link>

                        <Link to='https://github.com/abdussamadsaiful7/Polyglot-Academy-server' target="_blank"><button className='btn btn-xs btn-outline btn-warning'> Server</button></Link>

                        <Link to='https://polyglot-academy.web.app/' target="_blank">
                            <button className='btn btn-xs btn-outline btn-warning'>Live</button></Link>
                    </div>
                </div>
                <div className=''>
                    <img className='absolute z-20 hidden lg:block -bottom-12  md:left-20 w-72 h-72' src={student} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ProjectThree;