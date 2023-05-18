'use client';
import { motion } from 'framer-motion';
import React from 'react';

function Projects() {
  const projects = ['Tic Tac Toe', 'Disc Golf Shot Selector', 'Anywhere Fitness App', 'CoMake App'];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      className='h-screen relative flex flex-col overflow-hidden text-left md:flex-row
    max-w-full justify-evenly items-center mx-auto z-0'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

      <div className='flex relative w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
        {projects.map((p, i) => {
          return (
            <div
              key={i}
              className='w-screen flex flex-col space-y-5 items-center
            justify-center p-20 md:p-44 h-screen flex-shrink-0 snap-center'
            >
              <motion.img
                initial={{ y: -300, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                src='/about.png'
                alt='Project image'
              />

              <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                <h4 className='text-4xl font-semibold text-center'>
                  <span className='underline decoration-[#F7AB0A]/50'>
                    {' '}
                    Project {i + 1} of {projects.length}
                  </span>
                  : {p}
                </h4>

                <p className='text-lg text-center md:text-left'>
                  Make your voice heard on the issues you would like to see resolved in your community. Make your voice
                  heard on the issues you would like to see resolved in your community. Make your voice heard on the
                  issues you would like to see resolved in your community. Make your voice heard on the issues you would
                  like to see resolved in your community . Make your voice heard on the issues you would like to see
                  resolved in your community.
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div
        className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px]
      -skew-y-12'
      />
    </motion.div>
  );
}

export default Projects;
