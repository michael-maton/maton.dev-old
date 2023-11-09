// 'use client';
import { motion } from 'framer-motion';
import React from 'react';
import { Project } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      className='bg-main h-screen relative flex flex-col overflow-hidden text-left md:flex-row
    max-w-full justify-evenly items-center mx-auto z-0'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

      <div
        className='flex relative w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
       scrollbar-thin scrollbar-track-gray/20 scrollbar-thumb-main-80'
      >
        {projects.map((project, idx) => {
          return (
            <div
              key={idx}
              className='w-screen flex flex-col space-y-5 items-center
            justify-center p-20 md:p-44 h-screen flex-shrink-0 snap-center'
            >
              <motion.img
                initial={{ y: -300, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                src={urlFor(project?.projectImage).url()}
                alt='Project image'
                width={300}
                height={300}
              />

              <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                <h4 className='text-4xl font-semibold text-center'>
                  {/* <span className='underline decoration-support/50'>
                    {' '}
                    Project {idx + 1} of {projects.length}
                  </span> */}
                  {/* :  */}
                  {project?.projectTitle}
                </h4>
                <div className='flex space-x-2 my-2 justify-center items-center'>
                  {project?.technologies.map(tech => {
                    return (
                      <motion.img
                        key={tech._id}
                        className='w-12 h-12'
                        src={urlFor(tech?.skillImage).url()}
                        alt={`${tech?.skillTitle} logo`}
                      />
                    );
                  })}
                </div>

                <p className='text-lg text-center md:text-left'>{project?.summary}</p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default Projects;
