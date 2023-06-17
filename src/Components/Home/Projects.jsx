import React from 'react';
import rest from '../../assets/skill_icon/rest.png'
import { Link } from 'react-router-dom';
import chef from '../../assets/skill_icon/chef.png'
import toy from '../../assets/skill_icon/toy.png'
import baby from '../../assets/skill_icon/baby.png'
import academy from '../../assets/skill_icon/academy.png'
import student from '../../assets/skill_icon/student.png'


const Projects = () => {
    return (
        <div>
            <h1 className='text-center text-2xl font-bold pt-10'>My Projects_</h1>
            {/* projects-1 */}
            <div className=' shadow-md hover:shadow-xl hover:shadow-yellow-600  md:mx-72 my-20' data-aos="fade-right" data-aos-duration="3000">
                <h1 className='text-center  text-lg font-semibold my-4'>Project Name: 
                <span className='text-slate-500'> Green Leaf Restaurant</span></h1>
                <div className=' md:flex items-center relative'>
                    <img className='w-96 h-96' src={rest} alt="" />
                    <img className='absolute hidden lg:block bottom-0 md:right-0 w-64 h-64' src={chef} alt="" />
                </div>
                <div className='flex items-center justify-end space-x-4 p-6'>
                    <Link to='https://github.com/abdussamadsaiful7/GreenLeaf-food-client' target="_blank"><button className='btn btn-xs btn-outline btn-warning'>github</button></Link>

                    <Link to='https://github.com/abdussamadsaiful7/GreenLeaf-food-server' target="_blank"><button className='btn btn-xs btn-outline btn-warning'> Server</button></Link>

                    <Link to='https://assignment-app-23184.web.app/' target="_blank">
                        <button className='btn btn-xs btn-outline btn-warning'>Live</button></Link>
                </div>
            </div>
            

            {/* project-2 */}
            <div className=' shadow-md hover:shadow-xl hover:shadow-yellow-600  md:mx-72 my-20'
            data-aos="fade-left" data-aos-duration="3000">
                <h1 className='text-center  text-lg font-semibold my-4'>Project Name: <span className='text-slate-500'> PJ-MARSKS GALLERY</span>
                <span className='text-slate-500'></span></h1>
                <div className=' md:flex items-center relative'>
                    <img className='w-96 h-96' src={toy} alt="" />
                    <img className='absolute hidden lg:block bottom-0 md:right-0 w-72 h-72' src={baby} alt="" />
                </div>
                <div className='flex items-center justify-end space-x-4 p-6'>
                    <Link to='https://github.com/abdussamadsaiful7/PJ-Marks-toy-Gallery-Client' target="_blank"><button className='btn btn-xs btn-outline btn-warning'>github</button></Link>

                    <Link to='https://github.com/abdussamadsaiful7/PJ-Marks-toy-Gallery-server' target="_blank"><button className='btn btn-xs btn-outline btn-warning'> Server</button></Link>

                    <Link to='https://assignment-11-firebase-caf82.web.app/' target="_blank">
                        <button className='btn btn-xs btn-outline btn-warning'>Live</button></Link>
                </div>
            </div>

            {/* project-3 */}
            <div className=' shadow-md hover:shadow-xl hover:shadow-yellow-600  md:mx-72 my-20'
            data-aos="fade-up" data-aos-duration="3000">
                <h1 className='text-center  text-lg font-semibold my-4'>Project Name: <span className='text-slate-500'>Polyglot Academy</span>
                <span className='text-slate-500'></span></h1>
                <div className=' md:flex items-center relative'>
                    <img className='w-96 h-96' src={academy} alt="" />
                    <img className='absolute hidden lg:block bottom-0 md:right-0 w-72 h-72' src={student} alt="" />
                </div>
                <div className='flex items-center justify-end space-x-4 p-6'>
                    <Link to='https://github.com/abdussamadsaiful7/Polyglot-Academy-client' target="_blank"><button className='btn btn-xs btn-outline btn-warning'>github</button></Link>

                    <Link to='https://github.com/abdussamadsaiful7/Polyglot-Academy-server' target="_blank"><button className='btn btn-xs btn-outline btn-warning'> Server</button></Link>

                    <Link to='https://polyglot-academy.web.app/' target="_blank">
                        <button className='btn btn-xs btn-outline btn-warning'>Live</button></Link>
                </div>
            </div>
           
           
        </div>
    );
};

export default Projects;