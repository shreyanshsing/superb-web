import { z } from "zod";
import { LoginSchema } from "./schema";
import jwt from "jsonwebtoken";
import { getUsersByFields } from "../userRouter/queries-handler";
import { comparePassword } from "./utils";

export const seceret = "secret";
export const expiresIn = "1h";

export const createSession = async (input : z.infer<typeof LoginSchema>) => {
    const email = input.email;
    const password = input.password;

    const result = await getUsersByFields({email});
    if (result.length === 0) {
        throw new Error("User not found by this email");
    }
    const user = result[0];
    const hashedPassword = user.password;
    const isValidPassword = await comparePassword(password, hashedPassword);
    if (!isValidPassword) {
        throw new Error("Password is incorrect");
    }
    const token = jwt.sign({email}, seceret, {expiresIn: expiresIn});
    return {
        token,
        user,
    }
};