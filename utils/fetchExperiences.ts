import { Experience } from '@/typings';

export const fetchExperience = async (revalidate = 10) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/getExperience`, { next: { revalidate } });

  const data = await res.json();
  const experiences: Experience[] = data.experiences;

  return experiences;
};
