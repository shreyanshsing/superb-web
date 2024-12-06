import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { seceret } from './mutation-handler';

export const hashPassword = async (plainPassword: string): Promise<string> => {
    const saltRounds = 10; // Cost factor
    return await bcrypt.hash(plainPassword, saltRounds);
}

export const comparePassword = async (plainPassword: string, hash: string): Promise<boolean> => {
    return await bcrypt.compare(plainPassword, hash);
}

export const decodeAndVerifyJwtToken = async (token: string): Promise<any> => {
    return jwt.verify(token, seceret);
}