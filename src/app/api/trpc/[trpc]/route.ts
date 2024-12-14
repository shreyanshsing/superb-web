import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from '@server/index';
import { createContext } from '@server/context';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest): Promise<Response> => {
  const nextApiResponse = NextResponse.next();
  return fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: async () => createContext({ req: req, res: nextApiResponse }),
  });
};

export const POST = async (req: NextRequest): Promise<Response> => {
  const nextApiResponse = NextResponse.next();
  return fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: async () => createContext({ req: req, res: nextApiResponse }),
  });
};
