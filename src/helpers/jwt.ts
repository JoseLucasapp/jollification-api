import 'dotenv/config'
import jwt, { SignOptions } from 'jsonwebtoken'
import { AuthInterface } from './types'


const jwtSecret: string = (process.env.SECRET_KEY as string);

const jwtConfig: SignOptions = {
    expiresIn: process.env.EXPIRES,
    algorithm: 'HS256'
}

export const generateToken = (auth: AuthInterface) => {
    return jwt.sign(auth, jwtSecret, jwtConfig)
}

export const verifyToken = (authorization: string) => {
    try {
        const token = authorization.split(' ')[1]
        return jwt.verify(token, jwtSecret) as AuthInterface
    } catch (error) {
        throw error
    }
}