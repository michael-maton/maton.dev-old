// import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import { groq } from 'next-sanity';
import { sanityClient } from '@/sanity';
import { Social } from '@/typings';

const query = groq`
  *[_type == "social"]
`;

// type Data = {
//   socials: Social[];
// };

// export async function GET(req: NextApiRequest, res: NextApiResponse<Data>) {
export async function GET() {
  const socials: Social[] = await sanityClient.fetch(query);

  return NextResponse.json({ socials });
}
