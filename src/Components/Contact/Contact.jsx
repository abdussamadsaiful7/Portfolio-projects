import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import email from '../../assets/skill_icon/email.png'
import { FaMapMarkerAlt, FaPhoneAlt, FaTelegramPlane } from 'react-icons/fa';
import toast from 'react-hot-toast';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_weq5g91', 'template_7b8h054', form.current, 'MP2bV-BlBqLN9KzsI')
            .then((result) => {
                toast.success('message send Successfully!')
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='md:px-20 p-10 shadow-lg bg-slate-400 py-10 dark:bg-black'>
            <h1 className='text-center text-xl font-semibold mb-4 text-white uppercase'>Contact Form</h1>
            <div className='md:flex items-center gap-10 shadow-lg bg-white md:p-10 p-4 border border-white dark:bg-black'>
                <div>
                    <div className='flex items-center'>
                        <img className='w-12 h-12 mr-2' src={email} alt="icon" />
                        <div>
                            <h1 className='text-lg font-semibold'>Get in Touch</h1>
                            <p className='text-slate-400'>Leave your message and I'll get back to you shortly</p>
                        </div>
                    </div>
                    <form className='pb-10 md:pb-0' ref={form} onSubmit={sendEmail}>
                        <div className='mt-2'>
                            <label>Name</label>
                            <br />
                            <input type="text" name="user_name" placeholder="Type here" className="input input-bordered input-warning w-full " />
                        </div>

                        <div className='mt-2'>
                            <label>Email</label>
                            <br />
                            <input type="email" name="user_email" placeholder="Type here" className="input input-bordered input-warning w-full" />
                        </div>

                        <div className='mt-2'>
                            <label>Message</label>
                            <br />
                            <textarea className="textarea textarea-warning w-full" name="message" placeholder="Message"></textarea>
                        </div>
                        <br />
                        <div className='text-center'>
                            <input className='btn btn-wide text-white bg-violet-800 btn-outline' type="submit" value="Send" />
                        </div>
                    </form>
                </div>
                <div className='bg-violet-800 md:p-10 p-2 md:w-1/2 text-white' data-aos="fade-left"
                        data-aos-duration="3000">
                    <h1 className='my-4 text-center font-semibold text-xl'>Contact me</h1>
                    <div>
                        <p className='text-xl font-semibold flex items-center'><span className='mr-2'><FaMapMarkerAlt/></span>Address</p>
                        <p>Present: Address <br/> Shankar, Dhanmondi, Dhaka, Bangladesh.</p>
                        <p>Permanent: Address <br/> Abir Nagar, Sadar, Lakshmipur, chottogram, Bangladesh.</p>
                    </div>
                    <div className='mt-4'>
                        <p className='flex items-center'><span className='mr-2'><FaPhoneAlt/></span>Phone: +8801932180980</p>
                    </div>
                    <div className='mt-4'>
                        <p className='flex items-center'><span className='mr-2'> <FaTelegramPlane/>
                        </span>Email: samadsaifullah11@gamil.com</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;