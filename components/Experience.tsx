import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

function Experience() {
  return (
    <article
      className='flex flex-col bg-[#292929] rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 opacity-40 hover:opacity-100 cursor-pointer
    transition-opacity duration-200 overflow-hidden'
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className='w-32 h-32 object-center object-cover xl:w-[200px] xl:h-[200px]'
        src='/nf.svg'
        alt='NonFungible Logo'
        style={{ objectFit: 'contain' }}
      />

      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Developer</h4>
        <p className='font-bold text-2xl mt-1'>NonFungible</p>
        <div className='flex space-x-2 my-2'>
          <img className='h-10 w-10 rounded-full' />
          <img className='h-10 w-10 rounded-full' />
          <img className='h-10 w-10 rounded-full' />
          {/* Tech Used */}
          {/* Tech Used */}
          {/* Tech Used */}
        </div>
        <p className='uppercase py-5 text-gray-300'>Started - Ended</p>

        <ul className='list-disc space-y-4 ml-5 text-sm'>
          <li>
            Redesigned media processing and compression pipeline, along with media server, to support additional file
            types and consume less storage
          </li>
          <li>Developed a simplified process to curate metadata from blockchain token URIs and manage NFT projects</li>
          <li>
            Documented and integrated new simplified listings process into WordPress—complete with over 30 features and
            settings—improving the project listings process and removing the technical aspect for use by non-technical
            team members
          </li>
          <li>
            Restructured database for NFT project assets to track additional data fields and offer more thorough market
            statistics
          </li>
          <li>
            Retrieved from the blockchain, processed, and curated metadata and media for thousands of NFT projects,
            providing statistical data for the analytics team and users
          </li>
          <li>Converted outdated JavaScript repositories, files, and functions to TypeScript</li>
          <li>
            Implemented unit testing and continuous integration tools for new and existing code to minimize regressions
            and increase confidence throughout the development lifecycle
          </li>
        </ul>
      </div>
    </article>
  );
}

export default Experience;
