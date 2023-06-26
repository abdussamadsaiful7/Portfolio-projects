import React from 'react';
import react from '../../assets/skill_icon/react.png'
import java from '../../assets/skill_icon/java.png'
import html from '../../assets/skill_icon/html.png'
import mongodb from '../../assets/skill_icon/mongodb.png'
import css from '../../assets/skill_icon/css.png'
import node from '../../assets/skill_icon/node.png'
import bootstrap from '../../assets/skill_icon/bootstrap.png'
import firebase from '../../assets/skill_icon/firebase.png'
import tailwind from '../../assets/skill_icon/tailwind.png'
import { Link } from 'react-router-dom';

const Skills = () => {
    return (
        <div className='py-10'>
            <h1 className='text-center font-extrabold text-2xl'>Major Skills_</h1>
            <div>
                <div className='grid grid-cols-2 md:grid-cols-4 md:px-24'>
                    <div className=' border border-white mx-auto rounded-full shadow-md hover:shadow-xl hover:shadow-yellow-600 transition duration-700 ease-in-out p-2 tooltip  tooltip-bottom' data-aos="fade-up"
                        data-aos-duration="3000" data-tip="React JS"> <img className='w-28 h-28 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300' src={react} alt="icon" />
                    </div>

                    <div className=' border border-white mx-auto rounded-full shadow-md hover:shadow-xl hover:shadow-yellow-600 transition duration-700 ease-in-out p-2 tooltip  tooltip-bottom' data-aos="fade-up"
                        data-aos-duration="3000" data-tip="JavaScript"> <img className='w-28 h-28 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300' src={java} alt="icon" />
                    </div>

                    <div className=' border border-white mx-auto rounded-full shadow-md hover:shadow-xl hover:shadow-yellow-600 transition duration-700 ease-in-out p-2 tooltip  tooltip-bottom' data-aos="fade-up"
                        data-aos-duration="3000" data-tip="HTML"> <img className='w-28 h-28 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300' src={html} alt="icon" />
                    </div>

                    <div className='border border-white mx-auto rounded-full shadow-md hover:shadow-xl hover:shadow-yellow-600 transition duration-700 ease-in-out p-2 tooltip  tooltip-bottom' data-aos="fade-up"
                        data-aos-duration="3000" data-tip="MongoDB"><img className='w-28 h-28 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300' src={mongodb} alt="icon" />
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-5'>
                    <div className=' border border-white mx-auto rounded-full shadow-md hover:shadow-xl hover:shadow-yellow-600 transition duration-700 ease-in-out p-2 tooltip  tooltip-bottom' data-aos="fade-up"
                        data-aos-duration="3000" data-tip="CSS"> <img className='w-28 h-28 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300' src={css} alt="icon" />
                    </div>

                    <div className=' border border-white mx-auto rounded-full shadow-md hover:shadow-xl hover:shadow-yellow-600 transition duration-700 ease-in-out p-2 tooltip  tooltip-bottom' data-aos="fade-up"
                        data-aos-duration="3000" data-tip="Node JS"> <img className='w-28 h-28 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300' src={node} alt="icon" />
                    </div>

                    <div className=' border border-white mx-auto rounded-full shadow-md hover:shadow-xl hover:shadow-yellow-600 transition duration-700 ease-in-out p-2 tooltip  tooltip-bottom' data-aos="fade-up"
                        data-aos-duration="3000" data-tip="Bootstrap"> <img className='w-28 h-28 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300' src={bootstrap} alt="icon" />
                    </div>

                    <div className=' border border-white mx-auto rounded-full shadow-md hover:shadow-xl hover:shadow-yellow-600 transition duration-700 ease-in-out p-2 tooltip  tooltip-bottom' data-aos="fade-up"
                        data-aos-duration="3000" data-tip="Firebase"> <img className='w-28 h-28 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300' src={firebase} alt="icon" />
                    </div>

                    <div className=' border border-white mx-auto rounded-full shadow-md hover:shadow-xl hover:shadow-yellow-600 transition duration-700 ease-in-out p-2 tooltip  tooltip-bottom' data-aos="fade-up"
                        data-aos-duration="3000" data-tip="TailwindCSS"> <img className='w-28 h-28 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300' src={tailwind} alt="icon" />
                    </div>
                </div>
                <div className='text-center mt-6'>
                    <Link to='/skillsDetails'><button className="btn btn-sm btn-outline btn-warning">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Skills;