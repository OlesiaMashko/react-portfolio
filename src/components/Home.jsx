import React from 'react';
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div 
    name="home" 
    className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='pt-40 text-4xl sm:text-7xl font-bold text-white'>I'm a Junior Web Developer and World traveller..</h2>
                <p className='text-gray-500 py-4 max-w-md'>
                I am a graduate student in the Department of Information Technology Solutions at Humber College of Ontario graduating in September 2022. I have a Bachelor's degree in Hospitality Administration and Tourism from the Vladivostok State University of Economics and Service VSUES, Russia.
                </p>
                <h3 className='text-1xl sm:text-3xl font-bold text-gray-300 py-4'>I enjoy creating things that live on the internet.</h3>

                <div>
                    <Link to='portfolio' smooth duration={500} className='group text-black font-bold w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-200 to-emerald-400 cursor-pointer'>
                        Portfolio 
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                        </span>
                    </Link>
                </div>
            </div>

            <div>
                <img src={HeroImage} alt="My profile" className='rounded-2xl mx-auto w-2/3 md:w-full' />
            </div>
        </div>
    </div>
  )
}

export default Home