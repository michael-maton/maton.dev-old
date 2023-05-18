'use client'; // to make component client based for react-simple-typewriter
import React from 'react';
import Image from 'next/image';
import BackgroundCircles from '@/components/BackgroundCircles';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Link from 'next/link';

function Hero() {
  const [text, count] = useTypewriter({
    words: ['Hi, my name is Michael', 'Hi, my name is Michael', 'Hi, my name is Michael'],
    loop: true,
    delaySpeed: 1500
  });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      {/* <BackgroundCircles /> */}
      <div className='relative flex h-32 w-32 justify-center'>
        <Image
          className='relative rounded-full mx-auto object-cover'
          src='/me.png'
          alt='Picture of the author'
          fill
          priority
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Developer</h2>
        <h1 className='text-2xl lg:text-6xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='white' />
        </h1>

        <div className='pt-5'>
          <Link href='#about'>
            <button className='hero-button'>About</button>
          </Link>
          <Link href='#experience'>
            <button className='hero-button'>Experience</button>
          </Link>
          <Link href='#skills'>
            <button className='hero-button'>Skills</button>
          </Link>
          <Link href='#projects'>
            <button className='hero-button'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
