'use client';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Work from '@/components/Work';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import { ArrowUpCircleIcon } from '@heroicons/react/24/outline';
import { Experience, PageInfo, Project, Skill, Social } from '@/typings';
import { fetchPageInfo } from '@/utils/fetchPageInfo';
import { fetchExperience } from '@/utils/fetchExperiences';
import { fetchSkills } from '@/utils/fetchSkills';
import { fetchSocials } from '../utils/fetchSocials';
import { fetchProjects } from '@/utils/fetchProjects';

type Data = {
  experiences: Experience[];
  pageInfo: PageInfo;
  projects: Project[];
  skills: Skill[];
  socials: Social[];
};

export default async function Home() {
  const { experiences, pageInfo, projects, skills, socials }: Data = await getData();

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
      <Header socials={socials} />

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

export const getData = async (): Promise<Data> => {
  const experiences: Experience[] = await fetchExperience(60);
  const pageInfo: PageInfo = await fetchPageInfo(60);
  const projects: Project[] = await fetchProjects(60);
  const skills: Skill[] = await fetchSkills(60);
  const socials: Social[] = await fetchSocials(60);

  return {
    experiences,
    pageInfo,
    projects,
    skills,
    socials
  };
};
