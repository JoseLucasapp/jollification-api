import { createHash as cryptoCreateHash } from 'crypto'

const HASHCODE: string = (process.env.HASHCODE as string);


export const createHash = (value: string) => {
    return cryptoCreateHash(HASHCODE).update(value).digest('hex')
}