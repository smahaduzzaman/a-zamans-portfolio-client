import React from 'react';
import smahaduzzaman from '../assets/images/Hero/ahaduzzaman.png';
import github from '../assets/images/Icons/github.svg';
import linkedIn from '../assets/images/Icons/linkedIn.svg';
import facebook from '../assets/images/Icons/facebook.svg';
import netlify from '../assets/images/Icons/netlify.svg';
import behance from '../assets/images/Icons/behance.svg';

const About = () => {
    return (
        <div className="container flex flex-col w-4/5 p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
            <div className="flex justify-between p-4" data-aos="fade-down">
                <div className="flex space-x-4">
                    <div>
                        <img src={smahaduzzaman} alt="" className="object-cover w-16 h-16 rounded-full dark:bg-gray-500" />
                    </div>
                    <div>
                        <h5 className="font-bold">S. M. Ahaduzzaman</h5>
                        <span className="text-xs dark:text-gray-400">Web Developer | MERN Stack</span>
                    </div>
                </div>
                <div className="flex items-center space-x-2 dark:text-yellow-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                        <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                    </svg>
                    <span className="text-xl font-bold">4.8</span>
                </div>
            </div>
            <div className="p-4 space-y-2 text-sm dark:text-gray-400" data-aos="zoom-in">
                <p>Here I'm S M Ahaduzzaman a newly skilled in Web Development and going to start my career with this. Actually, I've thought very deeply that without the knowledge of ICT sector, it does not able to do better in life. For this...</p>
                <p>I started my journey in the ICT sector with little experience of working on more than twenty projects and a sweet dream. Looking for an opportunity to prove my skills as a new developer. Through thousands of pains and sufferings, I have mastered the MERN Stack. Prefer to work most likely and easily in this stack. I want to reveal myself through my skills in teamwork when given the opportunity. Here I have mentioned some of my skill sets below.</p>
                <div>
                    <h5 className="font-bold inline text-xl">Expertise: </h5>
                    <p className='inline'>HTML, CSS, Javascript, React JS, Next JS, Socket.io, Context API, Axios, Day Picker, NodeMailer, Firebase, JWT, React Hook Form, React Query, Pagination, Payment Gateway(Stripe, SSL Commarze), Image Upload, Bootstrap, Tailwind CSS, Daisy UI, Headless UI, Mamba UI, Material UI, Styled Component Etc.</p>
                </div>
                <div>
                    <h5 className="font-bold inline text-xl">Comfortable: </h5>
                    <p className='inline'>React JS, Express JS, Next JS, Context API, Axios, Firebase, React Query, Stripe, Material UI, Styled Component Etc.</p>
                </div>
                <div>
                    <h5 className="font-bold inline text-xl">Familiar: </h5>
                    <p className='inline'>With PHP, Laravel, WordPress Theme Development, and Digital Marketing</p>
                </div>
                <div>
                    <h5 className="font-bold inline text-xl">Tools: </h5>
                    <p className='inline'>VS Code, Atom, Netlify, GitHub, Dev Tool, Figma, Vercel, WordPress, Mongo Compass, Postman, XAMPP, Zoom, OBS Studio, Photoshop, Filmora, MS Office Etc.</p>
                </div>
            </div>
            <div className="flex flex-col justify-center pt-6 lg:pt-0" data-aos="fade-up">
                <h5 className='ml-3'>My Professional & Important Profiles:</h5>
                <div className="flex justify-between px-5 py-5 space-x-4">
                    <a rel="noopener noreferrer" href="https://github.com/smahaduzzaman" target="_blank" title="GitHub" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-[white] text-[#06223F]">
                        <img className='w-2/3' src={github} alt="GitHub" />
                    </a>
                    <a rel="noopener noreferrer" href="https://www.linkedin.com/in/s-m-ahaduzzaman-b5a727199/" target="_blank" title="LinkedIn" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-[white] text-[#06223F]">
                        <img className='w-2/3' src={linkedIn} alt="linkedIn" />
                    </a>
                    <a rel="noopener noreferrer" href="https://www.facebook.com/sm.ahaduzzaman.10" target="_blank" title="Facebook" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-[white] text-[#06223F]">
                        <img className='w-2/3' src={facebook} alt="Facebook" />
                    </a>
                    <a rel="noopener noreferrer" href="https://app.netlify.com/teams/smahaduzzaman/sites" target="_blank" title="Netlify" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-[white] text-[#06223F]">
                        <img className='w-2/3' src={netlify} alt="Netlify" />
                    </a>
                    <a rel="noopener noreferrer" href="https://www.behance.net/smahaduzzaman" title="Behance" target="_blank" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-[white] text-[#06223F]">
                        <img className='w-2/3' src={behance} alt="Behance" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;