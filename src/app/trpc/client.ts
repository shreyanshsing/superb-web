// trpc-client/client.ts
 
import type { AppRouter } from '@server/index';
import { createTRPCReact } from '@trpc/react-query';
 
export const trpc = createTRPCReact<AppRouter>();