'use client';
import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <div className='relative flex flex-col justify-evenly items-center h-screen text-center md:text-left md:flex-row max-w-7xl px-10 mx-auto'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        // viewport={{ once: true }}
        className='-mb-20 mt-5 md:mb-0 flex-shrink-0 w-52 h-52 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[500px] xl:h-[500px]'
        src='/about.svg'
        alt='SVG of person working at a desk'
        style={{ objectFit: 'contain' }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='space-y-5 px-0 md:px-10'
      >
        <h4 className='text-3xl md:text-4xl font-semibold'>
          Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background{' '}
        </h4>
        <p className='text-sm md:text-base'>
          I&apos;m Michael—an experienced software developer with a background in physics and mathematics. Skilled in
          backend development and designing efficient and user-friendly systems. Dedicated to creating high-quality code
          through continuous integration and testing. I&apos;m Michael—an experienced software developer with a
          background in physics and mathematics. Skilled in backend development and designing efficient and
          user-friendly systems. Dedicated to creating high-quality code through continuous integration and testing.
        </p>
      </motion.div>
    </div>
  );
}

export default About;
