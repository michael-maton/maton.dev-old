'use client'; // to make component client based for framer-motion
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

function Header() {
  const scrollToContact = () => {
    const topElement = document.getElementById('contact');
    if (topElement) {
      topElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <header className='sticky top-0 flex flex-items-start justify-between p-5 max-w-7xl mx-auto xl:items-center z-30'>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 0.5
        }}
        className='flex flex-row items-center'
      >
        <SocialIcon url='https://www.linkedin.com/in/michaeljmaton/' fgColor='gray' bgColor='transparent' />
        <SocialIcon url='https://github.com/michael-maton' fgColor='gray' bgColor='transparent' />
        <SocialIcon url='https://gitlab.com/michael-maton' fgColor='gray' bgColor='transparent' />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 0.5
        }}
        className='flex flex-row items-center text-gray-300 cursor-pointer'
        onClick={scrollToContact}
      >
        <SocialIcon className='cursor-pointer' network='email' fgColor='gray' bgColor='transparent' />
        <p className='uppercase hidden md:inline-flex text-small text-gray-400'>Get in touch</p>
      </motion.div>
    </header>
  );
}

export default Header;
