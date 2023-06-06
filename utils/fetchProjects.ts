import { Project } from '@/typings';

export const fetchProjects = async (revalidate = 10) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/getProjects`, { next: { revalidate } });

  const data = await res.json();
  const projects: Project[] = data.projects;

  return projects;
};
