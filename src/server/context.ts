import { decodeAndVerifyJwtToken } from "@api/trpc/auth/utils";

export async function createContext({ req, res }: { req: Request; res: Response }) {
    // Create your context based on the request object
    // Will be available as `ctx` in all your resolvers
    // This is just an example of something you might want to do in your ctx fn
    async function getUserFromHeader() {
        const tokenString = req.headers.get('Authorization');
        const token = tokenString?.split(' ')[1];
        if (token && token !== 'null') {
            const user = await decodeAndVerifyJwtToken(token);
            return user;
        }
        return null;
    }

    const user = await getUserFromHeader();
    return {
        user,
        req,
        res,
    };
}

export type Context = Awaited<ReturnType<typeof createContext>>;