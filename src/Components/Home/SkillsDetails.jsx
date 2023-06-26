import React from 'react';
import react from '../../assets/skill_icon/react.png'
import node from '../../assets/skill_icon/node.png'
import express from '../../assets/skill_icon/express1.png'
import mongodb from '../../assets/skill_icon/mongodb.png'
import html from '../../assets/skill_icon/html.png'
import css from '../../assets/skill_icon/css.png'
import tailwind from '../../assets/skill_icon/tailwind1.png'
import bootstrap from '../../assets/skill_icon/bootstrap.png'
import firebase from '../../assets/skill_icon/firebase.png'
import vs from '../../assets/skill_icon/vs.png'
import figma from '../../assets/skill_icon/figma.png'
import vercel from '../../assets/skill_icon/vercel.png'
import netlify from '../../assets/skill_icon/netlify.jpg'
import github from '../../assets/skill_icon/github.png'
import { Tilt } from 'react-tilt'
const defaultOptions = {
    reverse: false,  // reverse the tilt direction
    max: 35,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const SkillsDetails = () => {
    return (
        <div className=' dark:bg-black dark:text-white px-5 md:px-20 py-20'>
            <h1 className='text-center font-bold text-3xl mb-4'>My Skills__</h1>
            <div className='grid md:grid-cols-2 gap-10'>
                <Tilt options={defaultOptions}>
                    <div className='flex border border-white items-center justify-center space-x-4 shadow-md hover:shadow-xl  hover:shadow-yellow-600 rounded-lg p-4'
                        data-aos="fade-right" data-aos-duration="3000">
                        <img className='w-32 h-32' src={react} alt="icon" />
                        <div>
                            <h1 className='text-2xl font-bold'>React js</h1>
                            <p className='text-lg  font-serif'>React.js is a powerful JavaScript library for building user interfaces with component-based architecture.</p>
                        </div>
                    </div>
                </Tilt>

                <Tilt options={defaultOptions}>
                    <div className='flex border border-white items-center justify-center  space-x-4 shadow-xl hover:shadow-xl  hover:shadow-yellow-600 rounded-lg p-4 '
                        data-aos="fade-left" data-aos-duration="3000" >
                        <img className='w-32 h-32' src={node} alt="icon" />
                        <div>
                            <h1 className='text-2xl font-bold'>Node js</h1>
                            <p className='text-lg font-serif'>Node.js is a runtime environment that allows server-side JavaScript execution.</p>
                        </div>
                    </div>
                </Tilt>


                <Tilt options={defaultOptions}>
                    <div className='flex border border-white items-center justify-center  space-x-4 shadow-xl hover:shadow-xl  hover:shadow-yellow-600 rounded-lg p-4 '
                        data-aos="fade-right" data-aos-duration="3000" >
                        <img className='w-32 h-32' src={express} alt="icon" />
                        <div>
                            <h1 className='text-2xl font-bold'>Express js</h1>
                            <p className='text-lg font-serif'>Express.js is a minimalistic and flex border border-whiteible web application framework for Node.js.</p>
                        </div>
                    </div>
                </Tilt>


                <Tilt options={defaultOptions}>
                    <div className='flex border border-white items-center justify-center  space-x-4 shadow-xl hover:shadow-xl  hover:shadow-yellow-600 rounded-lg p-4 '
                        data-aos="fade-left" data-aos-duration="3000" >
                        <img className='w-32 h-32' src={mongodb} alt="icon" />
                        <div>
                            <h1 className='text-2xl font-bold'>MongoDB</h1>
                            <p className='text-lg font-serif'>MongoDB is a scalable and flex border border-whiteible NoSQL database that stores data in JSON.</p>
                        </div>
                    </div>
                </Tilt>


                <Tilt options={defaultOptions}>
                    <div className='flex border border-white items-center justify-center  space-x-4 shadow-xl hover:shadow-xl  hover:shadow-yellow-600 rounded-lg p-4 '
                        data-aos="fade-right" data-aos-duration="3000" >
                        <img className='w-32 h-32' src={html} alt="icon" />
                        <div>
                            <h1 className='text-2xl font-bold'>HTML5</h1>
                            <p className='text-lg font-serif'>HTML is the standard markup language for creating the structure and content of web pages.</p>
                        </div>
                    </div>
                </Tilt>


                <Tilt options={defaultOptions}>
                    <div className='flex border border-white items-center justify-center  space-x-4 shadow-xl hover:shadow-xl  hover:shadow-yellow-600 rounded-lg p-4 '
                        data-aos="fade-left" data-aos-duration="3000" >
                        <img className='w-32 h-32' src={css} alt="icon" />
                        <div>
                            <h1 className='text-2xl font-bold'>CSS3</h1>
                            <p className='text-lg font-serif'>CSS is a styling language used to describe the presentation and visual appearance of HTML elements.</p>
                        </div>
                    </div>
                </Tilt>


                <Tilt options={defaultOptions}>
                    <div className='flex border border-white items-center justify-center  space-x-4 shadow-xl hover:shadow-xl  hover:shadow-yellow-600 rounded-lg p-4 '
                        data-aos="fade-right" data-aos-duration="3000" >
                        <img className='w-32 h-32' src={tailwind} alt="icon" />
                        <div>
                            <h1 className='text-2xl font-bold'>Tailwind CSS</h1>
                            <p className='text-lg font-serif'>Tailwind CSS is a utility-first CSS framework that provides a wide range of pre-built classes.</p>
                        </div>
                    </div>
                </Tilt>


                <Tilt options={defaultOptions}>
                    <div className='flex border border-white items-center justify-center  space-x-4 shadow-xl hover:shadow-xl  hover:shadow-yellow-600 rounded-lg p-4 '
                        data-aos="fade-left" data-aos-duration="3000" >
                        <img className='w-32 h-32' src={bootstrap} alt="icon" />
                        <div>
                            <h1 className='text-2xl font-bold'>Bootstrap</h1>
                            <p className='text-lg font-serif'>Bootstrap is a popular front-end framework that collection of pre-designed components. </p>
                        </div>
                    </div>
                </Tilt>


                <Tilt options={defaultOptions}>
                    <div className='flex border border-white items-center justify-center  space-x-4 shadow-xl hover:shadow-xl  hover:shadow-yellow-600 rounded-lg p-4 '
                        data-aos="fade-right" data-aos-duration="3000" >
                        <img className='w-32 h-32' src={firebase} alt="icon" />
                        <div>
                            <h1 className='text-2xl font-bold'>Firebase</h1>
                            <p className='text-lg font-serif'>Firebase is a comprehensive backend-as-a-service platform by Google that offers a suite services.</p>
                        </div>
                    </div>
                </Tilt>


                <Tilt options={defaultOptions}>
                    <div className='flex border border-white items-center justify-center  space-x-4 shadow-xl hover:shadow-xl  hover:shadow-yellow-600 rounded-lg p-4 '
                        data-aos="fade-left" data-aos-duration="3000" >
                        <img className='w-32 h-32' src={vs} alt="icon" />
                        <div>
                            <h1 className='text-2xl font-bold'>VS Code</h1>
                            <p className='text-lg font-serif'>VS Code is a feature-rich source code editor that supports multiple programming languages.</p>
                        </div>
                    </div>
                </Tilt>


                <Tilt options={defaultOptions}>
                    <div className='flex border border-white items-center justify-center  space-x-4 shadow-xl hover:shadow-xl  hover:shadow-yellow-600 rounded-lg p-4 '
                        data-aos="fade-right" data-aos-duration="3000" >
                        <img className='w-32 h-32' src={figma} alt="icon" />
                        <div>
                            <h1 className='text-2xl font-bold'>Figma</h1>
                            <p className='text-lg font-serif'>Figma is a collaborative and cloud-based design tool that empowers teams to create.</p>
                        </div>
                    </div>
                </Tilt>


                <Tilt options={defaultOptions}>
                    <div className='flex border border-white items-center justify-center  space-x-4 shadow-xl hover:shadow-xl  hover:shadow-yellow-600 rounded-lg p-4 '
                        data-aos="fade-left" data-aos-duration="3000" >
                        <img className='w-32 h-32' src={vercel} alt="icon" />
                        <div>
                            <h1 className='text-2xl font-bold'>Vercel</h1>
                            <p className='text-lg font-serif'>Vercel's frontend cloud gives developers frameworks, workflows, and infrastructure to build a faster, more personalized web.</p>
                        </div>
                    </div>
                </Tilt>


                <Tilt options={defaultOptions}>
                    <div className='flex border border-white items-center justify-center  space-x-4 shadow-xl hover:shadow-xl  hover:shadow-yellow-600 rounded-lg p-4 '
                        data-aos="fade-right" data-aos-duration="3000" >
                        <img className='w-32 h-32 rounded-full' src={netlify} alt="icon" />
                        <div>
                            <h1 className='text-2xl font-bold'>Netlify</h1>
                            <p className='text-lg font-serif'>Netlify is the platform developers love for building highly-performant and dynamic websites, e-commerce stores and web applications.</p>
                        </div>
                    </div>
                </Tilt>


                <Tilt options={defaultOptions}>
                    <div className='flex border border-white items-center justify-center  space-x-4 shadow-xl hover:shadow-xl  hover:shadow-yellow-600 rounded-lg p-4 '
                        data-aos="fade-left" data-aos-duration="3000" >
                        <img className='w-32 h-32 rounded-full' src={github} alt="icon" />
                        <div>
                            <h1 className='text-2xl font-bold'>Github</h1>
                            <p className='text-lg font-serif'>GitHub is a code hosting platform for version control and collaboration.</p>
                        </div>
                    </div>
                </Tilt>

            </div>
        </div>
    );
};

export default SkillsDetails;