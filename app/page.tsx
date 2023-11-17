'use client';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WorkExp from '@/components/WorkExp';
// import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import { ArrowUpCircleIcon } from '@heroicons/react/24/outline';
import { Experience, PageInfo, Project, Skill, Social } from '@/typings';
import { fetchPageInfo } from '@/utils/fetchPageInfo';
import { fetchExperience } from '@/utils/fetchExperiences';
import { fetchSkills } from '@/utils/fetchSkills';
import { fetchSocials } from '../utils/fetchSocials';
import { fetchProjects } from '@/utils/fetchProjects';

export default async function Home() {
  const promises = [fetchExperience(), fetchPageInfo(), fetchProjects(), fetchSkills(), fetchSocials()];

  const [experiences, pageInfo, projects, skills, socials] = await Promise.all(promises);

  const experiencesResult: Experience[] = (experiences as Experience[]) || [];
  const pageInfoResult: PageInfo = (pageInfo as PageInfo) || {};
  const projectsResult: Project[] = (projects as Project[]) || [];
  const skillsResult: Skill[] = (skills as Skill[]) || [];
  const socialsResult: Social[] = (socials as Social[]) || [];

  const scrollToTop = () => {
    const topElement = document.getElementById('hero');
    if (topElement) {
      topElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main
      className='bg-main text-white h-screen overflow-y-scroll overflow-x-hidden z-0
-   scrollbar scrollbar-track-gray/20 scrollbar-thumb-support/20'
    >
      <Header socials={socialsResult} />

      <section id='hero' className='snap-start'>
        <Hero pageInfo={pageInfoResult} />
      </section>

      <section id='about' className='snap-center'>
        <About pageInfo={pageInfoResult} skills={skillsResult} />
      </section>

      <section id='experience' className='snap-center'>
        <WorkExp experiences={experiencesResult} />
      </section>

      <section id='skills' className='snap-start'>
        {/* <Skills skills={skillsResult} /> */}
      </section>

      <section id='projects' className='snap-start'>
        <Projects projects={projectsResult} />
      </section>

      <section id='contact' className='snap-start'>
        <Contact />
      </section>

      <footer className='mb-10'>
        <div className='flex items-center justify-center'>
          <ArrowUpCircleIcon
            className='opacity-20 filter grayscale hover:grayscale-0 
          hover:text-support h-12 w-12 hover:opacity-80 cursor-pointer'
            onClick={scrollToTop}
          />
        </div>
      </footer>
    </main>
  );
}
