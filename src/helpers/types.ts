export interface AuthInterface {
    _id: string
    username: string
}

export enum MessageTextOptions {
    update = 'Updated',
    delete = 'Deleted',
    emailAlreadyUsed = 'Email Already Used',
    wPass = 'Wrong password',
    uNotFound = 'User not found',
    invalidToken = 'Invalid token',
    accessDenied = 'Access denied'
}