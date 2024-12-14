import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from '@server/index';
import { createContext } from '@server/context';
import { NextRequest, NextResponse } from 'next/server';


export const handler = async (req: NextRequest, res: NextResponse) => {
  // const nextApiResponse = NextResponse.next();
  return fetchRequestHandler({
    endpoint: '/api/trpc',
    req: req,
    router: appRouter,
    createContext: async () => createContext({ req: req, res: res }),
  });
};

export { handler as GET, handler as POST };