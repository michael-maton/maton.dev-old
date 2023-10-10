'use client';
import { motion } from 'framer-motion';
import React from 'react';
import Skill from './Skill';
import { Skill as ISkill } from '@/typings';

type Props = {
  skills: ISkill[];
};

function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      className='flex relative flex-col text-center md:text-left xl:flex-row 
    max-w-[2000px] xl:px-10 justify-center xl:space-y-0 mx-auto items-center'
    >
      {/* <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3> */}

      <div className='grid grid-cols-4 gap-5'>
        {skills?.map((skill, idx) => {
          return <Skill key={idx} skill={skill} directionLeft={idx % 4 === 0 || idx % 4 === 1 ? true : false} />;
        })}
      </div>
    </motion.div>
  );
}

export default Skills;
