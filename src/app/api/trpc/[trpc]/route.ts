import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import {appRouter} from '@server/index';
// import * as trpcNext from '@trpc/server/adapters/next';
import {createContext} from '@server/context';


export const handler = (req: Request) => fetchRequestHandler({
    endpoint: '/api/trpc',
    router: appRouter,
    req,
    createContext: () => createContext(req),
});

export { handler as GET, handler as POST };
