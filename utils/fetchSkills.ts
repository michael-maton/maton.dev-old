import { Skill } from '@/typings';

export const fetchSkills = async (revalidate = 10) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/getSkills`, { next: { revalidate } });

  const data = await res.json();
  const skills: Skill[] = data.skills;

  return skills;
};
