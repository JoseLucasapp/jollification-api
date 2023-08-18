import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../helpers/jwt";
import { MessageTextOptions } from "../helpers/types";

export const validadeJwt = (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers
    if (!authorization) {
        return res.status(401).json({
            error: {
                message: MessageTextOptions.invalidToken,
            },
        })
    }
    const user = verifyToken(authorization)
    if (!user) {
        return res.status(401).json({
            error: {
                message: MessageTextOptions.invalidToken,
            },
        })
    }
    req.params.userId = String(user._id)
    next()
}