'use client';
import { motion } from 'framer-motion';
import React from 'react';
import Skill from './Skill';
import { Skill as ISkill } from '@/typings';

type Props = {
  skills: ISkill[];
};

function Skills({ skills }: Props) {
  // const direction = new Array(skills?.length).fill(0);
  // // for (let i = 0; i < direction.length - 1; i + 2) {
  // //   direction[i] = 1;
  // // }
  // console.log(direction);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      className='h-screen flex relative flex-col text-center md:text-left xl:flex-row 
    max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>

      {/* <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
        Hover over a skill for current proficiency
      </h3> */}
      <div className='grid grid-cols-4 gap-5'>
        {skills?.map((skill, idx) => {
          return <Skill key={idx} skill={skill} directionLeft={idx % 4 === 0 || idx % 4 === 1 ? true : false} />;
        })}
      </div>
    </motion.div>
  );
}

export default Skills;
