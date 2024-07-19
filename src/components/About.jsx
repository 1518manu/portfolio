import React from 'react'
import aboutimg from "../assets/about_1.jpg";
import { ABOUT_TEXT } from '../constants';
import {  motion } from "framer-motion";
const About = () => {
  return (
    <div name="about" className='border-b border-cyan-400 lg:mb-40  pt-10 pb-10'>
        <span className="  text-justify bg-gradient-to-r from-violet-900 via-pink-500 to-violet-900 bg-clip-text text-5xl tracking-tight text-transparent font-light  pl-20" >
        About Me
        </span>
        <div className='flex flex-wrap'>
            <motion.div
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:-100}}
                transition={{duration:1.5}}
                className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center'>
                <img className=" rounded-2xl pt-10" src={aboutimg} alt="manu_about"/>
                </div>
            </motion.div>
            <motion.div 
                initial={{x:100,opacity:0}}
                whileInView={{x:0,opacity:1}}
                transition={{duration:1.5}}
                className="w-full lg:w-1/2" >
                <div className='flex justify-center text-justify lg:justify-start'>
                    <p className='my-2 max-w-xl py-6'>
                        {ABOUT_TEXT}
                    </p>
                </div>
            </motion.div>
        </div>
    </div>
  );
}

export default About