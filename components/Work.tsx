// 'use client';
import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './Experience';
import { Experience } from '@/typings';

type Props = {
  experiences: Experience[];
};

function Work({ experiences }: Props) {
  // console.log(experiences);
  // const sortedExperiences = [...experiences].sort((a, b) => {
  //   const dateA = new Date(a._createdAt).getTime();
  //   const dateB = new Date(b._createdAt).getTime();
  //   return dateA - dateB;
  // });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='bg-main h-screen flex relative overflow-hidden flex-col text-left
    max-w-full px-10 justify-evenly mx-auto items-center scroll-smooth'
    >
      <h3 className='top-24 uppercase text-xl tracking-[8px] md:tracking-[20px] text-gray-500 md:text-2xl pt-24'>
        Work Experience
      </h3>

      <div
        className='flex w-full space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory
       scrollbar-thin scrollbar-track-gray/20 scrollbar-thumb-main-80'
      >
        {experiences?.map(experience => {
          return <ExperienceCard key={experience._id} experience={experience} />;
        })}
      </div>
    </motion.div>
  );
}

export default Work;
