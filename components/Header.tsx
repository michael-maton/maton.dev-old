'use client'; // to make component client based for framer-motion
import React, { useEffect, useState, useCallback } from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import { Social } from '@/typings';

type Props = {
  socials: Social[];
};

function Header({ socials }: Props) {
  const scrollToContact = () => {
    const topElement = document.getElementById('contact');
    if (topElement) {
      topElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // const [isHeaderVisible, setHeaderVisibility] = useState(true);
  // useEffect(() => {
  //   function throttle(callback: any, delay: number) {
  //     let lastInvokeTime = 0;
  //     return function (this: any, ...args: any[]) {
  //       const now = Date.now();
  //       if (now - lastInvokeTime >= delay) {
  //         lastInvokeTime = now;
  //         callback.apply(this, args);
  //       }
  //     };
  //   }
  //   let lastVisibleScrollPos = window.scrollY;
  //   const handleScroll = throttle(() => {
  //     const currentScrollPos = window.scrollY;
  //     // console.log(window);
  //     const scrollDifference = currentScrollPos - lastVisibleScrollPos;

  //     if (scrollDifference <= -100) {
  //       // Scrolling up at least 100 pixels, show the header
  //       setHeaderVisibility(true);
  //       lastVisibleScrollPos = currentScrollPos;
  //     } else if (currentScrollPos <= 100) {
  //       // Scrolling back to the top, show the header
  //       setHeaderVisibility(true);
  //       lastVisibleScrollPos = currentScrollPos;
  //     } else if (scrollDifference >= 100) {
  //       // Scrolling down at least 100 pixels, hide the header
  //       setHeaderVisibility(false);
  //       lastVisibleScrollPos = currentScrollPos;
  //     }
  //   }, 100);

  //   document.addEventListener('scroll', handleScroll, { capture: true });

  //   return () => document.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    <header
      className={'top-0 flex flex-items-start justify-between p-5 max-w-7xl mx-auto xl:items-center z-30'}
      // className={`top-0 flex flex-items-start justify-between p-5 max-w-7xl mx-auto xl:items-center z-30 ${
      //   isHeaderVisible ? 'opacity-100' : 'opacity-0 pointer-events-none' //sticky
      // }`}
    >
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
        {socials.map(social => (
          <SocialIcon key={social._id} url={social.url} fgColor='gray' bgColor='transparent' />
        ))}
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
        {/* <p className='uppercase hidden md:inline-flex text-small text-gray-400'></p> */}
      </motion.div>
    </header>
  );
}

export default Header;
