import { NextFunction, Request, Response, Router } from "express";
import { createUserController } from "../useCases/user/createUser";
import { loginController } from "../useCases/user/login";
import { verifyToken } from "../helpers/jwt";
import { editUserController } from "../useCases/user/editUser";
import { validadeJwt } from "../middlewares/loginAuth";
import { deleteUserController } from "../useCases/user/deleteUser";
import { addFriendController } from "../useCases/user/addAFriend";
import { getFriendController } from "../useCases/user/getFriends";

export default (router: Router) => {
    router.post('/user', (req: Request, res: Response) => {
        return createUserController.handle(req, res)
    })
    router.post('/login', (req: Request, res: Response) => {
        return loginController.handle(req, res)
    })
    router.put('/user', [(req: Request, res: Response, next: NextFunction) => validadeJwt(req, res, next)], (req: Request, res: Response) => {
        return editUserController.handle(req, res)
    })
    router.delete('/user', [(req: Request, res: Response, next: NextFunction) => validadeJwt(req, res, next)], (req: Request, res: Response) => {
        return deleteUserController.handle(req, res)
    })
    router.put('/user/friends', [(req: Request, res: Response, next: NextFunction) => validadeJwt(req, res, next)], (req: Request, res: Response) => {
        return addFriendController.handle(req, res)
    })
    router.get('/user/friends', [(req: Request, res: Response, next: NextFunction) => validadeJwt(req, res, next)], (req: Request, res: Response) => {
        return getFriendController.handle(req, res)
    })
    router.post('/validate', (req: Request, res: Response) => {
        try {
            const result = verifyToken(`Bearer ${req.body.token}`)
            return res.status(200).json(result)
        } catch (error) {
            res.status(400).json({ message: error })
        }
    })
}