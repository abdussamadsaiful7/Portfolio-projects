import React from 'react';
import './Style.css'
import pic1 from '../../../assets/skill_icon/hero1.png'
import pic2 from '../../../assets/skill_icon/fifo2.jpg'
import pic3 from '../../../assets/skill_icon/wsda.jpg'

const BannerCard = () => {
    return (
        <div className='dark:text-black pb-24 pt-10'>
            <h1 className='text-center text-2xl font-bold mb-5'>Courses_</h1>
            <div className=' md:px-14 grid md:grid-cols-3 gap-4 md:h-[200px]'>
                <div className='BCard mt-5 mx-auto' data-aos="fade-up" data-aos-duration="3000" >
                    <div className='imgBox'>
                        <img src={pic1} alt="pic" />
                        <h1 className='text-lg  text-center font-bold'>Web Development Course</h1>
                    </div>
                    <div className='content'>
                        <p className='font-semibold text-xs'>I completed a 6 month course from Programming Hero Academy, where I learned Boostrap, TailwindCSS, DaisyUI, JavaScript, React.Js, MongoDB, Node.Js, Firebase,  etc and did some personal projects. Below is it, hope you like it</p>
                    </div>
                </div>
                <div className='BCard mt-5 mx-auto' data-aos="fade-up" data-aos-duration="3000">
                    <div className='imgBox'>
                        <img className='h-32' src={pic2} alt="pic" />
                        <h1 className='text-lg  text-center font-bold'>
                            Professional Back Office Service</h1>
                    </div>
                    <div className='content'>
                        <p className='font-semibold text-xs'>I have completed a course on office management from Fifo tech. Fifo tech is a subsidiary of BACCO under Project SEIP of Bangladesh Government. <br/> Fifo tech, Vision tower, Kawran Bazar, Dhaka, Bangladesh.</p>
                    </div>
                </div>
                <div className='BCard mt-5 mx-auto' data-aos="fade-up" data-aos-duration="3000">
                    <div className='imgBox'>
                        <img className='h-32' src={pic3} alt="pic" />
                        <h1 className='text-lg  text-center font-bold'>English Spoken Course</h1>
                    </div>
                    <div className='content'>
                        <p className='font-semibold text-xs'>I have completed a course on English Spoken from Fifo tech Under WSDA from New Zeland. Fifo tech is a subsidiary of BACCO under Project SEIP of Bangladesh Government. <br/> Fifo tech, Vision tower, Kawran Bazar, Dhaka, Bangladesh.</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default BannerCard;