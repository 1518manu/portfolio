import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { SiHtml5, SiCss3, SiJavascript, SiTailwindcss } from 'react-icons/si';
import { motion } from 'framer-motion';
import { FiFramer } from 'react-icons/fi';

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
});

const Tech = () => {
  return (
    <div name="technologies" className='border-b border-cyan-400 pb-20 lg:mb-60 w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 py-20 mb-2 text-center bg-gradient-to-r from-violet-900 via-pink-500 to-violet-900 bg-clip-text text-6xl tracking-tighther text-transparent'
      >
        Technologies
      </motion.h1>
      <div className='flex flex-wrap items-center justify-center gap-4 max-w-screen-lg mx-auto px-4'>
        <motion.div
          variants={iconVariants(2)}
          initial='initial'
          animate='animate'
          className=' rounded-2xl border-4 border-neutral-600 p-5'
        >
          <SiCss3 className='text-blue-500 text-2xl' />
        </motion.div>
        <motion.div
          variants={iconVariants(1)}
          initial='initial'
          animate='animate'
          className=' rounded-2xl border-4 border-neutral-600 p-5'
        >
          <SiHtml5 className='text-orange-500 text-2xl' />
        </motion.div>

        <motion.div
          variants={iconVariants(2)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-600 p-5'
        >
          <SiJavascript className='text-yellow-400 text-2xl' />
        </motion.div>
        <motion.div
          variants={iconVariants(1)}
          initial='initial'
          animate='animate'
          className=' rounded-2xl border-4 border-neutral-600 p-5'
        >
          <RiReactjsLine className='text-cyan-300 text-2xl' />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial='initial'
          animate='animate'
          className=' rounded-2xl border-4 border-neutral-600 p-5'
        >
          <SiTailwindcss className='text-teal-500 text-2xl' />
        </motion.div>

        <motion.div
          variants={iconVariants(1)}
          initial='initial'
          animate='animate'
          className=' rounded-2xl border-4 border-neutral-600 p-5'
        >
          <FiFramer className='text-framer-motion text-2xl' />
        </motion.div>
      </div>
    </div>
  );
};

export default Tech;
