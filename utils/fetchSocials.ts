import { Social } from '@/typings';

export const fetchSocials = async (revalidate = 10) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/getSocials`, { next: { revalidate } });

  const data = await res.json();
  const socials: Social[] = data.socials;

  return socials;
};
