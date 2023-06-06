import { PageInfo } from '@/typings';

export const fetchPageInfo = async (revalidate = 10) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/getPageInfo`, { next: { revalidate } });

  const data = await res.json();
  const pageInfo: PageInfo = data.pageInfo;

  return pageInfo;
};
