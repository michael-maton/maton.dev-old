'use client'; // to make component client based for react-simple-typewriter
import React, { useMemo } from 'react';
import Image from 'next/image';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { PageInfo } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  const [text] = useTypewriter({
    words: [`Hi, my name is ${pageInfo?.name}`, `I'm a ${pageInfo?.role}`, `Let's build something together`],
    loop: true,
    delaySpeed: 1500
  });

  const loader = useMemo(() => {
    return () => {
      return urlFor(pageInfo?.heroImage).url();
    };
  }, [pageInfo?.heroImage]);

  const heroStyle =
    'text-lg mx-2 uppercase tracking-widest text-gray-500 transition-all hover:border-main/40 border-b-2 border-transparent';

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden relative'>
      <div className='relative flex h-32 w-32 justify-center'>
        <Image
          className='relative rounded-full mx-auto object-cover'
          loader={loader}
          unoptimized
          src={urlFor(pageInfo?.heroImage).url()}
          alt='Picture of the author'
          fill
          priority
          style={{ objectFit: 'fill' }}
        />
      </div>
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>{pageInfo?.role}</h2>
        <h1 className='text-2xl lg:text-6xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='white' />
        </h1>

        <div className='pt-5'>
          <a href='#about'>
            <button className={heroStyle}>About</button>
          </a>
          <a href='#experience'>
            <button className={heroStyle}>Experience</button>
          </a>
          <a href='#skills'>
            <button className={heroStyle}>Skills</button>
          </a>
          <a href='#projects'>
            <button className={heroStyle}>Projects</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
