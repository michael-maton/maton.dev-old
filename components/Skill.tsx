import { motion } from 'framer-motion';
import React from 'react';
import { Skill } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
  directionLeft?: boolean;
  skill?: Skill;
};

function Skill({ directionLeft, skill }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={urlFor(skill?.skillImage).url()}
        className='rounded-full border border-gray-500 object-cover w-20 h-20 md:h-28 md:w-28
         xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
      />
      <div
        className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-out
      group-hover:bg-white h-w-14 w-14 md:h-28 md:w-28 xl:w-32 xl:h-32 rounded-full z-0'
      >
        <div className='flex items-center justify-center h-full'>
          <p className='md:text-lg font-bold text-black opacity-100'>{skill?.skillTitle}</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
