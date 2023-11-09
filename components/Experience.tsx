import { motion } from 'framer-motion';
import React from 'react';
import { Experience } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
  experience: Experience;
};

function Experience({ experience }: Props) {
  return (
    <div
      className='flex flex-col bg-support rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 opacity-40 hover:opacity-100 cursor-pointer
    transition-opacity duration-200 overflow-hidden'
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className='w-32 h-32 object-center object-cover xl:w-[200px] xl:h-[200px]'
        src={urlFor(experience?.companyImage).url()}
        alt='NonFungible Logo'
        style={{ objectFit: 'contain' }}
      />

      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>{experience?.jobTitle}</h4>
        <p className='font-bold text-2xl mt-1'>{experience?.company}</p>
        <div className='flex space-x-2 my-2'>
          {experience?.technologies?.map(tech => {
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
        <p className='uppercase py-5 text-gray-300'>
          {experience?.dateStarted} - {experience?.isCurrentlyWorkingHere ? 'Present' : experience?.dateEnded}
        </p>

        <ul className='list-disc space-y-4 ml-5 lg:text-base h-96 md:space-y-2 md:ml-3 md:text-xs sm:space-y-1 overflow-y-scroll list-inside scrollbar-thin scrollbar-track-gray/20 scrollbar-thumb-main-80 md:text-left'>
          {experience?.points?.map((point, idx) => {
            return (
              <li className='md:text-left' key={idx}>
                {point}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Experience;
