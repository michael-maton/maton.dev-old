'use client';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Work from '@/components/Work';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import { ArrowUpCircleIcon } from '@heroicons/react/24/outline';

export default function Home() {
  const scrollToTop = () => {
    const topElement = document.getElementById('hero');
    if (topElement) {
      topElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <main
      className='bg-[rgb{36,36,36}] text-white h-screen overflow-y-scroll overflow-x-hidden z-0
    scrollbar scrollbar-track-gray/20 scrollbar-thumb-[#F7AB0A]/20'
    >
      <Header />

      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>

      <section id='experience' className='snap-center'>
        <Work />
      </section>

      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      <section id='projects' className='snap-start'>
        <Projects />
      </section>

      <section id='contact' className='snap-start'>
        <Contact />
      </section>

      <footer className='mb-10'>
        <div className='flex items-center justify-center'>
          <ArrowUpCircleIcon
            className='opacity-20 filter grayscale hover:grayscale-0 
          hover:text-[#F7AB0A] h-12 w-12 hover:opacity-80 cursor-pointer'
            onClick={scrollToTop}
          />
        </div>
      </footer>
    </main>
  );
}
