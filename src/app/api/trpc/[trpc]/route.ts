import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import {appRouter} from '@server/index';

export const handler = (req: Request) => fetchRequestHandler({
    endpoint: '/api/trpc',
    router: appRouter,
    req,
    createContext() {
        return {};
    },
});

export { handler as GET, handler as POST };
